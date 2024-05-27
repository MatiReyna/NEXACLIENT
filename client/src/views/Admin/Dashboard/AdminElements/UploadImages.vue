<script setup>
import { DeleteOutlined, InboxOutlined } from '@ant-design/icons-vue'
import { h } from 'vue';
import { BASE_URL } from '@/store/store';
import { message } from 'ant-design-vue';

import axios from 'axios';

const props = defineProps({
    images: Array,
    tipo: String
});

const emit = defineEmits(['handleEmit', 'handleDeleteImage'])

const handleBeforeUpload = file => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
        message.error('Solo puedes subir archivos JPG/PNG!');
    }
    return isJpgOrPng;
};

const handleCustomRequest = async ({ file }) => {
    const formData = new FormData();
    formData.append('image', file);
    const loadingMessage = message.loading('Subiendo imagen...', 0);
    try {
        const { data } = await axios.post(`${BASE_URL}images/`, formData);
        if (data) {
            message.success('Imagen subida exitosamente!');
            emit('handleEmit', data.imageUrl, props.tipo)
        }
    } catch (error) {
        message.error('Error al subir la imagen');
        console.error('Error:', error);
    } finally {
        loadingMessage();
    }
};

const removeImage = async (index) => {
    const imgToDelete = props.images[index];
    const loadingMessage = message.loading('Eliminando imagen...', 0);
    try {
        await axios.delete(`${BASE_URL}images/`, { data: { imageUrl: imgToDelete } });
        message.success('Imagen eliminada exitosamente!');
        emit('handleDeleteImage', props.tipo, index);
    } catch (error) {
        message.error('Error al eliminar la imagen');
        console.error(error)
    } finally {
        loadingMessage();
    }
};

</script>

<template>
    <div class="grid">
        <a-upload-dragger class="max-h-36" :before-upload="handleBeforeUpload" :show-upload-list="false"
            :custom-request="handleCustomRequest">
            <p class="ant-upload-drag-icon">
                <InboxOutlined style="color: #7364d2" />
            </p>
            <p class="ant-upload-text">Haz clic o arrastra el archivo a esta área para subirlo</p>
            <p class="ant-upload-hint">
                Soporte para una carga individual. Solo se admiten archivos PNG o JPG.
            </p>
        </a-upload-dragger>

        <section v-if="images.length" class="flex flex-wrap gap-3 rounded-md p-2">
            <a-image-preview-group>
                <span class=" grid gap-y-1  rounded-md p-2 shadow-custom" v-for="(img, index) in images" :key="index">
                    <a-button class="full-width-button" type="primary" danger :icon="h(DeleteOutlined)"
                        @click="removeImage(index)" />
                    <a-image class=" max-h-72 rounded-md" :src="img" :alt="`imagen ${index}`" />
                </span>
            </a-image-preview-group>
        </section>
    </div>
</template>

<style scoped>
.full-width-button {
    width: 100%;
}
</style>