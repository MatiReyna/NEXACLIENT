<script setup>
import { inject } from 'vue';

const emit = defineEmits(['switchDb']);

const handleDashboard = (value) => {
    emit('switchDb', value)
}

const currentDb = inject('currentDb')
</script>

<template>
<nav class="flex justify-center space-x-4">
    <button 
        class="py-2 px-4 rounded-md duration-200 w-[40%] border"
        :class="{ 'bg-buttons text-white': currentDb === 'casas', 'hover:bg-buttons hover:text-white border-buttons text-buttons ': currentDb === 'promos' }" 
        @click="handleDashboard('casas')">
        Casas
    </button>
    <button 
    class="py-2 px-4 rounded-md duration-200 w-[40%] border "
        :class="{ 'bg-buttons text-white': currentDb === 'promos', 'hover:bg-buttons hover:text-white border-buttons text-buttons ': currentDb === 'casas' }" 
        @click="handleDashboard('promos')">
        Promos
    </button>
</nav>
</template>