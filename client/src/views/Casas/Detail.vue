<script setup>
import { useRoute } from 'vue-router';
import { ref, onMounted } from 'vue';
import { BASE_URL } from '@/store/store';
import axios from 'axios';

const casaDetail = ref({})

onMounted(async () => {
    const route = useRoute();
    const id = route.params.id;

    try {
        const { data } = await axios.get(`${BASE_URL}casas/${id}`)
        casaDetail.value = data
        console.log(casaDetail.value)
    } catch (error) {
        console.error(error)
    }
})
</script>

<template>
    <div>
      <h2>{{ casaDetail.nameModel }}</h2>
       <!-- Mostrar imágenes de blueprints -->
    <div v-if="casaDetail.blueprints && casaDetail.blueprints.length">
      <h3>Blueprints:</h3>
      <div v-for="(image, index) in casaDetail.blueprints" :key="index">
        <img :src="image" alt="Blueprint" />
      </div>
    </div>
    <!-- Mostrar imágenes de inside -->
    <div v-if="casaDetail.inside && casaDetail.inside.length">
      <h3>Inside:</h3>
      <div v-for="(image, index) in casaDetail.inside" :key="index">
        <img :src="image" alt="Inside" />
      </div>
    </div>
    <!-- Mostrar imágenes de offside -->
    <div v-if="casaDetail.offside && casaDetail.offside.length">
      <h3>Offside:</h3>
      <div v-for="(image, index) in casaDetail.offside" :key="index">
        <img :src="image" alt="Offside" />
      </div>
    </div>
    </div>
</template>