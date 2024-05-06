<script setup>
import { defineEmits, inject } from 'vue';

const emit = defineEmits(['switchDb']);

const handleDashboad = (value) => {
    emit('switchDb', value)
}

const currentDb = inject('currentDb')
</script>

<template>
    <nav>
        <a-button :class="{ 'bg-buttons': currentDb === 'casas' }" 
        @click="handleDashboad('casas')">
            Casas
        </a-button>
        <a-button :class="{ 'bg-buttons': currentDb === 'promos' }" 
        @click="handleDashboad('promos')">
            Promos
        </a-button>
    </nav>
</template>