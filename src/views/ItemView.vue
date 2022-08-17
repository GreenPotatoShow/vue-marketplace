<template>
<div class="main-part">
  <item-page
  :item="item"
  @add-to-cart="addToCart"
  @update-counter="$emit('update-counter')"></item-page>
</div>
</template>

<script>
import { getCart, setCart } from '../utils/functions';
import { allItems } from '../utils/items';
import ItemPage from '../components/ItemPage.vue';

export default {
  name: 'ItemView',
  data() {
    return {
      items: allItems,
      item: undefined,
    };
  },
  components: {
    ItemPage,
  },
  created() {
    const { id } = this.$route.params;
    this.item = this.items.find((item) => item.id === +id);
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
