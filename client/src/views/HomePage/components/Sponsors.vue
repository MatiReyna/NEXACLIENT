<script setup>
</script>

<template>
  <div class="overflow-hidden relative h-40">
      <div class="flex animate-scroll">
          <img src="https://res.cloudinary.com/dla8ovzrw/image/upload/v1717010992/belgrano_yunj25.png" alt="Brand 1" class="w-64 h-32 object-cover mx-4 rounded-md filter grayscale" />
          <img src="https://res.cloudinary.com/dla8ovzrw/image/upload/v1717013472/coca_irvgy4.png" alt="Brand 2" class="w-64 h-32 object-cover mx-4 rounded-md filter grayscale" />
          <img src="https://res.cloudinary.com/dla8ovzrw/image/upload/v1717013481/pepsi_kd2yc8.png" alt="Brand 3" class="w-64 h-32 object-cover mx-4 rounded-md filter grayscale" />
          <img src="https://res.cloudinary.com/dla8ovzrw/image/upload/v1717013492/sprite_d1uhio.png" alt="Brand 4" class="w-64 h-32 object-cover mx-4 rounded-md filter grayscale" />
          <img src="https://res.cloudinary.com/dla8ovzrw/image/upload/v1717010992/belgrano_yunj25.png" alt="Brand 1" class="w-64 h-32 object-cover mx-4 rounded-md filter grayscale" />
          <img src="https://res.cloudinary.com/dla8ovzrw/image/upload/v1717013472/coca_irvgy4.png" alt="Brand 2" class="w-64 h-32 object-cover mx-4 rounded-md filter grayscale" />
          <img src="https://res.cloudinary.com/dla8ovzrw/image/upload/v1717013481/pepsi_kd2yc8.png" alt="Brand 3" class="w-64 h-32 object-cover mx-4 rounded-md filter grayscale" />
          <img src="https://res.cloudinary.com/dla8ovzrw/image/upload/v1717013492/sprite_d1uhio.png" alt="Brand 4" class="w-64 h-32 object-cover mx-4 rounded-md filter grayscale" />
          <img src="https://res.cloudinary.com/dla8ovzrw/image/upload/v1717010992/belgrano_yunj25.png" alt="Brand 1" class="w-64 h-32 object-cover mx-4 rounded-md filter grayscale" />
          <img src="https://res.cloudinary.com/dla8ovzrw/image/upload/v1717013472/coca_irvgy4.png" alt="Brand 2" class="w-64 h-32 object-cover mx-4 rounded-md filter grayscale" />
          <img src="https://res.cloudinary.com/dla8ovzrw/image/upload/v1717013481/pepsi_kd2yc8.png" alt="Brand 3" class="w-64 h-32 object-cover mx-4 rounded-md filter grayscale" />
          <img src="https://res.cloudinary.com/dla8ovzrw/image/upload/v1717013492/sprite_d1uhio.png" alt="Brand 4" class="w-64 h-32 object-cover mx-4 rounded-md filter grayscale" />
          <img src="https://res.cloudinary.com/dla8ovzrw/image/upload/v1717010992/belgrano_yunj25.png" alt="Brand 1" class="w-64 h-32 object-cover mx-4 rounded-md filter grayscale" />
          <img src="https://res.cloudinary.com/dla8ovzrw/image/upload/v1717013472/coca_irvgy4.png" alt="Brand 2" class="w-64 h-32 object-cover mx-4 rounded-md filter grayscale" />
          <img src="https://res.cloudinary.com/dla8ovzrw/image/upload/v1717013481/pepsi_kd2yc8.png" alt="Brand 3" class="w-64 h-32 object-cover mx-4 rounded-md filter grayscale" />
          <img src="https://res.cloudinary.com/dla8ovzrw/image/upload/v1717013492/sprite_d1uhio.png" alt="Brand 4" class="w-64 h-32 object-cover mx-4 rounded-md filter grayscale" />
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