<template>
    <div>
        <div :key="item.id" v-for="item in items">
            <cart-item-line @cart-minus="$emit('cart-minus', item.id)" @cart-plus="$emit('cart-plus', item.id)" :item="item"></cart-item-line>    
        </div>
    </div>
</template>

<script>
import CartItemLine from './CartItemLine'

export default {
    name: 'CartItemLines',
    props: {
        items: Array,
    },
    components: {
        CartItemLine,
    },
}
</script>
