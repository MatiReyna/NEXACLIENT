<script setup>
import { defineEmits, ref } from 'vue';
import axios from 'axios';
import { BASE_URL } from '@/store/store';

const emit = defineEmits(['login']);

const session = ref({
  email: "",
  password: "",
})

const errors = ref({})

const handlechange = (event) => {
  event.preventDefault();
  const name = event.target.name;
  const valor = event.target.value;

  session.value[name] = valor;
};

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
  <form class=" grid items-center justify-center gap-y-2" @submit.prevent="handleLogin">
    <label>Email</label>
    <input class=" border-2 border-black px-2" :class="{' bg-red-200' :errors.email }" type="text" name="email" @change="handlechange" v-model="session.email" @keydown.enter.prevent>
    <p class=" text-red-500" v-if="errors.email">{{ errors.email }}</p>

    <label>Contraseña</label>
    <input class=" border-2 border-black px-2" :class="{' bg-red-100' :errors.password }"  type="password" name="password" @change="handlechange" v-model="session.password" @keydown.enter.prevent>
    <p class=" text-red-500" v-if="errors.password">{{ errors.password }}</p>

    <button type="submit">Iniciar sesion</button>
    <a-button type="primary" @click="handleLogin">Primary Button</a-button>
  </form>
  
</template>