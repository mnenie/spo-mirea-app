import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useSlider = defineStore('slider', () => {
  const slider = ref()

  const onSwiper = (swiper) => {
    slider.value = swiper
  }

  const nextSlide = () => {
    return slider.value.slideNext()
  }

  const prevSlide = () => {
    slider.value.slidePrev()
  }

  return {
    slider,
    nextSlide,
    prevSlide,
    onSwiper
  }
})
