import { Product } from ".";

export type VegetableDto = {
  name: string;
  price: number;
  quantity: number;
  origin: string;
};

export class Vegetable extends Product {
  protected origin: string;
  constructor(
    ID: string,
    name: string,
    price: number,
    quantity: number,
    origin: string
  ) {
    super(ID, name, price, quantity);
    this.origin = origin;
  }
}
