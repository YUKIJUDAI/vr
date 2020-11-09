<template>
    <div class="home">
        <img :src="bgImg" alt="" class="bg">
        <div class="op">
            <div class="_prev" @click="toPrev">
                <img src="~@/assets/img/_prev.png" alt="">
            </div>
            <div class="_home" @click="toHome">
                <img src="~@/assets/img/_home.png" alt="">
            </div>
            <div class="_next" @click="toNext">
                <img src="~@/assets/img/_next.png" alt="">
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import vaves from "@/assets/js/waves";

@Component
export default class Home extends Vue {
    bgImg: string = "";
    index: null | number = null;
    base: null | number = null;

    created() {
        const id = this.$route.params.id;
        this.index = +id;
        this.base = +id[0];
        this.bgImg = require("@/assets/img/content/" + id + ".jpg");
    }

    toPrev() {
        if ((this.index as number) > (+(this.base as number + "0"))) {
            (this.index as number)--;
            this.bgImg = require("@/assets/img/content/" + this.index + ".jpg");
        }
    }

    toNext() {
        if ((this.index as number) < (+(this.base as number + "9"))) {
            (this.index as number)++;
            this.bgImg = require("@/assets/img/content/" + this.index + ".jpg");
        }
    }

    toHome() {
        this.$router.push("/aed");
    }

}
</script>

<style lang="less" scoped>
.home {
    min-height: 100vh;
    padding-top: 120px;
    position: relative;
    .bg {
        width: 100%;
    }
    .op {
        display: flex;
        justify-content: space-between;
        position: absolute;
        left: 0;
        right: 0;
        bottom: 30px;
        margin: 0 auto;
        width: 300px;
        height: 60px;
        img {
            cursor: pointer;
            width: 60px;
            height: 60px;
        }
    }
}
</style>
