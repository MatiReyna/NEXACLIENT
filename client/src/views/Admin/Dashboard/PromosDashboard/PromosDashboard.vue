<script setup>
    import { ref } from 'vue';

    import createPromos from './createPromos.vue';
    import promosAdmView from './promosAdmView.vue';

    const addPromo = ref(false);

    const handleCreate = () =>{
        addPromo.value = !addPromo.value
    };

</script>

<template>
    <div>
        <button @click="handleCreate">
            <span v-if="!addPromo"> Añadir promo</span>
            <span v-else> Cancelar </span>
        </button>
        <createPromos v-if="addPromo" @handleCreate="handleCreate"/>
        <promosAdmView/>
    </div>
</template>