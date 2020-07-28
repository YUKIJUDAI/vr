<template>
    <div class="home">

        <Head></Head>
        <div class="home-body">
            <div class="left">
                <img src="~@/assets/img/left.png">
            </div>
            <main class="con">
                <img src="~@/assets/img/con1.png" class="con1">
                <img src="~@/assets/img/con2.png" class="con2">
                <img src="~@/assets/img/con3.png" class="con3">
                <img src="~@/assets/img/con4.png" class="con4">
            </main>
            <div class="right">
                <img src="~@/assets/img/right.png">
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class Home extends Vue {
    mounted() {
    }
}
</script>

<style lang="less" scoped>
.home {
    .home-body {
        background: url("~@/assets/img/home-bg.png") no-repeat center left;
        background-size: cover;
        height: 100vh;
    }
    .con {
        position: relative;
        .con1 {
            position: absolute;
            top: 200px;
            left: 420px;
        }
        .con2 {
            position: absolute;
            top: 415px;
            left: 205px;
        }
        .con3 {
            position: absolute;
            top: 350px;
            left: 585px;
        }
        .con4 {
            position: absolute;
            top: 560px;
            left: 345px;
        }
    }
    .left {
        position: absolute;
        left: 0;
        top: 120px;
    }
    .right {
        position: absolute;
        right: 0;
        top: 120px;
    }
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
