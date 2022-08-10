<template>
    <div id="goods">
        <div :key="item.id" v-for="item in items" class="item-card">
            <item-card @add-to-cart="addToCart" :item="item" />
        </div>
    </div>
</template>

<script>

class Item {
  constructor(id, name, price, count = 0) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.count = count;
  }
}

import ItemCard from "./ItemCard"
export default {
    name: 'ItemCards',
    data() {
        return {
            items: [
                    new Item(0, '1', 100),
                    new Item(1, '2', 1000),
                    new Item(2, '3', 10000),
                    new Item(3, '4', 100000),
            ]
        }
    },
    components: {
        ItemCard,
    },
    methods: {
      addToCart(id){
        const itemToAdd = this.items[id];
        const cart = localStorage.getItem('cart');

        let newCart;
        if (cart) {
            const parsedCart = JSON.parse(cart);
            const itemObject = parsedCart.find((item) => +item.id === +id);
            const itemIndex = parsedCart.indexOf(itemObject);
            if (itemIndex === -1) {
                newCart = [...parsedCart, itemToAdd];
                itemToAdd.count = 1;
            }
            else {
                parsedCart.splice(itemIndex, 1);
                newCart = parsedCart;
                itemToAdd.count = 0;
            }
        } else {
            newCart = [itemToAdd];
            itemToAdd.count = 1;
        }

        localStorage.setItem('cart', JSON.stringify(newCart));
        this.$emit('update-counter');
      }
    },
}
</script>

<style scoped>
#goods {
  margin: 10px 40px 30px 0;
  display: flex;
  justify-content: space-between;
  flex-flow: row wrap;
}

.item-card {
  display: flex;
  flex-direction: column;
  flex: 170px;
  align-items: center;
}
</style>