<template>
  <div>
    <div :key="item.id" v-for="item in cartItems">
      <cart-item-line
      @cart-minus="$emit('cart-minus', item.id)"
      @cart-plus="$emit('cart-plus', item.id)"
      :item="item"></cart-item-line>
    </div>
  </div>
</template>

<script>
import CartItemLine from './CartItemLine.vue';

export default {
  name: 'CartItemLines',
  props: {
    cartItems: Array,
  },
  components: {
    CartItemLine,
  },
};
</script>
