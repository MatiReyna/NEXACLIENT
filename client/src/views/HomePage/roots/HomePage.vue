<script setup>
import Hero from '../components/Hero.vue';
import About from '../components/About.vue';
import Sponsors from '../components/Sponsors.vue';
import Galery from '../components/Galery.vue';
import Title from '../components/Title.vue';
import { onMounted } from 'vue';

onMounted(()=>{
    window.scrollTo({
        top
    });
})
</script>

<template class="containerHomePage">
    <Hero />
    <div class="space-y-32">
        <div>
            <Title :subTitle="'Sponsors & marcas'" :title="'Las marcas que confian en nosotros'" />
            <Sponsors />
        </div>
        <span id="about" />
        <div>
            <Title :subTitle="'Te mostramos nuestras instalaciones'" :title="'Sobre Nosotros'" />
            <About />
        </div>
        <div>
            <Title :subTitle="'Entregas y promociones'" :title="'Algunas muestras'" />
            <Galery />
        </div>
    </div>
</template>

<style scoped>
.containerHomePage {
    padding-left: 10%;
    padding-right: 10%;
    padding-top: 2rem;
    padding-bottom: 2rem;
}
</style>