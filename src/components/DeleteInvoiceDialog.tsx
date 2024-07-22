import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

interface DeleteInvoiceDialogProps {
  open: boolean;
  onClose: () => void;
  onDelete: (invoiceIds: string[]) => void;  // Expecting array of strings as IDs
  invoiceIds: number[] | null;
}

const DeleteInvoiceDialog: React.FC<DeleteInvoiceDialogProps> = ({ open, onClose, onDelete, invoiceIds }) => {

  const handleDelete = () => {
    if (invoiceIds && invoiceIds.length > 0) {
      onDelete(invoiceIds);
      onClose();
    }
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle sx={{ backgroundColor: '#2c3e50', color: '#fff', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        Delete Record(s)?
        <IconButton onClick={onClose} sx={{ color: '#fff' }}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent sx={{ backgroundColor: '#34495e', color: '#fff', height: 'fit-content' }}>
        <p>
          You will lose your record(s) after this action. We can't recover them once you delete.
        </p>
        <p>
          Are you sure you want to <span style={{ color: '#FF5E5E' }}>permanently delete</span> them?
        </p>
      </DialogContent>
      <DialogActions sx={{ backgroundColor: '#2c3e50' }}>
        <Button onClick={onClose} sx={{ color: '#3498db', marginRight: 'auto' }}>
          Cancel
        </Button>
        <Button
          onClick={handleDelete}
          sx={{ color: '#3498db' }}
        >
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteInvoiceDialog;
