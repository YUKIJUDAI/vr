<template>
    <div class="home">
        <img src="~@/assets/img/home-bg-2.png" alt="" class="bg">
        <div class="light">
            <img src="~@/assets/img/left-light.png" class="left-light">
            <img src="~@/assets/img/right-light.png" class="right-light">
        </div>
        <div class="left">
            <img src="~@/assets/img/left.png">
        </div>
        <main class="con">
            <img src="~@/assets/img/point.png" class="point">
            <router-link to="/aedtype/1" class="con1" :style="{'left': 420 + width + 'px'}">
                <img src="~@/assets/img/总目录/矢量智能对象-6.png">
            </router-link>
            <router-link to="/aedtype/5" class="con2" :style="{'left': 225 + width + 'px'}">
                <img src="~@/assets/img/总目录/矢量智能对象.png">
            </router-link>
            <router-link to="/aedtype/3" class="con3" :style="{'left': 615 + width + 'px'}">
                <img src="~@/assets/img/总目录/矢量智能对象-4.png">
            </router-link>
            <router-link to="/aedcontent/41" class="con4" :style="{'left': 348 + width + 'px'}">
                <img src="~@/assets/img/总目录/矢量智能对象-5.png">
            </router-link>
            <router-link to="/video?id=25" class="con5" :style="{'left': 838 + width + 'px'}">
                <img src="~@/assets/img/总目录/矢量智能对象-3.png">
            </router-link>
            <router-link to="/aedtype/2" class="con6" :style="{'left': 635 + width + 'px'}">
                <img src="~@/assets/img/总目录/矢量智能对象-2.png">
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
            top: 260px;
            left: 800px;
            z-index: 200;
        }
        .con2 {
            position: fixed;
            top: 475px;
            left: 605px;
            z-index: 200;
        }
        .con3 {
            position: fixed;
            top: 420px;
            left: 995px;
            z-index: 200;
        }
        .con4 {
            position: fixed;
            top: 630px;
            left: 705px;
            z-index: 200;
        }
        .con5 {
            position: fixed;
            top: 375px;
            left: 867px;
            z-index: 200;
        }
        .con6 {
            position: fixed;
            top: 250px;
            left: 1015px;
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
