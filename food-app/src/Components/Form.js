import * as React from 'react';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import { TextField } from '@mui/material';

const ariaLabel = { 'aria-label': 'description' };

const style = {
    display: "inline-block"
};

export default function Inputs() {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1 },
      }}
      noValidate
      autoComplete="off"
    >
    <TextField placeholder="Enter Product Name"/>
    <TextField placeholder="Enter Product Name"/>
    <TextField placeholder="Enter Product Name"/>
    <TextField placeholder="Enter Product Name"/>
    </Box>
  );
}
