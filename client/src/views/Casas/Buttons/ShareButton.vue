<script setup>
import { h } from 'vue';
import { message } from 'ant-design-vue';
import { ShareAltOutlined } from '@ant-design/icons-vue';
import Clipboard from 'clipboard';

const props = defineProps({
    url : String,
    modelName: String,
});


const copyURL = () => {
  const clipboard = new Clipboard('.ant-btn', {
    text: () => props.url
  });

  clipboard.on('success', () => {
    message.success(`¡Modelo ${props.modelName} copiado al portapapeles!`);
    clipboard.destroy();
  });

  clipboard.on('error', () => {
    message.error('Error al copiar la URL.');
    clipboard.destroy();
  });
};

</script>

<template>
         <a-button class=" flex justify-center items-center bg-blue-500" @click="copyURL" type="primary" :icon="h(ShareAltOutlined)"> Compartir </a-button>
</template>