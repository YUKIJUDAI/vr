<template>
    <div class="aed">
        <div class="aed-bg">
            <div class="aed-left-btn">
                <ul>
                    <li v-for="(item,i) in 5" :key="i" @click="index = i,arrIndex = 1,imgindex = 1">
                        <div class="aed-left-btn-li">
                            <img :src="require('@/assets/img/aed' + i + '-active.png')" alt="" v-if="i === index">
                            <img :src="require('@/assets/img/aed' + i + '.png')" alt="" v-else>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="aed-title">
                <strong>PART.0{{arrIndex}}</strong>
                <span class="aed-title-span">|</span>
                <span>{{data[index].name}}</span>
            </div>
            <div class="aed-content">
                <div class="aed-content-left">
                    <ul>
                        <li v-for="(item,i) in data[index].arr" :key="i" v-show="i > 0" :class="{bgActive:i === arrIndex}" @click="arrIndex = i,imgindex = 1">
                            <span class="point" :class="{active:i === arrIndex}"></span>
                            {{item}}
                        </li>
                    </ul>
                </div>
                <div class="aed-content-right">
                    <img :src="require('@/assets/img/PC/P' + (index + 1) + '/' + (index + 1) + '-' + arrIndex + '/' + imgindex + '.jpg')" alt="">
                    <img src="~@/assets/img/prev.png" alt="" class="prev" @click="imgindex --" v-show="imgindex > 2">
                    <img src="~@/assets/img/next.png" alt="" class="next" @click="imgindex ++" v-show="imgindex < data[index].imgLehgth[arrIndex]">
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class aed extends Vue {
    type: string | (string | null)[] = this.$route.params.type;

    index = 0;
    arrIndex = 1;
    imgindex = 1;

    data = [
        {
            name: "心脏猝死小科普",
            arr: ["", "猝死的定义", "流行病学", "猝死的病因及诱因", "临床表现", "心肺复苏流程"],
            imgLehgth: [0, 1, 1, 2, 3, 4]
        },
        {
            name: "微创AED地图",
            arr: ["", "张东路园区", "牛顿路园区", "心脉园区", "南汇园区", "苏州园区", "嘉兴园区"],
            imgLehgth: [0, 17, 4, 5, 11, 17, 9]
        },
        {
            name: "呼唤APP",
            arr: ["", "产品定位与目标", "功能介绍"],
            imgLehgth: [0, 2, 4]
        },
        {
            name: "AED培训日程",
            arr: ["", "AED培训日程"],
            imgLehgth: [0, 1]
        },
        {
            name: "附录",
            arr: ["", "好人法", "AED设备报修路径", "六大园区AED设备编列"],
            imgLehgth: [0, 1, 1, 7]
        },
    ]

    created() {
        this.$route.params.type && (this.index = +this.$route.params.type);
    }

}
</script>

<style lang="less" scoped>
@w: 50px;
@ww: 40px;

li {
    list-style: none;
}

.aed {
    background: url("~@/assets/img/home-bg.png") no-repeat center left;
    background-size: cover;
    height: 100vh;
    .aed-bg {
        width: 24 * @w;
        height: 16 * @w;
        background: url("~@/assets/img/aed-bg.png") top center;
        background-size: cover;
        position: fixed;
        top: 120px;
        z-index: 20;
        left: 0;
        right: 0;
        margin: 0 auto;
    }
    .aed-left-btn {
        position: absolute;
        top: 2.6 * @w;
        left: -0.7 * @w;
        ul {
            li {
                cursor: pointer;
                img {
                    width: 1.6 * @w;
                }
            }
        }
    }
    .aed-title {
        color: #fff;
        font-size: 0.6 * @w;
        margin-top: 1.4 * @w;
        margin-left: 1.4 * @w;
        .aed-title-span {
            margin: 0 0.6 * @w;
            & + span {
                font-size: 0.44 * @w;
            }
        }
    }
    .aed-content {
        color: #eee;
        margin: 0.6 * @w 0.92 * @w 0;
        display: flex;
        li {
            font-size: 0.4 * @w;
            width: 7 * @w;
            height: 1.5 * @w;
            line-height: 1.5 * @w;
            cursor: pointer;
            .point {
                display: inline-block;
                width: 0.16 * @w;
                height: 0.16 * @w;
                border-radius: 0.08 * @w;
                background: #666;
                margin: 0 0.4 * @w;
            }
            .active {
                background: red;
            }
        }
        .bgActive {
            background: rgba(120, 120, 120, 0.3);
        }
        .aed-content-right {
            width: 15.1 * @w;
            height: 13.1 * @w;
            position: relative;
            & > img:first-child {
                width: 100%;
                height: 100%;
            }
            .prev {
                position: absolute;
                top: 6 * @w;
                left: 0.6 * @w;
                z-index: 30;
                cursor: pointer;
            }
            .next {
                position: absolute;
                top: 6 * @w;
                right: 0.6 * @w;
                z-index: 30;
                cursor: pointer;
            }
        }
    }
}

@media screen and (max-width: 1366px) {
    .aed {
        .aed-bg {
            width: 24 * @ww;
            height: 16 * @ww;
        }
        .aed-left-btn {
            top: 2.6 * @ww;
            left: -0.7 * @ww;
            ul {
                li {
                    img {
                        width: 1.6 * @ww;
                    }
                }
            }
        }
        .aed-title {
            font-size: 0.6 * @ww;
            margin-top: 1.4 * @ww;
            margin-left: 1.4 * @ww;
            .aed-title-span {
                margin: 0 0.6 * @ww;
                & + span {
                    font-size: 0.44 * @ww;
                }
            }
        }
        .aed-content {
            margin: 0.6 * @ww 0.92 * @ww 0;
            li {
                font-size: 0.4 * @ww;
                width: 7 * @ww;
                height: 1.5 * @ww;
                line-height: 1.5 * @ww;
                .point {
                    width: 0.16 * @ww;
                    height: 0.16 * @ww;
                    border-radius: 0.08 * @ww;
                    margin: 0 0.4 * @ww;
                }
            }
            .aed-content-right {
                width: 15.1 * @ww;
                height: 13.1 * @ww;
                .prev {
                    top: 6 * @ww;
                    left: 0.6 * @ww;
                }
                .next {
                    top: 6 * @ww;
                    right: 0.6 * @ww;
                }
            }
        }
    }
}
</style>