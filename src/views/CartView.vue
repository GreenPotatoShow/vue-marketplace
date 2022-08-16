<template>
  <cart-main-part :text="'Корзина'"></cart-main-part>
</template>

<script>
import CartMainPart from '../components/CartMainPart.vue';

export default {
  name: 'CartView',
  components: {
    CartMainPart,
  },
};
</script>
