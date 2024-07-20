// src/components/InvoiceGrid.tsx
import React, { useEffect, useState } from 'react';
import AddInvoiceDialog from './AddInvoiceDialog';
import EditInvoiceDialog from './EditInvoiceDialog';
import DeleteInvoiceDialog from './DeleteInvoiceDialog';
import { fetchInvoices } from '../services/invoiceService';
import { Invoice } from '../types/Invoice';
import InvoiceActions from './InvoiceActions'
import InvoiceTable from './InvoiceTable';


const InvoiceGrid: React.FC = () => {
  const [invoices, setInvoices] = useState<Invoice[]>([]);
  const [selectedInvoice, setSelectedInvoice] = useState<Invoice[]>([]);
  const [selectedInvoiceId, setSelectedInvoiceId] = useState<number[]>([]);

  const [openAddDialog, setOpenAddDialog] = useState(false);
  const [openEditDialog, setOpenEditDialog] = useState(false);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Fetch invoices on component mount
  useEffect(() => {
    fetchInvoices().then(data => {
      setInvoices(data);
    });
  }, []);

  // Update filtered invoices based on search query
  useEffect(() => {
    setInvoices(
      invoices.filter(invoice =>
        invoice.invoiceNumber.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }, [searchQuery, invoices]);

  const handleAddDialogClose = () => {
    setOpenAddDialog(false);
  };

  const handleAddDialogOpen = () => {
    setOpenAddDialog(true);
  };

  const handleEditDialogClose = () => {
    setOpenEditDialog(false);
  };

  const handleEditDialogOpen = () => {
    if (selectedInvoice) {
      setOpenEditDialog(true);
    }
  };

  const handleDeleteDialogClose = () => {
    setOpenDeleteDialog(false);
  };

  const handleDeleteDialogOpen = () => {
    if (selectedInvoiceId !== null) {
      setOpenDeleteDialog(true);
    }
  };

  const handleAdd = () => {
    fetchInvoices().then(data => {
      setInvoices(data);
    });
  };

  const handleUpdate = () => {
    fetchInvoices().then(data => {
      setInvoices(data);
    });
  };

  const handleDelete = () => {
    fetchInvoices().then(data => {
      setInvoices(data);
    });
  };

  return (
    <div style={{ height: '100%', width: '95%' }}>
      <InvoiceActions
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onAdd={handleAddDialogOpen}
        onUpdate={handleEditDialogOpen}
        onDelete={handleDeleteDialogOpen}
        selectedInvoice={selectedInvoice}
        selectedInvoiceId={selectedInvoiceId}
      />
      <AddInvoiceDialog open={openAddDialog} onClose={handleAddDialogClose} onAdd={handleAdd} />
      <EditInvoiceDialog open={openEditDialog} onClose={handleEditDialogClose} onUpdate={handleUpdate} invoice={selectedInvoice} />
      <DeleteInvoiceDialog open={openDeleteDialog} onClose={handleDeleteDialogClose} onDelete={handleDelete} invoiceId={selectedInvoiceId} />

      <InvoiceTable 
        invoices={invoices}
        selectedInvoice={selectedInvoice}
        setSelectedInvoice={setSelectedInvoice}
        selectedInvoiceId={selectedInvoiceId}
        setSelectedInvoiceId={setSelectedInvoiceId}
      />
      
    </div>
  );
};

export default InvoiceGrid;
