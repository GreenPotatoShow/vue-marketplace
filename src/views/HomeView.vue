<template>
  <main-part
  :text="'Товары'"
  @update-counter="$emit('update-counter')"></main-part>
</template>

<script>
import MainPart from '../components/MainPart.vue';

export default {
  name: 'HomeView',
  components: {
    MainPart,
  },
};
</script>
