<template>
  <div class="fixed top-0 left-0 h-full w-full bg-black z-10 opacity-70"></div>
  <div class="bg-white w-96 h-full fixed top-0 right-0 z-20 p-8">
    <MyDrawerHead />
    <MyCartItemList />

    <div class="flex flex-col gap-4 mt-7">
      <div class="flex gap-2">
        <span>Итого:</span>
        <div class="flex-1 border-b border-dashed"></div>
        <b>{{ totalPrice }} ₽</b>
      </div>

      <div class="flex gap-2">
        <span>Налог 5%</span>
        <div class="flex-1 border-b border-dashed"></div>
        <b>{{ vatPrice }} ₽</b>
      </div>
      <button
        disabled=""
        class="mt-4 transition bg-lime-500 text-white py-3 rounded-xl w-full disabled:bg-slate-300 hover:bg-lime-600 active:bg-lime-700"
      >
        Оформить заказ
        <img class="inline-block ml-12" src="/arrow-next.svg" alt="arrow" />
      </button>
    </div>
  </div>
</template>

<script setup>
import MyDrawerHead from './MyDrawerHead.vue'
import MyCartItemList from './MyCartItemList.vue'

defineProps({
  totalPrice: Number,
  vatPrice: Number,
})
</script>
