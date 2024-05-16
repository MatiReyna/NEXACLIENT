<script setup>
import { ref } from 'vue';
import { BASE_URL } from '@/store/store';
import { message } from 'ant-design-vue';

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

const handleSubmit = (event)=>{
    event.preventDefault();
    console.log(newCasa.value);
    message.success(`El modelo "${newCasa.nameModel}" fue creado con exito`);
}
</script>

<template>
    <form class="flex flex-col gap-y-2 m-2" @submit="handleSubmit">
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

        <button type="submit">submit</button>
    </form>
</template>