<script setup>
import LogIn from './LogIn/LogIn.vue';
import Dashboard from './Dashboard/Dashboard.vue';
import { ref, onMounted } from 'vue';

const userLoggedIn = ref(false);

const loginUser = (online) => {
    userLoggedIn.value = online;
    sessionStorage.setItem('user', JSON.stringify({ loggedIn: online }));
};

onMounted(() => {
    userLoggedIn.value = sessionStorage.getItem('user') || false
});

</script>

<template>
    <LogIn v-if="!userLoggedIn" @login="loginUser" />
    <Dashboard v-else />
</template>