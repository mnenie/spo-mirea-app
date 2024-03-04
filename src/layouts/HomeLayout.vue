<script setup>
import Sidebar from '@/components/ui/Sidebar.vue'
</script>
<template>
  <div style="position: relative" class="container">
    <slot />
    <Sidebar />
  </div>
</template>
