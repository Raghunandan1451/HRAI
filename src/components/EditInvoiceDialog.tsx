import React, { useState, useEffect } from 'react';
import { Dialog, DialogTitle, DialogContent, TextField, DialogActions, Button, IconButton, Grid } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { Invoice } from '../types/Invoice';

interface EditInvoiceDialogProps {
  open: boolean;
  onClose: () => void;
  onUpdate: (invoice: Invoice) => void;
  invoice: Invoice[];  // Changed to an array of Invoice
}

const EditInvoiceDialog: React.FC<EditInvoiceDialogProps> = ({ open, onClose, onUpdate, invoice }) => {
  const [invoiceData, setInvoiceData] = useState<Invoice>({
    invoiceAmount: 0,
    notes: ''
  });
  const [isModified, setIsModified] = useState(false);

  useEffect(() => {
    if (invoice && invoice.length > 0) {
      setInvoiceData(invoice[0]);
      setIsModified(false);
    }
  }, [invoice]);

  const handleChange = (field: keyof Invoice) => (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setInvoiceData((prevState) => {
      const newState = { ...prevState, [field]: newValue };
      setIsModified(
        newState.invoiceAmount !== invoice[0].invoiceAmount ||
        newState.notes !== invoice[0].notes
      );
      return newState;
    });
  };

  const handleUpdate = () => {
    if (invoiceData) {
      console.log(invoiceData.id, invoiceData)
      onUpdate(invoiceData.id, invoiceData);
      handleClear();
      onClose();
    }
  };

  const handleClear = () => {
    if (invoice && invoice.length > 0) {
      setInvoiceData(invoice[0]);
      setIsModified(false);
    }
  };

  return (
    <Dialog open={open} onClose={onClose} sx={{ "& .MuiPaper-root": { maxWidth: '75%' } }}>
      <DialogTitle sx={{ backgroundColor: '#2c3e50', color: '#fff', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        Edit Invoice
        <IconButton onClick={onClose} sx={{ color: '#fff' }}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent sx={{ backgroundColor: '#34495e', color: '#fff', height: 'fit-content' }}>
        <Grid container spacing={2} py={2} px={0} sx={{ display: 'flex', flexDirection: 'column' }}>
          <Grid item xs={12}>
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
          <Grid item xs={12}>
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
          Reset
        </Button>
        <Button
          onClick={handleUpdate}
          sx={{ color: '#3498db' }}
          disabled={!isModified}
        >
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditInvoiceDialog;
