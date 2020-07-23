<template>
    <div class="home">
    </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

import waves from "@/assets/js/waves.js";

@Component
export default class Home extends Vue {
    mounted() {
        waves();
    }
}
</script>

<style lang="less" scoped>
.home {
    width: 100vw;
    height: 100vh;
}
</style>
<style lang="less">
.home canvas {
    position: fixed;
    bottom: 0;
    width: 100vw;
    height: 300px;
}
</style>
