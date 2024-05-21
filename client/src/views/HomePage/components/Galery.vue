<script setup>
import { RouterLink } from 'vue-router';
import { FireOutlined } from '@ant-design/icons-vue';
</script>

<template>
    <div class="my-20 mx-auto w-11/12 text-center">
        <div class="flex items-center justify-between mb-10">
            <img src="/stock-2.webp" alt="" class="w-1/4 rounded-lg" />
            <img src="/stock-3.webp" alt="" class="w-1/4 rounded-lg" />
            <img src="/stock-1.webp" alt="" class="w-1/4 rounded-lg" />
        </div>
        <RouterLink to="/casas">
            <button class="bg-[#212121] text-[#fffcf2] px-6 py-3 text-base rounded-full cursor-pointer border-0 outline-0 inline-flex items-center justify-center transition duration-300 hover:bg-[#ff9f1c] hover:text-white">
                Nuestros modelos <FireOutlined class="w-5 ml-2" />
            </button>
        </RouterLink>
    </div>
</template>