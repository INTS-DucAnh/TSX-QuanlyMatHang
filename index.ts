import CreateID from "./base/id_service";
import { Inventory } from "./inventory/Inventory";
import { InvoiceManager } from "./invoiceManager";
import { Meat, MeatDto } from "./product/meat";
import { Vegetable } from "./product/vegetable";

const Data = {
  MEAT: [
    {
      name: "Beef",
      price: 10.99,
      quantity: 50,
      cut: "Ribeye",
    },
    {
      name: "Chicken",
      price: 7.99,
      quantity: 70,
      cut: "Breast",
    },
    {
      name: "Pork",
      price: 8.99,
      quantity: 40,
      cut: "Belly",
    },
  ],
  VEGETABLE: [
    {
      name: "Carrot",
      price: 2.99,
      quantity: 100,
      origin: "Local",
    },
    {
      name: "Spinach",
      price: 2.79,
      quantity: 40,
      origin: "Imported",
    },
  ],
  SNACKES: [
    {
      name: "Chips",
      price: 1.99,
      quantity: 120,
      flavor: "Salty",
    },
    {
      name: "Cookies",
      price: 2.49,
      quantity: 90,
      flavor: "Sweet",
    },
    {
      name: "Crackers",
      price: 1.79,
      quantity: 110,
      flavor: "Savory",
    },
  ],
  CANNED: [
    {
      name: "Soup",
      price: 3.29,
      quantity: 90,
      expirationDate: "2024-12-31",
    },
    {
      name: "Vegetables",
      price: 2.99,
      quantity: 100,
      expirationDate: "2023-10-15",
    },
    {
      name: "Fruits",
      price: 3.49,
      quantity: 70,
      expirationDate: "2023-11-30",
    },
  ],
};

const invoiceManger = new InvoiceManager();
const inventory = new Inventory();

const prefix = "PRD";
const dec = 3;

inventory.addProduct(
  new Meat(
    CreateID(dec, prefix, inventory.getProduct(), inventory.getLastIndex()),
    "Beef",
    9.99,
    100,
    "Ribeye"
  )
);
inventory.addProduct(
  new Meat(
    CreateID(dec, prefix, inventory.getProduct(), inventory.getLastIndex()),
    "Chicken",
    8.99,
    70,
    "Breast"
  )
);
inventory.addProduct(
  new Meat(
    CreateID(dec, prefix, inventory.getProduct(), inventory.getLastIndex()),
    "Pork",
    8.99,
    40,
    "Belly"
  )
);

inventory.addProduct(
  new Vegetable(
    CreateID(dec, prefix, inventory.getProduct(), inventory.getLastIndex()),
    "Carrot",
    2.99,
    100,
    "Local"
  )
);
inventory.addProduct(
  new Vegetable(
    CreateID(dec, prefix, inventory.getProduct(), inventory.getLastIndex()),
    "Spinach",
    2.79,
    50,
    "Imported"
  )
);

console.log(inventory.getProduct());
