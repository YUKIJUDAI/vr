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
                <router-link class="title" tag="div" to="/online-intro">
                    <img src="~@/assets/img/title4.png">
                </router-link>
                <div class="title">
                    <img src="~@/assets/img/title5.png">
                </div>
                <div class="search">
                    <img src="~@/assets/img/search.png">
                </div>
            </div>
            <div class="search">
                <div class="search-input">
                    <input type="text" />
                    <i class="icon-search"></i>
                </div>
                <div class="line">
                    <i class="icon-line"></i>
                </div>
                <div class="close">
                    <i class="icon-close"></i>
                </div>
            </div>
        </main>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

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
    .search-input {
        position: relative;
        input {
            width: 90%;
            border: 0;
            padding: 10px 0;
            font-size: 26px;
            color: #fff;
            background-color: transparent;
            &:focus {
                outline: none;
            }
        }
        .icon-search {
            position: absolute;
            top: 5px;
            right: 0px;
            width: 29px;
            height: 29px;
            display: block;
            background: url("~@/assets/img/icon-search.png");
        }
    }
    .line {
        width: 100%;
        height: 3px;
        .icon-line {
            background: url("~@/assets/img/icon-line.png");
            display: block;
            height: 3px;
        }
    }
    .close {
        width: 100%;
        
        .icon-close {
            background: url("~@/assets/img/icon-close.png");
            display: block;
            width: 47px;
            height: 47px;
            margin: 0 auto;
        }
    }
}
</style>
