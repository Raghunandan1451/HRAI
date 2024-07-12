// src/components/AddInvoiceDialog.tsx
import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, TextField, DialogActions, Button } from '@mui/material';
import { addInvoice } from '../services/invoiceService';
import { Invoice } from '../types/Invoice';

interface AddInvoiceDialogProps {
  open: boolean;
  onClose: () => void;
  onAdd: () => void;
}

const AddInvoiceDialog: React.FC<AddInvoiceDialogProps> = ({ open, onClose, onAdd }) => {
  const [invoice, setInvoice] = useState<Invoice>({
    customerName: '',
    customerNumber: '',
    invoiceNumber: '',
    invoiceAmount: 0,
    dueDate: '',
    predictedPaymentDate: '',
    notes: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInvoice(prevState => ({
      ...prevState,
      [name]: name === 'invoiceAmount' ? parseFloat(value) : value
    }));
  };

  const handleAdd = async () => {
    await addInvoice(invoice);
    onAdd();
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Add Invoice</DialogTitle>
      <DialogContent>
        <TextField name="customerName" label="Customer Name" value={invoice.customerName} onChange={handleChange} fullWidth />
        <TextField name="customerNumber" label="Customer Number" value={invoice.customerNumber} onChange={handleChange} fullWidth />
        <TextField name="invoiceNumber" label="Invoice Number" value={invoice.invoiceNumber} onChange={handleChange} fullWidth />
        <TextField name="invoiceAmount" label="Invoice Amount" value={invoice.invoiceAmount} onChange={handleChange} fullWidth />
        <TextField name="dueDate" label="Due Date" type="date" value={invoice.dueDate} onChange={handleChange} fullWidth />
        <TextField name="predictedPaymentDate" label="Predicted Payment Date" type="date" value={invoice.predictedPaymentDate} onChange={handleChange} fullWidth />
        <TextField name="notes" label="Notes" value={invoice.notes} onChange={handleChange} fullWidth />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleAdd} color="primary">Add</Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddInvoiceDialog;
