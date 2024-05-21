<script setup>
import { ref, h } from 'vue';
import { BASE_URL } from '@/store/store';
import { message } from 'ant-design-vue';
import { DeleteOutlined } from '@ant-design/icons-vue'


import axios from 'axios';

const newCasa = ref({
    nameModel: "",
    description: "",
    price: 0,
    rooms: 0,
    bathroom: 0,
    dimensions: 0,
    blueprints: [],
    inside: [],
    offside: []
});

const handleBeforeUpload = file => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
        message.error('Solo puedes subir archivos JPG/PNG!');
    }
    return isJpgOrPng;
};

const handleCustomRequest = async ({ file }, type) => {
    const formData = new FormData();
    formData.append('image', file);
    const loadingMessage = message.loading('Subiendo imagen...', 0);
    try {
        const { data } = await axios.post(`${BASE_URL}images/`, formData);
        if (data) {
            message.success('Imagen subida exitosamente!');
            newCasa.value[type].push(data.imageUrl);
        }
    } catch (error) {
        message.error('Error al subir la imagen');
        console.error('Error:', error);
    } finally {
        loadingMessage();
    }
};

const removeImage = async (index) => {
    const imgToDelete = newCasa.value.blueprints[index];
    const loadingMessage = message.loading('Eliminando imagen...', 0);
    try {
        await axios.delete(`${BASE_URL}images/`, { data: { imageUrl: imgToDelete } });
        message.success('Imagen eliminada exitosamente!');
        newCasa.value.blueprints.splice(index, 1);

    } catch (error) {
        message.error('Error al eliminar la imagen');
        console.error(error)
    } finally {
        loadingMessage();
    }
};

const handleSubmit = () => {
    console.log(newCasa.value.blueprints);
    message.success(`El modelo "${newCasa.nameModel}" fue creado con exito`);
}
</script>

<template>
    <form class="flex flex-col gap-y-2 m-2" @keydown.enter.prevent @submit.prevent="handleSubmit">
        <label>Nombre: </label>
        <input class="border border-slate-400 px-2 py-1 rounded-md" type="text" name="nameModel"
            v-model="newCasa.nameModel">

        <label>Descripcion</label>
        <textarea name="description" class="border border-slate-400 px-2 py-1 rounded-md w-full" type="text"
            v-model="newCasa.description" cols="200" rows="5" @keydown.enter.prevent="false"></textarea>

        <label>Precio</label>
        <input class="border border-slate-400 px-2 py-1 rounded-md" type="number" step="any" name="price" min="0"
            v-model="newCasa.price">

        <label>Habitaciones</label>
        <input class="border border-slate-400 px-2 py-1 rounded-md" type="number" step="any" name="price" min="0"
            v-model="newCasa.rooms">

        <label>Baños</label>
        <input class="border border-slate-400 px-2 py-1 rounded-md" type="number" step="any" name="price" min="0"
            v-model="newCasa.bathroom">

        <label>Dimensiones</label>
        <input class="border border-slate-400 px-2 py-1 rounded-md" type="number" step="any" name="price" min="0"
            v-model="newCasa.dimensions">

        <a-upload class="full-width-button" :before-upload="handleBeforeUpload" :show-upload-list="false"
            :custom-request="options => handleCustomRequest(options, 'blueprints')">
            <a-button class="full-width-button-dashed">
                Click aquí para subir tus imágenes
            </a-button>
        </a-upload>

        <section class="flex flex-wrap gap-3 border  border-slate-400 rounded-md p-2"
            :class="{ ' border-none': !newCasa.blueprints.length }">
            <span class=" grid gap-y-1  rounded-md p-1" v-for="(img, index) in newCasa.blueprints" :key="index">
                <a-button class="full-width-button" type="primary" danger :icon="h(DeleteOutlined)"
                    @click="removeImage(index)" />
                <img class=" h-64 rounded-md" :src="img" :alt="`imagen ${index}`">
            </span>
        </section>

        <button type="submit">submit</button>
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