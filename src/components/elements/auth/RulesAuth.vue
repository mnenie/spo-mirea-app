<script setup>
import helperRedirectTinder from '@/helpers/helperRedirectTinder'
const { redirect } = helperRedirectTinder()
</script>

<template>
  <div class="rules">
    <span @click="redirect" class="span">
      Правила пользования
    </span>
    <span @click="redirect" class="span">
      Политика конфиденциальности
    </span>
  </div>
</template>

<style scoped>
.rules {
  display: flex;
  flex-direction: column;
  gap: 13px;
  align-items: center;
}
.span{
  color: var(--red-color);
  font-weight: 400;
  font-size: 14px;
}
.span:hover{
  text-decoration: underline var(--red-color);
}
</style>