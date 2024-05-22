<script setup>
import { onMounted } from 'vue';
import { useStore } from 'vuex';

import cardPromAdm from './cardPromAdm.vue';

const { dispatch, state } = useStore();

onMounted(() => {
    dispatch('getPromos');
});

</script>

<template>
    <div class=" flex flex-wrap justify-center gap-5 p-5">
        <a-image-preview-group>
            <cardPromAdm v-for="(p, index) in state.promos" :promo="p" :key="index" />
        </a-image-preview-group>
    </div>
</template>