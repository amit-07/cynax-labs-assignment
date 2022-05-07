import React, {useEffect, useState, useCallback, useReducer } from 'react';
import './App.css';
import {getTickets, createTicket, deleteticket} from "./services/ticket-service";
import BasicTable from './Components/Table';
import FormDialog from './Components/Dialog';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import SectionHeader from './Components/SectionHeader';
import SectionContent from './Components/SectionContent';

const theme = createTheme({
  status: {
    danger: '#e53e3e',
  },
  palette: {
    primary: {
      main: '#EBAFE6',
      light: '#053e85',
      dark: '#3A53A2'

    },
    secondary: {
      main: '#EBD4F7',
      light: '#FFC5F6',
      dark: '#FF9FB1'
    },
  },
});


function App() {
  const [tickets, setTickets] = useState([]);
  const [ignored, forceUpdate] = useReducer(x => x + 1, 0);

  const doGetTickets = useCallback(async () => {
    try {
      const result = await getTickets();
      console.log(result);
      setTickets(result);
    } catch (error) {
      console.log(error);
    }
  }, []);
  

  useEffect(() => {
    doGetTickets();
  }, [doGetTickets]);

  const refetchTickets = async () => {
    await doGetTickets();
  };

  const handleRemove = async (id) => {
    try {
      await deleteticket(id);
      await refetchTickets();
      await forceUpdate();
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (data) => {
    try {
      await createTicket(data);
      await refetchTickets();
      await forceUpdate();
    } catch (error) {
      console.log(error);
    }
  };

if(!tickets.length){
  return (
    <>Loading tickets data...</>
  )
}else{
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
      <header className="App-header">
        <h1 color="secondary">Tickets List</h1>
      </header>
        <FormDialog handleSubmit={handleSubmit}/>
        <BasicTable rows={tickets} remove={handleRemove} />
        <SectionHeader theme={theme}/>
        <SectionContent 
        characteristics="Similarity Measures between Molecules" 
        percentage={125}
        change={10} />
      </div>
    </ThemeProvider>
  );
}}

export default App;
