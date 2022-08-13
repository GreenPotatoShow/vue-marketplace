<template>
    <div class="cart-main-part">
        <div class="cart-item-part">
            <div class="chapter">Корзина</div>
            <div class="empty-cart" v-if="cartEmpty()">Корзина пуста</div>
            <cart-item-lines :items="items" @cart-minus="cartMinus" @cart-plus="cartPlus"></cart-item-lines>
        </div>
        <div class="cart-total-main-part">
            <div class="cart-total">
                <div class="chapter">Итого: </div>
                <div class="count-all">{{countAll + wordCase()}}</div>
                <div class="cost-total">{{totalCost}}</div>
                <button :class="{'button-order': countAll > 0, 'zero-items': countAll <= 0}" :disabled="countAll <= 0">Оформить</button>
            </div>
        </div>
    </div>    
</template>

<script>
import CartItemLines from './CartItemLines'

export default {
    name: 'CartMainPart',
    data() {
        return {
            countAll: 0,
            totalCost: 0,
            items: [],
        }
    },
    props: {
        text: String,
        cartEmpty: Function,
    },
    mounted() {
        this.items = JSON.parse(localStorage.getItem('cart'));
        if (this.items) {
          this.items.forEach((item) => {
          this.countAll += item.count;
          this.totalCost += item.count*item.price;
          });
        }
    },
    components: {
        CartItemLines,
    },
    methods: {
        wordCase() {
            if (this.countAll % 100 < 20 && this.countAll % 100 > 10) {
                return ' товаров';
            }
            else if (this.countAll % 10 === 1) { return ' товар';}
            else if (this.countAll % 10 === 2 || this.countAll % 10 === 3 || this.countAll % 10 === 4) {
                return ' товара';
            }
            else {return ' товаров';}
        },
        cartMinus(id){
          this.items = JSON.parse(localStorage.getItem('cart'));
          this.countAll = 0;
          this.totalCost = 0;
          if (this.items) {
            this.items.forEach((item) => {
            this.countAll += item.count;
            this.totalCost += item.count*item.price;
            });
          }
          const itemNeed = this.items.find (item => item.id === id);
          if (itemNeed.count > 0){
            itemNeed.count -= 1;
            this.totalCost -= itemNeed.price;
            this.countAll -= 1;
            localStorage.setItem('cart', JSON.stringify(this.items));
          }
        },
        cartPlus(id){
          this.items = JSON.parse(localStorage.getItem('cart'));
          this.countAll = 0;
          this.totalCost = 0;
          if (this.items) {
            this.items.forEach((item) => {
            this.countAll += item.count;
            this.totalCost += item.count*item.price;
            });
          }
          const itemNeed = this.items.find (item => item.id === id);
          itemNeed.count += 1;
          this.totalCost += itemNeed.price;
          this.countAll += 1;
          localStorage.setItem('cart', JSON.stringify(this.items));
        }
    }
}
</script>

<style scoped>
.cart-main-part {
  display: flex;
  flex-flow: row wrap;
  margin: 0 20px 0 10px;
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
</style>