<template>
    <div class="home">
        <img src="~@/assets/img/home-bg.png" alt="" class="bg">
        <div class="light">
            <img src="~@/assets/img/left-light.png" class="left-light">
            <img src="~@/assets/img/right-light.png" class="right-light">
        </div>
        <div class="left">
            <img src="~@/assets/img/left.png">
        </div>
        <main class="con">
            <img src="~@/assets/img/point.png" class="point">
            <a href="http://me.amrtang.com/vr_sh/" target="_blank" class="con1" :style="{'left': 420 + width + 'px'}">
                <img src="~@/assets/img/con1.png">
            </a>
            <router-link to="/education-intro" class="con2" :style="{'left': 205 + width + 'px'}">
                <img src="~@/assets/img/con2.png">
            </router-link>
            <router-link to="/online-intro" class="con3" :style="{'left': 585 + width + 'px'}">
                <img src="~@/assets/img/con3.png">
            </router-link>
            <a href="http://me.amrtang.com/vr_sz/" target="_blank" class="con4" :style="{'left': 348 + width + 'px'}">
                <img src="~@/assets/img/con4.png">
            </a>
            <router-link to="/aed" class="con5" :style="{'left': 878 + width + 'px'}">
                <img src="~@/assets/img/con5.png">
            </router-link>
        </main>
        <div class="right">
            <img src="~@/assets/img/right.png">
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import vaves from "@/assets/js/waves";

@Component
export default class Home extends Vue {

    width: number = (window.innerWidth - 1160) / 2;

    mounted() {
        vaves();
        window.addEventListener("resize", () => {
            this.reload();
        }, false);
    }
    destroyed() {
        window.removeEventListener('resize', this.reload);
    }

    reload() {
        window.location.reload();
    }
}
</script>

<style lang="less" scoped>
.home {
    height: 100vh;
    overflow: hidden;
    position: relative;
    .bg {
        position: absolute;
        left: 50%;
        margin-left: -960px;
    }
    .light {
        .left-light {
            position: fixed;
            top: -100px;
            left: -100px;
            z-index: 100;
            animation: left-light 5s linear infinite;
            transform-origin: 0 0;
        }
        .right-light {
            position: fixed;
            top: -100px;
            right: -100px;
            z-index: 100;
            animation: right-light 5s linear infinite;
            transform-origin: 100vw 0;
        }
        @keyframes left-light {
            0% {
                -webkit-transform: rotate(0deg);
            }
            10% {
                -webkit-transform: rotate(5deg);
            }
            20% {
                -webkit-transform: rotate(10deg);
            }
            30% {
                -webkit-transform: rotate(10deg);
            }
            40% {
                -webkit-transform: rotate(0deg);
            }
            50% {
                -webkit-transform: rotate(-5deg);
            }
            70% {
                -webkit-transform: rotate(-10deg);
            }
            90% {
                -webkit-transform: rotate(5deg);
            }
            100% {
                -webkit-transform: rotate(0deg);
            }
        }
        @keyframes right-light {
            0% {
                -webkit-transform: rotate(0deg);
            }
            10% {
                -webkit-transform: rotate(-5deg);
            }
            20% {
                -webkit-transform: rotate(-10deg);
            }
            30% {
                -webkit-transform: rotate(-5deg);
            }
            40% {
                -webkit-transform: rotate(0deg);
            }
            50% {
                -webkit-transform: rotate(5deg);
            }
            70% {
                -webkit-transform: rotate(10deg);
            }
            90% {
                -webkit-transform: rotate(-5deg);
            }
            100% {
                -webkit-transform: rotate(0deg);
            }
        }
    }
    .con {
        position: relative;
        .point {
            position: absolute;
            right: 0;
            top: 0;
        }
        .con1 {
            position: fixed;
            top: 240px;
            left: 800px;
            z-index: 200;
        }
        .con2 {
            position: fixed;
            top: 455px;
            left: 585px;
            z-index: 200;
        }
        .con3 {
            position: fixed;
            top: 390px;
            left: 965px;
            z-index: 200;
        }
        .con4 {
            position: fixed;
            top: 600px;
            left: 705px;
            z-index: 200;
        }
        .con5 {
            position: fixed;
            top: 375px;
            left: 887px;
            z-index: 200;
        }
    }
    .left {
        position: absolute;
        left: 0;
        top: 120px;
        z-index: 99;
    }
    .right {
        position: absolute;
        right: 0;
        top: 120px;
        z-index: 99;
    }
}
</style>
<style lang="less">
.home canvas {
    position: absolute;
    bottom: 0;
    width: 100vw;
    height: 200px;
}
</style>
