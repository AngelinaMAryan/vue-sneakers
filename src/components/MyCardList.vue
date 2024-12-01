<template>
  <div class="grid grid-cols-4 gap-5">
    <MyCard
      image-url="/sneakers/sneakers-1.jpg"
      title="Мужские Кроссовки Nike Blazer Mid Suede"
      :price="12500"
      :is-added="true"
      :is-favorite="true"
      :onclick-add="onclickAdd"
    />
    <MyCard image-url="/sneakers/sneakers-2.jpg" />
    <MyCard image-url="/sneakers/sneakers-3.jpg" />
    <MyCard image-url="/sneakers/sneakers-4.jpg" />
    <MyCard image-url="/sneakers/sneakers-5.jpg" />
    <MyCard image-url="/sneakers/sneakers-6.jpg" />
    <MyCard image-url="/sneakers/sneakers-7.jpg" />
    <MyCard image-url="/sneakers/sneakers-8.jpg" />
    <MyCard image-url="/sneakers/sneakers-9.jpg" />
    <MyCard image-url="/sneakers/sneakers-10.jpg" />
    <MyCard image-url="/sneakers/sneakers-11.jpg" />
    <MyCard image-url="/sneakers/sneakers-12.jpg" />
  </div>
</template>

<script setup>
import MyCard from './MyCard.vue'
const onclickAdd = () => {
  alert('Добавлено')
}
</script>
