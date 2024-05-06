<script setup>
import { RouterView } from 'vue-router';
import Footer from './components/Footer.vue';
import NavBar from './views/NavBar/NavBar.vue';

</script>

<template>
  <header class=" m-3 ">
      <NavBar/>
  </header>
  <body>
    <RouterView />
  </body>
  <footer>
    <Footer />
  </footer>
</template>
