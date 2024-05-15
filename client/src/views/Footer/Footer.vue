<script setup>  // Haciendo esto lo estoy exportando al componente.

</script>

//* Esto es equivlente al return y lo que va abajo.
<template>
  <footer class='bg-purple-400 py-14 px-8 md:px-0'>
    <div class='max-w-7xl mx-auto'>
      <div class='flex flex-wrap justify-center gap-8'>
        <div class='max-w-md'>
          <div class='text-white'>
            <h2 class='text-lg md:text-xl mb-6'>
              Subscribe to the Nexa Constructora® newsletter to stay up-to-date with the latest releases.
            </h2>
            <div class='flex items-center space-x-4'>
              <label for='email' class='sr-only'>Email Address</label>
              <input id='email' type='email' placeholder='Email Address' class='flex-grow py-3 px-4 bg-purple-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent'>
              <button class='bg-buttons text-white px-6 py-3 rounded-md hover:bg-purple-700 transition duration-300'>Subscribe</button>
            </div>
          </div>
        </div>
        <nav class='flex flex-wrap gap-8 md:gap-16'>
          <div>
            <h3 class='text-white text-lg mb-4'>Company</h3>
            <ul class='text-white'>
              <li><a href='#' class='hover:opacity-70 transition duration-300'>About</a></li>
              <li><a href='#' class='hover:opacity-70 transition duration-300'>Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 class='text-white text-lg mb-4'>Connect</h3>
            <ul class='text-white'>
              <li>LinkedIn</li>
              <li>LinkedIn</li>
              <li>LinkedIn</li>
            </ul>
          </div>
        </nav>
      </div>
      <div class='flex flex-wrap justify-between mt-10 text-sm text-white'>
        <p>© 2024 Nexa Constructora. Todos los derechos reservados.</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>

</style>