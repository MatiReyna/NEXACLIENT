<script setup>
import { ref, onMounted, onBeforeUnmount, computed } from 'vue';
import { RouterLink } from 'vue-router';
import { FireOutlined } from '@ant-design/icons-vue';
import { useStore } from 'vuex';

const { state, dispatch } = useStore();

// Índice de la imagen actual
const startIndex = ref(0);

// Intervalo de cambio automático
let intervalId;

// Función para cambiar a la siguiente imagen
const nextImages = () => {
    if (state.promos.length > 0) {
        startIndex.value = (startIndex.value + 2) % state.promos.length;
    }
};

// Función para cambiar automáticamente las imágenes
const startAutoChange = () => {
    intervalId = setInterval(() => {
        nextImages();
    }, 3000); // Cambiar cada 3 segundos
};

// Iniciar el cambio automático al montar el componente
onMounted(() => {
    dispatch("getPromos").then(() => {
        startAutoChange();
        image.value = state.promos;
    });
});

const image = ref([]);

// Detener el cambio automático al desmontar el componente
onBeforeUnmount(() => {
    clearInterval(intervalId);
});

// Computed para manejar la lista de imágenes en el carrusel
const displayedImages = computed(() => {
    return image.value.slice(startIndex.value, startIndex.value + 2);
});
</script>

<template>
    <div class="my-20 mx-auto w-full flex flex-col items-center justify-center">
        <!-- Carrusel de imágenes -->
        <div class="flex items-center justify-center mb-10 space-x-4">
            <div v-for="img in displayedImages" :key="img._id" class="rounded-lg overflow-hidden border border-gray-300 shadow-lg">
                <img :src="img.url" :alt="'Image' + img._id" class="w-80 h-80 object-cover">
            </div>
        </div>
        
        <!-- Botón para ver más modelos -->
        <RouterLink to="/casas">
            <button class="bg-buttons text-[#fffcf2] px-6 py-3 text-base rounded-full cursor-pointer border-0 outline-0 inline-flex items-center justify-center transition duration-300 hover:bg-[#7364d2] hover:text-white transform hover:scale-105">
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