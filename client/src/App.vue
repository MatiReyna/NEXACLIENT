<script setup>
import { RouterView } from 'vue-router';
import NavBar from './views/NavBar/NavBar.vue';
import Footer from './views/Footer/Footer.vue';
</script>

<template>
  <header>
      <NavBar />
  </header>
  <body class="mt-20">
    <RouterView />
  </body>
  <footer>
    <Footer />
  </footer>
</template>