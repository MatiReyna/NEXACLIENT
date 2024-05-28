<script setup>
import DeleteButton from '../Admin/Dashboard/AdminElements/DeleteButton.vue';
import EditButton from '../Admin/Dashboard/AdminElements/EditButton.vue';
import WhatsappButton from './Buttons/WhatsappButton.vue'
import ShareButton from './Buttons/ShareButton.vue'

import { RouterLink, useRoute } from 'vue-router';


const props = defineProps({
  casa: Object,
  order: Number
});

const route = useRoute();

</script>

<template>
  <span class=" hover:scale-105 transition-transform w-full flex justify-center items-center ">
    <div :class="['bg-white card shadow-custom rounded-lg gap-5 w-[93%] p-6 my-3 flex flex-col-reverse md:flex-row md:w-[70%]',
      { 'md:flex-row-reverse animate-fadeleft': order % 2 === 0, 'animate-fadeRight': order % 2 !== 0 }]">

      <section class="flex flex-col justify-around w-full md:w-1/2 ">

        <section class=" space-y-3 ">
          <h2 class="text-xl md:text-2xl font-bold text-titulos">{{ casa.nameModel }}</h2>

          <span class="grid grid-cols-2 gap-x-4 gap-y-2 md:text-lg">
            <div>
              <p class="text-gray-400">Habitaciones:</p>
              <p class=" flex items-center gap-2"> <img width="25" height="25"
                  src="https://img.icons8.com/?size=100&id=561&format=png&color=000000">{{ casa.rooms }}</p>
            </div>
            <div>
              <p class="text-gray-400">Baños:</p>
              <p class="flex items-center gap-2"> <img width="25" height="25"
                  src="https://img.icons8.com/?size=100&id=g3jnkTRu3ARp&format=png&color=000000">{{ casa.bathroom }}</p>
            </div>
            <div>
              <p class="text-gray-400">Dimensiones:</p>

              <p class=" flex items-center gap-2"><img width="25" height="25"
                  src="https://img.icons8.com/?size=100&id=73&format=png&color=000000">{{ casa.dimensions }} m²</p>
            </div>
          </span>
        </section>

        <nav class=" flex flex-col mt-4 md:mt-0">
          <section class="flex space-x-4 justify-center w-full">

            <span class="md:w-[45%]">
              <RouterLink :to="`/detail/${casa._id}`">
                <button
                  class="bg-buttons text-white text-sm md:text-base  size-full px-6 py-4 rounded-md hover:bg-purple-700 transition duration-300">Ver
                  detalle</button>
              </RouterLink>
            </span>

            <span class="md:w-[45%]">
              <WhatsappButton :id="casa._id" />
            </span>

            <span class="w-[10%]">
              <ShareButton :id="casa._id" :modelName="casa.nameModel" />
            </span>

          </section>

          <section v-if="route.fullPath === '/admin'" class="flex justify-center gap-2 mt-3 w-full">
            <span class="w-[40%] ">
              <DeleteButton :id="casa._id" :type="'casas'" :name="casa.nameModel" />
            </span>
            <span class="w-[40%]">
              <EditButton :id="casa._id" :type="'casas'" />
            </span>
          </section>
        </nav>

      </section>

      <section class="md:w-1/2 flex justify-center items-center">
        <a-image :src="casa.offside[0]" :alt="casa.nameModel" class="w-full object-cover rounded-md" />
      </section>

    </div>
  </span>
</template>

<style scoped>
@keyframes fadeRight {
  from {
    opacity: 0;
    transform: translateX(100px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeleft {
  from {
    opacity: 0;
    transform: translateX(-100px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.animate-fadeRight {
  animation: fadeRight 1.5s forwards;
  transition: transform 0.5s ease;
}

.animate-fadeleft {
  animation: fadeleft 1.5s forwards;
  transition: transform 0.5s ease;
}
</style>