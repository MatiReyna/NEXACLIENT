<script setup>
import { useStore } from 'vuex';

const { dispatch } = useStore();

const props = defineProps({
    id: String,
    type: String,
})

const handleClick = () => {
    dispatch('getEdit', { type: props.type, id: props.id })
}; 
</script>

<template>
    <div>
        <button @click="handleClick">Editar</button>
    </div>
</template>
