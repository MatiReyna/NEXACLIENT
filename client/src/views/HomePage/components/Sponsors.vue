<script setup>
</script>

<template>
    <div class="overflow-hidden relative h-40">
      <div class="flex animate-scroll">
        <img src="/stock-4.webp" alt="Brand 1" class="w-60 h-32 object-contain mx-4 rounded-lg shadow-md" />
        <img src="/stock-4.webp" alt="Brand 2" class="w-60 h-32 object-contain mx-4 rounded-lg shadow-md" />
        <img src="/stock-4.webp" alt="Brand 3" class="w-60 h-32 object-contain mx-4 rounded-lg shadow-md" />
        <img src="/stock-4.webp" alt="Brand 4" class="w-60 h-32 object-contain mx-4 rounded-lg shadow-md" />
        <img src="/stock-4.webp" alt="Brand 1" class="w-60 h-32 object-contain mx-4 rounded-lg shadow-md" />
        <img src="/stock-4.webp" alt="Brand 2" class="w-60 h-32 object-contain mx-4 rounded-lg shadow-md" />
        <img src="/stock-4.webp" alt="Brand 3" class="w-60 h-32 object-contain mx-4 rounded-lg shadow-md" />
        <img src="/stock-4.webp" alt="Brand 4" class="w-60 h-32 object-contain mx-4 rounded-lg shadow-md" />
      </div>
    </div>
</template>

<style scoped>
@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.animate-scroll {
  display: flex;
  animation: scroll 20s linear infinite;
}
</style>