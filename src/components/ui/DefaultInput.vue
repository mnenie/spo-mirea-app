<script setup>
const model = defineModel()
defineProps({
  placeholder: String
})
</script>

<template>
  <input class="input" v-model="model" :placeholder="placeholder" />
</template>

<style scoped>
.input{
  width: 100%;
  padding: 15px 22px;
  border-radius: 15px;
  border: 1px solid var(--border-color);
  color: var(--text-color);
  outline: none;
  font-size: 12px;
}
.input:hover{
  border: 1px solid var(--red-color);
}
.input:focus{
  border: 1px solid var(--red-color);
}
</style>
