<template>
<div>
  <the-header
  @go-to-index="goToIndex"
  @go-to-cart="page = 'cart'"
  :cartCounter="cartCounter"></the-header>

  <main-part
  v-if="page === 'index'"
  @update-counter="updateCounter"></main-part>

  <cart-main-part
  v-if="page === 'cart'"
  :text="'Корзина'"></cart-main-part>
</div>
</template>

<script>

import TheHeader from './components/TheHeader.vue';
import MainPart from './components/MainPart.vue';
import CartMainPart from './components/CartMainPart.vue';
import { getCart, setCart, cartEmpty } from './utils/functions';

export default {
  name: 'App',
  components: {
    TheHeader,
    MainPart,
    CartMainPart,
  },
  data() {
    return {
      cartCounter: 0,
      page: 'index',
    };
  },
  created() {
    this.updateCounter();
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

    goToIndex() {
      this.page = 'index';
      this.updateCounter();
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
