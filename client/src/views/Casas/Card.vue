<script setup>
const props = defineProps({
    casa: Object
})
</script>

<template>
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
</template>