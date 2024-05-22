<script setup>
import DeleteButton from '../AdminElements/DeleteButton.vue';

const props = defineProps({
    promo: Object,
})
</script>

<template>
    <div class="flex flex-col items-center shadow-custom rounded-md p-4 hover:scale-95 transition-transform">
        <section class="w-full flex justify-end items-center">
            <DeleteButton :id="promo._id" :type="'promos'" :name="promo.name"/>
        </section>
        <h1 class="text-center text-xl font-bold mb-4">{{ promo.name }}</h1>
        <a-image class="max-h-96 rounded-md " :src="promo.url" :alt="promo.name"/>
    </div>
</template>
