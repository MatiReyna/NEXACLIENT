<script setup>
import { onMounted } from 'vue';
import { useStore } from 'vuex';

import SbarCasas from './SbarCasas.vue'
import Card from './Card.vue';

const { dispatch, state } = useStore();

onMounted(() => {
    dispatch('getAllCasas')
});

const handleChange = (page) => {
    window.scrollTo({
        top
    });
    dispatch('changeCurrentpage', page);
    dispatch('getAllCasas');
};

</script>

<template>
    <div class=" flex flex-col justify-center items-center gap-y-2 my-5">
        <SbarCasas />
        <Card v-for="(casa, index) in state.casas" :key="casa._id" :casa="casa" :order="index" />
        <a-pagination :current="state.currentPage" :total="state.totalPages * 10" :showSizeChanger="false"
            @change="handleChange" show-less-items />
    </div>
</template>
