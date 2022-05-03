import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Add } from '@mui/icons-material';

const initialFormData = Object.freeze({product: '', type: '', quantity: '', unitPrice: ''});

export default function FormDialog(props) {
  const [open, setOpen] = React.useState(false);
  const [formData, updateFormData] = React.useState(initialFormData);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (e) => {
    updateFormData({
      ...formData,

      // Trimming any whitespace
      [e.target.id]: e.target.value.trim()
    });
  };

  return (
    <div>
      <Button color="primary" variant="contained" startIcon={<Add />} onClick={handleClickOpen}>Add Item</Button>
      <Dialog color="primary" open={open} onClose={handleClose} >
        <DialogTitle color="primary">Add Item Details</DialogTitle>
        <DialogContent>
            <DialogContentText>
                To add a product enter the Details like prodcut name, quantity, unitPrice & type
            </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="product"
            label="Enter Product Name"
            type="text"
            fullWidth
            variant="standard"
            name="product"
            onChange={handleChange}
          />
          <TextField
            autoFocus
            margin="dense"
            id="type"
            label="Enter Product Type"
            type="text"
            fullWidth
            variant="standard"
            name="type"
            onChange={handleChange}
          />
          <TextField
            autoFocus
            margin="dense"
            id="quantity"
            label="Enter Product Quantity"
            type="text"
            fullWidth
            variant="standard"
            onChange={handleChange}
          />
          <TextField
            autoFocus
            margin="dense"
            id="unitPrice"
            label="Enter Product Unit Price"
            type="text"
            fullWidth
            variant="standard"
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button color="secondary" variant="contained" onClick={handleClose}>Cancel</Button>
          <Button color="primary" variant="contained" onClick={() => {
              props.handleSubmit(formData);
              setOpen(false);
          }}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
