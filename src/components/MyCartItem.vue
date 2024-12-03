<template>
  <div class="flex items-center gap-4 border border-slate-100 p-4 rounded-xl">
    <img class="w-16 h-16" :src="imageUrl" :alt="title" />

    <div class="flex flex-col flex-1">
      <p>{{ title }}</p>

      <div class="flex justify-between mt-2">
        <b class="flex-1">{{ price }} руб.</b>
        <img
          class="opacity-40 cursor-pointer hover:opacity-100 transition"
          src="/close.svg"
          alt="close"
          @click="emit('onClickRemove')"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
const emit = defineEmits(['onClickRemove'])
defineProps({
  id: Number,
  imageUrl: String,
  title: String,
  price: Number,
})
</script>
