<template>
    <div class="head">
        <main>
            <div class="head-main">
                <img src="~@/assets/img/logo.png" class="logo">
                <router-link class="title title1" tag="div" to="/">
                    <img src="~@/assets/img/title1.png">
                </router-link>
                <router-link class="title" tag="div" to="/suzhou">
                    <img src="~@/assets/img/title2.png">
                </router-link>
                <router-link class="title" tag="div" to="/suzhou">
                    <img src="~@/assets/img/title3.png">
                </router-link>
                <div class="title">
                    <img src="~@/assets/img/title4.png">
                </div>
                <div class="title">
                    <img src="~@/assets/img/title5.png">
                </div>
                <div class="search">
                    <img src="~@/assets/img/search.png">
                </div>
            </div>
        </main>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Head extends Vue {

}
</script>

<style scoped lang="less">
.head {
    background: url("~@/assets/img/head.png") no-repeat;
    background-size: cover;
    width: 100vw;
    position: fixed;
    top: 0;
    left: 0;
    .head-main {
        display: flex;
        align-items: center;
        height: 120px;
        .title {
            margin: 0 22px;
            cursor: pointer;
        }
        .title1 {
            margin-left: 90px;
        }
        .search {
            margin-left: 45px;
            cursor: pointer;
        }
    }
}
</style>
