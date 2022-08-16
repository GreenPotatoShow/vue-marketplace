<template>
<div class="main-part">
  <item-page
  :item="item"
  @update-counter="$emit('update-counter')"></item-page>
</div>
</template>

<script>
import { allItems } from '../utils/items';
import ItemPage from '../components/ItemPage.vue';

export default {
  name: 'ItemView',
  data() {
    return {
      items: allItems,
      item: undefined,
    };
  },
  components: {
    ItemPage,
  },
  created() {
    const { id } = this.$route.params;
    this.item = this.items.find((item) => item.id === +id);
  },
};
</script>
