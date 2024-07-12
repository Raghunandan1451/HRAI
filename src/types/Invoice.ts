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
  