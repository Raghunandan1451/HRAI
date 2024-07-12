// src/components/DeleteInvoiceDialog.tsx
import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography } from '@mui/material';
import { deleteInvoice } from '../services/invoiceService';

interface DeleteInvoiceDialogProps {
  open: boolean;
  onClose: () => void;
  onDelete: () => void;
  invoiceId: number | null;
}

const DeleteInvoiceDialog: React.FC<DeleteInvoiceDialogProps> = ({ open, onClose, onDelete, invoiceId }) => {
  const handleDelete = async () => {
    if (invoiceId !== null) {
      await deleteInvoice(invoiceId);
      onDelete();
      onClose();
    }
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Delete Invoice</DialogTitle>
      <DialogContent>
        <Typography>Are you sure you want to delete this invoice?</Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleDelete} color="secondary">Delete</Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteInvoiceDialog;
