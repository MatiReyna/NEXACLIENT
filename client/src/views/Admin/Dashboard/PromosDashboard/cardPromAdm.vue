<script setup>
import DeleteButton from '../Buttons/DeleteButton.vue';

const props = defineProps({
    promo: Object,
})
</script>

<template>
    <div>
        <DeleteButton :id="promo._id" :type="'promos'" :name="promo.name"/>
        <h1>{{ promo.name }}</h1>
         <img class="max-h-96 rounded-md" :src="promo.url" :alt="promo.name ">
    </div>
</template>
