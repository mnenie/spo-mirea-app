<template>
  <n-popselect v-model:value="value" multiple :options="options" trigger="click" size="small">
    <FilterButton> </FilterButton>
  </n-popselect>
</template>

<script setup>
import { ref } from 'vue'
import FilterButton from '@/components/ui/FilterButton.vue'

const props = defineProps({
  users: Array
})
const value = ref(null)
const options = [
  {
    label: 'Какой пол Вы ищите',
    value: 'Какой пол Вы ищите',
    disabled: true
  },
  {
    label: 'Мужской',
    value: 'Мужской'
  },
  {
    label: 'Женский',
    value: 'Женский'
  },
  {
    label: 'В каком городе будем искать',
    value: 'В каком городе будем искать',
    disabled: true
  },
  {
    label: 'Москва',
    value: 'Москва'
  },
  {
    label: 'Санкт-Петербург',
    value: 'Санкт-Петербург'
  }
]
</script>
