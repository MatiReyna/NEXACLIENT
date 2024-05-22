<script setup>
import axios from 'axios';

import { useStore } from 'vuex';
import { BASE_URL } from '@/store/store';
import { message } from 'ant-design-vue';
import { h } from 'vue'
import { DeleteOutlined } from '@ant-design/icons-vue'

const props = defineProps({
    id: String,
    type: String,
    name: String,
})

const { dispatch } = useStore()
const handleClick = async () => {
    try {
        await axios.delete(`${BASE_URL}${props.type}/${props.id}`);
        if (props.type === 'casas') {
            dispatch('changeCurrentpage',1);
            dispatch('getAllCasas');
        }
        else { 
            dispatch('getPromos');
        }
        message.success(`El modelo "${props.name}" fue eliminado con exito`);
    } catch (error) {
        console.error(error)
    } finally{
        const loadingMessage = message.loading('Eliminando elemento...', 0);
        loadingMessage();
    }
}
</script>

<template>
        <a-popconfirm  title="¿Seguro que quieres eliminarlo?" ok-text="Si" cancel-text="No"
            @confirm="handleClick">
            <a-button class=" full-width-button flex justify-center items-center" type="primary" danger :icon="h(DeleteOutlined)" />
        </a-popconfirm>
</template>

<style scoped>
.full-width-button {
    width: 100%;
}
</style>