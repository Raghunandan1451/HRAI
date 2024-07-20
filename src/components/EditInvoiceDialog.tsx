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
  return (
    <Dialog open={open} onClose={onClose}>
      Edit
    </Dialog>
	);
};

export default EditInvoiceDialog;
