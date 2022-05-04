import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import SlidingTableRow from './SlidingTableRow';

export default function BasicTable(props) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {Object.keys(props.rows[0]).map((k, idx) => (
              <TableCell align={idx === 0 ? "left" : "center"} key={idx}>{k.toUpperCase()}</TableCell>
            ))}
            <TableCell align={"center"}></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.rows.map((row, idx) => (
            <SlidingTableRow key={idx} remove={props.remove} row={row}/>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
