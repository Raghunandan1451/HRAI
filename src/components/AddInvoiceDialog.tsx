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

  return (
    <Dialog open={open} onClose={onClose}>
      Add
    </Dialog>
  );
};

export default AddInvoiceDialog;
