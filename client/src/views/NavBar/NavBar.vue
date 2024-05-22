<script setup>
import { RouterLink } from 'vue-router';
import { ref, onMounted, onUnmounted } from 'vue';

const userLoggedIn = ref(false);
const isSticky = ref(false);

onMounted(() => {
    userLoggedIn.value = sessionStorage.getItem('user') || false

    const handleScroll = () => {
      const offset = window.innerHeight * 0.1;
      isSticky.value = window.scrollY > offset;
    }

    window.addEventListener('scroll', handleScroll);

    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll);
    })
});
</script>

<template>
  <nav :class="['w-full fixed top-0 left-0 flex items-center justify-between px-10 py-2 text-white shadow-lg z-10 transition duration-300', isSticky ? 'bg-[#3d348b]' : 'bg-transparent']">
    <RouterLink to="/">
      <img src="/stock-4.webp" alt="LogoHeader" class="w-12 h-auto rounded-full cursor-pointer transition-transform duration-300 transform hover:scale-110" />
    </RouterLink>
    <ul class="flex space-x-6">
      <li>
        <RouterLink to="/" class="transition-colors duration-300 hover:text-[#7678ed]">
          Home
        </RouterLink>
      </li>
      <li>
        <RouterLink to="/casas" class="transition-colors duration-300 hover:text-[#7678ed]">
          Casas
        </RouterLink>
      </li>
      <li>
        <RouterLink to="/about" class="transition-colors duration-300 hover:text-[#7678ed]">
          Sobre Nosotros
        </RouterLink>
      </li>
      <li>
        <RouterLink v-if="userLoggedIn" to="/admin" class="transition-colors duration-300 hover:text-[#7678ed]">
          Dashboard
        </RouterLink>
      </li>
    </ul>
  </nav>
</template>