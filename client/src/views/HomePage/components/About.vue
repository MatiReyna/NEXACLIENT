<script setupt>
import { ref } from 'vue';
import { PlayCircleOutlined } from '@ant-design/icons-vue';

const videoPlayer = ref(null);

const playVideo = () => {
  if (videoPlayer.value) {
    videoPlayer.value.play();
  }
};
</script>

<!-- <template>
    <div class="aboutContainer mx-auto my-24 flex items-center justify-between w-11/12">
        <div class="aboutLeft relative flex-[0_0_40%]">
            <img src="/stock-1.webp" alt="" class="aboutImg w-full rounded-lg" />
            <a-avatar :size="64" class="playIcon absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/5">
                <template #icon>
                    <PlayCircleOutlined />
                </template>
            </a-avatar>
        </div>
        <div class="aboutRight flex-[0_0_56%]">
            <h3 class="text-xl font-semibold mb-2">SOBRE NEXA S.A</h3>
            <h2 class="text-2xl md:text-4xl font-bold text-[#ff9f1c] my-2 max-w-lg">Minima nesciunt animi rem nihil tempore dolorum.</h2>
            <p class="text-[#676767] mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias eligendi alias autem itaque incidunt labore ab voluptatibus fuga corporis natus placeat repellendus unde exercitationem est provident, magnam quaerat architecto? Et!</p>
            <p class="text-[#676767] mb-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta accusamus tempora quibusdam dolor nobis saepe, mollitia reprehenderit dolore recusandae iste quo. Aliquid voluptates veritatis laudantium nemo doloremque corrupti tempore ratione!</p>
        </div>
    </div>
</template> -->
<template>
    <div class="aboutContainer mx-auto my-10 md:my-24 flex flex-col md:flex-row items-center justify-between w-full px-4 md:px-0 md:w-11/12">
      <div class="aboutLeft relative flex-[0_0_100%] md:flex-[0_0_40%]">
        <video ref="videoPlayer" class="aboutImg w-full md:rounded-lg" controls preload="metadata">
          <source src="" type="video/mp4">
        </video>
        <button @click="playVideo" class="playIcon absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/2 md:w-3/5 focus:outline-none">
          <PlayCircleOutlined class="w-full h-full text-[#ff9f1c]" />
          <span class="sr-only">Reproducir video</span>
        </button>
      </div>
      <div class="aboutRight flex-[0_0_100%] md:flex-[0_0_56%] mt-6 md:mt-0 md:ml-8">
        <h3 class="text-xl font-semibold mb-2">SOBRE NEXA S.A</h3>
        <h2 class="text-2xl md:text-4xl font-bold text-[#ff9f1c] my-2 max-w-lg">Minima nesciunt animi rem nihil tempore dolorum.</h2>
        <p class="text-[#676767] mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias eligendi alias autem itaque incidunt labore ab voluptatibus fuga corporis natus placeat repellendus unde exercitationem est provident, magnam quaerat architecto? Et!</p>
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

.playIcon {
  width: 60%;
}

/* Ajustes para dispositivos móviles */
@media (max-width: 768px) {
  .aboutContainer {
    margin-top: 30px;
  }
}
</style>