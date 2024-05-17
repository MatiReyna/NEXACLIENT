<script setup>
import { onMounted } from 'vue';
import { useStore } from 'vuex';

import SbarCasas from './SbarCasas.vue'
import Card from './Card.vue';

const store = useStore();

onMounted(() => {
    store.dispatch('getAllCasas')
});

const handleChange = (page) => {
    store.dispatch('changeCurrentpage', page)
    store.dispatch('getAllCasas')
};

</script>

<template>
    <div class=" flex flex-col justify-center items-center gap-y-2 my-4">
        <SbarCasas/>
        <Card v-for="(casa, index) in store.state.casas" :key="index" :casa="casa" :order="index" />
        <a-pagination :current="store.state.currentPage" :total="store.state.totalPages * 10" :showSizeChanger="false"
            @change="handleChange" show-less-items />
    </div>
</template>