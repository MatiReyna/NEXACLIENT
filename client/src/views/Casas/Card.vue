<script setup>
import DeleteButton from '../Admin/Dashboard/Buttons/DeleteButton.vue';


const props = defineProps({
    casa: Object,
    order: Number
})
</script>

<!-- <template>
    <div class='bg-white shadow-md rounded-lg p-6'>
        <h2 class='text-xl font-bold mb-2'>{{ casa.nameModel }}</h2>
        <div class='grid grid-cols-2 gap-4'>
            <div>
                <p class='text-gray-600'>Rooms:</p>
                <p>{{ casa.rooms }}</p>
            </div>
            <div>
                <p class='text-gray-600'>Bathroom:</p>
                <p>{{ casa.bathroom }}</p>
            </div>
            <div>
                <p class='text-gray-600'>Dimensions:</p>
                <p>{{ casa.dimensions }}</p>
            </div>
            <div>
                <p class='text-gray-600'>Exterior:</p>
                <img :src='casa.offside[0]' :alt='casa.nameModel' class='w-full h-auto mt-2 rounded-lg max-h-48 object-cover' />
            </div>
        </div>
    </div>
</template> -->

<template>
    <div class="bg-white shadow-md rounded-lg p-6 mb-8 flex flex-col-reverse md:flex-row" :class="{'  md:flex-row-reverse': order % 2 === 0}">
      <div class="flex-grow">
        <h2 class="text-xl font-bold mb-2">{{ casa.nameModel }}</h2>
        <div class="grid grid-cols-2 gap-4">
          <div>
            <p class="text-gray-600">Rooms:</p>
            <p>{{ casa.rooms }}</p>
          </div>
          <div>
            <p class="text-gray-600">Bathroom:</p>
            <p>{{ casa.bathroom }}</p>
          </div>
          <div>
            <p class="text-gray-600">Dimensions:</p>
            <p>{{ casa.dimensions }}</p>
          </div>
        </div>
        <div class="flex mt-4 space-x-4">
          <button class="bg-buttons text-white px-6 py-3 rounded-md hover:bg-purple-700 transition duration-300">Button 1</button>
          <button class="bg-buttons text-white px-6 py-3 rounded-md hover:bg-purple-700 transition duration-300">Button 2</button>
          <button class="bg-buttons text-white px-6 py-3 rounded-md hover:bg-purple-700 transition duration-300">Detail</button>
          <DeleteButton :id="casa._id" :type="'casas'" :name="casa.nameModel"/>
        </div>

      </div>
      <div>
        <img :src="casa.offside[0]" :alt="casa.nameModel" class="w-80 h-80 object-cover rounded-md" />
      </div>
    </div>
  </template>
  
  <style scoped>
  .flex-row-reverse {
      flex-direction: row-reverse;
  }
  </style>