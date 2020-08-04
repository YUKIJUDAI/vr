<template>
    <div class="suzhou">
        <div class="title">
            <img src="~@/assets/img/sh-title.png">
        </div>
        <div class="vr" id="vr">
            <div class="surface" id="surface_0">
                <img :src="data[index].images.right_path" class="bg">
            </div>
            <div class="surface" id="surface_1">
                <img :src="data[index].images.left_path" class="bg">
            </div>
            <div class="surface" id="surface_2">
                <img :src="data[index].images.top_path" class="bg">
            </div>
            <div class="surface" id="surface_3">
                <img :src="data[index].images.bottom_path" class="bg">
            </div>
            <div class="surface" id="surface_4">
                <img :src="data[index].images.before_path" class="bg">
            </div>
            <div class="surface" id="surface_5">
                <img :src="data[index].images.after_path" class="bg">
            </div>
        </div>
        <div class="list">
            <swiper ref="mySwiper" :options="swiperOptions" @click-slide="handleClickSlide">
                <swiper-slide v-for="(item,i) in data" :key="i">
                    <div class="swiper-li">
                        <img :src="item.base_path + '/'+ item.avatar_path">
                        <p class="zh">{{item.title}}</p>
                        <p class="en">{{item.title_en}}</p>
                    </div>
                </swiper-slide>
            </swiper>
        </div>
        <div class="sh-info">
            <img src="~@/assets/img/sh-info.png">
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
import axios from "axios";
import { Vue, Component } from "vue-property-decorator";
import { createView, reView } from "@/assets/js/vr";

@Component
export default class Shanghai extends Vue {
    swiperOptions = {
        observer: true,
        observeParents: true,
        slidesPerView: 9,
        slidesPerGroup: 1,
        height: 130
    }

    data = [{
        avatar_path: "",
        base_path: "",
        images: {},
        title: "",
        title_en: ""
    }];

    index: number = 0;

    get swiper() {
        return (this.$refs.mySwiper as any).$swiper;
    }
    created() {
        this.$http.post(
            "http://me.amrtang.com/vr_photo/api/web/v1/resource/list",
            {
                time: 1480576266,
                token: "c92114bcc9e4454f1d2b7399dc9d62a9",
                authToken: "",
                navigate: 0
            }
        ).then(res => {
            res.status === 1 && (this.data = res.data) && createView(document.getElementById("vr"));
        });
    }
    handleClickSlide(index: number) {
        this.swiper.slideToLoop(index);
        this.index = index;
    }
    prev() {
        this.swiper.slidePrev();
        if (this.index > 0) this.index--;
    }
    next() {
        this.swiper.slideNext();
        if (this.index < this.data.length) this.index++;
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
        height: 130px;
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
    .sh-info {
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