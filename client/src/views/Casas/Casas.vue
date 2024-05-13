<script setup>
import { onMounted } from 'vue';
import { useStore } from 'vuex';
import Card from './Card.vue';

const store = useStore();

onMounted(
    async () => {
        try {
            await store.dispatch('getAllCasas')
        } catch (error) {
            console.error(error)
        }
    }
)
</script>

<template>
    <div>
        <Card v-for="(casa, index) in store.state.casas" :key="index" :casa="casa" />
    </div>
</template>