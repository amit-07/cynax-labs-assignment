import * as React from 'react';
import Button from '@mui/material/Button';
import Slide from '@mui/material/Slide';

import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

export default function SlidingTableRow(props) {
  const [added, setAdded] = React.useState(true);

  return (
            <Slide key={props.key} direction={props.slideIn ? "up" : "down"} in={added} mountOnEnter unmountOnExit>
                    <TableRow
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                    <TableCell component="th" scope="row">
                        {props.row.product}
                    </TableCell>
                    <TableCell align="center">{props.row.type}</TableCell>
                    <TableCell align="center">{props.row.quantity}</TableCell>
                    <TableCell align="center">{props.row.unitPrice}</TableCell>
                    <TableCell align="center">
                        <Button variant="outlined" color="error" onClick={(event) => {
                            event.stopPropagation();
                            props.remove(props.key);
                            setAdded(false);
                        }}>Remove</Button>
                    </TableCell>
                    </TableRow>
            </Slide>
  );
}
