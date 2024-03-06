import { Product } from "../product";

export class Inventory {
  protected products: Product[];
  protected lastIndex: number;
  constructor() {
    this.lastIndex = 0;
    this.products = [];
  }
  addProduct(product: Product): void {
    this.products.push(product);
    this.lastIndex += 1;
  }
  removeProduct(product: Product): void {
    this.products = this.products.filter((p) => p.getID() !== product.getID());
  }
  updateProduct(pro: Product): void {
    this.products = this.products.map((i: Product) => {
      if (i.getID() === pro.getID()) {
        return pro;
      }
      return i;
    });
  }
  getProduct(): Product[] {
    return this.products;
  }
  getLastIndex(): number {
    return this.lastIndex;
  }
}
