export class Invoice {
  protected ID: string;
  protected total: number;
  protected tax: number;
  protected products: any[];

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

  setProducts(products: any[]): this {
    this.products = products;
    return this;
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
