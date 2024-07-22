// src/components/InvoiceGrid.tsx
import React, { useEffect, useState } from 'react';
import AddInvoiceDialog from './AddInvoiceDialog';
import EditInvoiceDialog from './EditInvoiceDialog';
import DeleteInvoiceDialog from './DeleteInvoiceDialog';
import { addInvoice, deleteInvoice, fetchInvoices, updateInvoice } from '../services/invoiceService';
import { Invoice } from '../types/Invoice';
import InvoiceActions from './InvoiceActions'
import InvoiceTable from './InvoiceTable';


const InvoiceGrid: React.FC = () => {
  const [invoices, setInvoices] = useState<Invoice[]>([]);
  const [selectedInvoice, setSelectedInvoice] = useState<Invoice[]>([]);
  const [selectedInvoiceId, setSelectedInvoiceId] = useState<number[]>([]);
  const [originalInvoices, setOriginalInvoices] = useState<Invoice[]>([]);

  const [openAddDialog, setOpenAddDialog] = useState(false);
  const [openEditDialog, setOpenEditDialog] = useState(false);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Fetch invoices on component mount
  useEffect(() => {
    fetchInvoices().then(data => {
      setInvoices(data);
      setOriginalInvoices(data);
    });
  }, []);

  // Update filtered invoices based on search query
  useEffect(() => {
    if (searchQuery === '') {
      setInvoices(originalInvoices)
    } else {
      setInvoices(
        originalInvoices.filter(invoice =>
          invoice.invoiceNumber.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    }
  }, [searchQuery, originalInvoices]);

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

  const handleAdd = (invoice: Invoice) => {
    addInvoice(invoice)
      .then(() => {
        fetchInvoices().then(data => {
          setInvoices(data);
        });
      });
    setOpenAddDialog(false);
  };

  const handleUpdate = (invoiceId: number, invoice: Invoice) => {
    updateInvoice(invoiceId, invoice)
      .then(() => {
        fetchInvoices().then(data => {
          setInvoices(data);
        });
      });
    setOpenEditDialog(false);
  };

  const handleDelete = (invoiceId: number[]) => {
    deleteInvoice(invoiceId)
      .then(() => {
        fetchInvoices().then(data => {
          setInvoices(data);
        });
      });
    setOpenDeleteDialog(false)
    setSelectedInvoiceId([])
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
      {selectedInvoice ? <EditInvoiceDialog open={openEditDialog} onClose={handleEditDialogClose} onUpdate={handleUpdate} invoice={selectedInvoice} /> : null}
      {selectedInvoiceId ? <DeleteInvoiceDialog open={openDeleteDialog} onClose={handleDeleteDialogClose} onDelete={handleDelete} invoiceIds={selectedInvoiceId} /> : null}

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
