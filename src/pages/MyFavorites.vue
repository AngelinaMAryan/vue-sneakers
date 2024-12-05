<template>
  <h2 class="text-3xl font-bold mb-8">Мои закладки</h2>
  <MyCardList :items="favorites" is-favorites />
</template>

<script setup>
import { onMounted, ref } from 'vue'
import axios from 'axios'

import MyCardList from '../components/MyCardList.vue'

const favorites = ref([])

onMounted(async () => {
  try {
    const { data } = await axios.get(
      'https://8b687858304794bc.mokky.dev/favorites?_relations=items',
    )
    favorites.value = data.map((obj) => obj.item)
  } catch (error) {
    console.log(error)
  }
})
</script>
