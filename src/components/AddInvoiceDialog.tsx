import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, TextField, DialogActions, Button, Grid, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { Invoice } from '../types/Invoice';

interface AddInvoiceDialogProps {
  open: boolean;
  onClose: () => void;
  onAdd: (invoice: Invoice) => void;
}

const AddInvoiceDialog: React.FC<AddInvoiceDialogProps> = ({ open, onClose, onAdd }) => {
  const [invoiceData, setInvoiceData] = useState<Invoice>({
    id: 0,
    customerName: '',
    customerNumber: '',
    invoiceNumber: '',
    invoiceAmount: 0,
    dueDate: '',
    predictedPaymentDate: '--',
    notes: '',
  });

  const handleChange = (field: keyof Invoice) => (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = field === 'invoiceAmount' ? parseFloat(event.target.value) : event.target.value;
    setInvoiceData({ ...invoiceData, [field]: newValue });
  };

  const generateRandomId = () => {
    return Math.floor(100000 + Math.random() * 900000).toString();
  };

  const handleAdd = () => {
    onAdd({ ...invoiceData, id: generateRandomId() });
    handleClear();
  };

  const handleClear = () => {
    setInvoiceData({
      id: 0,
      customerName: '',
      customerNumber: '',
      invoiceNumber: '',
      invoiceAmount: 0,
      dueDate: '',
      predictedPaymentDate: '--',
      notes: '',
    });
  };

  return (
    <Dialog open={open} onClose={onClose} sx={{ "& .MuiPaper-root": { maxWidth: '75%' } }}>
      <DialogTitle sx={{ backgroundColor: '#2c3e50', color: '#fff', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        Add Invoice
        <IconButton onClick={onClose} sx={{ color: '#fff' }}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent sx={{ backgroundColor: '#34495e', color: '#fff', display: 'flex', flexDirection: 'column', flexWrap: 'wrap', height: 'fit-content' }}>
        <Grid container spacing={2} py={2}>
          <Grid item xs={6}>
            <TextField
              label="Customer Name"
              value={invoiceData.customerName}
              onChange={handleChange('customerName')}
              fullWidth
              required
              InputLabelProps={{ shrink: true }}
              InputProps={{
                style: {
                  backgroundColor: '#2c3e50',
                  color: '#fff',
                },
              }}
              sx={{ marginBottom: 2,
                "& .MuiInputLabel-root": {
                  color: '#777'
                }
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Due Date"
              value={invoiceData.dueDate}
              onChange={handleChange('dueDate')}
              type="date"
              fullWidth
              required
              InputLabelProps={{ shrink: true }}
              InputProps={{
                style: {
                  backgroundColor: '#2c3e50',
                  color: '#fff',
                },
              }}
              sx={{ marginBottom: 2,
                "& .MuiInputLabel-root": {
                  color: '#777'
                }
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Customer No."
              value={invoiceData.customerNumber}
              onChange={handleChange('customerNumber')}
              fullWidth
              required
              InputLabelProps={{ shrink: true }}
              InputProps={{
                style: {
                  backgroundColor: '#2c3e50',
                  color: '#fff',
                },
              }}
              sx={{ marginBottom: 2,
                "& .MuiInputLabel-root": {
                  color: '#777'
                }
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Invoice No."
              value={invoiceData.invoiceNumber}
              onChange={handleChange('invoiceNumber')}
              fullWidth
              required
              InputLabelProps={{ shrink: true }}
              InputProps={{
                style: {
                  backgroundColor: '#2c3e50',
                  color: '#fff',
                },
              }}
              sx={{ marginBottom: 2,
                "& .MuiInputLabel-root": {
                  color: '#777'
                }
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Invoice Amount"
              value={invoiceData.invoiceAmount}
              onChange={handleChange('invoiceAmount')}
              type="number"
              fullWidth
              required
              InputLabelProps={{ shrink: true }}
              InputProps={{
                style: {
                  backgroundColor: '#2c3e50',
                  color: '#fff',
                },
              }}
              sx={{ marginBottom: 2,
                "& .MuiInputLabel-root": {
                  color: '#777'
                }
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Notes"
              value={invoiceData.notes}
              onChange={handleChange('notes')}
              fullWidth
              multiline
              rows={4}
              InputLabelProps={{ shrink: true }}
              InputProps={{
                style: {
                  backgroundColor: '#2c3e50',
                  color: '#fff',
                  flex: '1 1 auto', // Ensures the notes input takes remaining height
                },
              }}
              sx={{ marginBottom: 2,
                "& .MuiInputLabel-root": {
                  color: '#777'
                }
              }}
            />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions sx={{ backgroundColor: '#2c3e50' }}>
        <Button onClick={onClose} sx={{ color: '#3498db', marginRight: 'auto' }}>
          Cancel
        </Button>
        <Button onClick={handleClear} sx={{ color: '#3498db' }}>
          Clear
        </Button>
        <Button
          onClick={handleAdd}
          sx={{ color: '#3498db' }}
          disabled={
            !invoiceData.customerName ||
            !invoiceData.customerNumber ||
            !invoiceData.invoiceNumber ||
            !invoiceData.invoiceAmount ||
            !invoiceData.dueDate
          }
        >
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddInvoiceDialog;
