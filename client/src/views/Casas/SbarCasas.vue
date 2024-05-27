<script setup>
import { SearchOutlined } from '@ant-design/icons-vue'
import { ref, h } from 'vue';
import { useStore } from 'vuex';

const search = ref("");
const { dispatch } = useStore();

const handleSearch = () => {
    dispatch('searchCasa', search.value);
    dispatch('changeCurrentpage', 1)
    dispatch('getAllCasas');
    search.value = "";
};

</script>

<template>
    <div class=" flex gap-1 w-[80%] md:w-1/2 p-3  ">
        <a-input class=" border border-buttons placeholder:italic " placeholder="Busque su casa..." type="text"
            v-model:value="search" @pressEnter="handleSearch" />
        <a-tooltip title="search">
            <a-button class=" flex justify-center items-center bg-buttons " type="primary" @click="handleSearch"
            ><SearchOutlined/></a-button>
        </a-tooltip>
    </div>
</template>