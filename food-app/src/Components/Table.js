import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Slide from '@mui/material/Slide';

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
           <Slide direction="up" in={true} mountOnEnter unmountOnExit>
            <TableRow
              key={idx}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.product}
              </TableCell>
              <TableCell align="center">{row.type}</TableCell>
              <TableCell align="center">{row.quantity}</TableCell>
              <TableCell align="center">{row.unitPrice}</TableCell>
              <TableCell align="center">
                <Button variant="outlined" color="error" onClick={() => props.remove(idx)}>Remove</Button>
              </TableCell>
            </TableRow>
          </Slide> 
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
