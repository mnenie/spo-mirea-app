<script setup>
import Slider from '@/components/elements/home/Slider.vue';
import BackButton from '@/components/ui/BackButton.vue';
import FilterButton from '@/components/ui/FilterButton.vue';
import LikeButton from '@/components/ui/LikeButton.vue';
import DislikeButton from '@/components/ui/DislikeButton.vue';
</script>

<template>
  <div class = "top-pannel">
    <BackButton />
    <h1>Поиск</h1>
    <FilterButton />
  </div>
  <div class="slider">
    <Slider />
  </div>

  <div>
    <LikeButton />
    <DislikeButton />
  </div>
</template>

<style scoped>
.top-pannel {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.h1 {
  color: rgb(0, 0, 0);
  font-family: Zilla Slab;
  font-size: 22px;
  font-weight: 400;
  line-height: 26px;
  letter-spacing: 0px;
  text-align: center;
}

.slider {
  padding-top: 24px;
  width: 295px;
  height: 466px;
}
</style>