// src/components/DeleteInvoiceDialog.tsx
import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography } from '@mui/material';
import { deleteInvoice } from '../services/invoiceService';

interface DeleteInvoiceDialogProps {
  open: boolean;
  onClose: () => void;
  onDelete: () => void;
  invoiceId: number[] | null;
}

const DeleteInvoiceDialog: React.FC<DeleteInvoiceDialogProps> = ({ open, onClose, onDelete, invoiceId }) => {

  return (
    <Dialog open={open} onClose={onClose}>
      Delete
    </Dialog>
  );
};

export default DeleteInvoiceDialog;
