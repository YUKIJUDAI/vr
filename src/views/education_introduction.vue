<template>
    <div class="online-intro">
        <main>
            <div class="title">
                <img src="~@/assets/img/education-title.png" />
            </div>
            <div class="con">
                <router-link tag="div" class="left" :to="'/video?id=' + data[index].id">
                    <img :src="data[index].base_path + '/' + data[index].video_big_path" />
                </router-link>
                <div class="right">
                    <p class="right-title">专业教育</p>
                    <p class="right-time">
                        <span>时间：{{data[index].time_length}}</span>
                    </p>
                    <p class="right-info">
                        <span>简介：{{data[index].introduce}}</span>
                    </p>
                </div>
            </div>
            <div class="list">
                <swiper ref="mySwiper" :options="swiperOptions" @click-slide="handleClickSlide">
                    <swiper-slide v-for="(item,i) in data" :key="i">
                        <div class="swiper-li">
                            <img :src="item.base_path + '/'+ item.avatar_path" />
                            <p class="zh">{{item.title}}</p>
                            <p class="en">{{item.title_en}}</p>
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
export default class EducationIntro extends Vue {
    swiperOptions = {
        slidesPerView: 9,
    };

    data = [
        {
            avatar_path: "",
            base_path: "",
            video_big_path: "",
            title: "",
            title_en: "",
            introduce: "",
            time_length: "",
        },
    ];

    index: number = 0;

    get swiper() {
        return (this.$refs.mySwiper as any).$swiper;
    }

    created() {
        this.$http
            .post("http://me.amrtang.com/vr_photo/api/web/v1/resource/list", {
                time: 1480576266,
                token: "c92114bcc9e4454f1d2b7399dc9d62a9",
                authToken: "",
                navigate: 3,
            })
            .then((res) => {
                res.status === 1 && (this.data = res.data);
            });
    }

    handleClickSlide(index: number) {
        this.swiper.slideToLoop(index);
        this.index = index;
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
        .left img {
            width: 469px;
            height: 269px;
            cursor: pointer;
        }
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
    @media screen and (max-width: 1440px) {
        .con {
            margin-top: 40px;
            margin-bottom: 40px;
        }
    }
    .list {
        width: 100%;
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
}
</style>