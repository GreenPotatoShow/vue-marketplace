<template>
    <div class="header-cart">
        <div class="cart-logo">
            <a href="cart.html" class="cart">
              <div v-if="counterCart !== 0" class="counter">{{counterCart}}</div>
              <img class="cart" src="../assets/cart.png">
              <div>Корзина</div>
            </a>
        </div>
    </div>
</template>

<script>

export default{
    name: 'CartIcon',
    props: ['text', 'counterCart'],
}
</script>

<style scoped>
.header-cart {
  display: flex;
  flex-flow: column wrap;
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

a.cart {
  font-family: Avantgarde, TeX Gyre Adventor, URW Gothic L, sans-serif;
  color: #fac136;
}

img.cart {
  width: 60px;
  height: 50px;
  padding-left: 15px;
}

.counter {
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

.empty-counter{
  display: none;
}
</style>