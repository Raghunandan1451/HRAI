// src/services/invoiceService.ts
import axios from 'axios';
import { Invoice } from '../types/Invoice';

const API_URL = 'http://localhost:3001/invoices'

export const fetchInvoices = async (): Promise<Invoice[]> => {
  const response = await axios.get(`${API_URL}`);
  return response.data;
};

export const addInvoice = async (invoice: Invoice): Promise<void> => {
  await axios.post(`${API_URL}`, invoice);
};

export const updateInvoice = async (id: number, invoice: Invoice): Promise<void> => {
  await axios.put(`${API_URL}/${id}`, invoice);
};

export const deleteInvoice = async (ids: number[]): Promise<void> => {

  // Send the array of invoice objects to the API
  await axios.delete(`${API_URL}/'${ids}`);
};
