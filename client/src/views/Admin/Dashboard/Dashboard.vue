<script setup>
import NavAdmin from "./NavAdmin/NavAdmin.vue";
import PromosDashboard from "./PromosDashboard/PromosDashboard.vue";
import CasasDasboard from "./CasasDashboard/CasasDashboard.vue"
import { ref, provide, onMounted } from 'vue';

const currentDb = ref("casas");
provide('currentDb', currentDb)

const switchDb = (dashboard) => {
   currentDb.value = dashboard;
   sessionStorage.setItem('dashboard',dashboard);
}; 

onMounted(()=>{
   currentDb.value = sessionStorage.getItem('dashboard') || 'casas'
})

</script>

<template>
   <div>
    <NavAdmin @switchDb="switchDb"/>
    <CasasDasboard v-if="currentDb === 'casas'"/>
    <PromosDashboard v-if="currentDb === 'promos'"/>
   </div>
</template>