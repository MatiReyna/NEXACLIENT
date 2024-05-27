<script setup>
import { computed } from 'vue';
import { WhatsAppOutlined } from '@ant-design/icons-vue';

const props = defineProps({
    id: String,
});

const phone = "+5491155689815";

const url = computed(() => {
    const protocol = window.location.protocol;
    const host = window.location.host;

    return `${protocol}//${host}/detail/${props.id}`
})

let mensajeWhatsApp = computed(() => `¡Hola!

Me llamó mucho la atención el modelo ${url.value} 

Me gustaría saber más sobre este modelo: precio, características y tiempo de entrega. También me interesa si ofrecen financiamiento o si hay alguna promoción disponible

Gracias y espero su respuesta `);

const handleClick = () => {
    const message = encodeURI(mensajeWhatsApp.value)
    const AppUrl = `https://wa.me/${phone}?text=${message}`;
    window.open(AppUrl, '_blank');
};


</script>

<template>

    <button
        class=" flex justify-center items-center text-sm md:text-base gap-1 bg-green-400 text-white size-full px-6 py-4 rounded-md hover:bg-purple-700 transition duration-300"
        @click="handleClick">
        <WhatsAppOutlined />Hablanos
    </button>
</template>
