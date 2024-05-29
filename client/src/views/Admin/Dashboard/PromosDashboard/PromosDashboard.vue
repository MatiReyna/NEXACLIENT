<script setup>
import { ref } from 'vue';

import createPromos from './createPromos.vue';
import promosAdmView from './promosAdmView.vue';

const addPromo = ref(false);

</script>

<template>
    <div>
        <section class="flex justify-center md:justify-end  mt-4 md:mr-5">
            <button  @click="addPromo = !addPromo">
                <span v-if="!addPromo" class=" border border-titulos rounded-md px-4 py-2 text-buttons hover:text-white hover:bg-buttons "> + Añadir promo</span>
                <span v-else class=" border border-red-500 rounded-md px-4 py-2 text-buttons hover:text-white hover:bg-red-500 "> Cancelar </span>
            </button>
        </section>
        <createPromos v-if="addPromo" @handleCreate="addPromo = !addPromo" />
        <promosAdmView />
    </div>
</template>