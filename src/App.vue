<template>
  <!-- <MyDrawer /> -->
  <div class="bg-white w-4/5 m-auto rounded-xl shadow-xl mt-14">
    <MyHeader />
    <div class="p-10">
      <div class="flex justify-between items-center">
        <h2 class="text-3xl font-bold mb-8">Все кроссовки</h2>

        <div class="flex items-center gap-4">
          <select class="border rounded-md py-2 px-3 outline-none" name="" id="">
            <option value="">По названию</option>
            <option value="">По цене (дешевые)</option>
            <option value="">По цене (дорогие)</option>
          </select>

          <div class="relative">
            <img src="/search.svg" alt="search" class="absolute left-3 top-3" />
            <input
              placeholder="Поиск..."
              class="border rounded-md pl-11 pr-4 py-2 outline-none focus-within:border-gray-400"
            />
          </div>
        </div>
      </div>

      <MyCardList />
    </div>
  </div>
</template>

<script setup>
import MyHeader from './components/MyHeader.vue'
import MyCardList from './components/MyCardList.vue'
import MyDrawer from './components/MyDrawer.vue'
</script>

<style></style>
