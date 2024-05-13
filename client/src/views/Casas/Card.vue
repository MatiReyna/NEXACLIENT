<script setup>
const props = defineProps({
    casa: Object
})
</script>

<template>
    <div>
        <h2>{{ casa.nameModel }}</h2>
        <h3>cantidad de habitaciones</h3>
        <h3>cantidad de baños</h3>
        <h3>metros cuadrados</h3>
        <img :src="casa.offside[0]" :alt="casa.nameModel" />
    </div>
</template>