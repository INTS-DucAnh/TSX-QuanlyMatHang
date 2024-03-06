import { InvoiceDto } from "../invoices/dto";

export type InvoiceManagerDto = {
  invoices: InvoiceDto[];
  lastIndex: number;
};
