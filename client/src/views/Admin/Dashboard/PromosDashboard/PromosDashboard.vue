<script setup>
    import { ref } from 'vue';

    import createPromos from './createPromos.vue';
    import promosAdmView from './promosAdmView.vue';

    const addPromo = ref(false);

</script>

<template>
    <div>
        <button class="flex justify-end mt-4 mr-4 right-0" @click="addPromo = !addPromo">
            <span v-if="!addPromo"> Añadir promo</span>
            <span v-else> Cancelar </span>
        </button>
        <createPromos v-if="addPromo" @handleCreate="addPromo = !addPromo"/>
        <promosAdmView/>
    </div>
</template>