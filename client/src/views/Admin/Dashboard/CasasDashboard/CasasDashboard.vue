<script setup>
import { ref } from 'vue';
import { useStore } from 'vuex'

import createCasa from './createCasa.vue';
import editcasa from './editcasa.vue'
import Casas from '@/views/Casas/Casas.vue';

const addCasa = ref(false);
const { state } = useStore();

</script>

<template>
    <div>
        <section class="flex justify-center md:justify-end mt-4 md:mr-5">
            <button v-if="!state.edit.nameModel" @click="addCasa = !addCasa" >
                <span v-if="!addCasa" class=" border border-titulos rounded-md px-4 py-2 text-buttons hover:text-white hover:bg-buttons "> + Añadir Casa</span>
                <span v-else class=" border border-red-500 rounded-md px-4 py-2 text-buttons hover:text-white hover:bg-red-500 "> Cancelar </span>
            </button>
        </section>
        <createCasa v-if="addCasa" @handleCreate="addCasa = !addCasa" />
        <editcasa v-if="state.edit.nameModel"/>
        <Casas v-if="!addCasa  && !state.edit.nameModel" />
    </div>
</template>