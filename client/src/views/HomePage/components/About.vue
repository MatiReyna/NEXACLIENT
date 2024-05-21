<script setupt>
import { PlayCircleOutlined } from '@ant-design/icons-vue';
</script>

<template>
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
</template>

<style scoped>
.aboutContainer {
    margin: 100px auto;
}

.aboutLeft {
    position: relative;
}

.playIcon {
    width: 60%;
}
</style>