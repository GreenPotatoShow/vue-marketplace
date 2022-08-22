<template>
  <div class="main-part">
    <div class="chapter">Товары</div>
    <div class="sorting-text">Сортировать:</div>
    <select  class="select-sorting" v-model="sorting">
      <option selected>По умолчанию</option>
      <option value="increase">По возрастанию цены</option>
      <option value="decrease">По убыванию цены</option>
    </select>
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

export default {
  name: 'HomeView',
  data() {
    return {
      sorting: '',
      items: allItems,
    };
  },
  components: {
    ItemCard,
  },
  mounted() {
    this.$emit('update-counter');
  },
  updated() {
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

#goods {
  margin: 10px 40px 30px 0;
  display: flex;
  justify-content: space-between;
  flex-flow: row wrap;
}
</style>
