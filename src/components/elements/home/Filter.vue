<template>
  <n-popselect v-model:value="value" multiple :options="options" trigger="click" size="small">
    <FilterButton> </FilterButton>
  </n-popselect>
</template>

<script setup>
import { ref, watch } from 'vue'
import FilterButton from '@/components/ui/FilterButton.vue'
import { useUsers } from '@/stores/user.store';

const value = ref([])
const options = ref([
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
])

const userStore = useUsers()

watch(value, () => {
  const filters = {
    gender: value.value.includes('Мужской') && value.value.includes('Женский') ? null :
            value.value.includes('Мужской') ? 'Мужской' :
            value.value.includes('Женский') ? 'Женский' : null,
    city: value.value.includes('Москва') && value.value.includes('Санкт-Петербург') ? null :
            value.value.includes('Москва') ? 'Москва' :
            value.value.includes('Санкт-Петербург') ? 'Санкт-Петербург' : null,
  };
  userStore.filterUsers(filters);
})
</script>
