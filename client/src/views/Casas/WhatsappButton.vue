<script setup>
    import { h } from 'vue';
    import { WhatsAppOutlined } from '@ant-design/icons-vue';
    
</script>

<template>
    <a-button>  
        <a-button class="  flex justify-center items-center bg-green-400" type="primary" :icon="h(WhatsAppOutlined)" />
    </a-button>
</template>
