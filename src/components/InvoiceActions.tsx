// import React from 'react';
import { Button, TextField, Grid } from '@mui/material';
import { InvoiceActionsProps } from '../types/Invoice';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import SearchIcon from '@mui/icons-material/Search';

const InvoiceActions: React.FC<InvoiceActionsProps> = ({
  searchQuery,
  setSearchQuery,
  onAdd,
  onUpdate,
  onDelete,
  selectedInvoiceId,
}) => {

  const isSingleSelected = selectedInvoiceId && selectedInvoiceId.length === 1;
  const isAnySelected = selectedInvoiceId && selectedInvoiceId.length > 0;

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);
  };

  return (
    <Grid container spacing={2} justifyContent="flex-end" alignItems="center" margin="10px" width="calc(100% - 16px)" padding="0 3rem">
      <Grid item>
        <Button variant="contained" color="primary" onClick={onAdd} startIcon={<AddIcon />}>
          Add
        </Button>
      </Grid>
      <Grid item>
        <Button 
          variant="contained" 
          color="secondary" 
          onClick={onUpdate} 
          disabled={!isSingleSelected}
          startIcon={<EditIcon />}
        >
          Edit
        </Button>
      </Grid>
      <Grid item>
        <Button 
          variant="contained" 
          color="error" 
          onClick={onDelete} 
          disabled={!isAnySelected} 
          startIcon={<DeleteIcon />}
        >
          Delete
        </Button>
      </Grid>
      <Grid item>
        <TextField
          placeholder="Search by Invoice Number"
          variant="outlined"
          value={searchQuery}
          onChange={handleSearchChange}
          InputProps={{
            endAdornment: <SearchIcon />,
            style: { fontSize: 15, height: 40, padding: '0 14px' }
          }}
          sx={{
            "& .MuiInputBase-root": { fontSize: 15, height: 40, padding: '0 14px' },
            "& .Mui-focused .MuiInputBase-input": { color: "black" },
          }}
        />
      </Grid>
    </Grid>
  );
};

export default InvoiceActions;
