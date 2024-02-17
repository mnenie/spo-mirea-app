<script setup>
import { useAuth } from '@/stores/auth.store'
import { useRoute } from 'vue-router';
import { useField, useForm } from 'vee-validate';
import { toTypedSchema } from '@vee-validate/zod';
import * as zod from 'zod';

const route = useRoute()
const auth = useAuth()

const validationSchema = toTypedSchema(
  zod.object({
    email: zod.string({required_error: "*Поле email обязательно для заполнения"}).nonempty('*Поле email не должно быть пустым').email({ message: '*Некорректный адрес email' }),
    password: zod.string({required_error: "*Поле password обязательно для заполнения"}).nonempty('*Поле password не должно быть пустым').min(8, { message: '*Пароль должен быть не менее 8 символов' }),
  })
);

const { handleSubmit, errors } = useForm({
  validationSchema,
});

const { value: email } = useField('email');
const { value: password } = useField('password');

const onSubmit = handleSubmit(async (values) => {
  const userData = {
    email: email.value,
    password: password.value
  }
  if (route.query.from === 'registration') {
    await auth.userRegistrationWithEmail(userData)
  }
  else if (route.query.from === 'auth') {
    await auth.userLoginWithEmail(userData)
  }
})
</script>

<template>
  <div class="confirm">
    <div class="text">
      <h1>Мой Аккаунт</h1>
      <p>Пожалуйста, введите свой действующий email и введите пароль.</p>
      <div style="display: flex; flex-direction: column; margin-bottom: 15px; gap: 5px;">
        <DefaultInput v-model="email" :placeholder="'Введите email'"/>
        <span v-if="errors.email" style='color: var(--red-color); font-size: 10px;'>{{ errors.email }}</span>
      </div>
      <div style="display: flex; flex-direction: column; margin-bottom: 15px; gap: 5px;">
        <DefaultInput v-model="password" type="password" :placeholder="'Введите пароль'"/>
        <span v-if="errors.password" style='color: var(--red-color); font-size: 10px;'>{{ errors.password }}</span>
      </div>
    </div>
    <RedButton  @click="onSubmit">Продолжить</RedButton>
  </div>
</template>


<style scoped>
.confirm {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.text {
  display: flex;
  flex-direction: column;
}

.text>h1 {
  font-weight: 400;
  font-size: 30px;
  color: var(--text-color);
  margin-bottom: 6px;
}

.text>p {
  font-weight: 400;
  font-size: 12px;
  color: var(--text-color);
  margin-bottom: 20px;
}
</style>