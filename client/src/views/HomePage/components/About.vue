<script setupt>
</script>

<template>
  <div class="aboutContainer mx-auto my-10 md:my-24 flex flex-col md:flex-row items-center justify-between w-full px-4 md:px-0 md:w-11/12">
    <div class="aboutLeft relative flex-[0_0_100%] md:flex-[0_0_40%]">
      <video ref="videoPlayer" class="aboutImg w-full md:rounded-lg" controls preload="metadata" autoplay>
        <source src="https://res.cloudinary.com/dla8ovzrw/video/upload/v1717011129/video-about_wvlnqf.mp4" type="video/mp4">
      </video>
    </div>
    <div class="aboutRight flex-[0_0_100%] md:flex-[0_0_56%] mt-6 md:mt-0 md:ml-8">
      <h3 class="text-xl font-semibold mb-2 text-[#272145]">SOBRE NEXA S.A</h3>
      <h2 class="text-2xl md:text-4xl font-bold text-[#9192e8] my-2 max-w-lg">Minima nesciunt animi rem nihil tempore dolorum.</h2>
      <p class="text-[#676767] mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias eligendi alias autem itaque incidunt labore ab voluptatibus fuga corporis natus placeat repellendus unde exercitationem est provident, magnam quaerat architecto? Et!</p>
      <p class="text-[#676767] mb-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta accusamus tempora quibusdam dolor nobis saepe, mollitia reprehenderit dolore recusandae iste quo. Aliquid voluptates veritatis laudantium nemo doloremque corrupti tempore ratione!</p>
    </div>
  </div>
</template>

<style scoped>
.aboutContainer {
  margin: 50px auto;
}

.aboutLeft {
  position: relative;
}

/* Ajustes para dispositivos móviles */
@media (max-width: 768px) {
  .aboutContainer {
    margin-top: 30px;
  }
}
</style>