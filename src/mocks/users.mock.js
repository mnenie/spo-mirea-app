import { ref } from 'vue'

export const users = ref([
  { id: 0, name: 'Иван', lastname: 'Молчанов', gender: 'Мужской', city: 'Москва' },
  { id: 1, name: 'Данила', lastname: 'Холкин', gender: 'Мужской', city: 'Москва' },
  { id: 2, name: 'Алексей', lastname: 'Позиев', gender: 'Мужской', city: 'Санкт-Петербург' },
  { id: 3, name: 'Эрик', lastname: 'Григорьев', gender: 'Мужской', city: 'Санкт-Петербург' },
  { id: 4, name: 'Александр', lastname: 'Пешков', gender: 'Мужской', city: 'Москва' },
  { id: 5, name: 'Рустам', lastname: 'Уралович', gender: 'Мужской', city: 'Москва' },
  { id: 6, name: 'Дарья', lastname: 'Щетинина', gender: 'Женский', city: 'Москва' },
  { id: 7, name: 'Анастасия', lastname: 'Мокшина', gender: 'Женский', city: 'Москва' },
  { id: 8, name: 'Александра', lastname: 'Матеюк', gender: 'Женский', city: 'Санкт-Петербург' },
  { id: 9, name: 'Галина', lastname: 'Рядом', gender: 'Женский', city: 'Санкт-Петербург' }
])
