<script setup>
import { ref, onMounted } from 'vue';
import { useStore } from 'vuex'
import { BASE_URL } from '@/store/store';
import { message } from 'ant-design-vue';

import UploadImages from '../AdminElements/UploadImages.vue';
import axios from 'axios';

const editCasa = ref({
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

const { state, dispatch } = useStore();

const handleEmit = (data, tipo) => {
    editCasa.value[tipo].push(data);
};

const handleDeleteImage = (tipo, index) => {
    editCasa.value[tipo].splice(index, 1);
};

const handleSubmit = async () => {
    try {
        await axios.put(`${BASE_URL}casas/${editCasa.value._id}`, editCasa.value);
        message.success(`El modelo "${editCasa.value.nameModel}" fue creado con exito`);
        dispatch('cancelEdit')
        dispatch('getAllCasas');
    } catch (error) {
        message.error('Error al subir la imagen');
        console.error('Error:', error);
    } finally {
        const loadingMessage = message.loading('Subiendo promocion...', 0);
        loadingMessage();
    }
};

onMounted(() => {
    editCasa.value = state.edit;
});

</script>

<template>
    <button @click="dispatch('cancelEdit')">Cancelar</button>
    <form class="grid justify-center gap-y-2 m-2" @submit.prevent="handleSubmit">
        <label>Nombre: </label>
        <input class="border border-slate-400 px-2 py-1 rounded-md" type="text" name="nameModel"
            v-model="editCasa.nameModel" @keydown.enter.prevent>

        <label>Precio</label>
        <input class="border border-slate-400 px-2 py-1 rounded-md" type="number" step="any" name="price" min="0"
            v-model="editCasa.price" @keydown.enter.prevent>

        <label> Imagenes por fuera: </label>
        <UploadImages @handleEmit="handleEmit" @handleDeleteImage="handleDeleteImage" :images="editCasa.offside"
            :tipo="'offside'" />

        <label>Descripcion</label>
        <textarea name="description" class="border border-slate-400 px-2 py-1 rounded-md w-full" type="text"
            v-model="editCasa.description" cols="200" rows="5"></textarea>


        <label>Habitaciones</label>
        <input class="border border-slate-400 px-2 py-1 rounded-md" type="number" step="any" name="price" min="0"
            v-model="editCasa.rooms" @keydown.enter.prevent>

        <label>Baños</label>
        <input class="border border-slate-400 px-2 py-1 rounded-md" type="number" step="any" name="price" min="0"
            v-model="editCasa.bathroom" @keydown.enter.prevent>

        <label> Imagenes de dentro: </label>
        <UploadImages @handleEmit="handleEmit" @handleDeleteImage="handleDeleteImage" :images="editCasa.inside"
            :tipo="'inside'" />


        <label>Dimensiones</label>
        <input class="border border-slate-400 px-2 py-1 rounded-md" type="number" step="any" name="price" min="0"
            v-model="editCasa.dimensions" @keydown.enter.prevent>


        <label> Planos: </label>
        <UploadImages @handleEmit="handleEmit" @handleDeleteImage="handleDeleteImage" :images="editCasa.blueprints"
            :tipo="'blueprints'" />

        <a-button type="primary" html-type="submit">Submit</a-button>
    </form>
</template>
