<template>
    <div class="suzhou">
        <div class="title">
            <img src="~@/assets/img/sz-title.png">
        </div>
        <div class="vr" id="vr">
            <div class="surface" id="surface_0">
                <img src="~@/assets/img/posx.jpg" class="bg">
            </div>
            <div class="surface" id="surface_1">
                <img src="~@/assets/img/negx.jpg" class="bg">
            </div>
            <div class="surface" id="surface_2">
                <img src="~@/assets/img/posy.jpg" class="bg">
            </div>
            <div class="surface" id="surface_3">
                <img src="~@/assets/img/negy.jpg" class="bg">
            </div>
            <div class="surface" id="surface_4">
                <img src="~@/assets/img/posz.jpg" class="bg">
            </div>
            <div class="surface" id="surface_5">
                <img src="~@/assets/img/negz.jpg" class="bg">
            </div>
        </div>
        <div class="list">
            <swiper ref="mySwiper" :options="swiperOptions" @click-slide="handleClickSlide">
                <swiper-slide v-for="(item,i) in 11" :key="i">
                    <div class="swiper-li">
                        <img src="~@/assets/img/list.png">
                        <p class="zh">中文</p>
                        <p class="en">English</p>
                    </div>
                </swiper-slide>
            </swiper>
        </div>
        <div class="sz-info">
            <img src="~@/assets/img/sz-info.png">
        </div>
        <div class="left" @click="prev">
            <img src="~@/assets/img/sz-left.png">
        </div>
        <div class="right" @click="next">
            <img src="~@/assets/img/sz-right.png">
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { createView, reView } from "@/assets/js/vr";

@Component
export default class Suzhou extends Vue {
    swiperOptions = {
        slidesPerView: 9
    }
    get swiper() {
        return (this.$refs.mySwiper as any).$swiper;
    }
    mounted() {
        createView(document.getElementById("vr"))
    }
    handleClickSlide(index: number) {
        this.swiper.slideToLoop(index);
    }
    prev() {
        this.swiper.slidePrev();
    }
    next() {
        this.swiper.slideNext();
    }
}
</script>

<style lang="less" scoped>
.suzhou {
    background: url("~@/assets/img/sz-bg.png") no-repeat center left;
    background-size: cover;
    height: 100vh;
    overflow: hidden;
    .title {
        padding-top: 140px;
        padding-bottom: 20px;
        text-align: center;
    }
    .vr {
        width: 1360px;
        height: 600px;
        margin: 0 auto;
    }
    .list {
        width: 60%;
        margin: 0 auto;
        .swiper-li {
            float: left;
            margin-left: 8px;
            margin-top: 20px;
            list-style: none;
            width: 110px;
            height: 110px;
            position: relative;
            cursor: pointer;
            img {
                width: 100%;
                height: 100%;
            }
            .zh {
                position: absolute;
                top: 75px;
                text-align: center;
                left: 0;
                right: 0;
                font-size: 12px;
                color: #fff;
            }
            .en {
                position: absolute;
                top: 90px;
                text-align: center;
                left: 0;
                right: 0;
                font-size: 12px;
                color: #fff;
            }
        }
    }
    .sz-info {
        position: absolute;
        width: 291px;
        height: 99px;
        right: 70px;
        bottom: 65px;
    }
    .left {
        position: absolute;
        left: 0;
        top: 280px;
        cursor: pointer;
    }
    .right {
        position: absolute;
        right: 0;
        top: 280px;
        cursor: pointer;
    }
    .surface {
        width: 1026px;
        height: 1026px;
        background-size: cover;
        position: absolute;
    }
    .surface .bg {
        position: absolute;
        width: 1026px;
        height: 1026px;
    }
}
</style>