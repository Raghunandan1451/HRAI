// InvoiceTable.tsx
import React, { useState } from 'react';
import { Invoice, InvoiceTableProps } from '../types/Invoice';
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
  Paper, IconButton, Box, Checkbox
} from '@mui/material';
import { ArrowBack, ArrowForward } from '@mui/icons-material';

const InvoiceTable: React.FC<InvoiceTableProps> = ({ 
  invoices,
  selectedInvoice,
  setSelectedInvoice,
  selectedInvoiceId,
  setSelectedInvoiceId,
}) => {
  const [page, setPage] = useState(0);
  const rowsPerPage = 10;

  const handlePrevPage = () => {
    if (page > 0) {
      setPage(page - 1);
    }
  };

  const handleNextPage = () => {
    if ((page + 1) * rowsPerPage < invoices.length) {
      setPage(page + 1);
    }
  };

  const handleSelectInvoice = (invoice: Invoice, id: number) => {
    const selectedIds = [...(selectedInvoiceId || [])];
    const selectedList = [...selectedInvoice];

    if (selectedIds.includes(id)) {
      setSelectedInvoiceId(selectedIds.filter(selectedId => selectedId !== id));
      setSelectedInvoice(selectedList.filter(selectedInvoice => selectedInvoice !== invoice));
    } else {
      setSelectedInvoiceId([...selectedIds, id]);
      setSelectedInvoice([...selectedList, invoice]);
    }
  }

  return (
    <Box display="flex" alignItems="center" justifyContent="center" flexDirection="row">
      <IconButton
        onClick={handlePrevPage}
        disabled={page === 0}
        sx={{ backgroundColor: page === 0 ? 'default' : '#14AFF1', marginRight: 1, color: '#ffffff' }}
      >
        <ArrowBack />
      </IconButton>

      <Box flex={1} display="flex" justifyContent="center">
        <TableContainer component={Paper} sx={{ backgroundColor: "#39495E", borderRadius: "1rem"}}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{color: "#97A1A9"}}>Select</TableCell>
                <TableCell sx={{color: "#97A1A9"}}>Customer Name</TableCell>
                <TableCell sx={{color: "#97A1A9"}}>Customer #</TableCell>
                <TableCell sx={{color: "#97A1A9"}}>Invoice #</TableCell>
                <TableCell sx={{color: "#97A1A9"}}>Invoice Amount</TableCell>
                <TableCell sx={{color: "#97A1A9"}}>Due Date</TableCell>
                <TableCell sx={{color: "#97A1A9"}}>Predicted Payment Date</TableCell>
                <TableCell sx={{color: "#97A1A9"}}>Notes</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {invoices.slice(page * rowsPerPage, (page + 1) * rowsPerPage).map((invoice, index) => (
                <TableRow key={index} sx={{ backgroundColor: index % 2 === 1 ? '#283A46' : 'inherit' }}>
                  <TableCell>
                    <Checkbox
                      checked={selectedInvoiceId ? selectedInvoiceId.includes(invoice.id || invoice[0].id) : false}
                      onChange={() => handleSelectInvoice(invoice, invoice.id || invoice[0].id)}
                    />
                  </TableCell>
                  <TableCell sx={{color: "#fff"}}>{invoice.customerName}</TableCell>
                  <TableCell sx={{color: "#fff"}}>{invoice.customerNumber}</TableCell>
                  <TableCell sx={{color: "#fff"}}>{invoice.invoiceNumber}</TableCell>
                  <TableCell sx={{color: "#fff"}}>{invoice.invoiceAmount}</TableCell>
                  <TableCell sx={{color: "#fff"}}>{invoice.dueDate}</TableCell>
                  <TableCell sx={{color: "#fff"}}>{invoice.predictedPaymentDate}</TableCell>
                  <TableCell sx={{color: "#fff"}}>{invoice.notes}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      <IconButton
        onClick={handleNextPage}
        disabled={(page + 1) * rowsPerPage >= invoices.length}
        sx={{ backgroundColor: (page + 1) * rowsPerPage >= invoices.length ? 'default' : '#14AFF1', marginLeft: 1, color: '#ffffff' }}
      >
        <ArrowForward />
      </IconButton>
    </Box>
  );
};

export default InvoiceTable;
