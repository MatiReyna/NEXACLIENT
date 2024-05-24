<script setup>
import { ref } from 'vue';
import { BASE_URL } from '@/store/store';
import { message } from 'ant-design-vue';
import { useStore } from 'vuex';

import UploadImages from '../AdminElements/UploadImages.vue';
import axios from 'axios';

const newCasa = ref({
    nameModel: "",
    description: "",
    price: 0,
    rooms: 0,
    bathroom: 0,
    dimensions: 0,
    inside: [],
    blueprints: [],
    offside: [],
});

const { dispatch } = useStore();
const emit = defineEmits(['handleCreate'])

const handleEmit = (data, tipo) => {
    newCasa.value[tipo].push(data);
};

const handleDeleteImage = (tipo, index) => {
    newCasa.value[tipo].splice(index, 1);
};

const handleSubmit = async () => {
    try {
        await axios.post(`${BASE_URL}casas`, newCasa.value);
        message.success(`El modelo "${newCasa.value.nameModel}" fue creado con exito`);
        dispatch('getAllCasas');
        emit('handleCreate');
    } catch (error) {
        message.error('Error al subir la imagen');
        console.error('Error:', error);
    } finally {
        const loadingMessage = message.loading('Subiendo promocion...', 0);
        loadingMessage();
    }
}
</script>

<template>
    <form class="grid justify-center gap-y-2 mt-5 mb-9" @keydown.enter.prevent @submit.prevent="handleSubmit">
        <label>Nombre: </label>
        <input class="border border-slate-400 px-2 py-1 rounded-md" type="text" name="nameModel"
            v-model="newCasa.nameModel">

        <label>Precio</label>
        <input class="border border-slate-400 px-2 py-1 rounded-md" type="number" step="any" name="price" min="0"
            v-model="newCasa.price">

        <label> Imagenes por fuera: </label>
        <UploadImages @handleEmit="handleEmit" @handleDeleteImage="handleDeleteImage" :images="newCasa.offside"
            :tipo="'offside'" />

        <label>Descripcion</label>
        <textarea name="description" class="border border-slate-400 px-2 py-1 rounded-md w-full" type="text"
            v-model="newCasa.description" cols="200" rows="5" @keydown.enter.prevent="false"></textarea>

        <label>Habitaciones</label>
        <input class="border border-slate-400 px-2 py-1 rounded-md" type="number" step="any" name="price" min="0"
            v-model="newCasa.rooms">

        <label>Baños</label>
        <input class="border border-slate-400 px-2 py-1 rounded-md" type="number" step="any" name="price" min="0"
            v-model="newCasa.bathroom">

        <label> Imagenes de dentro: </label>
        <UploadImages @handleEmit="handleEmit" @handleDeleteImage="handleDeleteImage" :images="newCasa.inside"
            :tipo="'inside'" />

        <label>Dimensiones</label>
        <input class="border border-slate-400 px-2 py-1 rounded-md" type="number" step="any" name="price" min="0"
            v-model="newCasa.dimensions">

        <label> Planos: </label>
        <UploadImages @handleEmit="handleEmit" @handleDeleteImage="handleDeleteImage" :images="newCasa.blueprints"
            :tipo="'blueprints'" />

        <a-button type="primary" html-type="submit">Submit</a-button>
    </form>
</template>
