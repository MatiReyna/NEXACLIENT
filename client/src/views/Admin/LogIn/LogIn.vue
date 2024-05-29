<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { BASE_URL } from '@/store/store';

const emit = defineEmits(['login']);

const session = ref({
  email: "",
  password: "",
})

const errors = ref({})

const handleLogin = async () => {
  try {
    const { data } = await axios.post(`${BASE_URL}user/logIn`, session.value);

    if (data.validate === false) {
      errors.value = data
    }
    else {
      emit('login', true);
    }
  } catch (error) {
    console.error(error)
  }
};

</script>

<template>
<div class="flex items-center justify-center h-[50vh]">
  <form class="w-96 grid gap-y-2 p-6 bg-white rounded-lg shadow-custom" @submit.prevent="handleLogin">
    
    <label>Email:</label>
    <input class="border-2 border-buttons rounded-md px-2 placeholder-italic" :class="{ 'border-red-400': errors.email }" type="text"
      name="email" placeholder="ejemplo@gmail.com" v-model="session.email">
    <a-alert class="rounded-md py-1 text-red-600" v-if="errors.email" type="error" :message="errors.email" banner />

    <label>Contraseña:</label>
    <input class="border-2 border-buttons rounded-md px-2 placeholder-italic" :class="{ 'border-red-400': errors.password }"
      type="password" name="password" placeholder="contraseña..." v-model="session.password">
    <a-alert class="rounded-md py-1 text-red-600" v-if="errors.password" type="error" :message="errors.password" banner />

    <a-button class="bg-buttons text-white" type="primary" @click="handleLogin">LogIn</a-button>
    
  </form>
</div>

</template>