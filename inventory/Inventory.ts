import { ProductInvoice } from "../invoices";
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
  getQuantityOfProduct(
    id: string,
    quantity: number
  ): ProductInvoice | undefined {
    let productIndex = this.products.findIndex(
      (p: Product) => p.getID() === id
    );
    if (productIndex !== -1) {
      let productQuan = this.products[productIndex].getQuantity();
      if (productQuan - quantity < 0) {
        return undefined;
      } else {
        this.products[productIndex].setQuantity(productQuan - quantity);
        const { name, price, ID, ...props } = this.products[productIndex];
        return { name, price, ID, quantity: quantity };
      }
    }
    return undefined;
  }
  getProduct(): Product[] {
    return this.products;
  }
  getLastIndex(): number {
    return this.lastIndex;
  }
}
