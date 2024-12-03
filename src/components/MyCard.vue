<template>
  <div
    class="relative bg-white border border-slate-100 rounded-3xl p-8 cursor-pointer hover:-translate-y-2 hover:shadow-xl transition"
  >
    <img
      @click="onclickFavorite"
      :src="isFavorite ? '/like-2.svg' : '/like-1.svg'"
      alt="addlike"
      class="absolute top-8 left-8"
    />
    <img :src="imageUrl" alt="sneaker" />
    <p class="mt-2">{{ title }}</p>

    <div class="flex justify-between mt-5">
      <div class="flex flex-col">
        <span class="text-slate-400">Цена:</span>
        <b>{{ price }} ₽</b>
      </div>
      <img @click="onclickAdd" :src="isAdded ? '/checked.svg' : '/plus.svg'" alt="addshoot" />
    </div>
  </div>
</template>

<script setup>
//import { inject } from 'vue'
/*const props = */ defineProps({
  id: Number,
  imageUrl: String,
  title: String,
  price: Number,
  isFavorite: Boolean,
  isAdded: Boolean,
  onclickFavorite: Function,
  onclickAdd: Function,
})

/*const addToFavorite = inject('addToFavorite')
const onClickFavorite = () => {
  const obj = {
    ...props,
    parentId: props.id,
  }

  addToFavorite(obj)
}*/
</script>
