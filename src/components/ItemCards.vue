<template>
  <div id="goods">
    <div :key="item.id" v-for="item in items" class="item-card">
      <item-card
      @add-to-cart="addToCart"
      @update-counter="$emit('update-counter')"
      :item="item" />
    </div>
  </div>
</template>

<script>
import ItemCard from './ItemCard.vue';
import { getCart, setCart } from '../utils/functions';

export default {
  name: 'ItemCards',
  props: {
    items: { type: Object, required: true },
  },
  components: {
    ItemCard,
  },
  methods: {
    addToCart(id) {
      const itemToAdd = this.items[id];
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
#goods {
  margin: 10px 40px 30px 0;
  display: flex;
  justify-content: space-between;
  flex-flow: row wrap;
}

.item-card {
  display: flex;
  flex-direction: column;
  flex: 170px;
  align-items: center;
}
</style>
