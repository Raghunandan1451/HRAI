// src/types/Invoice.ts
export interface Invoice {
	id?: number;
	customerName: string;
	customerNumber: string;
	invoiceNumber: string;
	invoiceAmount: number;
	dueDate: string;
	predictedPaymentDate: string;
	notes: string;
}

export interface InvoiceActionsProps {
	searchQuery: string;
	setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
	onAdd: () => void;
	onUpdate: () => void;
	onDelete: () => void;
	selectedInvoice: Invoice[] | null;
	selectedInvoiceId: number[] | null;
}

export interface InvoiceTableProps {
  invoices: Invoice[];
  selectedInvoice: Invoice[];
  setSelectedInvoice: (invoice: Invoice[]) => void;
  selectedInvoiceId: number[];
  setSelectedInvoiceId: (id: number[]) => void;
}