<template>
  <div class="cart-main-part">
    <div class="cart-item-part">
      <div class="chapter">Корзина
        <a @click="onClick" class="clear">Очистить корзину</a>
      </div>
      <div class="empty-cart" v-if="empty">Корзина пуста</div>
      <div v-else>
        <div :key="item.id" v-for="item in cartItems">
          <cart-item-line
            @cart-minus="cartMinus"
            @cart-plus="cartPlus"
            :item="item"
          ></cart-item-line>
        </div>
      </div>
    </div>
    <div class="cart-total-main-part">
      <div class="cart-total">
        <div class="chapter">Итого: </div>
        <div class="count-all">{{countAllCase}}</div>
        <div class="cost-total">{{totalCost}}</div>
        <button :class="btnClass" :disabled="isDisabled">Оформить</button>
      </div>
    </div>
    <div class="visited-main-part">
      <div class="chapter">Недавно вы посещали...</div>
      <div class="visited-goods">
        <div :key="item.id" v-for="item in visitedItems">
          <item-card
            @add-to-cart="addToCart"
            @update-counter="$emit('update-counter')"
            :item="item"
          ></item-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CartItemLine from '../components/CartItemLine.vue';
import ItemCard from '../components/ItemCard.vue';
import { allItems } from '../utils/items';
import {
  setCart, getCart, getVisited, cartEmpty,
} from '../utils/functions';

export default {
  name: 'CartView',
  data() {
    return {
      countAll: 0,
      totalCost: 0,
      items: allItems,
      cartItems: [],
      visitedItems: [],
      empty: false,
    };
  },
  mounted() {
    this.cartItems = getCart();
    this.visitedItems = getVisited();
    this.findTotalCost();
    this.empty = cartEmpty(this.cartItems);
  },
  components: {
    CartItemLine,
    ItemCard,
  },
  computed: {
    btnClass() {
      return this.countAll > 0 ? 'button-order' : 'zero-items';
    },
    countAllCase() {
      return this.countAll + this.wordCase();
    },
    isDisabled() {
      return this.countAll <= 0;
    },
  },
  methods: {
    wordCase() {
      if (this.countAll % 100 < 20 && this.countAll % 100 > 10) {
        return ' товаров';
      }
      switch (this.countAll % 10) {
        case 1:
          return ' товар';
        case 2:
        case 3:
        case 4:
          return ' товара';
        default:
          return ' товаров';
      }
    },
    findTotalCost() {
      this.countAll = 0;
      this.totalCost = 0;
      if (this.cartItems) {
        this.cartItems.forEach((item) => {
          this.countAll += item.count;
          this.totalCost += item.count * item.price;
        });
      }
    },
    cartMinus(id) {
      this.cartItems = getCart();
      this.countAll = 0;
      this.totalCost = 0;
      this.findTotalCost();
      const itemNeed = this.cartItems.find((item) => item.id === id);
      if (itemNeed.count > 0) {
        itemNeed.count -= 1;
        this.totalCost -= itemNeed.price;
        this.countAll -= 1;
        setCart(this.cartItems);
      }
    },
    cartPlus(id) {
      this.cartItems = getCart();
      this.countAll = 0;
      this.totalCost = 0;
      this.findTotalCost();
      const itemNeed = this.cartItems.find((item) => item.id === id);
      itemNeed.count += 1;
      this.totalCost += itemNeed.price;
      this.countAll += 1;
      setCart(this.cartItems);
    },
    onClick() {
      if (window.confirm('Очистить корзину?')) {
        setCart([]);
        this.cartItems = [];
        this.empty = true;
        this.countAll = 0;
        this.totalCost = 0;
        this.$emit('update-counter');
        window.location.reload();
      }
    },
    addToCart(id) {
      const itemToAdd = this.items[id];
      this.cartItems = getCart();

      let newCart;
      if (this.cartItems) {
        const itemObject = this.cartItems.find((item) => item.id === id);
        if (typeof itemObject === 'undefined') {
          newCart = [...this.cartItems, itemToAdd];
          itemToAdd.count = 1;
        } else {
          newCart = this.cartItems.filter((item) => item.id !== id);
          itemToAdd.count = 0;
        }
      } else {
        newCart = [itemToAdd];
        itemToAdd.count = 1;
      }

      this.cartItems = newCart;
      setCart(newCart);
      this.findTotalCost();
      this.empty = this.countAll === 0;

      this.$emit('update-counter');
    },
  },
};
</script>

<style>
.cart-main-part {
  display: flex;
  flex-flow: row wrap;
  margin: 0 20px 0 10px;
}

.chapter {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: flex-end;
}

.clear {
  font-family: "Segoe UI Light", Tahoma, Geneva, Verdana, sans-serif, sans-serif;
  font-weight: bold;
  color: black;
  font-size: 15px;
  cursor: pointer;
}

.clear:hover {
  color: #505050;
}

.cart-item-part {
  display: flex;
  flex-flow: column wrap;
  justify-content: space-between;
  background-color: white;
  border-radius: 20px;
  border: 2px solid white;
  padding: 10px 10px 10px 20px;
  margin: 0 20px 5px 20px;
  flex: 60%;
  height: fit-content;
}

.empty-cart {
  display: flex;
  width: 100%;
  height: 500px;
  background-color: white;
  align-items: center;
  justify-content: center;
  font-family: "Segoe UI Light", Tahoma, Geneva, Verdana, sans-serif, sans-serif;
  font-weight: bold;
  font-size: 15pt;
}

.cart-total-main-part {
  display: flex;
  flex-direction: column;
  flex: 200px;
  height: 200px;
}

.cart-total {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: white;
  border-radius: 20px;
  border: 2px solid white;
  padding: 10px 10px 10px 20px;
  margin: 0 20px 5px 20px;
  flex: 100px;
}

.count-all {
  display: flex;
  font-family: "Segoe UI Light", Tahoma, Geneva, Verdana, sans-serif, sans-serif;
  font-weight: bold;
  font-size: 13pt;
  color: #441761;
  margin: 14px 0;
}

.cost-total {
  display: flex;
  font-family: Agency FB;
  font-weight: bold;
  color: black;
  font-size: 35pt;
  justify-content: flex-end;
}

.button-order {
  margin-top: 10px;
  padding: 5px 15px;
  background-color: #fac136;
  color: #441761;
  border-radius: 10px;
  border: 2px solid #fac136;
  font-size: 15px;
  font-family: "Segoe UI Light", Tahoma, Geneva, Verdana, sans-serif, sans-serif;
  font-weight: bold;
  cursor: pointer;
}
.button-order:hover {
  background-color: #8323ab;
  color: #fac136;
  border: 2px solid #8323ab;
}
.button-order:active {
  background-color: #441761;
  color: #fac136;
  border: 2px solid #441761;
}

.zero-items {
  margin-top: 10px;
  padding: 5px 15px;
  background-color: #fcdc8f;
  color: grey;
  border-radius: 10px;
  border: 2px solid #fcdc8f;
  font-size: 15px;
  font-family: "Segoe UI Light", Tahoma, Geneva, Verdana, sans-serif, sans-serif;
  font-weight: bold;
}

.visited-main-part {
  display: flex;
  flex-flow: column wrap;
  justify-content: space-between;
  background-color: white;
  border-radius: 20px;
  border: 2px solid white;
  padding: 10px 10px 10px 20px;
  height: fit-content;
  width: 100%;
  margin: 100px 20px 5px 20px;
}

.visited-goods {
  margin: 10px 40px 30px 0;
  display: flex;
  justify-content: space-between;
  flex-flow: row-reverse wrap;
}
</style>
