<script setup>
import BackButton from '@/components/ui/BackButton.vue'
import { useAuth } from '@/stores/auth.store';
import { PROFILE_ROUTE } from '@/utils/consts';
import { ref, onMounted, onBeforeUnmount, watchEffect } from 'vue'
import { useRouter } from 'vue-router';
import VOtpInput from 'vue3-otp-input'

const totalSeconds = ref(60)
const minutes = ref('01')
const seconds = ref('00')
const authStore = useAuth()
let timer

const code = ref('')

const startTimer = () => {
  timer = setInterval(() => {
    if (totalSeconds.value > 0) {
      totalSeconds.value--
      updateTime()
    } else {
      clearInterval(timer)
    }
  }, 1000)
}

const updateTime = () => {
  minutes.value = pad(parseInt(totalSeconds.value / 60))
  seconds.value = pad(totalSeconds.value % 60)
}

const pad = (val) => {
  return val < 10 ? '0' + val : val
}

const inputDigit = (digit) => {
  if (code.value.length < 4) {
    code.value += digit
  }
}

const deleteDigit = () => {
  code.value = code.value.slice(0, -1)
}

const onChange = (value) => {
  code.value = value
}

const router = useRouter()

const restartTimer = () => {
  router.push('/confirm/phone')
  totalSeconds.value = 60
  clearInterval(timer)
  startTimer()
}

onMounted(() => {
  startTimer()
})

onBeforeUnmount(() => {
  clearInterval(timer)
})


watchEffect(() => {
  if(code.value.split('').length === 6){
    authStore.verifyOtp(code)
    router.push(PROFILE_ROUTE)
  }
})
</script>

<template>
  <div class="code-main">
    <BackButton @click="router.push('/confirm/phone')" />
    <div class="code-timer">{{ minutes }}:{{ seconds }}</div>
    <p class="code-text">Введите код <br />подтверждения</p>
    <div class="input-div">
      <v-otp-input
        input-classes="otp-input"
        separator=""
        :num-inputs="6"
        :should-auto-focus="true"
        :is-input-num="true"
        :placeholder="['0', '0', '0', '0', '0', '0']"
        :value="code"
        @on-change="onChange"
        @on-complete="onComplete"
      />
    </div>
    <div class="buttons">
      <button @click="inputDigit(1)">1</button>
      <button @click="inputDigit(2)">2</button>
      <button @click="inputDigit(3)">3</button>
      <button @click="inputDigit(4)">4</button>
      <button @click="inputDigit(5)">5</button>
      <button @click="inputDigit(6)">6</button>
      <button @click="inputDigit(7)">7</button>
      <button @click="inputDigit(8)">8</button>
      <button @click="inputDigit(9)">9</button>
      <button class="zero-button" @click="inputDigit(0)">0</button>
      <button class="delete-button" @click="deleteDigit()">⌫</button>
    </div>
    <button class="re-code" @click="restartTimer" :disabled="totalSeconds.value > 0">
      Отправить заново
    </button>
  </div>
</template>

<style scoped>
.code-main {
  padding-top: 30px;
}
.code-timer {
  margin-top: 30px;
  font-size: 30px;
  margin-bottom: 30px;
}
.input-div {
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 30px;
}
.input-div v-otp-input {
  width: 100%;
}
.code-text {
  margin-bottom: 30px;
  font-size: 16px;
  opacity: 0.7;
}
.code-main {
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
}
.buttons {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  margin-top: 20px;
  margin-bottom: 50px;
}
.zero-button,
.delete-button,
.buttons button {
  width: 100%;
  height: 50px;
  font-size: 20px;
  background-color: transparent; /* Удаление фона для всех кнопок */
}
.buttons button {
  border: none; /* Добавление границы для всех кнопок */
}
.zero-button {
  grid-column: 2;
}
.delete-button {
  grid-column: 3;
}
.buttons button {
  width: 100%;
  height: 50px;
  font-size: 20px;
}
/* Применение стилей к дочерним элементам компонента VOtpInput */
::v-deep .otp-input {
  width: 30px;
  height: 30px;
  padding: 5px;
  margin: 0 10px;
  font-size: 20px;
  border-radius: 4px;
  border: none;
  text-align: center;
  border: 1px solid black;
  caret-color: transparent;
}
::v-deep .otp-input:focus {
  outline: none;
}

::v-deep .otp-input.is-complete {
  background-color: var(--red-color);
  color: white;
  border: none;
}
::v-deep input::placeholder {
  font-size: 15px;
  text-align: center;
  font-weight: 600;
}
.re-code {
  border: none;
  background: none;
  color: #e94057;
}
</style>
