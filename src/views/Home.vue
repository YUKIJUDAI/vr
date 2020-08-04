<template>
    <div class="home">
        <div class="light">
            <img src="~@/assets/img/left-light.png" class="left-light">
            <img src="~@/assets/img/right-light.png" class="right-light">
        </div>
        <div class="left">
            <img src="~@/assets/img/left.png">
        </div>
        <main class="con">
            <img src="~@/assets/img/point.png" class="point">
            <img src="~@/assets/img/con1.png" class="con1">
            <img src="~@/assets/img/con2.png" class="con2">
            <img src="~@/assets/img/con3.png" class="con3">
            <img src="~@/assets/img/con4.png" class="con4">
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
    background: url("~@/assets/img/home-bg.png") no-repeat top left;
    background-size: cover;
    height: 100vh;
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
            position: absolute;
            top: 240px;
            left: 420px;
        }
        .con2 {
            position: absolute;
            top: 455px;
            left: 205px;
        }
        .con3 {
            position: absolute;
            top: 390px;
            left: 585px;
        }
        .con4 {
            position: absolute;
            top: 600px;
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
    height: 200px;
}
</style>
