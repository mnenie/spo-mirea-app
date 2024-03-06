<script setup>
import Slider from '@/components/elements/home/Slider.vue'
import BackButton from '@/components/ui/BackButton.vue'
import Filter from '@/components/elements/home/Filter.vue'
import LikeButton from '@/components/ui/LikeButton.vue'
import DislikeButton from '@/components/ui/DislikeButton.vue'
import {IAM_ROUTE} from '@/utils/consts';
import { useSlider } from '@/stores/slider.store'
import { useUsers } from '@/stores/user.store'
const userStore = useUsers()

const sliderStore = useSlider()
</script>

<template>
  <div style="display: flex; align-items: center; flex-direction: column; overflow-x: hidden">
    <div class="top-pannel">
      <BackButton @click="$router.push(IAM_ROUTE)" class="btn" />
      <h1>Поиск</h1>
      <Filter />
    </div>

    <div class="slider">
      <Slider :users="userStore.usersArr"/>
    </div>

    <div class="bottom-pannel">
      <DislikeButton @click="sliderStore.prevSlide" />
      <LikeButton @click="sliderStore.nextSlide" />
    </div>
  </div>
</template>

<style scoped>
.top-pannel {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 44px;
  width: 100%;
}

h1 {
  color: rgb(0, 0, 0);
  font-family: Zilla Slab;
  font-size: 22px;
  font-weight: 400;
  line-height: 26px;
  letter-spacing: 0px;
  text-align: center;
}

.slider {
  padding-top: 40px;
  width: 100%;
}

.bottom-pannel {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 40px 0 100px 0;
  width: 100%;
}
</style>
