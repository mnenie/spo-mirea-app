<template>
  <swiper
    @swiper="sliderStore.onSwiper"
    :effect="'cards'"
    :grabCursor="true"
    :modules="modules"
    :loop="true"
    :centeredSlides="true"
  >
    <swiper-slide><img src="/Img/slider-pic1.jpg" class="slide-image" /></swiper-slide>
    <swiper-slide><img src="/Img/slider-pic2.jpg" class="slide-image" /></swiper-slide>
    <swiper-slide><img src="/Img/slider-pic3.jpg" class="slide-image" /></swiper-slide>
    <swiper-slide><img src="/Img/slider-pic4.jpg" class="slide-image" /></swiper-slide>
    <swiper-slide><img src="/Img/slider-pic1.jpg" class="slide-image" /></swiper-slide>
    <swiper-slide><img src="/Img/slider-pic2.jpg" class="slide-image" /></swiper-slide>
    <swiper-slide><img src="/Img/slider-pic3.jpg" class="slide-image" /></swiper-slide>
    <swiper-slide><img src="/Img/slider-pic4.jpg" class="slide-image" /></swiper-slide>

    <!-- путь до public писать не надо /Img/* ты уже попадаешь в файл в папке Img -->
  </swiper>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'

import 'swiper/css'
import 'swiper/css/effect-cards'

import { EffectCards } from 'swiper/modules'
import { useSlider } from '@/stores/slider.store'
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
