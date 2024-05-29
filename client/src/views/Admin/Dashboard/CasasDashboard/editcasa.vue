<script setup>
import { ref, onMounted } from 'vue';
import { useStore } from 'vuex'
import { BASE_URL } from '@/store/store';
import { message } from 'ant-design-vue';

import UploadImages from '../AdminElements/UploadImages.vue';
import validates from '../Validations/Validations';
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

const errors = ref({});

const { state, dispatch } = useStore();

const handleEmit = (data, tipo) => {
    editCasa.value[tipo].push(data);
};

const handleDeleteImage = (tipo, index) => {
    editCasa.value[tipo].splice(index, 1);
};

const handleSubmit = async () => {
    errors.value = validates(editCasa.value);
    if (Object.keys(errors.value).length !== 0) {
        message.warn('Existen campos incorrectos o incompletos');
    }
    else {
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
    }
};

onMounted(() => {
    editCasa.value = state.edit;
});

</script>

<template>
    <section class="flex justify-center md:justify-end m-3 md:mr-5">
        <button @click="dispatch('cancelEdit')"
            class=" border border-red-500 rounded-md px-4 py-2 text-buttons hover:text-white hover:bg-red-500 ">Cancelar</button>
    </section>

    <form class="grid justify-center gap-y-2 m-2" @submit.prevent="handleSubmit">
        <label>Nombre: </label>
        <input class="border border-slate-400 px-2 py-1 rounded-md" type="text" name="nameModel"
            v-model="editCasa.nameModel" @keydown.enter.prevent>
        <a-alert class=" rounded-md py-1 text-red-600 " v-if="errors.nameModel" type="error" :message="errors.nameModel"
            banner />

        <label>Precio</label>
        <input class="border border-slate-400 px-2 py-1 rounded-md" type="number" step="any" name="price" min="0"
            v-model="editCasa.price" @keydown.enter.prevent>
        <a-alert class=" rounded-md py-1 text-red-600 " v-if="errors.price" type="error" :message="errors.price"
            banner />

        <label> Imagenes por fuera: </label>
        <a-alert class=" rounded-md py-1 text-red-600 " v-if="errors.offside" type="error" :message="errors.offside"
            banner />
        <UploadImages @handleEmit="handleEmit" @handleDeleteImage="handleDeleteImage" :images="editCasa.offside"
            :tipo="'offside'" />

        <label>Descripcion</label>
        <textarea name="description" class="border border-slate-400 px-2 py-1 rounded-md w-full" type="text"
            v-model="editCasa.description" cols="200" rows="5"></textarea>
        <a-alert class=" rounded-md py-1 text-red-600" v-if="errors.description" type="error"
            :message="errors.description" banner />

        <label>Habitaciones</label>
        <input class="border border-slate-400 px-2 py-1 rounded-md" type="number" step="any" name="price" min="0"
            v-model="editCasa.rooms" @keydown.enter.prevent>
        <a-alert class=" rounded-md py-1 text-red-600 " v-if="errors.rooms" type="error" :message="errors.rooms"
            banner />

        <label>Baños</label>
        <input class="border border-slate-400 px-2 py-1 rounded-md" type="number" step="any" name="price" min="0"
            v-model="editCasa.bathroom" @keydown.enter.prevent>
        <a-alert class=" rounded-md py-1 text-red-600" v-if="errors.bathroom" type="error" :message="errors.bathroom"
            banner />

        <label> Imagenes de dentro: </label>
        <a-alert class=" rounded-md py-1 text-red-600 " v-if="errors.inside" type="error" :message="errors.inside"
            banner />
        <UploadImages @handleEmit="handleEmit" @handleDeleteImage="handleDeleteImage" :images="editCasa.inside"
            :tipo="'inside'" />

        <label>Dimensiones</label>
        <input class="border border-slate-400 px-2 py-1 rounded-md" type="number" step="any" name="price" min="0"
            v-model="editCasa.dimensions" @keydown.enter.prevent>
        <a-alert class=" rounded-md py-1 text-red-600 " v-if="errors.dimensions" type="error"
            :message="errors.dimensions" banner />

        <label> Planos: </label>
        <a-alert class=" rounded-md py-1 text-red-600 " v-if="errors.blueprints" type="error"
            :message="errors.blueprints" banner />
        <UploadImages @handleEmit="handleEmit" @handleDeleteImage="handleDeleteImage" :images="editCasa.blueprints"
            :tipo="'blueprints'" />

        <a-button type="primary" html-type="submit">Submit</a-button>
    </form>
</template>
