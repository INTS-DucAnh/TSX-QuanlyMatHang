export class Product {
  public ID: string;
  public name: string;
  public price: number;
  public quantity: number;
  constructor(ID: string, name: string, price: number, quantity: number) {
    this.ID = ID;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }
  getID(): string {
    return this.ID;
  }

  getName(): string {
    return this.name;
  }

  getPrice(): number {
    return this.price;
  }

  getQuantity(): number {
    return this.quantity;
  }
  setPrice(price: number): this {
    this.price = price;
    return this;
  }
  setName(name: string): this {
    this.name = name;
    return this;
  }
  setQuantity(quan: number): this {
    this.quantity = quan;
    return this;
  }
}
