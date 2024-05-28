<script setup>
import { ref } from 'vue';
import { BASE_URL } from '@/store/store';
import { message } from 'ant-design-vue';
import { useStore } from 'vuex';

import UploadImages from '../AdminElements/UploadImages.vue';
import validates from '../Validations/Validations';
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

const errors = ref({});

const { dispatch } = useStore();
const emit = defineEmits(['handleCreate'])

const handleEmit = (data, tipo) => {
    newCasa.value[tipo].push(data);
};

const handleDeleteImage = (tipo, index) => {
    newCasa.value[tipo].splice(index, 1);
};

const handleSubmit = async () => {
    errors.value = validates(newCasa.value);
    if (Object.keys(errors.value).length !== 0) {
        message.warn('Existen campos incorrectos o incompletos');
    }
    else {
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
};
</script>

<template>
    <form class="grid w-[80%] gap-y-2 mt-5 mb-9 mx-auto" @keydown.enter.prevent @submit.prevent="handleSubmit">
        <label>Nombre: </label>
        <input class="border border-slate-400 px-2 py-1 rounded-md" type="text" name="nameModel"
            v-model="newCasa.nameModel">
        <a-alert class=" rounded-md py-1 text-red-600 " v-if="errors.nameModel" type="error" :message="errors.nameModel"
            banner />

        <label>Precio: </label>
        <input class="border border-slate-400 px-2 py-1 rounded-md" type="number" step="any" name="price" min="0"
            v-model="newCasa.price">
        <a-alert class=" rounded-md py-1 text-red-600 " v-if="errors.price" type="error" :message="errors.price"
            banner />

        <label> Imagenes por fuera: </label>
        <a-alert class=" rounded-md py-1 text-red-600 " v-if="errors.offside" type="error" :message="errors.offside"
            banner />
        <UploadImages @handleEmit="handleEmit" @handleDeleteImage="handleDeleteImage" :images="newCasa.offside"
            :tipo="'offside'" />

        <label>Descripción: </label>
        <textarea name="description" class="border border-slate-400 px-2 py-1 rounded-md w-full" type="text"
            v-model="newCasa.description" cols="200" rows="5" @keydown.enter.prevent="false"></textarea>
        <a-alert class=" rounded-md py-1 text-red-600" v-if="errors.description" type="error"
            :message="errors.description" banner />

        <label>Habitaciones: </label>
        <input class="border border-slate-400 px-2 py-1 rounded-md" type="number" step="any" name="price" min="0"
            v-model="newCasa.rooms">
        <a-alert class=" rounded-md py-1 text-red-600 " v-if="errors.rooms" type="error" :message="errors.rooms"
            banner />

        <label>Baños: </label>
        <input class="border border-slate-400 px-2 py-1 rounded-md" type="number" step="any" name="price" min="0"
            v-model="newCasa.bathroom">
        <a-alert class=" rounded-md py-1 text-red-600" v-if="errors.bathroom" type="error" :message="errors.bathroom"
            banner />

        <label> Imagenes de dentro: </label>
        <a-alert class=" rounded-md py-1 text-red-600 " v-if="errors.inside" type="error" :message="errors.inside"
            banner />
        <UploadImages @handleEmit="handleEmit" @handleDeleteImage="handleDeleteImage" :images="newCasa.inside"
            :tipo="'inside'" />

        <label>Dimensiones m²: </label>
        <input class="border border-slate-400 px-2 py-1 rounded-md" type="number" step="any" name="price" min="0"
            v-model="newCasa.dimensions">
        <a-alert class=" rounded-md py-1 text-red-600 " v-if="errors.dimensions" type="error"
            :message="errors.dimensions" banner />

        <label> Planos: </label>
        <a-alert class=" rounded-md py-1 text-red-600 " v-if="errors.blueprints" type="error"
            :message="errors.blueprints" banner />
        <UploadImages @handleEmit="handleEmit" @handleDeleteImage="handleDeleteImage" :images="newCasa.blueprints"
            :tipo="'blueprints'" />

        <a-button type="primary" html-type="submit">Submit</a-button>
    </form>
</template>
