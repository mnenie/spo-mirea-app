<script setup>
import BackButton from '@/components/ui/BackButton.vue';
import IAmRadioButtons from '@/components/elements/iam/IAmRadioButtons.vue';
import { HOME_ROUTE, PROFILE_ROUTE } from '@/utils/consts';
</script>

<template>
    <div class="parent" style="padding: 30px 0 32px 0;">
      <div class="top_part">
        <BackButton @click="$router.push(PROFILE_ROUTE)" class="btn" />
        <h1 class="iam-title">Выберите пол</h1>
        <IAmRadioButtons />
      </div>
      <RedButton @click= "$router.push(HOME_ROUTE)">Продолжить</RedButton>
    </div>
</template>

<style scoped>
.parent{
  display: flex;
  flex-direction: column;
  height: 100dvh;
  justify-content: space-between;
}
.top_part{
  display: flex;
  flex-direction: column;
}
.btn{
  margin-bottom: 65px;
}
.iam-title {
  font-weight: 400;
  margin-bottom: 86px;
}
</style>
