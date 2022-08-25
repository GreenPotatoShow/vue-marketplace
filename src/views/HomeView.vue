<template>
  <div class="main-part">
    <div class="chapter">Товары</div>
    <div class="sorting-text">Сортировать:</div>
    <select @change="onChangeSort" class="select-sorting" v-model="sorting">
      <option selected>По умолчанию</option>
      <option value="increase">По возрастанию цены</option>
      <option value="decrease">По убыванию цены</option>
    </select>
    <div>
      <button class="filter-button" @click="onClick" >
        <div class="sorting-text">
          Фильтр
          <img class="filter-button" src="../assets/triangle.png">
        </div>
      </button>
    </div>
    <div v-if="isFilterShown">
      <div class="filter-text">Бренд</div>
      <div
        @change="onChangeFilter"
        :key="brand.index"
        v-for="brand in brands"
      >
        <div class="filter-text"><input
          type="checkbox"
          :value="brand"
          v-model="brandFilter[brands.indexOf(brand)]"
        >{{brand}}</div>
      </div>
      <button class="button-clear-filter" @click="clearFilter">Сбросить</button>
    </div>
    <div id="goods">
      <div
        :key="item.id"
        v-for="item in items"
        class="item-card"
      >
        <item-card
          @add-to-cart="addToCart"
          @update-counter="$emit('update-counter')"
          :item="item"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ItemCard from '../components/ItemCard.vue';
import { getCart, setCart } from '../utils/functions';
import { allItems } from '../utils/items';
import { brands } from '../utils/words';

export default {
  name: 'HomeView',
  data() {
    return {
      sorting: '',
      brandFilter: [],
      items: allItems,
      isFilterShown: false,
      brands,
    };
  },
  components: {
    ItemCard,
  },
  mounted() {
    this.$emit('update-counter');
    for (let i = 0; i < brands.length; i += 1) {
      this.brandFilter[i] = true;
    }
  },
  methods: {
    addToCart(id) {
      const itemToAdd = this.items.find((item) => item.id === id);
      const cart = getCart();
      let newCart;
      if (cart) {
        const itemObject = cart.find((item) => item.id === id);
        if (typeof itemObject === 'undefined') {
          newCart = [...cart, itemToAdd];
          itemToAdd.count = 1;
        } else {
          newCart = cart.filter((item) => item.id !== id);
          itemToAdd.count = 0;
        }
      } else {
        newCart = [itemToAdd];
        itemToAdd.count = 1;
      }

      setCart(newCart);
      this.$emit('update-counter');
    },

    onClick() {
      this.isFilterShown = !this.isFilterShown;
    },

    onChangeSort() {
      const compareDefault = (a, b) => {
        if (a.id > b.id) return 1;
        if (a.id === b.id) return 0;
        return -1;
      };
      const compareIncrease = (a, b) => {
        if (a.price > b.price) return 1;
        if (a.price === b.price) return 0;
        return -1;
      };
      const compareDecrease = (a, b) => {
        if (a.price > b.price) return -1;
        if (a.price === b.price) return 0;
        return 1;
      };
      let compare;
      if (this.sorting === 'increase') {
        compare = compareIncrease;
      } else if (this.sorting === 'decrease') {
        compare = compareDecrease;
      } else { compare = compareDefault; }
      this.items = [...this.items].sort(compare);
    },

    onChangeFilter() {
      this.items = allItems;

      if (this.brandFilter.reduce((prev, current) => prev || current, false)) {
        this.items = [...this.items].filter((item) => (
          this.brandFilter[brands.indexOf(item.brand)]
        ));
      } else {
        this.items = [...this.items].filter((item) => (item.brand === null));
      }
      this.onChangeSort();
    },

    clearFilter() {
      this.items = allItems;
      this.onChangeSort();
    },
  },
};
</script>

<style>
.main-part {
  display: flex;
  flex-flow: column wrap;
  background-color: white;
  border-radius: 20px;
  border: 2px solid white;
  padding: 10px 10px 10px 20px;
  margin: 0 40px 0 30px;
}

.chapter {
  border-bottom: 2px solid #441761;
  color: #8323ab;
  font-family: "Segoe UI Light", Tahoma, Geneva, Verdana, sans-serif, sans-serif;
  font-size: 20pt;
  font-weight: bold;
  margin-left: 0;
}

.sorting-text {
  font-family: "Segoe UI Light", Tahoma, Geneva, Verdana, sans-serif, sans-serif;
  font-weight: bold;
  font-size: 13pt;
  color: #441761;
  margin-top: 10px;
}

.select-sorting {
  border: 1px solid #8323ab;
  background-color: #f7e4ff;
  border-radius: 7px;
  font-family: "Segoe UI Light", Tahoma, Geneva, Verdana, sans-serif, sans-serif;
  font-weight: bold;
}

.filter-button {
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
}

.filter-button:hover {
  filter: brightness(115%);
}

img.filter-button {
  width: 10px;
  height: 10px;
}

.filter-text {
  font-family: "Segoe UI Light", Tahoma, Geneva, Verdana, sans-serif, sans-serif;
  font-weight: bold;
  color: #441761;
  font-size: 10pt;
}

.button-clear-filter {
  color: white;
  background-color: #441761;
  border-radius: 10px;
  border: 2px solid #441761;
  font-family: "Segoe UI Light", Tahoma, Geneva, Verdana, sans-serif, sans-serif;
  font-weight: bold;
  padding: 8px;
  margin-top: 5px;
  font-size: 10pt;
  cursor: pointer;
}

.button-clear-filter:hover {
  border-radius: 10px;
  border: 2px solid #8323ab;
  background-color: #8323ab;
}

.button-clear-filter:active {
  position: relative;
  top: 2px;
}

#goods {
  margin: 10px 40px 30px 0;
  display: flex;
  justify-content: space-between;
  flex-flow: row wrap;
}
</style>
