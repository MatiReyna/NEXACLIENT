<script setup>
    import { ref } from 'vue';

    import createPromos from './createPromos.vue';
    import promosAdmView from './promosAdmView.vue';

    const addPromo = ref(false);

</script>

<template>
    <div>
        <button @click="addPromo = !addPromo">
            <span v-if="!addPromo"> Añadir promo</span>
            <span v-else> Cancelar </span>
        </button>
        <createPromos v-if="addPromo" @handleCreate="addPromo = !addPromo"/>
        <promosAdmView/>
    </div>
</template>