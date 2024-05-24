<script setup>
import { computed, h } from 'vue';
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

let mensajeWhatsApp = computed(() =>`¡Hola!

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
    <div class="px-6 py-3 rounded-md">
        <a-button class=" flex justify-center items-center bg-green-400 " type="primary" :icon="h(WhatsAppOutlined)"
            @click="handleClick" />
    </div>
</template>
