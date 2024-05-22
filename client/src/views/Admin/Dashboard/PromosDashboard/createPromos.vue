<script setup>
import { ref, h } from 'vue';
import { BASE_URL } from '@/store/store';
import { message } from 'ant-design-vue';
import { DeleteOutlined, InboxOutlined } from '@ant-design/icons-vue'
import { useStore } from 'vuex';

import axios from 'axios';

const { dispatch } = useStore();
const emit = defineEmits(['handleCreate']);

const newPromo = ref({
    name: "",
    url: "",
});

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
            newPromo.value.url = data.imageUrl;
        }
    } catch (error) {
        message.error('Error al subir la imagen');
        console.error('Error:', error);
    } finally {
        loadingMessage();
    }
};

const removeImage = async () => {
    const imgToDelete = newPromo.value.url
    const loadingMessage = message.loading('Eliminando imagen...', 0);
    try {
        await axios.delete(`${BASE_URL}images/`, { data: { imageUrl: imgToDelete } });
        message.success('Imagen eliminada exitosamente!');
        newPromo.value.url = "";
    } catch (error) {
        message.error('Error al eliminar la imagen');
        console.error(error)
    } finally {
        loadingMessage();
    }
};

const handleSubmit = async () => {
    try {
        await axios.post(`${BASE_URL}promos`, newPromo.value);
        message.success(`La promo "${newPromo.value.name}" fue creado con exito`);
        dispatch('getPromos');
        emit('handleCreate');
    } catch (error) {
        message.error('Error al cargar la promo');
        console.error(error)
    } finally {
        const loadingMessage = message.loading('Subiendo promocion...', 0);
        loadingMessage();
    }
}
</script>

<template>
    <form class="grid justify-center gap-y-2 m-2" @keydown.enter.prevent @submit.prevent="handleSubmit">
        <label>Nombre: </label>
        <input class="border border-slate-400 px-2 py-1 rounded-md placeholder:italic" placeholder="ejemplo: promo 1"
            type="text" name="nameModel" v-model="newPromo.name">

        <label>Imagen promocional: </label>
        
        <a-upload-dragger v-if="newPromo.url.trim() === ''" class=" p-5 -mt-2"
            :before-upload="handleBeforeUpload" :show-upload-list="false" :custom-request="handleCustomRequest">
            <p class="ant-upload-drag-icon">
                <InboxOutlined style="color: #7364d2" />
            </p>
            <p class="ant-upload-text">Haz clic o arrastra el archivo a esta área para subirlo</p>
            <p class="ant-upload-hint">
                Soporte para una carga individual. Solo se admiten archivos PNG o JPG.
            </p>
        </a-upload-dragger>

        <section v-else class=" grid justify-center gap-3 shadow-custom rounded-md p-4">
            <a-button class="full-width-button" type="primary" danger :icon="h(DeleteOutlined)"
                @click="removeImage()" />
            <a-image class="max-h-96 rounded-md " :src="newPromo.url" :alt="newPromo.url" />
        </section>
        <a-button type="primary" html-type="submit">Submit</a-button>
    </form>
</template>

<style scoped>
.full-width-button {
    width: 100%;
}
</style>