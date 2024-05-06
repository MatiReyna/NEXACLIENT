<script setup>
import { RouterLink } from 'vue-router';
import { ref, onMounted } from 'vue';

const userLoggedIn = ref(false);

onMounted(() => {
    userLoggedIn.value = sessionStorage.getItem('user') || false
});

</script>

<template>
    <nav class="flex justify-center gap-2">

        <RouterLink to="/">
          Home
        </RouterLink>
        <RouterLink to="/about">
          About
        </RouterLink>  

        <RouterLink v-if="userLoggedIn" to="/admin">
           Admin 
        </RouterLink>
    </nav>
</template>