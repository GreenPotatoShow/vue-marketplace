<template>
  <button
  @click="onClick"
  :class="btnClass">{{text}}</button>
</template>

<script>
import { getCart, cartEmpty } from '../utils/functions';

export default {
  name: 'ButtonCart',
  data() {
    return {
      text: 'Добавить в корзину',
    };
  },
  props: {
    item: { type: Object, required: true },
    btnClass: { type: Object, required: true },
    isInCart: { type: Boolean, required: true },
  },
  mounted() {
    this.$emit('update-counter');
    const cart = getCart();
    if (!cartEmpty(cart)) {
      const itemObject = cart.find((item) => item.id === this.item.id);
      if (itemObject) {
        this.$emit('is-in-cart');
        this.text = 'Добавлено';
      }
    }
  },
  methods: {
    onClick() {
      this.$emit('add-to-cart', this.item.id);
      if (this.isInCart === false) {
        this.$emit('is-in-cart');
        this.text = 'Добавлено';
      } else {
        this.$emit('is-in-cart');
        this.text = 'Добавить в корзину';
      }
    },
  },
};
</script>

<style>
.button-cart {
  margin-top: 10px;
  padding: 5px 15px;
  background-color: #fac136;
  color: #441761;
  border-radius: 10px;
  border: 2px solid #fac136;
  font-size: 13px;
  font-family: "Segoe UI Light", Tahoma, Geneva, Verdana, sans-serif, sans-serif;
  font-weight: bold;
  width: 150px;
  height: 50px;
  cursor: pointer;
}
.button-cart:hover {
  background-color: #8323ab;
  color: #fac136;
  border: 2px solid #8323ab;
}
.button-cart-clicked {
  margin-top: 10px;
  padding: 5px 15px;
  font-size: 13px;
  font-family: "Segoe UI Light", Tahoma, Geneva, Verdana, sans-serif, sans-serif;
  font-weight: bold;
  width: 150px;
  height: 50px;
  background-color: #441761;
  color: #fac136;
  border-radius: 10px;
  border: 2px solid #441761;
  cursor: pointer;
}
</style>
