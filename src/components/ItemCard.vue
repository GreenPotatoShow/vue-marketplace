<template>
<div class="item-card">
  <a href="#">
    <img class="item" :src="require(`../assets/picture${item.id + 1}.jpg`)">
    <h4 class="item-name">{{item.name}}</h4>
    <div class="item-price">{{item.price}}</div>
  </a>
  <button-cart
  :id="item.id"
  @add-to-cart="$emit('add-to-cart', item.id)"></button-cart>
</div>
</template>

<script>
import ButtonCart from './ButtonCart.vue';

export default {
  name: 'itemCard',
  props: {
    item: { type: Object, required: true },
  },
  components: {
    ButtonCart,
  },
};
</script>

<style>
img.item {
  margin-top: 10px;
  border-radius: 10px;
  object-fit: cover;
  width: 150px;
  height: 175px;
}
img.item:hover {
  box-shadow: 0 0 22px 0 rgb(167, 166, 166);
}
img.item:active {
  opacity: 0.7;
}

.item-name {
  margin-top: 10px;
  font-family: "Segoe UI Light", Tahoma, Geneva, Verdana, sans-serif, sans-serif;
  font-weight: bold;
  font-size: 13pt;
  color: #441761;
  width: 150px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.item-name:hover {
  color: #8323ab;
}

.item-price {
  margin-top: 5px;
  font-family: Agency FB;
  font-weight: bold;
  font-size: 25pt;
  color: black;
  width: 150px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.item-price:hover {
  color: rgb(53, 52, 52);
}
</style>
