<template>
  <button class="red_btn">
    <slot />
  </button>
</template>
 

<style scoped>
.red_btn{
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--red-color);
  color: var(--white-color);
  border-radius: 15px;
  border: 1px solid var(--red-color);
  font-size: 14px;
  font-weight: 400;
  transition: 0.15s ease-in;
}
.red_btn:hover{
  background: var(--white-color);
  color: var(--red-color);
}
</style>