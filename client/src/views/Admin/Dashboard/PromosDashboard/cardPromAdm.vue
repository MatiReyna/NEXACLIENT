<script setup>
import DeleteButton from '../AdminElements/DeleteButton.vue';

const props = defineProps({
    promo: Object,
    order: Number,
})
</script>

<template>
    <span :class="{'animate-fadeButton': order % 2 === 0, 'animate-fadeTop': order % 2 !== 0}">
    <div class="flex flex-col items-center shadow-custom rounded-md p-4 hover:scale-105 transition-transform">
        <section class="w-full flex justify-end items-center">
            <DeleteButton :id="promo._id" :type="'promos'" :name="promo.name"/>
        </section>
        <h1 class="text-center text-2xl font-bold text-titulos my-2">{{ promo.name }}</h1>
        <a-image class="max-h-96 rounded-md " :src="promo.url" :alt="promo.name"/>
    </div>
</span>
</template>

<style scoped>
@keyframes fadeTop {
  from {
    opacity: 0;
    transform: translateY(25px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeButton {
  from {
    opacity: 0;
    transform: translateY(-25px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fadeButton {
  animation: fadeButton 1.5s forwards;
  transition: transform 0.3s ease;
}

.animate-fadeTop {
  animation: fadeTop 1.5s forwards;
  transition: transform 0.3s ease;
}
</style>
