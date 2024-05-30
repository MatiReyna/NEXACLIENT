<script setup>
import { HomeOutlined } from '@ant-design/icons-vue';
import { RouterLink } from 'vue-router';
</script>

<template>
  <div class="relative w-full min-h-screen flex items-center justify-center text-[#fffcf2] px-8 md:px-[10%] -mt-20">
    <div class="absolute inset-0 bg-cover bg-center filter blur-sm" style="background-image: linear-gradient(rgba(28, 25, 49, 0.7), rgba(28, 25, 49, 0.7)), url('https://res.cloudinary.com/dla8ovzrw/image/upload/v1717013349/stock-1_ed6w3c.webp');"></div>
    <div class="relative text-center max-w-2xl space-y-6">
      <h2 class="text-5xl font-semibold text-[#9192e8] opacity-0 transform -translate-y-12 animate-fadeInUp">
        Queremos verte crecer
      </h2>
      <p class="max-w-2xl mx-auto leading-7 opacity-0 transform translate-y-12 animate-fadeInUp animation-delay-500">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
        Sequi provident delectus autem a omnis saepe dolorem consequatur labore. 
        Nobis doloremque illum distinctio facilis aperiam iusto est obcaecati voluptatum nostrum animi!
      </p>
      <RouterLink to="/casas">
        <button class="mt-8 bg-[#fffcf2] text-[#212121] px-6 py-3 text-base rounded-full cursor-pointer border-0 outline-0 inline-flex items-center justify-center transition duration-300 transform hover:bg-[#7364d2] hover:text-white hover:scale-105">
          Mira nuestras casas <HomeOutlined class="w-5 ml-2" />
        </button>
      </RouterLink>
    </div>
  </div>
</template>

<style>
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(-50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fadeInUp {
  animation: fadeInUp 1s forwards;
}

.animation-delay-500 {
  animation-delay: 0.5s;
}
</style>