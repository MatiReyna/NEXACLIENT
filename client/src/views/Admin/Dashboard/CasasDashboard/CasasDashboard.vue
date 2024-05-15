<script setup>
import { ref } from 'vue';

import createCasa from './createCasa.vue';
import Casas from '@/views/Casas/Casas.vue';

const addCasa = ref(false);


const handlercreate = () => {
    addCasa.value = !addCasa.value
};

</script>

<template>
    <div>
        <button @click="handlercreate">
            <span v-if="!addCasa"> Añadir Casa</span>
            <span v-else> Cancelar </span>
        </button>
        <createCasa v-if="addCasa"/>
        <Casas v-else/>
    </div>
</template>