<template>
    <button :style="{backgroundColor: backColor, borderColor: backColor, color: textColor}" @click="onclick" :class="`${this.id} button-cart`">{{text}}</button>
</template>

<script>
export default {
    name: 'ButtonCart',
    data() {
      return{
        text: 'Добавить в корзину',
        textColor: '#441761',
        backColor: '#fac136',
      }
    },
    props: {
        id: Number,
    },
    methods: {
        onclick(){
          this.$emit('add-to-cart', this.id);
          if (this.textColor === '#441761') {
            this.backColor = '#441761';
            this.textColor = '#fac136';
            this.text = 'Добавлено';
          }
          else {
            this.backColor = '#fac136';
            this.textColor = '#441761';
            this.text = 'Добавить в корзину';
          }
        },
    },
}
</script>

<style scoped>
.button-cart {
  margin-top: 10px;
  padding: 5px 15px;
  border-radius: 10px;
  border-width: 2px;
  border-style: solid;
  font-size: 13px;
  font-family: "Segoe UI Light", Tahoma, Geneva, Verdana, sans-serif, sans-serif;
  font-weight: bold;
  width: 150px;
  cursor: pointer;
}
/*.button-cart:hover {
  background-color: #8323ab;
  color: #fac136;
  border: 2px solid #8323ab;
}*/

.button-cart-clicked {
  margin-top: 10px;
  padding: 5px 15px;
  font-size: 13px;
  font-family: "Segoe UI Light", Tahoma, Geneva, Verdana, sans-serif, sans-serif;
  font-weight: bold;
  width: 150px;
  background-color: #441761;
  color: #fac136;
  border-radius: 10px;
  border: 2px solid #441761;
  cursor: pointer;
}
</style>