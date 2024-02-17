<template>
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
      <input type="text" id="firstName" v-model="firstName" @input="updateFirstName" />
      <br />
      <label for="lastName">Фамилия:</label>
      <input type="text" id="lastName" v-model="lastName" @input="updateLastName" />
    </div>
    <button class="Iam-btn">Подтвердить</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import '@fortawesome/fontawesome-free/css/all.css'
import RedButton from '../ui/RedButton.vue'

const imageUrl = ref(null)
const firstName = ref('')
const lastName = ref('')

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
  console.log(lastName.value, 'Внутрии функции')
}

console.log(firstName.value)
console.log(lastName.value)
</script>

<style scoped>
.profile-title {
  margin-bottom: 20px;
}
.profile-form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.profile-picture {
  display: flex;
  flex-direction: column;
  margin-right: 20px;
  position: relative;
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
/* Добавленные стили для рамок инпутов */
.profile-details input[type='text'] {
  width: 100%;
  height: 30px; /* Высота инпута */
  border-radius: 10px; /* Слегка округленные углы */
  border: 1px solid #ccc; /* Толщина и цвет рамки */
  padding: 8px; /* Отступ внутри инпута */
  margin-bottom: 10px; /* Отступ между инпутами */
}
.profile-details {
  margin-top: 20px;
  font-family: Arial, sans-serif;
  display: flex;
  flex-direction: column;
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
