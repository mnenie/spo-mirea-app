<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'

import 'swiper/css'
import 'swiper/css/effect-cards'

import { EffectCards } from 'swiper/modules'
import { useSlider } from '@/stores/slider.store'

const props = defineProps({
  users: Array
})

const modules = [EffectCards]

const sliderStore = useSlider()
</script>

<template>
  <swiper
    @swiper="sliderStore.onSwiper"
    :effect="'cards'"
    :grabCursor="true"
    :modules="modules"
    :loop="true"
    :centeredSlides="true"
  >
    <swiper-slide v-for="user in users" :key="user.id">
      <img :src="user.img" class="slide-image" />
      <div class="info_bar">
        <p>{{ user.name }}, {{ user.age }}</p>
      </div>
    </swiper-slide>
  </swiper>
</template>

<style scoped>
.swiper {
  max-width: 280px;
  width: 100% !important;
  height: 430px;
}

.swiper-slide {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 18px;
  font-size: 22px;
  font-weight: bold;
  color: #fff;
}

.swiper-slide:nth-child(1n) {
  background-color: rgb(206, 17, 17);
}

.swiper-slide:nth-child(2n) {
  background-color: rgb(0, 140, 255);
}

.swiper-slide:nth-child(3n) {
  background-color: rgb(10, 184, 111);
}

.swiper-slide:nth-child(4n) {
  background-color: rgb(211, 122, 7);
}

.slide-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.info_bar {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.5);
}

.info_bar p {
  margin: 0;
  color: #fff;
}
</style>
