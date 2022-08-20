import {
  mNoun, fNoun, nNoun, pNoun, adj, fAdj, nAdj,
} from './words';

const newItems = true;

const random = (min, max) => Math.floor(min + Math.random() * (max + 1 - min));

export class Item {
  constructor(id, name, price, count = 0) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.count = count;
  }
}

let items = [];

if (newItems === true) {
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

      if (fAdj.indexOf(localAdj) === -1) {
        localAdj = `${localAdj.slice(0, -2)}ая`;
      } else {
        localAdj = `${localAdj.slice(0, -2)}яя`;
      }
    } else if (n === 7) {
      n = random(0, nNoun.length - 1);
      name = nNoun[n];
      n = random(0, adj.length - 1);
      localAdj = adj[n];

      if (nAdj.indexOf(localAdj) === -1) {
        localAdj = `${localAdj.slice(0, -2)}ое`;
      } else {
        localAdj = `${localAdj.slice(0, -2)}ее`;
      }
    } else if ((n === 8) || (n === 9)) {
      n = random(0, pNoun.length - 1);
      name = pNoun[n];
      n = random(0, adj.length - 1);
      localAdj = adj[n];
      if (localAdj.slice(-2, -1) === 'ы') {
        localAdj = `${localAdj.slice(0, -2)}ые`;
      } else {
        localAdj = `${localAdj.slice(0, -2)}ие`;
      }
    }
    name = `${localAdj} ${name}`;
    name = `${name[0].toUpperCase()}${name.slice(1)}`;
    const price = random(1, 1000000);
    items[i] = new Item(i, name, price);
  }
  localStorage.setItem('items', JSON.stringify(items));
} else {
  items = JSON.parse(localStorage.getItem('items'));
}

export const allItems = items;

export const descriptions = [
  'Практический опыт показывает, что сложившаяся структура организации требует от нас анализа дальнейших направлений развитая системы массового участия? Задача организации, в особенности же постоянный количественный рост и сфера нашей активности в значительной степени обуславливает создание системы масштабного изменения ряда параметров. Равным образом реализация намеченного плана развития обеспечивает актуальность позиций, занимаемых участниками в отношении поставленных задач! Таким образом, рамки и место обучения кадров позволяет выполнить важнейшие задания по разработке всесторонне сбалансированных нововведений. Дорогие друзья, рамки и место обучения кадров представляет собой интересный эксперимент проверки соответствующих условий активизации? С другой стороны выбранный нами инновационный путь представляет собой интересный эксперимент проверки существующих финансовых и административных условий. Практический опыт показывает, что постоянное информационно-техническое обеспечение нашей деятельности способствует повышению актуальности всесторонне сбалансированных нововведений? Равным образом новая модель организационной деятельности создаёт предпосылки качественно новых шагов для дальнейших направлений развития проекта? Таким образом, реализация намеченного плана развития позволяет оценить значение системы масштабного изменения ряда параметров! Таким образом, дальнейшее развитие различных форм деятельности обеспечивает актуальность системы обучения кадров, соответствующей насущным потребностям. Значимость этих проблем настолько очевидна, что сложившаяся структура организации способствует повышению актуальности дальнейших направлений развития проекта. Разнообразный и богатый опыт консультация с профессионалами из IT способствует повышению актуальности ключевых компонентов планируемого обновления? Таким образом, курс на социально-ориентированный национальный...',
  'Равным образом выбранный нами инновационный путь требует от нас системного анализа дальнейших направлений развития проекта. Дорогие друзья, курс на социально-ориентированный национальный проект обеспечивает актуальность дальнейших направлений развития проекта? Значимость этих проблем настолько очевидна, что начало повседневной работы по формированию позиции позволяет выполнить важнейшие задания по разработке модели развития. Задача организации, в особенности же новая модель организационной деятельности играет важную роль в формировании системы масштабного изменения ряда параметров. Разнообразный и богатый опыт дальнейшее развитие различных форм деятельности требует от нас анализа системы масштабного изменения ряда параметров. Не следует, однако, забывать о том, что постоянное информационно-техническое обеспечение нашей деятельности создаёт предпосылки качественно...',
  'Quis autem vel eum iure reprehenderit, quis nostrum exercitationem ullam corporis suscipit laboriosam, ut aut reiciendis voluptatibus maiores alias consequatur...',
  'Itaque earum rerum hic tenetur a sapiente delectus, consectetur adipiscing elit, obcaecati cupiditate non provident, similique sunt in culpa, qui officia deserunt mollitia animi, id est laborum et dolorum fuga! Duis aute irure dolor in reprehenderit in voluptate, consectetur adipiscing elit, qui dolorem ipsum, quia dolor sit, amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro...',
];
