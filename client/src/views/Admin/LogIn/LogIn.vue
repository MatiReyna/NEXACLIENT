<script setup>
import { defineEmits } from 'vue';

const emit = defineEmits(['login']);

const handleLogin = () => {
  emit('login', true);
};
</script>

<template>
  <button @click="handleLogin">Iniciar sesión</button>
</template>