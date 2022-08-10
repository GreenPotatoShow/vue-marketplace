<template>
<div>
  <the-header :cartCounter="cartCounter"></the-header>
  <main-part :cartEmpty="cartEmpty" @update-counter="updateCounter" :text="'Товары'"></main-part>
</div>
</template>

<script>

import TheHeader from "./components/TheHeader"
import MainPart from "./components/MainPart"
export default {
  name: 'App',
  components: {
    TheHeader,
    MainPart,
  },
  data() {
    return {
      cartCounter: 0,
    }
  },
  created() {
    const cart = localStorage.getItem('cart');
      if (!this.cartEmpty()) {
        const parsedCart = JSON.parse(cart).filter (item => item.count !== 0 );
        localStorage.setItem('cart', JSON.stringify(parsedCart));
        this.cartCounter = parsedCart.length;
      }
  },
  methods: {
    updateCounter() {
      const cart = localStorage.getItem('cart');
      if (!this.cartEmpty()) {
        const parsedCart = JSON.parse(cart).filter (item => item.count !== 0 );
        localStorage.setItem('cart', JSON.stringify(parsedCart));
        this.cartCounter = parsedCart.length;
      }
      else {this.cartCounter = 0;}
    },

    cartEmpty() {
    const cart = JSON.parse(localStorage.getItem('cart'));
    return (!cart || Array.isArray(cart) && cart.length === 0);
    },
  },
}
</script>

<style>
body {
  background: rgb(68, 23, 97);
  background: linear-gradient(90deg, rgb(68, 23, 97) 0%, rgb(131, 35, 171) 50%, rgb(193, 54, 250) 100%);
}

a {
  text-decoration: none;
}

@font-face {
  font-family: "Agency FB";
  src: local("Agency FB"), url(assets/agencyfb_reg.ttf);
}
</style>
