<script setup>
import Hero from '../components/Hero.vue';
import About from '../components/About.vue';
import Sponsors from '../components/Sponsors.vue';
import Galery from '../components/Galery.vue';
import Title from '../components/Title.vue';
</script>

<template class="containerHomePage">
    <Hero />
    <div>
        <Title :subTitle="'SPONSORS'" :title="'Las marcas que confian en nosotros'" />
        <Sponsors />
        <Title :subTitle="'Te mostramos nuestras instalaciones'" :title="'Sobre Nosotros'" />
        <About id="about" />
        <Title :subTitle="'GALLERY'" :title="'Algunas muestras'" />
        <Galery />
    </div>
</template>

<style scoped>
.containerHomePage {
    padding-left: 10%;
    padding-right: 10%;
}
</style>