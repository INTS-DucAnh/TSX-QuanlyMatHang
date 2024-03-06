import { Product } from "../product";

export class Invoice {
  protected ID: string;
  protected total: number;
  protected tax: number;
  protected products: ProductInvoice[];

  constructor(ID: string) {
    this.ID = ID;
    this.total = 0;
    this.tax = 0;
    this.products = [];
  }

  getProducts(): any[] {
    return this.products;
  }
  getID(): string {
    return this.ID;
  }

  getTotal(): number {
    return this.total;
  }

  getTax(): number {
    return this.tax;
  }

  setID(id: string): this {
    this.ID = id;
    return this;
  }

  addProduct(product: ProductInvoice | undefined): this {
    if (product === undefined) return this;
    if (product.quantity < 0 || Object.keys(product).length === 0) return this;
    const indexOfProduct = this.products.findIndex(
      (p: ProductInvoice) => p.ID === product.ID
    );
    if (indexOfProduct !== -1) {
      this.products[indexOfProduct].quantity += product.quantity;
    } else {
      this.products.push(product);
    }
    return this;
  }
  removeProduct(id: string): this {
    this.products = this.products.filter((p) => id !== p.ID);
    return this;
  }
  updateProduct(pro: ProductInvoice): this {
    this.products = this.products.map((i: ProductInvoice) => {
      if (i.ID === pro.ID) {
        return pro;
      }
      return i;
    });
    return this;
  }

  setTax(tax: number): this {
    this.tax = tax;
    return this;
  }
}

export type ProductInvoice = {
  name: string;
  ID: string;
  price: number;
  quantity: number;
};
