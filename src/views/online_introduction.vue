<template>
    <div class="online-intro">

        <Head></Head>
        <main>
            <div class="title">
                <img src="~@/assets/img/i-online-title.png">
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
                <ul>
                    <li v-for="(item,i) in 9">
                        <img src="~@/assets/img/list.png">
                        <p class="zh">中文</p>
                        <p class="en">English</p>
                    </li>
                </ul>
            </div>
        </main>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class OnlineIntro extends Vue {

}
</script>

<style lang="less" scoped>
.online-intro {
    background: url("~@/assets/img/online-bg.png") no-repeat center left;
    background-size: cover;
    height: 100vh;
    .title {
        padding-top: 170px;
        text-align: center;
    }
    .con {
        display: flex;
        justify-items: center;
        margin-top: 85px;
        margin-bottom: 100px;
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
        margin-left: 15px;
        ul {
            display: flex;
        }
        li {
            margin-left: 8px;
            list-style: none;
            width: 120px;
            height: 120px;
            position: relative;
            img {
                width: 100%;
                height: 100%;
            }
            .zh {
                position: absolute;
                top: 85px;
                text-align: center;
                left: 0;
                right: 0;
                font-size: 12px;
                color: #fff;
            }
            .en {
                position: absolute;
                top: 100px;
                text-align: center;
                left: 0;
                right: 0;
                font-size: 12px;
                color: #fff;
            }
        }
        .info {
            display: inline-block;
            width: 291px;
            height: 99px;
            margin-left: 25px;
            margin-top: 15px;
        }
    }
}
</style>