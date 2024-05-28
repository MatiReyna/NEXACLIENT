<script setup>
import { computed } from 'vue';
import { message } from 'ant-design-vue';
import { ShareAltOutlined } from '@ant-design/icons-vue';
import Clipboard from 'clipboard';

const props = defineProps({
  id: String,
  modelName: String,
});

const url = computed(() => {
  const protocol = window.location.protocol;
  const host = window.location.host;

  return `${protocol}//${host}/detail/${props.id}`
});

const copyURL = () => {
  const clipboard = new Clipboard('.ant-btn', {
    text: () => url.value
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
    <a-button class=" flex justify-center items-center bg-blue-500 size-full px-6 py-4 rounded-md hover:bg-purple-700 transition duration-300" @click="copyURL" type="primary">
      <ShareAltOutlined class="text-sm md:text-xl " />
    </a-button>
</template>