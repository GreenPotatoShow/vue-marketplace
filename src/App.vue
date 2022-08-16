<template>
<div>
  <the-header :cartCounter="cartCounter"></the-header>
  <router-view
  @update-counter="updateCounter"/>
</div>
</template>

<script>
import TheHeader from './components/TheHeader.vue';
import { getCart, setCart, cartEmpty } from './utils/functions';
import { allItems } from './utils/items';

export default {
  name: 'App',
  components: {
    TheHeader,
  },
  data() {
    return {
      items: allItems,
      cartCounter: 0,
    };
  },
  methods: {
    updateCounter() {
      const cart = getCart();
      let counter = 0;
      if (!cartEmpty(cart)) {
        const filteredCart = cart.filter((item) => item.count !== 0);
        setCart(filteredCart);
        counter = filteredCart.length;
      }
      this.cartCounter = counter;
    },
  },
};
</script>

<style>
body {
  background: rgb(68, 23, 97);
  background: linear-gradient(90deg,
  rgb(68, 23, 97) 0%,
  rgb(131, 35, 171) 50%,
  rgb(193, 54, 250) 100%);
}
a {
  text-decoration: none;
}
@font-face {
  font-family: "Agency FB";
  src: local("Agency FB"), url(assets/agencyfb_reg.ttf);
}
</style>
