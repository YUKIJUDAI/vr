<template>
    <div class="suzhou">

        <Head></Head>
        <div class="city-body">
            <div class="left">
                <img src="~@/assets/img/sz-left.png">
            </div>
            <div class="title">
                <img src="~@/assets/img/sz-title.png">
            </div>
            <div class="vr"></div>
            <div class="list">
                <ul>
                    <li v-for="(item,i) in 9" :key="i">
                        <img src="~@/assets/img/list.png">
                        <p class="zh">中文</p>
                        <p class="en">English</p>
                    </li>
                    <li class="info">
                        <img src="~@/assets/img/sz-info.png">
                    </li>
                </ul>
            </div>
            <div class="right">
                <img src="~@/assets/img/sz-right.png">
            </div>
        </div>
    </div>
</template>

<script>
import { Vue, Component } from "vue-property-decorator";
import Head from "@/components/head.vue";
@Component({
    components: { Head }
})
export default class Suzhou extends Vue {

}
</script>

<style lang="less" scoped>
.suzhou {
    .city-body {
        background: url("~@/assets/img/sz-bg.png") no-repeat;
        background-size: cover;
        height: 100vh;
    }
    .title {
        padding-top: 160px;
        text-align: center;
    }
    .vr {
        width: 1560px;
        height: 600px;
        margin: 0 auto;
    }
    .list {
        margin-left: 375px;
        margin-top: 20px;
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
}
</style>