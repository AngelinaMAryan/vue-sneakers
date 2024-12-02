<template>
  <div class="grid grid-cols-4 gap-5">
    <MyCard
      v-for="item in items"
      :key="item.id"
      :imageUrl="item.imageUrl"
      :title="item.title"
      :price="item.price"
      :onclick-add="onclickAdd"
    />
  </div>
</template>

<script setup>
import MyCard from './MyCard.vue'
defineProps({
  items: Array,
})

const onclickAdd = () => {
  alert('Добавлено в корзину')
}
</script>
