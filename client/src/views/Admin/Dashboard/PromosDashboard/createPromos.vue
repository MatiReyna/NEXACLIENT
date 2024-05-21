<script setup>
import { ref, h } from 'vue';
import { BASE_URL } from '@/store/store';
import { message } from 'ant-design-vue';
import { DeleteOutlined } from '@ant-design/icons-vue'
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
        message.success(`La promo "${newPromo.name}" fue creado con exito`);
        dispatch('getPromos');
        emit('handleCreate')
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
        <input class="border border-slate-400 px-2 py-1 rounded-md" type="text" name="nameModel"
            v-model="newPromo.name">

        <a-upload v-if="newPromo.url.trim() === ''" class="full-width-button" :before-upload="handleBeforeUpload"
            :show-upload-list="false" :custom-request="handleCustomRequest">
            <a-button class="full-width-button-dashed">
                Click aquí para subir tu imágen
            </a-button>
        </a-upload>
        <section v-else class=" grid justify-center gap-3 p-2">
            <a-button class="full-width-button" type="primary" danger :icon="h(DeleteOutlined)"
                @click="removeImage()" />
            <img class="max-h-96 rounded-md" :src="newPromo.url" :alt="newPromo.url">
        </section>
        <button type="submit">Submit</button>
    </form>
</template>

<style scoped>
.full-width-button {
    width: 100%;
}

.full-width-button-dashed {
    width: 100%;
    border-style: dashed;
}
</style>