<template>
    <div class="cart-item-line">
        <div :style="{width: '20vw'}">
            <h4 class="cart-item-name"> {{item.name}}</h4>
        </div>
        <div class="div">
            <button @click="$emit('cart-minus', item.id)" class="button-counter">-</button>
            <div class="cart-item-counter">{{item.count}}</div> 
            <button @click="$emit('cart-plus', item.id)" class="button-counter">+</button>
        </div>
        <div class="item-cost">{{item.count * item.price}}</div>
    </div>
</template>

<script>
export default {
    name: 'CartItemLine',
    props: {
        item: Object,
    },
}
</script>

<style scoped>
.cart-item-line {
  display: flex;
  flex-flow: row nowrap;
  min-height: 75px;
  max-height: 75px;
  align-items: center;
  justify-content: space-between;
}
.cart-item-name {
  display: flex;
  font-family: "Segoe UI Light", Tahoma, Geneva, Verdana, sans-serif, sans-serif;
  font-weight: bold;
  font-size: 13pt;
  color: #441761;
  align-items: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-right: 10px;
}

.div {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
}

.button-counter {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 30px;
  height: 30px;
  color: white;
  background-color: #441761;
  border-radius: 10px;
  border: 2px solid #441761;
  font-size: 15pt;
  cursor: pointer;
}
.button-counter:hover {
  border-radius: 10px;
  border: 2px solid #8323ab;
  background-color: #8323ab;
}
.button-counter:active {
  position: relative;
  top: 2px;
}

.cart-item-counter {
  margin: 0 5px 5px 5px;
  font-size: 20pt;
  width: 30px;
  text-align: center;
  background-color: white;
  color: #441761;
  font-family: "Segoe UI Light", Tahoma, Geneva, Verdana, sans-serif, sans-serif;
  font-weight: bold;
}

.item-cost {
  display: flex;
  width: 20%;
  font-family: Agency FB;
  font-weight: bold;
  color: black;
  font-size: 20pt;
  justify-content: flex-end;
  margin-right: 30px;
}
</style>