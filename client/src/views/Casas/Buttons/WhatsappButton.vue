<script setup>
import { h } from 'vue';
import { WhatsAppOutlined } from '@ant-design/icons-vue';

const props = defineProps({
    url : String,
})

const phone = "+5491155689815";

const mensajeWhatsApp = `¡Hola!

Me llamó mucho la atención el modelo ${props.url} 

Me gustaría saber más sobre este modelo: precio, características y tiempo de entrega. También me interesa si ofrecen financiamiento o si hay alguna promoción disponible

Gracias y espero su respuesta `;

const handleClick = () => {
    const url = `https://wa.me/${phone}?text=${encodeURI(mensajeWhatsApp)}`;
    window.open(url, '_blank');
};


</script>

<template>
    <div class="px-6 py-3 rounded-md">
        <a-button class=" flex justify-center items-center bg-green-400 " type="primary" :icon="h(WhatsAppOutlined)" @click="handleClick"/>
    </div>
</template>
