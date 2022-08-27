<template>
<div class="main-part">
  <h4 class="chapter">{{item.name}}</h4>
    <div class="item-flex">
      <img class="item-image"
      :src="imgSrc">
      <div class="describe-flex">
        <div class="description">{{descr}}</div>
        <div class="description" v-if="item.brand">Бренд: {{item.brand}}</div>
        <div class="price-box">
          <div class="descr-item-price">{{item.price}}</div>
        </div>
        <button-cart
          :item="item"
          :btnClass="btnClass"
          :isInCart="isInCart"
          @is-in-cart="isInCart = !isInCart"
          @add-to-cart="addToCart"
          @update-counter="$emit('update-counter')"
        ></button-cart>
      </div>
    </div>
</div>
</template>

<script>
import {
  getCart, setCart, getVisited, setVisited,
} from '../utils/functions';
import { allItems, descriptions } from '../utils/items';
import ButtonCart from '../components/ButtonCart.vue';

export default {
  name: 'ItemView',
  data() {
    return {
      items: allItems,
      item: undefined,
      descr: '',
      isInCart: false,
    };
  },
  components: {
    ButtonCart,
  },
  created() {
    const { id } = this.$route.params;
    this.item = this.items.find((item) => item.id === +id)
    || this.items.find((item) => item.id === 0);
    const random = Math.floor(Math.random() * 4);
    this.descr = descriptions[random];
  },
  mounted() {
    const visited = getVisited();
    let newVisited = visited;
    if (visited) {
      const itemIndex = visited.find((item) => (item.id === this.item.id));
      if (typeof itemIndex !== 'undefined') {
        newVisited = visited.filter((item) => item.id !== this.item.id);
      }
      newVisited = [...newVisited, this.item];
      if (newVisited.length > 5) {
        newVisited.shift();
      }
    } else {
      newVisited = [this.item];
    }
    setVisited(newVisited);
  },
  computed: {
    btnClass() {
      return {
        'item-button-cart': !this.isInCart,
        'item-button-cart-clicked': this.isInCart,
      };
    },
    imgSrc() {
      return `https://source.unsplash.com/random/500x500?sig=${this.item.id + 1}`;
    },
  },
  methods: {
    addToCart(id) {
      const itemToAdd = this.items[id];
      const cart = getCart();

      let newCart;
      if (cart) {
        const itemObject = cart.find((item) => item.id === id);
        if (typeof itemObject === 'undefined') {
          newCart = [...cart, itemToAdd];
          itemToAdd.count = 1;
        } else {
          newCart = cart.filter((item) => item.id !== id);
          itemToAdd.count = 0;
        }
      } else {
        newCart = [itemToAdd];
        itemToAdd.count = 1;
      }

      setCart(newCart);
      this.$emit('update-counter');
    },
  },
};
</script>

<style>
.item-flex {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
}

.item-image {
  display: flex;
  object-fit: contain;
  width: 50%;
  min-width: 350px;
  margin-top: 10px;
  border-radius: 7px;
}

.describe-flex {
  display: flex;
  flex-flow: column wrap;
  flex: 50%;
}

.description {
  margin: 10px;
  font-family: "Segoe UI Light", Tahoma, Geneva, Verdana, sans-serif, sans-serif;
  font-weight: bold;
  max-height: 65%;
  overflow: hidden;
  text-overflow: ellipsis;
}

.price-box {
  border-radius: 7px;
  border: 2px solid white;
  margin-left: 10px;
  margin-top: 10px;
}

.descr-item-price {
  font-family: Agency FB;
  font-weight: bold;
  font-size: 40pt;
}

.item-button-cart {
  margin: 10px 0 0 10px;
  padding: 5px 15px;
  background-color: #fac136;
  color: #441761;
  border-radius: 10px;
  border: 2px solid #fac136;
  font-size: 20px;
  font-family: "Segoe UI Light", Tahoma, Geneva, Verdana, sans-serif, sans-serif;
  font-weight: bold;
  width: 300px;
  cursor: pointer;
}
.item-button-cart:hover {
  background-color: #8323ab;
  color: #fac136;
  border: 2px solid #8323ab;
}

.item-button-cart-clicked {
  margin: 10px 0 0 10px;
  padding: 5px 15px;
  font-size: 20px;
  font-family: "Segoe UI Light", Tahoma, Geneva, Verdana, sans-serif, sans-serif;
  font-weight: bold;
  width: 300px;
  background-color: #441761;
  color: #fac136;
  border-radius: 10px;
  border: 2px solid #441761;
  cursor: pointer;
}

h4.chapter{
  margin: 0;
}
</style>
