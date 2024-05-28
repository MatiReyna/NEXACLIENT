<script setup>
import { InstagramOutlined, LinkedinOutlined } from '@ant-design/icons-vue';
</script>


<template>
  <footer class="w-full bg-[#7364d2] text-white relative bottom-0">
    <section class="py-10 px-4">
      <div class="max-w-7xl mx-auto flex flex-wrap justify-between gap-8">
        <article class="text-center md:text-left mb-6 md:mb-0">
          <img src="/stock-4.webp" alt="logoFooter" class="w-16 h-16 mb-4 mx-auto md:mx-0 rounded-full cursor-pointer transition-transform transform hover:scale-110">
          <h2 class="text-2xl">Nexa Constructora</h2>
          <p class="text-sm mt-2">Ayudandote a crecer, síguenos en nuestras redes.</p>
          <div class="flex justify-center md:justify-start mt-4 gap-4">
            <a href="#" class="w-10 h-10 flex items-center justify-center bg-[#9192e8 rounded-full transition-opacity hover:opacity-70">
              <InstagramOutlined class="text-lg" />
            </a>
            <a href="#" class="w-10 h-10 flex items-center justify-center bg-[#9192e8 rounded-full transition-opacity hover:opacity-70">
              <LinkedinOutlined class="text-lg" />
            </a>
          </div>
        </article>

        <article class="text-center md:text-left mb-6 md:mb-0">
          <p class="text-lg font-semibold mb-4">Information</p>
          <ul class="space-y-2">
            <li><a href="#" class="transition-colors hover:text-[#272145]">Our Company</a></li>
            <li><a href="#" class="transition-colors hover:text-[#272145]">About Us</a></li>
            <li><a href="#" class="transition-colors hover:text-[#272145]">Blog</a></li>
          </ul>
        </article>
        <article class="text-center md:text-left mb-6 md:mb-0">
          <p class="text-lg font-semibold mb-4">Helpful Links</p>
          <ul class="space-y-2">
            <li><a href="#" class="transition-colors hover:text-[#272145]">Service</a></li>
            <li><a href="#" class="transition-colors hover:text-[#272145]">Contact</a></li>
            <li><a href="#" class="transition-colors hover:text-[#272145]">Terms & Condition</a></li>
          </ul>
        </article>
        <article class="text-center md:text-left mb-6 md:mb-0">
          <p class="text-lg font-semibold mb-4">Navigation</p>
          <ul class="space-y-2">
            <li><RouterLink to="/" class="transition-colors hover:text-[#272145]">Home</RouterLink></li>
            <li><a href="#" class="transition-colors hover:text-[#272145]">Sobre Nosotros</a></li>
          </ul>
        </article>
      </div>

      <div class="mt-10 border-t border-gray-300 pt-6 text-center text-sm">
        <p>Copyright © 2024 Nexa Constructora, Inc.</p>
        <ul class="flex justify-center space-x-4 mt-4">
          <li><a href="#" class="transition-colors hover:text-[#272145]">Terms of Service</a></li>
          <li><a href="#" class="transition-colors hover:text-[#272145]">Privacy Policy</a></li>
        </ul>
      </div>
    </section>
  </footer>
</template>

<style scoped>

footer img {
  transition: transform 0.3s ease;
}
</style>