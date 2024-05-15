<script setup>
import { SearchOutlined } from '@ant-design/icons-vue'
import { ref, h } from 'vue';
import { useStore } from 'vuex';

const search = ref("");
const store = useStore();

const handleSearch = ()=>{
    store.dispatch('searchCasa',search.value);
    store.dispatch('changeCurrentpage', 1)
    store.dispatch('getAllCasas');
    search.value = "";
};

</script>

<template>
    <div class=" flex items-center">
        <input class=" border border-black px-2 py-0.5"  type="text" v-model="search" @keydown.enter="handleSearch">
        <a-tooltip title="search">
        <a-button class=" text-center bg-buttons rounded-l-none py-0.5" type="primary" @click="handleSearch" :icon="h(SearchOutlined)"/> 
      </a-tooltip>
    </div>
</template>