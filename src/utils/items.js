export class Item {
  constructor(id, name, price, count = 0) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.count = count;
  }
}

export const allItems = [
  new Item(0, '1', 100),
  new Item(1, '2', 1000),
  new Item(2, '3', 10000),
  new Item(3, '4', 100000),
];
