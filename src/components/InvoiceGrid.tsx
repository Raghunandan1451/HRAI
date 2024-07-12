// src/components/InvoiceGrid.tsx
import React, { useEffect, useState } from 'react';
import { DataGrid, GridColDef, GridRowParams, GridRowId, GridPaginationModel } from '@mui/x-data-grid';
import { Button, TextField } from '@mui/material';
import AddInvoiceDialog from './AddInvoiceDialog';
import EditInvoiceDialog from './EditInvoiceDialog';
import DeleteInvoiceDialog from './DeleteInvoiceDialog';
import { fetchInvoices } from '../services/invoiceService';
import { Invoice } from '../types/Invoice';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'customerName', headerName: 'Customer Name', width: 150 },
  { field: 'customerNumber', headerName: 'Customer #', width: 150 },
  { field: 'invoiceNumber', headerName: 'Invoice #', width: 150 },
  { field: 'invoiceAmount', headerName: 'Invoice Amount', width: 150 },
  { field: 'dueDate', headerName: 'Due Date', width: 150 },
  { field: 'predictedPaymentDate', headerName: 'Predicted Payment Date', width: 200 },
  { field: 'notes', headerName: 'Notes', width: 200 },
];

const InvoiceGrid: React.FC = () => {
  const [invoices, setInvoices] = useState<Invoice[]>([]);
  const [filteredInvoices, setFilteredInvoices] = useState<Invoice[]>([]);
  const [openAddDialog, setOpenAddDialog] = useState(false);
  const [openEditDialog, setOpenEditDialog] = useState(false);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [selectedInvoice, setSelectedInvoice] = useState<Invoice | null>(null);
  const [selectedInvoiceId, setSelectedInvoiceId] = useState<number | null>(null);
  const [paginationModel, setPaginationModel] = useState<GridPaginationModel>({ page: 0, pageSize: 10 });
  const [searchQuery, setSearchQuery] = useState('');

  // Fetch invoices on component mount
  useEffect(() => {
    fetchInvoices().then(data => {
      setInvoices(data);
      setFilteredInvoices(data);
    });
  }, []);

  // Update filtered invoices based on search query
  useEffect(() => {
    setFilteredInvoices(
      invoices.filter(invoice =>
        invoice.customerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        invoice.customerNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
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
      setFilteredInvoices(data);
    });
  };

  const handleUpdate = () => {
    fetchInvoices().then(data => {
      setInvoices(data);
      setFilteredInvoices(data);
    });
  };

  const handleDelete = () => {
    fetchInvoices().then(data => {
      setInvoices(data);
      setFilteredInvoices(data);
    });
  };

  return (
    <div style={{ height: 600, width: '100%' }}>
      <div style={{ marginBottom: 16, display: 'flex', justifyContent: 'space-between' }}>
        <div>
          <Button variant="contained" color="primary" onClick={handleAddDialogOpen}>Add Invoice</Button>
          <Button variant="contained" color="secondary" onClick={handleEditDialogOpen} style={{ marginLeft: 8 }}>Edit Invoice</Button>
          <Button variant="contained" color="error" onClick={handleDeleteDialogOpen} style={{ marginLeft: 8 }}>Delete Invoice</Button>
        </div>
        <TextField
          label="Search"
          variant="outlined"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <AddInvoiceDialog open={openAddDialog} onClose={handleAddDialogClose} onAdd={handleAdd} />
      <EditInvoiceDialog open={openEditDialog} onClose={handleEditDialogClose} onUpdate={handleUpdate} invoice={selectedInvoice} />
      <DeleteInvoiceDialog open={openDeleteDialog} onClose={handleDeleteDialogClose} onDelete={handleDelete} invoiceId={selectedInvoiceId} />
      <DataGrid
        rows={filteredInvoices}
        columns={columns}
        paginationModel={paginationModel}
        onPaginationModelChange={(model) => setPaginationModel(model)}
        checkboxSelection
        onRowDoubleClick={(params: GridRowParams) => setSelectedInvoice(params.row as Invoice)}
        onRowSelectionModelChange={(ids: GridRowId[]) => {
          const selectedIDs = new Set(ids);
          const selectedRowData = invoices.filter((row) => selectedIDs.has(row.id!));
          if (selectedRowData.length === 1) {
            setSelectedInvoiceId(selectedRowData[0].id!);
            setSelectedInvoice(selectedRowData[0]);
          }
        }}
      />
    </div>
  );
};

export default InvoiceGrid;
