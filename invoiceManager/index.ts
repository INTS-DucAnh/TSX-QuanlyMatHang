import { Invoice } from "../invoices";

export class InvoiceManager {
  protected invoices: Invoice[];
  protected lastIndex: number;

  constructor() {
    this.invoices = [];
    this.lastIndex = 0;
  }

  getLastIndex(): number {
    return this.lastIndex;
  }

  getInvoices(): Invoice[] {
    return this.invoices;
  }

  addInvoice(invoice: Invoice): this {
    this.invoices.push(invoice);
    this.lastIndex++;
    return this;
  }

  updateInvoice(invoice: Invoice): this {
    this.invoices = this.invoices.map((i: Invoice) =>
      i.getID() === invoice.getID() ? invoice : i
    );
    return this;
  }

  removeInvoice(id: string): this {
    this.invoices = this.invoices.filter((i: Invoice) => i.getID() !== id);
    return this;
  }
}
