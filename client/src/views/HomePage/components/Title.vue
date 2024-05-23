<script setup>
const props = defineProps({
    subTitle: String,
    title: String
})
</script>

<template>
    <div class="text-center text-yellow-400 text-xs font-semibold uppercase my-7">
        <p>{{ subTitle }}</p>
        <h2 class="text-2xl mt-1 text-gray-700">{{ title }}</h2>
    </div>
</template>