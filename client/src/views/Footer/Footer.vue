<script setup>  // Haciendo esto lo estoy exportando al componente.
import { InstagramOutlined, LinkedinOutlined } from '@ant-design/icons-vue';
</script>

//* Esto es equivlente al return y lo que va abajo.
<template>
  <footer class="w-full bg-[#3d348b] text-white relative bottom-0">
    <!-- Footer Content -->
    <section class="bg-black py-10 px-4">
      <div class="max-w-7xl mx-auto flex flex-wrap justify-between gap-4">
        <!-- Main Info -->
        <article class="text-center md:text-left mb-4 md:mb-0">
          <img src="/stock-4.webp" alt="logoFooter" class="w-16 h-16 mb-2 mx-auto md:mx-0 rounded-full cursor-pointer transition-transform transform hover:scale-110">
          <h2 class="text-2xl">Nexa Constructora</h2>
          <p class="text-sm">Ayudandote a crecer, síguenos en nuestras redes.</p>
          <div class="flex justify-center md:justify-start mt-2 gap-2">
            <a href="#" class="w-8 h-8 flex items-center justify-center bg-[#3d348b] rounded-full transition-opacity hover:opacity-70">
              <InstagramOutlined class="text-lg" />
            </a>
            <a href="#" class="w-8 h-8 flex items-center justify-center bg-[#3d348b] rounded-full transition-opacity hover:opacity-70">
              <LinkedinOutlined class="text-lg" />
            </a>
            <a href="#" class="w-8 h-8 flex items-center justify-center bg-[#3d348b] rounded-full transition-opacity hover:opacity-70">
              
            </a>
            <a href="#" class="w-8 h-8 flex items-center justify-center bg-[#3d348b] rounded-full transition-opacity hover:opacity-70">
              
            </a>
          </div>
        </article>

        <!-- Links -->
        <article class="text-center md:text-left mb-4 md:mb-0">
          <p class="text-lg font-semibold mb-2">Information</p>
          <ul class="space-y-1">
            <li><a href="#" class="transition-colors hover:text-[#3d348b]">Our Company</a></li>
            <li><a href="#" class="transition-colors hover:text-[#3d348b]">About Us</a></li>
            <li><a href="#" class="transition-colors hover:text-[#3d348b]">Blog</a></li>
          </ul>
        </article>
        <article class="text-center md:text-left mb-4 md:mb-0">
          <p class="text-lg font-semibold mb-2">Helpful Links</p>
          <ul class="space-y-1">
            <li><a href="#" class="transition-colors hover:text-[#3d348b]">Service</a></li>
            <li><a href="#" class="transition-colors hover:text-[#3d348b]">Contact</a></li>
            <li><a href="#" class="transition-colors hover:text-[#3d348b]">Terms & Condition</a></li>
          </ul>
        </article>
        <article class="text-center md:text-left mb-4 md:mb-0">
          <p class="text-lg font-semibold mb-2">Navigation</p>
          <ul class="space-y-1">
            <li><RouterLink to="/" class="transition-colors hover:text-[#3d348b]">Home</RouterLink></li>
            <li><a href="#" class="transition-colors hover:text-[#3d348b]">Sobre Nosotros</a></li>
          </ul>
        </article>
      </div>

      <!-- Footer Bottom -->
      <div class="mt-6 border-t border-gray-700 pt-4 text-center text-sm">
        <p>Copyright © 2024 Nexa Constructora, Inc.</p>
        <ul class="flex justify-center space-x-2 mt-2">
          <li><a href="#" class="transition-colors hover:text-[#f7b801]">Terms of Service</a></li>
          <li><a href="#" class="transition-colors hover:text-[#f7b801]">Privacy Policy</a></li>
        </ul>
      </div>
    </section>
  </footer>
</template>

<style scoped>

</style>