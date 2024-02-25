<template>
    <swiper
      :effect="'cards'"
      :grabCursor="true"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide><img src="/Img/slider-pic1.jpg" class="slide-image"></swiper-slide>
      <swiper-slide><img src="/Img/slider-pic2.jpg" class="slide-image"></swiper-slide>
      <swiper-slide><img src="/Img/slider-pic3.jpg" class="slide-image"></swiper-slide>
      <swiper-slide><img src="/Img/slider-pic4.jpg" class="slide-image"></swiper-slide>

      <!-- путь до public писать не надо /Img/* ты уже попадаешь в файл в папке Img -->
    </swiper>
  </template>
  
  <script>
    // Import Swiper Vue.js components
    
    import { Swiper, SwiperSlide } from 'swiper/vue';
  
    // Import Swiper styles
    import 'swiper/css';
  
    import 'swiper/css/effect-cards';
  
    import './style.css';
  
    // import required modules
    import { EffectCards } from 'swiper/modules';
  
    export default {
      components: {
        Swiper,
        SwiperSlide,
      },
      setup() {
        return {
          modules: [EffectCards],
        };
      },
    };
  </script>
  