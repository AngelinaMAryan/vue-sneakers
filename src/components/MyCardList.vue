<template>
  <div class="grid grid-cols-4 gap-5" v-auto-animate>
    <MyCard
      v-for="item in items"
      :key="item.id"
      :id="item.id"
      :imageUrl="item.imageUrl"
      :title="item.title"
      :price="item.price"
      :onclick-add="() => emit('addToCart', item)"
      :onclick-favorite="() => emit('addToFavorite', item)"
      :isFavorite="item.isFavorite"
      :isAdded="item.isAdded"
    />
  </div>
</template>

<script setup>
import MyCard from './MyCard.vue'
defineProps({
  items: Array,
})

const emit = defineEmits(['addToFavorite', 'addToCart'])
</script>
