<script setup>
import { useRoute, useRouter } from 'vue-router';
import { ref, onMounted } from 'vue';
import { BASE_URL } from '@/store/store';
import axios from 'axios';
import WhatsappButton from './Buttons/WhatsappButton.vue';
import { HomeOutlined, ArrowLeftOutlined } from '@ant-design/icons-vue';

const casaDetail = ref({});
const isLoading = ref(true);
const error = ref(false);
const carrousel = ref([]);
const router = useRouter();

onMounted(async () => {
  const route = useRoute();
  const id = route.params.id;
  
  window.scrollTo({
        top
    });

  try {
    const { data } = await axios.get(`${BASE_URL}casas/${id}`);
    casaDetail.value = data;
    carrousel.value = [...data.offside, ...data.inside, ...data.blueprints]
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
  <section class="container mx-auto p-6 bg-[#f0f2fd] rounded-lg shadow-lg mb-8 space-y-8">
    <!-- Muestra la carga de la imagen y el error si se produce -->
    <div v-if="isLoading || error" class="flex justify-center items-center h-screen">
      <p class="text-lg font-semibold text-black" v-if="isLoading">Cargando detalles de la casa...</p>
      <p class="text-lg font-semibold text-red-600" v-else>{{ error }}</p>
    </div>
    <!-- Toda la información y los botones -->
    <article v-else>
      <!-- Mostramos el nombre de la casa -->
      <header class="mb-8">
        <h1 class="text-4xl font-bold text-titulos mb-2">{{ casaDetail.nameModel }}</h1>
      </header>
      <!-- Todas sus características y carousel -->
      <section class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <aside class="flex flex-col justify-center space-y-4 md:col-span-1 ">
          <div class="flex flex-wrap justify-between space-x-2">
            <div class="bg-white p-2 rounded-lg shadow-lg text-center flex-1 min-w-[120px]">
              <i class="fa fa-dollar-sign text-3xl text-[#272145] mb-2"></i>
              <p class="text-base font-semibold text-gray-700">${{ casaDetail.price }}</p>
            </div>
            <div class="bg-white p-2 rounded-lg shadow-lg text-center flex-1 min-w-[120px]">
              <i class="fa fa-bed text-3xl text-[#272145] mb-2"></i>
              <p class="text-base font-semibold text-gray-700">{{ casaDetail.rooms }} Dormitorios</p>
            </div>
          </div>
          <div class="flex flex-wrap justify-between space-x-2">
            <div class="bg-white p-2 rounded-lg shadow-lg text-center flex-1 min-w-[120px]">
              <i class="fa fa-bath text-3xl text-[#272145] mb-2"></i>
              <p class="text-base font-semibold text-gray-700">{{ casaDetail.bathroom }} Baños</p>
            </div>
            <div class="bg-white p-2 rounded-lg shadow-lg text-center flex-1 min-w-[120px]">
              <i class="fa fa-ruler-combined text-3xl text-[#272145] mb-2"></i>
              <p class="text-base font-semibold text-gray-700">{{ casaDetail.dimensions }} m²</p>
            </div>
          </div>
          <div class="bg-white p-4 rounded-lg shadow-lg max-h-[390px] overflow-y-auto">
            <p class="text-lg text-gray-700 break-words whitespace-pre-wrap">{{ casaDetail.description }}</p>
          </div>
        </aside>
        <aside class="md:col-span-2">
          <!-- Este es el carousel -->
          <div class="carousel-container">
            <a-carousel dots class="max-w-full mx-auto" autoplay>
              <figure v-for="(image, index) in carrousel" :key="index" class="carousel-item">
                <img :src="image" :alt="'Image ' + (index + 1)" loading="lazy"
                  class="w-full h-auto rounded-lg shadow-lg mx-auto transition-transform transform hover:scale-105" />
              </figure>
            </a-carousel>
          </div>
        </aside>
      </section>

      <footer class="mt-8 flex gap-4 justify-center">
        <button @click="navigateToCasas"
          class="flex items-center px-6 py-3 bg-[#272145] text-white rounded-lg shadow-md hover:bg-[#19145a] transition-colors">
          <ArrowLeftOutlined class="mr-2" /> Volver a Casas
        </button>
        <WhatsappButton class="w-[25%] py-7 md:w-[15%] md:p-4" :id="casaDetail._id" />
        <button @click="navigateToHome"
          class="flex items-center px-6 py-3 bg-[#272145] text-white rounded-lg shadow-md hover:bg-[#19145a] transition-colors">
          <HomeOutlined class="mr-2" /> Volver a Inicio
        </button>
      </footer>
    </article>
  </section>
</template>

<style scoped>
.carousel-container {
  max-width: 100%;
  margin: 0 auto;
}

.carousel-item img {
  max-height: 500px;
  /* Ajustar el tamaño máximo del carrusel */
  object-fit: cover;
}
</style>