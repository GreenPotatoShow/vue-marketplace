import {
  mNoun, fNoun, nNoun, pNoun, adj, fAdj, nAdj, pAdj,
} from './words';

const random = (min, max) => Math.floor(min + Math.random() * (max + 1 - min));

export class Item {
  constructor(id, name, price, count = 0) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.count = count;
  }
}

export const items = [];

for (let i = 0; i <= 50; i += 1) {
  let name = '';
  let localAdj = '';
  let n = random(1, 9);
  if ((n >= 1) && (n <= 3)) {
    n = random(0, mNoun.length - 1);
    name = mNoun[n];
    n = random(0, adj.length - 1);
    localAdj = adj[n];
  } else if ((n >= 4) && (n <= 6)) {
    n = random(0, fNoun.length - 1);
    name = fNoun[n];
    n = random(0, adj.length - 1);
    localAdj = adj[n];

    localAdj = fAdj.indexOf(localAdj) === -1
      ? `${localAdj.slice(0, -2)}ая`
      : `${localAdj.slice(0, -2)}яя`;
  } else if (n === 7) {
    n = random(0, nNoun.length - 1);
    name = nNoun[n];
    n = random(0, adj.length - 1);
    localAdj = adj[n];

    localAdj = nAdj.indexOf(localAdj) === -1
      ? `${localAdj.slice(0, -2)}ое`
      : `${localAdj.slice(0, -2)}ее`;
  } else if ((n === 8) || (n === 9)) {
    n = random(0, pNoun.length - 1);
    name = pNoun[n];
    n = random(0, adj.length - 1);
    localAdj = adj[n];
    localAdj = ((localAdj.slice(-2, -1) === 'ы')
    || ((pAdj.indexOf(localAdj) === -1)
    && (localAdj.slice(-2, -1) === 'о')))
      ? `${localAdj.slice(0, -2)}ые`
      : `${localAdj.slice(0, -2)}ие`;
  }
  name = `${localAdj} ${name}`;
  name = `${name[0].toUpperCase()}${name.slice(1)}`;
  const price = random(1, 1000000);
  items[i] = new Item(i, name, price);
}
