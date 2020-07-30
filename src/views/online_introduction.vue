<template>
    <div class="online-intro">
        <main>
            <div class="title">
                <img src="~@/assets/img/online-title.png">
            </div>
            <div class="con">
                <div class="left">
                    <img src="~@/assets/img/explame1.png">
                </div>
                <div class="right">
                    <p class="right-title">微创®线上知行学院</p>
                    <p class="right-time"><span>时间：</span></p>
                    <p class="right-info"><span>简介：</span></p>
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
        </main>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class OnlineIntro extends Vue {
    swiperOptions = {
        slidesPerView: 9
    }
    get swiper() {
        return (this.$refs.mySwiper as any).$swiper;
    }
    handleClickSlide(index: number) {
        this.swiper.slideToLoop(index);
    }
}
</script>

<style lang="less" scoped>
.online-intro {
    background: url("~@/assets/img/online-bg.png") no-repeat center left;
    background-size: cover;
    height: 100vh;
    .title {
        padding-top: 140px;
        text-align: center;
    }
    .con {
        display: flex;
        justify-items: center;
        margin-top: 85px;
        margin-bottom: 100px;
        margin-left: 60px;
        .right {
            margin-left: 40px;
            margin-top: 20px;
            color: #fff;
            line-height: 28px;
            .right-title {
                font-size: 26px;
                margin-bottom: 20px;
            }
            span {
                font-weight: bold;
            }
        }
    }
    .list {
        width: 100%;
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
}
</style>