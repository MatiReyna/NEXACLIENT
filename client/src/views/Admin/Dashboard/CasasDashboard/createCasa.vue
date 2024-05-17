<script setup>
import { ref } from 'vue';
import { BASE_URL } from '@/store/store';
import { message } from 'ant-design-vue';
// import {uploadOutlined} from '@ant-design/icons-vue'

import axios from 'axios';

const newCasa = ref({
    nameModel: "",
    description: "",
    price: 0,
    rooms: 0,
    bathroom: 0,
    dimensions: 0,
    blueprints: [""],
    inside: [""],
    offside: [""]
});


const imageUrls = ref([]);

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
try {
    const { data } = await axios.post(`${BASE_URL}images/`, formData);
    if (data) {
        message.success('Imagen subida exitosamente!');
        imageUrls.value.push( data.imageUrl); 
    }
} catch (error) {
    message.error('Error al subir la imagen');
    console.error('Error:', error);
}};

const removeImage = async (index) => {
    const imgToDelete = imageUrls.value[index];
    imageUrls.value.splice(index, 1);
    try {
        await axios.delete(`${BASE_URL}images/`, { data: { imageUrl: imgToDelete } });
        kitty.value.img = "";
        message.success('Imagen eliminada exitosamente!');
    } catch (error) {
        message.error('Error al eliminar la imagen');
        console.error(error)
    }
};

const handleSubmit = ()=>{
    console.log(newCasa.value);
    message.success(`El modelo "${newCasa.nameModel}" fue creado con exito`);
}
</script>

<template>
    <form class="flex flex-col gap-y-2 m-2" @submit.prevent="handleSubmit">
        <label>Nombre: </label>
        <input class="border border-slate-400 px-2 py-1 rounded-md" type="text" name="nameModel"
            v-model="newCasa.nameModel" @keydown.enter.prevent>

        <label>Descripcion</label>
        <textarea name="description" class="border border-slate-400 px-2 py-1 rounded-md w-full" type="text"
            v-model="newCasa.description"  cols="200" rows="5"></textarea>

        <label>Precio</label>
        <input class="border border-slate-400 px-2 py-1 rounded-md" type="number" step="any" name="price" min="0"
            v-model="newCasa.price"  @keydown.enter.prevent>

        <label>Habitaciones</label>
        <input class="border border-slate-400 px-2 py-1 rounded-md" type="number" step="any" name="price" min="0"
            v-model="newCasa.rooms"  @keydown.enter.prevent>

        <label>Baños</label>
        <input class="border border-slate-400 px-2 py-1 rounded-md" type="number" step="any" name="price" min="0"
            v-model="newCasa.bathroom"  @keydown.enter.prevent>

        <label>Dimensiones</label>
        <input class="border border-slate-400 px-2 py-1 rounded-md" type="number" step="any" name="price" min="0"
            v-model="newCasa.dimensions"  @keydown.enter.prevent>

        <a-upload :before-upload="handleBeforeUpload" :custom-request="handleCustomRequest" >
            <a-button>
                <!-- <uploadOutlined/> -->
      Click to Upload
    </a-button>
        </a-upload v-model:imageUrls="imageUrls">

        <button type="submit">submit</button>
    </form>
</template>