<template>
  <button class="border_btn">
    <slot />
  </button>
</template>


<style scoped>
.border_btn{
  width: 100%;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--white-color);
  color: var(--red-color);
  border-radius: 15px;
  border: 1px solid var(--border-color);
  font-size: 14px;
  font-weight: 400;
  transition: 0.15s ease-in;
}
.border_btn:hover{
  opacity: 0.8;
}
</style>