// src/components/EditInvoiceDialog.tsx
import React, { useState, useEffect } from 'react';
import { Dialog, DialogTitle, DialogContent, TextField, DialogActions, Button } from '@mui/material';
import { updateInvoice } from '../services/invoiceService';
import { Invoice } from '../types/Invoice';

interface EditInvoiceDialogProps {
  open: boolean;
  onClose: () => void;
  onUpdate: () => void;
  invoice: Invoice | null;
}

const EditInvoiceDialog: React.FC<EditInvoiceDialogProps> = ({ open, onClose, onUpdate, invoice }) => {
  const [currentInvoice, setCurrentInvoice] = useState<Invoice>({
    customerName: '',
    customerNumber: '',
    invoiceNumber: '',
    invoiceAmount: 0,
    dueDate: '',
    predictedPaymentDate: '',
    notes: '',
  });

  useEffect(() => {
    if (invoice) {
      setCurrentInvoice(invoice);
    }
  }, [invoice]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCurrentInvoice(prevState => ({
      ...prevState,
      [name]: name === 'invoiceAmount' ? parseFloat(value) : value
    }));
  };

  const handleUpdate = async () => {
    if (currentInvoice.id) {
      await updateInvoice(currentInvoice.id, currentInvoice);
      onUpdate();
      onClose();
    }
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Edit Invoice</DialogTitle>
      <DialogContent>
        <TextField name="customerName" label="Customer Name" value={currentInvoice.customerName} onChange={handleChange} fullWidth />
        <TextField name="customerNumber" label="Customer Number" value={currentInvoice.customerNumber} onChange={handleChange} fullWidth />
        <TextField name="invoiceNumber" label="Invoice Number" value={currentInvoice.invoiceNumber} onChange={handleChange} fullWidth />
        <TextField name="invoiceAmount" label="Invoice Amount" value={currentInvoice.invoiceAmount} onChange={handleChange} fullWidth />
        <TextField name="dueDate" label="Due Date" type="date" value={currentInvoice.dueDate} onChange={handleChange} fullWidth />
           <TextField name="predictedPaymentDate" label="Predicted Payment Date" type="date" value={currentInvoice.predictedPaymentDate} onChange={handleChange} fullWidth />
           <TextField name="notes" label="Notes" value={currentInvoice.notes} onChange={handleChange} fullWidth />
         </DialogContent>
         <DialogActions>
           <Button onClick={onClose}>Cancel</Button>
           <Button onClick={handleUpdate} color="primary">Update</Button>
         </DialogActions>
       </Dialog>
	);
};

export default EditInvoiceDialog;
