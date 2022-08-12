<template>
    <div class="main-part">
        <div class="chapter">{{text}}</div>
        <item-cards :cartEmpty="cartEmpty" @update-counter="$emit('update-counter')"></item-cards>
    </div>
</template>

<script>
import ItemCards from './ItemCards'
export default {
    name: 'MainPart',
    props: ['text', 'cartEmpty'],
    components: {
      ItemCards,
    },
}
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