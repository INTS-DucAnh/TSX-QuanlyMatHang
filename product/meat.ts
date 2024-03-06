import { Product } from ".";

export type MeatDto = {
  name: string;
  price: number;
  quantity: number;
  cut: string;
};

export class Meat extends Product {
  protected cut: string;
  constructor(
    ID: string,
    name: string,
    price: number,
    quantity: number,
    cut: string
  ) {
    super(ID, name, price, quantity);
    this.cut = cut;
  }

  getCut(): string {
    return this.cut;
  }
}
