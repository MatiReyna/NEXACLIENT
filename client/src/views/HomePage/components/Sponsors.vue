<script setup>
</script>

<template>
  <div class="overflow-hidden relative h-40">
      <div class="flex animate-scroll">
          <img src="/belgrano.png" alt="Brand 1" class="w-64 h-32 object-cover mx-4 rounded-md filter grayscale" />
          <img src="/coca.png" alt="Brand 2" class="w-64 h-32 object-cover mx-4 rounded-md filter grayscale" />
          <img src="/pepsi.png" alt="Brand 3" class="w-64 h-32 object-cover mx-4 rounded-md filter grayscale" />
          <img src="/sprite.png" alt="Brand 4" class="w-64 h-32 object-cover mx-4 rounded-md filter grayscale" />
          <img src="/belgrano.png" alt="Brand 1" class="w-64 h-32 object-cover mx-4 rounded-md filter grayscale" />
          <img src="/coca.png" alt="Brand 2" class="w-64 h-32 object-cover mx-4 rounded-md filter grayscale" />
          <img src="/pepsi.png" alt="Brand 3" class="w-64 h-32 object-cover mx-4 rounded-md filter grayscale" />
          <img src="/sprite.png" alt="Brand 4" class="w-64 h-32 object-cover mx-4 rounded-md filter grayscale" />
          <img src="/belgrano.png" alt="Brand 1" class="w-64 h-32 object-cover mx-4 rounded-md filter grayscale" />
          <img src="/coca.png" alt="Brand 2" class="w-64 h-32 object-cover mx-4 rounded-md filter grayscale" />
          <img src="/pepsi.png" alt="Brand 3" class="w-64 h-32 object-cover mx-4 rounded-md filter grayscale" />
          <img src="/sprite.png" alt="Brand 4" class="w-64 h-32 object-cover mx-4 rounded-md filter grayscale" />
          <img src="/belgrano.png" alt="Brand 1" class="w-64 h-32 object-cover mx-4 rounded-md filter grayscale" />
          <img src="/coca.png" alt="Brand 2" class="w-64 h-32 object-cover mx-4 rounded-md filter grayscale" />
          <img src="/pepsi.png" alt="Brand 3" class="w-64 h-32 object-cover mx-4 rounded-md filter grayscale" />
          <img src="/sprite.png" alt="Brand 4" class="w-64 h-32 object-cover mx-4 rounded-md filter grayscale" />
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

/* .filter {
    filter: grayscale(80%);
} */
</style>