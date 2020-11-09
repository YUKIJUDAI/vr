<template>
    <div class="home">
        <img :src="bgImg" alt="" class="bg">
        <div class="light">
            <img src="~@/assets/img/left-light.png" class="left-light">
            <img src="~@/assets/img/right-light.png" class="right-light">
        </div>
        <div class="left">
            <img src="~@/assets/img/left.png">
        </div>
        <main class="con">
            <img src="~@/assets/img/point.png" class="point">
            <router-link :to="routerList[0]" class="con1" :style="{'left': 400 + width + 'px'}" v-if="arrList[0]">
                <img :src="arrList[0]">
            </router-link>
            <router-link :to="routerList[1]" class="con3" :style="{'left': 575 + width + 'px'}" v-if="arrList[1]">
                <img :src="arrList[1]">
            </router-link>
            <router-link :to="routerList[2]" class="con4" :style="{'left': 320 + width + 'px'}" v-if="arrList[2]">
                <img :src="arrList[2]">
            </router-link>
            <router-link :to="routerList[3]" class="con2" :style="{'left': 165 + width + 'px'}" v-if="arrList[3]">
                <img :src="arrList[3]">
            </router-link>
            <router-link :to="routerList[4]" class="con5" :style="{'left': 818 + width + 'px'}" v-if="arrList[4]">
                <img :src="arrList[4]">
            </router-link>
            <router-link :to="routerList[5]" class="con6" :style="{'left': 635 + width + 'px'}" v-if="arrList[5]">
                <img :src="arrList[5]">
            </router-link>
        </main>
        <div class="right">
            <img src="~@/assets/img/right.png">
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Watch } from "vue-property-decorator";
import vaves from "@/assets/js/waves";

@Component
export default class Home extends Vue {

    width: number = (window.innerWidth - 1160) / 2;
    arrList: Array<string> = [];
    routerList: Array<string> = [];
    bgImg: string = "";
    @Watch("$route")
    changeType() {
        this.setImg();
    }

    created() {
        this.setImg();
    }

    mounted() {
        vaves();
        window.addEventListener("resize", () => {
            this.reload();
        }, false);
    }
    destroyed() {
        window.removeEventListener('resize', this.reload);
    }

    setImg() {
        const type = this.$route.params.type;
        switch (type) {
            case "1":
                this.bgImg = require("@/assets/img/part1/home-bg.png");
                this.arrList = [
                    require("@/assets/img/part1/矢量智能对象-5.png"),
                    require("@/assets/img/part1/矢量智能对象-3.png"),
                    require("@/assets/img/part1/矢量智能对象-4.png"),
                    require("@/assets/img/part1/矢量智能对象.png"),
                    require("@/assets/img/part1/矢量智能对象-2.png")
                ];
                this.routerList = [
                    "/aedcontent/11",
                    "/aedcontent/12",
                    "/aedcontent/15",
                    "/aedcontent/10",
                    "/aedcontent/14",
                ];
                return;
            case "2":
                 this.bgImg = require("@/assets/img/part2/home-bg.png");
                this.arrList = [
                    require("@/assets/img/part2/矢量智能对象-6.png"),
                    require("@/assets/img/part2/矢量智能对象-4.png"),
                    require("@/assets/img/part2/矢量智能对象-5.png"),
                    require("@/assets/img/part2/矢量智能对象-2.png"),
                    require("@/assets/img/part2/矢量智能对象-3.png"),
                    require("@/assets/img/part2/矢量智能对象.png"),
                ];
                this.routerList = [
                    "/aedcontent/21",
                    "/aedcontent/23",
                    "/aedcontent/25",
                    "/aedcontent/26",
                    "/aedcontent/24",
                    "/aedcontent/22"
                ];
                return;   
            case "3":
                this.bgImg = require("@/assets/img/part3/home-bg.png");
                this.arrList = [
                    require("@/assets/img/part3/矢量智能对象-2.png"),
                    require("@/assets/img/part3/矢量智能对象.png")
                ];
                this.routerList = [
                    "/aedcontent/31",
                    "/aedcontent/32"
                ];
                return;
            case "5":
                this.bgImg = require("@/assets/img/home-bg.png");
                this.arrList = [
                    require("@/assets/img/part5/矢量智能对象-3.png"),
                    require("@/assets/img/part5/矢量智能对象.png"),
                    require("@/assets/img/part5/矢量智能对象-2.png")
                ];
                this.routerList = [
                    "/aedcontent/51",
                    "/aedcontent/52",
                    "/aedcontent/53",
                ];
                return;
        }
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
            display: flex;
            justify-content: center;
            align-items: center;
            position: fixed;
            top: 200px;
            width: 190px;
            height: 170px;
            z-index: 200;
        }
        .con2 {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 190px;
            height: 170px;
            position: fixed;
            top: 400px;
            z-index: 200;
        }
        .con3 {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 190px;
            height: 170px;
            position: fixed;
            top: 350px;
            z-index: 200;
        }
        .con4 {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 190px;
            height: 170px;
            position: fixed;
            top: 570px;
            z-index: 200;
        }
        .con5 {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 190px;
            height: 170px;
            position: fixed;
            top: 315px;
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
