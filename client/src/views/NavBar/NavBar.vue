<script setup>
import { RouterLink, useRoute } from 'vue-router';
import { ref, onMounted, onUnmounted, watch  } from 'vue';

const userLoggedIn = ref(false);
const isSticky = ref(false);

const route = useRoute();
const isActiveRoute = ref(false);

const checkActiveRoute = () => {
  isActiveRoute.value = route.path !== '/'
}

const handleScroll = () => {
  const offset = window.innerHeight * 0.1;
  isSticky.value = window.scrollY > offset;
}

onMounted(() => {
  userLoggedIn.value = sessionStorage.getItem('user') || false

  window.addEventListener('scroll', handleScroll);
  checkActiveRoute();

  watch(() => route.path, () => {
    checkActiveRoute();
  }); 
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
})
</script>

<template>
  <nav :class="['w-full fixed top-0 left-0 flex items-center justify-between px-20 py-2 text-white shadow-lg z-10 transition duration-300', isSticky || isActiveRoute ? 'bg-gradient-to-r from-[#7364d2] to-[#7364d2] via-[#7364d2]/70' : 'bg-transparent']">
    <RouterLink to="/">
      <img src="https://res.cloudinary.com/dnnigh3iz/image/upload/v1716837702/vkl4cbujq4t2gtynhtwt.webp" alt="LogoHeader" class="w-12 h-12 mb-2 mx-auto md:mx-0 rounded-full cursor-pointer transition-transform transform hover:scale-110" />
    </RouterLink>
    <ul class="flex space-x-6">
      <li>
        <RouterLink to="/" :class="['transition-colors duration-300', route.path === '/' ? 'text-[#272145]' : 'hover:text-[#272145]']">
          Home
        </RouterLink>
      </li>
      <li>
        <RouterLink to="/casas" :class="['transition-colors duration-300', route.path === '/casas' ? 'text-[#272145]' : 'hover:text-[#272145]']">
          Casas
        </RouterLink>
      </li>
      <li>
        <a href="#about" :class="['transition-colors duration-300', route.hash === '#about' ? 'text-[#272145]' : 'hover:text-[#272145]']">
          Sobre Nosotros
        </a>
      </li>
      <li v-if="userLoggedIn">
        <RouterLink to="/admin" :class="['transition-colors duration-300', route.path === '/admin' ? 'text-[#272145]' : 'hover:text-[#272145]']">
          Dashboard
        </RouterLink>
      </li>
    </ul>
  </nav>
</template>

<style>
.navbar-bg {
  background: linear-gradient(90deg, rgba(115, 100, 210, 1) 0%, rgba(115, 100, 210, 0.7) 50%, rgba(115, 100, 210, 1) 100%);
}
</style>