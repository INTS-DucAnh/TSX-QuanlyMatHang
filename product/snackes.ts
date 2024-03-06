import { Product } from ".";

export type SnackesDto = {
  name: string;
  price: number;
  quantity: number;
  flavor: string;
};

export class Snackes extends Product {
  protected flavor: string;
  constructor(
    ID: string,
    name: string,
    price: number,
    quantity: number,
    flavor: string
  ) {
    super(ID, name, price, quantity);
    this.flavor = flavor;
  }
}
