<template>
  <div class="profile">
    <div class="profile-form">
      <h2 class="profile-title">Ваш профиль</h2>
      <div class="profile-picture">
        <img v-if="imageUrl" :src="imageUrl" alt="Profile Image" class="profile-image" />
        <img
          v-else
          :src="defaultImage"
          alt="Default Profile Image"
          class="default-profile-image"
          style="width: 100px; height: auto"
        />
        <label for="fileInput" class="file-input-label">
          <img :src="uploadImage" alt="" />
          <input type="file" id="fileInput" @change="handleFileUpload" style="display: none" />
        </label>
      </div>
      <div class="profile-details">
        <label for="firstName">Имя:</label>
        <DefaultInput
          type="text"
          v-model="firstName"
          @input="updateFirstName"
          :placeholder="'Введите своё имя...'"
        />
        <span v-if="errors.firstName" style="color: var(--red-color); font-size: 10px">{{
          errors.firstName
        }}</span>
        <br />
        <label for="lastName">Фамилия:</label>
        <DefaultInput
          type="text"
          v-model="lastName"
          :placeholder="'Введите свою фамилию...'"
          @input="updateLastName"
        />
        <span v-if="errors.lastName" style="color: var(--red-color); font-size: 10px">{{
          errors.lastName
        }}</span>

        <datepicker
          @update:modelValue="updateDate"
          v-model="date"
          placeholder="Введите свою дату рождения..."
          class="data-picker"
          :iconColor="'var(--red-color)'"
        ></datepicker>
      </div>
    </div>

    <RedButton @click="onSubmit">Подтвердить</RedButton>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Datepicker from 'vuejs3-datepicker'
import { useField, useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import * as zod from 'zod'
import { useRouter } from 'vue-router'
import { IAM_ROUTE } from '@/utils/consts.js'

const imageUrl = ref(null)
const date = ref(new Date())

const defaultImage = '../Img/default-profile-image.jpg'
const uploadImage = '../Img/camera.png'

// Обработчик загрузки изображения
const handleFileUpload = (event) => {
  const file = event.target.files[0]
  imageUrl.value = URL.createObjectURL(file)
}

const updateFirstName = (event) => {
  firstName.value = event.target.value
  console.log(firstName.value, 'Внутрии функции')
}

// Обновление значения фамилии
const updateLastName = (event) => {
  lastName.value = event.target.value
}

const updateDate = (e) => {
  date.value = e
  console.log(e)
}
const validationSchema = toTypedSchema(
  zod.object({
    firstName: zod
      .string({ required_error: '*Поле firstname обязательно для заполнения' })
      .nonempty('*Поле firstname не должно быть пустым'),
    lastName: zod
      .string({ required_error: '*Поле lastname обязательно для заполнения' })
      .nonempty('*Поле lastname не должно быть пустым'),

    date: zod
      .string({ required_error: '*Поле date обязательно для заполнения' })
      .nonempty('*Поле date не должно быть пустым')
  })
)

const { handleSubmit, errors } = useForm({
  validationSchema
})

const { value: firstName } = useField('firstName')
const { value: lastName } = useField('lastname')

const router = useRouter()

const onSubmit = handleSubmit(async (values) => {
  router.push(IAM_ROUTE)
})

console.log(firstName.value)
console.log(lastName.value)
</script>

<style scoped>
.profile-title {
  margin-bottom: 20px;
  align-self: flex-start;
  font-weight: 400;
  font-size: 30px;
  margin-bottom: 78px;
}
.profile {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100dvh;
}
.profile-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}
.data-picker {
  width: 100% !important;
  margin-top: 30px;
}

.profile-picture {
  display: flex;
  flex-direction: column;
  margin-right: 20px;
  position: relative;
  margin-bottom: 50px;
}

.default-profile-image {
  border-radius: 25%;
  width: 100px;
  height: auto;
}
.profile-image {
  border-radius: 25%;
  width: 100px;
  height: auto;
}

.profile-details {
  margin-top: 20px;

  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 100px;
}
.file-input-label {
  text-align: center;
  position: absolute;
  bottom: -10px;
  right: -10px;
}
.Iam-btn {
  margin-top: 20px;
  color: white;
  background: rgb(221, 1, 1);
  border-radius: 10px;
  border: none;
  width: 175px;
  height: 40px;
  transition: all 0.5s ease;
}
.Iam-btn:hover {
  background: rgb(161, 0, 0);
}
</style>
