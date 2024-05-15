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
    <div class=" flex items-center gap-1 ">
        <a-input class=" border border-buttons placeholder:italic " placeholder="Busque su casa..."  type="text" v-model:value="search" @pressEnter="handleSearch"/>
        <a-tooltip title="search">
        <a-button class=" flex justify-center items-center bg-buttons " type="primary" @click="handleSearch" :icon="h(SearchOutlined)"/> 
      </a-tooltip>
    </div>
</template>