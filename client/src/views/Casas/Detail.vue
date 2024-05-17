<script setup>
import { useRoute } from 'vue-router';
import { ref, onMounted } from 'vue';
import { BASE_URL } from '@/store/store';
import axios from 'axios';
import { LeftCircleOutlined, RightCircleOutlined, HomeOutlined } from '@ant-design/icons-vue';

const casaDetail = ref({})

// Estado para manejar la carga y los errores.
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
  <div class="container mx-auto p-4">
    <!-- Mostrar indicador de carga -->
    <div v-if="isLoading" class="flex justify-center items-center h-screen">
      <p class="text-lg font-semibold text-black">Cargando detalles de la casa...</p>
    </div>

    <!-- Mostrar mensaje de error si ocurre un error -->
    <div v-if="error" class="flex justify-center items-center h-screen">
      <p class="text-lg font-semibold text-red-600">{{ error }}</p>
    </div>

    <!-- Mostrar detalle de la casa si se carga correctamente -->
    <div v-else class="space-y-8">
      <h2 class="text-4xl font-bold text-black mb-6">{{ casaDetail.nameModel }}</h2>
      <h3 class="text-2xl font-semibold text-black mb-4">${{ casaDetail.price }}</h3>

      <!-- Descripción y dimensiones -->
      <div class="mb-8">
        <p class="text-lg text-black">{{ casaDetail.description }}</p>
        <h3 class="text-lg font-semibold text-black mt-4"><HomeOutlined /> {{ casaDetail.dimensions }} m²</h3>
      </div>

      <!-- Carousels de imágenes en disposición horizontal -->
      <div class="flex justify-between space-x-4">
        <!-- Carousel para offside -->
        <div v-if="casaDetail.offside && casaDetail.offside.length" class="carousel-container">
          <h3 class="text-2xl font-semibold text-gray-700 mb-4">Offside:</h3>
          <a-carousel arrows>
            <template #prevArrow>
              <div class="custom-slick-arrow left-2">
                <left-circle-outlined class="text-3xl text-gray-500 hover:text-gray-700" />
              </div>
            </template>
            <template #nextArrow>
              <div class="custom-slick-arrow right-2">
                <right-circle-outlined class="text-3xl text-gray-500 hover:text-gray-700" />
              </div>
            </template>
            <div v-for="(image, index) in casaDetail.offside" :key="index" class="carousel-item">
              <img :src="image" alt="offside" loading="lazy" class="w-full h-auto rounded-lg shadow-lg" />
            </div>
          </a-carousel>
        </div>

        <!-- Carousel para inside -->
        <div v-if="casaDetail.inside && casaDetail.inside.length" class="carousel-container">
          <h3 class="text-2xl font-semibold text-gray-700 mb-4">Inside:</h3>
          <a-carousel arrows>
            <template #prevArrow>
              <div class="custom-slick-arrow left-2">
                <left-circle-outlined class="text-3xl text-gray-500 hover:text-gray-700" />
              </div>
            </template>
            <template #nextArrow>
              <div class="custom-slick-arrow right-2">
                <right-circle-outlined class="text-3xl text-gray-500 hover:text-gray-700" />
              </div>
            </template>
            <div v-for="(image, index) in casaDetail.inside" :key="index" class="carousel-item">
              <img :src="image" alt="inside" loading="lazy" class="w-full h-auto rounded-lg shadow-lg" />
            </div>
          </a-carousel>
        </div>

        <!-- Carousel para blueprints -->
        <div v-if="casaDetail.blueprints && casaDetail.blueprints.length" class="carousel-container">
          <h3 class="text-2xl font-semibold text-gray-700 mb-4">Blueprints:</h3>
          <a-carousel arrows>
            <template #prevArrow>
              <div class="custom-slick-arrow left-2">
                <left-circle-outlined class="text-3xl text-gray-500 hover:text-gray-700" />
              </div>
            </template>
            <template #nextArrow>
              <div class="custom-slick-arrow right-2">
                <right-circle-outlined class="text-3xl text-gray-500 hover:text-gray-700" />
              </div>
            </template>
            <div v-for="(image, index) in casaDetail.blueprints" :key="index" class="carousel-item">
              <img :src="image" alt="blueprints" loading="lazy" class="w-full h-auto rounded-lg shadow-lg" />
            </div>
          </a-carousel>
        </div>
      </div>

      <!-- Información adicional -->
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
</style>