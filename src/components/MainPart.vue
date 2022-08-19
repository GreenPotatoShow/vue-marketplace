<template>
  <div class="main-part">
    <div class="chapter">{{text}}</div>
    <div>Сортировать:</div>
    <select v-model="sorting">
      <option value="increase">По возрастанию цены</option>
      <option value="decrease">По убыванию цены</option>
    </select>
    <item-cards
    :items="items"
    @update-counter="$emit('update-counter')"></item-cards>
  </div>
</template>

<script>
import ItemCards from './ItemCards.vue';
import { allItems } from '../utils/items';

export default {
  name: 'MainPart',
  data() {
    return {
      sorting: '',
      items: allItems,
    };
  },
  components: {
    ItemCards,
  },
  props: {
    text: { type: String, required: true },
  },
  mounted() {
    this.$emit('update-counter');
  },
  updated() {
    if (this.sorting === 'increase') {
      const compare = (a, b) => {
        if (a.price > b.price) return 1;
        if (a.price === b.price) return 0;
        return -1;
      };
      this.items.sort(compare);
    }
    if (this.sorting === 'decrease') {
      const compare = (a, b) => {
        if (a.price > b.price) return -1;
        if (a.price === b.price) return 0;
        return 1;
      };
      this.items.sort(compare);
    }
  },
};
</script>

<style>
.main-part {
  display: flex;
  flex-flow: column wrap;
  background-color: white;
  border-radius: 20px;
  border: 2px solid white;
  padding: 10px 10px 10px 20px;
  margin: 0 40px 0 30px;
}

.chapter {
  border-bottom: 2px solid #441761;
  color: #8323ab;
  font-family: "Segoe UI Light", Tahoma, Geneva, Verdana, sans-serif, sans-serif;
  font-size: 20pt;
  font-weight: bold;
  margin-left: 0;
}

#goods {
  margin: 10px 40px 30px 0;
  display: flex;
  justify-content: space-between;
  flex-flow: row wrap;
}
</style>
