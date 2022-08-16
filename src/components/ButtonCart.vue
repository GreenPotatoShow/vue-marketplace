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
      isInCart: false,
    };
  },
  props: {
    id: { type: Number, required: true },
  },
  created() {
    const cart = getCart();
    if (!cartEmpty(cart)) {
      const itemObject = cart.find((item) => item.id === this.id);
      if (itemObject) {
        this.isInCart = true;
        this.text = 'Добавлено';
      }
    }
  },
  computed: {
    btnClass() {
      return {
        'button-cart': !this.isInCart,
        'button-cart-clicked': this.isInCart,
      };
    },
  },
  methods: {
    onClick() {
      this.$emit('add-to-cart', this.id);
      if (this.isInCart === false) {
        this.isInCart = true;
        this.text = 'Добавлено';
      } else {
        this.isInCart = false;
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
  background-color: #441761;
  color: #fac136;
  border-radius: 10px;
  border: 2px solid #441761;
  cursor: pointer;
}
</style>
