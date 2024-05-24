<script setup>
import DeleteButton from '../Admin/Dashboard/AdminElements/DeleteButton.vue';
import EditButton from '../Admin/Dashboard/AdminElements/EditButton.vue';
import WhatsappButton from './Buttons/WhatsappButton.vue'
import ShareButton from './Buttons/ShareButton.vue'

import { onMounted, ref } from 'vue';
import { RouterLink, useRoute } from 'vue-router';


const props = defineProps({
  casa: Object,
  order: Number
});

const route = useRoute();

</script>

<template>
  <div class="bg-white shadow-custom rounded-lg gap-5 w-[93%] p-6 my-3 flex flex-col-reverse
   md:flex-row md:w-[70%] " :class="{ 'md:flex-row-reverse': order % 2 === 0 }">

    <section class="flex flex-col justify-center w-1/2 space-y-2">

      <h2 class="text-xl font-bold">{{ casa.nameModel }}</h2>

      <span class="grid grid-cols-2 gap-x-4 gap-y-2">
        <div>
          <p class="text-gray-600">Habitaciones:</p>
          <p>{{ casa.rooms }}</p>
        </div>
        <div>
          <p class="text-gray-600">Baños:</p>
          <p>{{ casa.bathroom }}</p>
        </div>
        <div>
          <p class="text-gray-600">Dimensiones:</p>
          <p>{{ casa.dimensions }} m²</p>
        </div>
      </span>

      <!-- <nav class= " flex flex-col justify-end"> -->
      <section class="flex justify-end space-x-4 w-full">

        <span class="w-[40%]">
          <RouterLink :to="`/detail/${casa._id}`">
            <button class="bg-buttons text-white px-6 py-3 rounded-md hover:bg-purple-700 transition duration-300">Ver
              detalle</button>
          </RouterLink>
        </span>

        <span class="w-[40%]">
          <WhatsappButton :id="casa._id" />
        </span>

        <span class="w-[40%]">
          <ShareButton :id="casa._id" :modelName="casa.nameModel" />
        </span>

      </section>

      <section v-if="route.fullPath === '/admin'" class="flex justify-center space-x-4 w-full">
        <span class="w-[40%] ">
          <DeleteButton :id="casa._id" :type="'casas'" :name="casa.nameModel" />
        </span>
        <span class="w-[40%]">
          <EditButton :id="casa._id" :type="'casas'" />
        </span>
      </section>
      <!-- </nav> -->

    </section>

    <section class="md:w-1/2">
      <img :src="casa.offside[0]" :alt="casa.nameModel" class="w-full object-cover rounded-md" />
    </section>

  </div>
</template>
