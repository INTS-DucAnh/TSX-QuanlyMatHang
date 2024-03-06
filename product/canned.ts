import { Product } from ".";

export type CannedDto = {
  name: string;
  price: number;
  quantity: number;
  expirationDate: string;
};

export class Canned extends Product {
  protected expirationDate: string;
  constructor(
    ID: string,
    name: string,
    price: number,
    quantity: number,
    expirationDate: string
  ) {
    super(ID, name, price, quantity);
    this.expirationDate = expirationDate;
  }
}
