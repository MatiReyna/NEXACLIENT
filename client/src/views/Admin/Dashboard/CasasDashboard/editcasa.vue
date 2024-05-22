<script setup>
import { ref, onMounted } from 'vue';
import { useStore } from 'vuex'
import { BASE_URL } from '@/store/store';

import axios from 'axios';

const editCasa = ref({nameModel: "",
    description: "",
    price: 0,
    rooms: 0,
    bathroom: 0,
    dimensions: 0,
    blueprints: [],
    inside: [],
    offside: []});

const { state, dispatch } = useStore();

onMounted(()=>{
    editCasa.value = state.edit;
});

</script>

<template>
    <button @click="dispatch('cancelEdit')">Cancelar</button>
    <form class="flex flex-col gap-y-2 m-2">
        <label>Nombre: </label>
        <input class="border border-slate-400 px-2 py-1 rounded-md" type="text" name="nameModel"
            v-model="editCasa.nameModel"  @keydown.enter.prevent>

        <label>Descripcion</label>
        <textarea name="description" class="border border-slate-400 px-2 py-1 rounded-md w-full" type="text"
            v-model="editCasa.description"  cols="200" rows="5"></textarea>

        <label>Precio</label>
        <input class="border border-slate-400 px-2 py-1 rounded-md" type="number" step="any" name="price" min="0"
            v-model="editCasa.price"  @keydown.enter.prevent>

        <label>Habitaciones</label>
        <input class="border border-slate-400 px-2 py-1 rounded-md" type="number" step="any" name="price" min="0"
            v-model="editCasa.rooms"  @keydown.enter.prevent>

        <label>Baños</label>
        <input class="border border-slate-400 px-2 py-1 rounded-md" type="number" step="any" name="price" min="0"
            v-model="editCasa.bathroom"  @keydown.enter.prevent>

        <label>Dimensiones</label>
        <input class="border border-slate-400 px-2 py-1 rounded-md" type="number" step="any" name="price" min="0"
            v-model="editCasa.dimensions"  @keydown.enter.prevent>
    </form>
</template>

