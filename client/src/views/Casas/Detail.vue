<script setup>
import { useRoute, useRouter } from 'vue-router';
import { ref, onMounted } from 'vue';
import { BASE_URL } from '@/store/store';
import axios from 'axios';
import { HomeOutlined, ArrowLeftOutlined } from '@ant-design/icons-vue';

const casaDetail = ref({});
const isLoading = ref(true);
const error = ref(false);
const router = useRouter();

onMounted(async () => {
    const route = useRoute();
    const id = route.params.id;

    try {
        const { data } = await axios.get(`${BASE_URL}casas/${id}`);
        casaDetail.value = data;
    } catch (err) {
        console.error(err);
        error.value = 'Error al cargar los detalles de la casa';
    } finally {
        isLoading.value = false;
    }
});

const navigateToCasas = () => {
    router.push('/casas');
};

const navigateToHome = () => {
    router.push('/');
};
</script>

<template>
  <div class="container mx-auto p-6 bg-[#f7f8fc] rounded-lg shadow-lg mb-8 space-y-8">
    <!-- Muestra la carga de la imagen y el error si se produce -->
    <div v-if="isLoading || error" class="flex justify-center items-center h-screen">
      <p class="text-lg font-semibold text-black" v-if="isLoading">Cargando detalles de la casa...</p>
      <p class="text-lg font-semibold text-red-600" v-else>{{ error }}</p>
    </div>
    <!-- Toda la informacion y los botones -->
    <div v-else>
      <!-- Mostramos el nombre de la casa -->
      <div class="flex justify-between items-center mb-8">
        <h2 class="text-4xl font-bold text-[#272145] mb-2">{{ casaDetail.nameModel }}</h2>
      </div>
      <!-- Todas sus caracteristicas y carousel -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div class="flex flex-row flex-wrap gap-4">

          <div class="bg-white p-2 rounded-lg shadow-lg text-center max-w-[50%] max-h-[50%]">
            <i class="fa fa-bed text-3xl text-[#272145] mb-2"></i>
            <h3 class="text-base font-semibold text-gray-700">{{ casaDetail.rooms }} Habitaciones</h3>
          </div>
          <div class="bg-white p-2 rounded-lg shadow-lg text-center size-max-2" style="min-width: 60px;">
            <i class="fa fa-bath text-3xl text-[#272145] mb-2"></i>
            <h3 class="text-base font-semibold text-gray-700">{{ casaDetail.bathroom }} Baños</h3>
          </div>
          <div class="bg-white p-2 rounded-lg shadow-lg text-center max" style="min-width: 60px;">
            <i class="fa fa-ruler-combined text-3xl text-[#272145] mb-2"></i>
            <h3 class="text-base font-semibold text-gray-700">{{ casaDetail.dimensions }} m²</h3>
          </div>
          <div class="bg-white p-2 rounded-lg shadow-lg text-center" style="min-width: 120px;">
          <i class="fa fa-dollar-sign text-3xl text-[#272145] mb-2"></i>
          <h3 class="text-base font-semibold text-gray-700">${{ casaDetail.price }}</h3>
          </div>

        </div>
        <div class="mt-8">
        <div class="bg-white p-6 rounded-lg shadow-lg">
          <p class="text-lg text-gray-700">{{ casaDetail.description }}</p>
        </div>
      </div>
        <!-- Este es el carousel -->
        <div class="carousel-container">
          <a-carousel dots class="max-w-full mx-auto">
            <div v-for="(image, index) in casaDetail.offside.concat(casaDetail.inside, casaDetail.blueprints)" :key="index" class="carousel-item">
              <img :src="image" :alt="'Image ' + (index + 1)" loading="lazy" class="w-full h-auto rounded-lg shadow-lg mx-auto transition-transform transform hover:scale-105" />
            </div>
          </a-carousel>
        </div>
      </div>
      
      <div class="mt-8 flex gap-4 justify-center">
        <button @click="navigateToCasas" class="flex items-center px-6 py-3 bg-[#272145] text-white rounded-lg shadow-md hover:bg-[#19145a] transition-colors">
          <ArrowLeftOutlined class="mr-2" /> Volver a Casas
        </button>
        <button @click="navigateToHome" class="flex items-center px-6 py-3 bg-[#272145] text-white rounded-lg shadow-md hover:bg-[#19145a] transition-colors">
          <HomeOutlined class="mr-2" /> Volver a Inicio
        </button>
      </div>

    </div>
  </div>
</template>

<style scoped>
.carousel-container {
  max-width: 100%;
  margin: 0 auto;
}

.carousel-item img {
  max-height: 500px;
  object-fit: cover;
}
</style>