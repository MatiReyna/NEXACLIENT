<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
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

// Intervalo de cambio automático
let intervalId;

// Función para cambiar a la siguiente imagen
const nextImages = () => {
    startIndex.value = (startIndex.value + 2) % images.value.length;
};

// Función para cambiar automáticamente las imágenes
const startAutoChange = () => {
    intervalId = setInterval(() => {
        nextImages();
    }, 3000); // Cambiar cada 5 segundos
};

// Iniciar el cambio automático al montar el componente
onMounted(() => {
    startAutoChange();
});

// Detener el cambio automático al desmontar el componente
onBeforeUnmount(() => {
    clearInterval(intervalId);
});
</script>

<template>
    <div class="my-20 mx-auto w-full flex flex-col items-center justify-center">
        <!-- Carrusel de imágenes -->
        <div class="flex items-center justify-center mb-10 space-x-4">
            <div v-for="index in 2" :key="startIndex + index - 1" class="rounded-lg overflow-hidden border border-gray-300 shadow-lg">
                <img :src="images[startIndex + index - 1].src" :alt="'Image ' + images[startIndex + index - 1].id" class="w-80 h-80 object-cover">
            </div>
        </div>
        
        <!-- Botón para ver más modelos -->
        <RouterLink to="/casas">
            <button class="bg-[#272145] text-[#fffcf2] px-6 py-3 text-base rounded-full cursor-pointer border-0 outline-0 inline-flex items-center justify-center transition duration-300 hover:bg-[#7364d2] hover:text-white transform hover:scale-105">
                Nuestros modelos <FireOutlined class="w-5 ml-2" />
            </button>
        </RouterLink>
    </div>
</template>

<style scoped>
/* Ajustes para el contenedor del carrusel */
.my-20 {
    margin-top: 5rem;
    margin-bottom: 5rem;
}

/* Espaciado entre las imágenes y el botón */
.mb-10 {
    margin-bottom: 2.5rem;
}

/* Espaciado entre las imágenes en el carrusel */
.space-x-4 > :not([hidden]) ~ :not([hidden]) {
    margin-left: 1rem;
}

/* Transición suave y escala para el botón */
.hover\\:scale-105 {
    transition: transform 0.3s;
}
</style>