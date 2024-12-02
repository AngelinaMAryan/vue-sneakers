<template>
  <!-- <MyDrawer /> -->
  <div class="bg-white w-4/5 m-auto rounded-xl shadow-xl mt-14">
    <MyHeader />
    <div class="p-10">
      <div class="flex justify-between items-center">
        <h2 class="text-3xl font-bold mb-8">Все кроссовки</h2>

        <div class="flex items-center gap-4">
          <select
            @change="onChangeSelect"
            class="border rounded-md py-2 px-3 outline-none"
            name=""
            id=""
          >
            <option value="name">По названию</option>
            <option value="price">По цене (дешевые)</option>
            <option value="-price">По цене (дорогие)</option>
          </select>

          <div class="relative">
            <img src="/search.svg" alt="search" class="absolute left-3 top-3" />
            <input
              placeholder="Поиск..."
              class="border rounded-md pl-11 pr-4 py-2 outline-none focus-within:border-gray-400"
              @change="onchangeSearch"
            />
          </div>
        </div>
      </div>

      <div class="mt-10"><MyCardList :items="items" /></div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, watch, reactive } from 'vue'
import axios from 'axios'

import MyHeader from './components/MyHeader.vue'
import MyCardList from './components/MyCardList.vue'

// import MyDrawer from './components/MyDrawer.vue'

const items = ref([])

const filters = reactive({
  sortBy: '',
  searchQuery: '',
})

const onChangeSelect = (event) => {
  filters.sortBy = event.target.value
}

const onchangeSearch = (event) => {
  filters.searchQuery = event.target.value
}

onMounted(async () => {
  try {
    const { data } = await axios.get('https://8b687858304794bc.mokky.dev/items')
    items.value = data
  } catch (error) {
    console.log(error)
  }
})
watch(
  filters,
  async () => {
    try {
      const { data } = await axios.get(
        'https://8b687858304794bc.mokky.dev/items?sortBy=' + filters.sortBy,
      )
      items.value = data
    } catch (error) {
      console.log(error)
    }
  },
  filters,
  async () => {
    try {
      const { data } = await axios.get(
        'https://8b687858304794bc.mokky.dev/items?q=' + filters.searchQuery,
      )
      items.value = data
    } catch (error) {
      console.log(error)
    }
  },
)
</script>

<style></style>
