<script setup>
import { ref } from 'vue';
import { useStore } from 'vuex'

import createCasa from './createCasa.vue';
import editcasa from './editcasa.vue'
import Casas from '@/views/Casas/Casas.vue';

const addCasa = ref(false);
const { state } = useStore();

const handlercreate = () => {
    addCasa.value = !addCasa.value
};


</script>

<template>
    <div>
        <button v-if="!state.edit.nameModel" @click="handlercreate">
            <span v-if="!addCasa"> Añadir Casa</span>
            <span v-else> Cancelar </span>
        </button>
        <createCasa v-if="addCasa" />
        <editcasa v-if="state.edit.nameModel"/>
        <Casas v-if="!addCasa  && !state.edit.nameModel" />
    </div>
</template>