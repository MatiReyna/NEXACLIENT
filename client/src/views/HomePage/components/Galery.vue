<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import { FireOutlined } from '@ant-design/icons-vue';

// Imágenes del carrusel
const images = ref([
    { id: 1, src: '/stock-1.webp' },
    { id: 2, src: '/stock-2.webp' },
    { id: 3, src: '/stock-3.webp' },
    { id: 4, src: '/stock-4.webp' }
]);

// Índice de la imagen actual
const startIndex = ref(0);

// Función para cambiar a la siguiente imagen
const nextImages = () => {
    startIndex.value = Math.min(startIndex.value + 2, images.value.length - 2);
};

// Función para cambiar a la imagen anterior
const prevImages = () => {
    startIndex.value = Math.max(startIndex.value - 2, 0);
};
</script>

<template>
    <div class="my-20 mx-auto w-11/12 text-center">
        <!-- Carrusel de imágenes -->
        <div class="flex items-center justify-between mb-10">
            <button @click="prevImages" :disabled="startIndex === 0" class="bg-[#212121] text-[#fffcf2] px-2 py-1 text-base rounded-full cursor-pointer border-0 outline-0 inline-flex items-center justify-center transition duration-300 hover:bg-[#3d348b] hover:text-white">
                Anterior
            </button>
            <div class="flex items-center space-x-4">
                <div v-for="index in 2" :key="startIndex + index - 1" class="rounded-lg overflow-hidden border border-gray-300 shadow-lg">
                    <img :src="images[startIndex + index - 1].src" :alt="'Image ' + images[startIndex + index - 1].id" class="w-48 h-48 object-cover">
                </div>
            </div>
            <button @click="nextImages" :disabled="startIndex >= images.length - 2" class="bg-[#212121] text-[#fffcf2] px-2 py-1 text-base rounded-full cursor-pointer border-0 outline-0 inline-flex items-center justify-center transition duration-300 hover:bg-[#3d348b] hover:text-white">
                Siguiente
            </button>
        </div>
        
        <!-- Botón para ver más modelos -->
        <RouterLink to="/casas">
            <button class="bg-[#212121] text-[#fffcf2] px-6 py-3 text-base rounded-full cursor-pointer border-0 outline-0 inline-flex items-center justify-center transition duration-300 hover:bg-[#3d348b] hover:text-white">
                Nuestros modelos <FireOutlined class="w-5 ml-2" />
            </button>
        </RouterLink>
    </div>
</template>