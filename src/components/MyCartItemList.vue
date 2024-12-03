<template>
  <div class="flex flex-col flex-1 gap-4">
    <MyCartItem
      v-for="item in cart"
      :key="item.id"
      :title="item.title"
      :imageUrl="item.imageUrl"
      :price="item.price"
      @on-click-remove="() => removeFromCart(item)"
    />
  </div>
</template>

<script setup>
import { inject } from 'vue'
import MyCartItem from './MyCartItem.vue'

const { cart, removeFromCart } = inject('cart')
</script>
