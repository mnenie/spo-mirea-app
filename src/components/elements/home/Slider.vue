<!-- <template>
  <swiper
    @swiper="sliderStore.onSwiper"
    :effect="'cards'"
    :grabCursor="true"
    :modules="modules"
    :loop="true"
    :centeredSlides="true"
  >
    <swiper-slide><img src="/Img/molchanov.png" class="slide-image" /></swiper-slide>
    <swiper-slide><img src="/Img/xolkin.png" class="slide-image" /></swiper-slide>
    <swiper-slide><img src="/Img/poziev.png" class="slide-image" /></swiper-slide>
    <swiper-slide><img src="/Img/eric.png" class="slide-image" /></swiper-slide>
    <swiper-slide><img src="/Img/peshkov.png" class="slide-image" /></swiper-slide>
    <swiper-slide><img src="/Img/slider-pic2.png" class="slide-image" /></swiper-slide>
    <swiper-slide><img src="/Img/dora.png" class="slide-image" /></swiper-slide>
    <swiper-slide><img src="/Img/nastya.png" class="slide-image" /></swiper-slide>
    <swiper-slide><img src="/Img/galina.png" class="slide-image" /></swiper-slide>

    
  </swiper>
</template> -->


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
    </swiper-slide>
  </swiper>
</template>

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
</style>
