<template>
    <div>
        <div :key="item.id" v-for="item in items">
            <cart-item-line @cart-minus="$emit('cart-minus')" :item="item"></cart-item-line>    
        </div>
    </div>
</template>

<script>
import CartItemLine from './CartItemLine'

export default {
    name: 'CartItemLines',
    data() {
        return {
            items: [],
        }
    },
    created() {
        this.items = JSON.parse(localStorage.getItem('cart'));
    },
    components: {
        CartItemLine,
    }
}
</script>
