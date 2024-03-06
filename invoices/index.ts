import { Product } from "../product";

export class Invoice {
  protected ID: string;
  protected total: number;
  protected tax: number;
  protected products: Product[];

  constructor() {
    this.ID = "";
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

  addProduct(product: Product): void {
    this.products.push(product);
  }
  removeProduct(product: Product): void {
    this.products = this.products.filter((p) => p.getId() !== product.getId());
  }
  updateProduct(pro: Product): void {
    this.products = this.products.map((i: Product) => {
      if (i.getId() === pro.getId()) {
        return pro;
      }
      return i;
    });
  }

  setTax(tax: number): this {
    this.tax = tax;
    return this;
  }

  calTotal(): this {
    this.total = this.products.reduce((p) => p, 0);
    return this;
  }
}
