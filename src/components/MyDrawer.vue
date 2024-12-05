<template>
  <div class="fixed top-0 left-0 h-full w-full bg-black z-10 opacity-70"></div>
  <div class="bg-white w-96 h-full fixed top-0 right-0 z-20 p-8">
    <MyDrawerHead />

    <div v-if="!totalPrice || orderId" class="flex h-full items-center">
      <MyInfoBlock
        v-if="!totalPrice && !orderId"
        title="Корзина пустая"
        description="Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ."
        imageUrl="/package-icon.png"
      />
      <MyInfoBlock
        v-if="orderId"
        title="Заказ оформлен!"
        :description="`Ваш заказ #${orderId} скоро будет передан курьерской доставке`"
        imageUrl="/order-success-icon.png"
      />
    </div>

    <div v-else>
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
          :disabled="ButtonDisabled"
          class="mt-4 transition bg-lime-500 text-white py-3 rounded-xl w-full disabled:bg-slate-300 hover:bg-lime-600 active:bg-lime-700"
          @click="createOrder"
        >
          Оформить заказ
          <img class="inline-block ml-12" src="/arrow-next.svg" alt="arrow" />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, inject, computed } from 'vue'
import axios from 'axios'
import MyDrawerHead from './MyDrawerHead.vue'
import MyCartItemList from './MyCartItemList.vue'
import MyInfoBlock from './MyInfoBlock.vue'

const props = defineProps({
  totalPrice: Number,
  vatPrice: Number,
})
const { cart } = inject('cart')

const isCreating = ref(false)
const orderId = ref(null)

const createOrder = async () => {
  try {
    isCreating.value = true
    const { data } = await axios.post('https://8b687858304794bc.mokky.dev/orders', {
      items: cart.value,
      total: props.totalPrice.value,
    })
    cart.value = []
    orderId.value = data.id
  } catch (error) {
    console.log(error)
  } finally {
    isCreating.value = false
  }
}
const cartIsEmpty = computed(() => cart.value.length === 0)

const ButtonDisabled = computed(() => isCreating.value || cartIsEmpty.value)
</script>
