<!-- <script setup>
import { useRoute } from 'vue-router';
import { ref, onMounted } from 'vue';
import { BASE_URL } from '@/store/store';
import axios from 'axios';
import { LeftCircleOutlined, RightCircleOutlined, HomeOutlined } from '@ant-design/icons-vue';

const casaDetail = ref({})


const isLoading = ref(true);
const error = ref(false);

onMounted(async () => {
    const route = useRoute();
    const id = route.params.id;

    try {
        const { data } = await axios.get(`${BASE_URL}casas/${id}`)
        casaDetail.value = data
        console.log(casaDetail.value)
    } catch (err) {
        console.error(err)
        error.value = 'Error al cargar los detalles de la casa'
    } finally {
      isLoading.value = false
    }
})
</script>

<template>
  <div class="container mx-auto p-4 bg-white rounded-lg shadow-lg">
    
    <div v-if="isLoading" class="flex justify-center items-center h-screen">
      <p class="text-lg font-semibold text-black">Cargando detalles de la casa...</p>
    </div>

    
    <div v-if="error" class="flex justify-center items-center h-screen">
      <p class="text-lg font-semibold text-red-600">{{ error }}</p>
    </div>

    
    <div v-else class="space-y-8">
      <h2 class="text-4xl font-bold text-yellow-400 mb-6">{{ casaDetail.nameModel }}</h2>
      <h3 class="text-2xl font-semibold text-gray-700 mb-4">${{ casaDetail.price }}</h3>

      
      <div class="mb-8">
        <p class="text-lg text-gray-700">{{ casaDetail.description }}</p>
        <h3 class="text-lg font-semibold text-gray-700 mt-4">
          <HomeOutlined /> {{ casaDetail.dimensions }} m²
        </h3>
      </div>

      
      <div class="flex flex-col md:flex-row justify-between space-y-8 md:space-y-0 md:space-x-8">
        
        <div v-if="casaDetail.offside && casaDetail.offside.length" class="carousel-container w-full md:w-1/3">
          <h3 class="text-2xl font-semibold text-gray-700 mb-4">Offside:</h3>
          <a-carousel arrows>
            <template #prevArrow>
              <div class="custom-slick-arrow left-2">
                <LeftCircleOutlined class="text-3xl text-gray-500 hover:text-gray-700" />
              </div>
            </template>
            <template #nextArrow>
              <div class="custom-slick-arrow right-2">
                <RightCircleOutlined class="text-3xl text-gray-500 hover:text-gray-700" />
              </div>
            </template>
            <div v-for="(image, index) in casaDetail.offside" :key="index" class="carousel-item">
              <img :src="image" alt="offside" loading="lazy" class="w-full h-auto rounded-lg shadow-lg" />
            </div>
          </a-carousel>
        </div>

        
        <div v-if="casaDetail.inside && casaDetail.inside.length" class="carousel-container w-full md:w-1/3">
          <h3 class="text-2xl font-semibold text-gray-700 mb-4">Inside:</h3>
          <a-carousel arrows>
            <template #prevArrow>
              <div class="custom-slick-arrow left-2">
                <LeftCircleOutlined class="text-3xl text-gray-500 hover:text-gray-700" />
              </div>
            </template>
            <template #nextArrow>
              <div class="custom-slick-arrow right-2">
                <RightCircleOutlined class="text-3xl text-gray-500 hover:text-gray-700" />
              </div>
            </template>
            <div v-for="(image, index) in casaDetail.inside" :key="index" class="carousel-item">
              <img :src="image" alt="inside" loading="lazy" class="w-full h-auto rounded-lg shadow-lg" />
            </div>
          </a-carousel>
        </div>

        
        <div v-if="casaDetail.blueprints && casaDetail.blueprints.length" class="carousel-container w-full md:w-1/3">
          <h3 class="text-2xl font-semibold text-gray-700 mb-4">Blueprints:</h3>
          <a-carousel arrows>
            <template #prevArrow>
              <div class="custom-slick-arrow left-2">
                <LeftCircleOutlined class="text-3xl text-gray-500 hover:text-gray-700" />
              </div>
            </template>
            <template #nextArrow>
              <div class="custom-slick-arrow right-2">
                <RightCircleOutlined class="text-3xl text-gray-500 hover:text-gray-700" />
              </div>
            </template>
            <div v-for="(image, index) in casaDetail.blueprints" :key="index" class="carousel-item">
              <img :src="image" alt="blueprints" loading="lazy" class="w-full h-auto rounded-lg shadow-lg" />
            </div>
          </a-carousel>
        </div>
      </div>

      
      <div class="mt-8 space-y-4">
        <h3 class="text-xl font-semibold text-gray-700">
          <span role="img" aria-label="rooms">🚪</span> {{ casaDetail.rooms }} Habitaciones
        </h3>
        <h3 class="text-xl font-semibold text-gray-700">
          <span role="img" aria-label="bathroom">🚽</span> {{ casaDetail.bathroom }} Baños
        </h3>
      </div>
    </div>
  </div>
</template>

<style scoped>
.custom-slick-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
  cursor: pointer;
}

.carousel-item {
  max-width: 200px;
  margin: 0 auto;
}

.carousel-container {
  max-width: 250px;
}
</style> -->

<script setup>
import { useRoute } from 'vue-router';
import { ref, onMounted } from 'vue';
import { BASE_URL } from '@/store/store';
import axios from 'axios';
import { LeftCircleOutlined, RightCircleOutlined, HomeOutlined } from '@ant-design/icons-vue';

const casaDetail = ref({});
const isLoading = ref(true);
const error = ref(false);

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

const carousels = {
  offside: 'offside',
  inside: 'inside',
  blueprints: 'blueprints'
};

</script>

<template>
  <div class="container mx-auto p-4 bg-white rounded-lg shadow-lg mb-8">
    <div v-if="isLoading || error" class="flex justify-center items-center h-screen">
      <p class="text-lg font-semibold text-black" v-if="isLoading">Cargando detalles de la casa...</p>
      <p class="text-lg font-semibold text-red-600" v-else>{{ error }}</p>
    </div>
    <div v-else>
      <h2 class="text-4xl font-bold text-yellow-400 mb-6">{{ casaDetail.nameModel }}</h2>
      <h3 class="text-2xl font-semibold text-gray-700 mb-4">${{ casaDetail.price }}</h3>
      <p class="text-lg text-gray-700 mb-6">{{ casaDetail.description }}</p>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div v-for="(carousel, type) in carousels" :key="type" class="carousel-container">
          <h3 class="text-2xl font-semibold text-gray-700 mb-4 capitalize">{{ type }}:</h3>
          <a-carousel arrows>
            <template #prevArrow>
              <div class="custom-slick-arrow left-2">
                <LeftCircleOutlined class="text-3xl text-gray-500 hover:text-gray-700" />
              </div>
            </template>
            <template #nextArrow>
              <div class="custom-slick-arrow right-2">
                <RightCircleOutlined class="text-3xl text-gray-500 hover:text-gray-700" />
              </div>
            </template>
            <div v-for="(image, index) in casaDetail[type]" :key="index" class="carousel-item">
              <img :src="image" :alt="type" loading="lazy" class="w-full h-auto rounded-lg shadow-lg" />
            </div>
          </a-carousel>
        </div>
      </div>
      <div class="mt-8 space-y-4">
        <h3 class="text-xl font-semibold text-gray-700">
          <span role="img" aria-label="rooms">🚪</span> {{ casaDetail.rooms }} Habitaciones
        </h3>
        <h3 class="text-xl font-semibold text-gray-700">
          <span role="img" aria-label="bathroom">🚽</span> {{ casaDetail.bathroom }} Baños
        </h3>
      </div>
    </div>
  </div>
</template>

<style scoped>
.custom-slick-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
  cursor: pointer;
}

.carousel-item {
  max-width: 300px; /* Aumentar el tamaño de las imágenes */
  margin: 0 auto;
}

.carousel-container {
  max-width: 350px; /* Aumentar el tamaño del carousel */
  margin-bottom: 20px; /* Agregar margen inferior */
}
</style>