<template>
<div class="header">
  <router-link to="/">
    <h1 class="logo">ИНТЕРНЕТ-МАГАЗИН</h1>
  </router-link>
  <div class="header-cart">
    <router-link to="/cart" class="cart-logo">
      <div v-if="isCounterShowed" class="counter">{{cartCounter}}</div>
      <img class="cart" src="../assets/cart.png">
      <div class="cart">Корзина</div>
    </router-link>
  </div>
</div>
</template>

<script>
export default {
  name: 'TheHeader',
  props: {
    cartCounter: { type: Number, required: true },
  },
  computed: {
    isCounterShowed() {
      return this.cartCounter !== 0;
    },
  },
};
</script>

<style>
.header {
  display: flex;
  justify-content: space-between;
  padding: 0 50px;
  position: sticky;
  top: 0;
  background: rgb(68, 23, 97);
  background: linear-gradient(90deg,
  rgb(68, 23, 97) 0%,
  rgb(131, 35, 171) 50%,
  rgb(193, 54, 250) 100%);
}

.header-cart {
  display: flex;
  flex-flow: column wrap;
}

.logo {
  margin-top: 28px;
  padding-top: 0;
  font-size: 40pt;
  font-family: Avantgarde, TeX Gyre Adventor, URW Gothic L, sans-serif;
  color: #fac136;
  cursor: pointer;
}

.logo:hover {
  color: #fcdc8f;
}

.header-cart {
  display: flex;
  flex-flow: column wrap;
  cursor: pointer;
}

.cart-logo{
  display: block;
  font-size: 1.5em;
  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
}

.cart-logo:hover {
  filter: brightness(115%);
}
.cart-logo:active {
  padding: 5px;
  margin: 13px -7px 13px -7px;
  background-color: #8323ab;
  border-radius: 7px;
  border: 2px solid #8323ab;
}

.cart {
  font-family: Avantgarde, TeX Gyre Adventor, URW Gothic L, sans-serif;
  color: #fac136;
}

img.cart {
  width: 60px;
  height: 50px;
  padding-left: 15px;
}

.counter {
  font-family: Avantgarde, TeX Gyre Adventor, URW Gothic L, sans-serif;
  color: #fac136;
  border-radius: 20px;
  border: 2px solid #441761;
  width: 20px;
  height: 20px;
  font-size: 13pt;
  background-color: #441761;
  left: 65px;
  bottom: -25px;
  text-align: center;
  position: relative;
  z-index: 1;
  margin-top: -24px;
}
</style>
