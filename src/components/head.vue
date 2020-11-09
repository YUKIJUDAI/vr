<template>
    <div>
        <div class="head" :style="{height: searchFlag ? '300px' : '120px'}"></div>
        <main>
            <div class="back" @click="$router.push('/')" v-show="!$route.meta.noback">
                <img src="~@/assets/img/back.png">
            </div>
            <div class="head-main">
                <a href="http://www.microport.com.cn/" target="_blank" rel="noopener noreferrer">
                    <img src="~@/assets/img/logo.png" class="logo">
                </a>
                <router-link class="title title1" tag="div" to="/">
                    <img src="~@/assets/img/title1.png">
                </router-link>
                <a href="http://me.amrtang.com/vr_sh/" target="_blank" class="title">
                    <img src="~@/assets/img/title2.png">
                </a>
                <a href="http://me.amrtang.com/vr_sz/" target="_blank" class="title">
                    <img src="~@/assets/img/title3.png">
                </a>
                <router-link class="title" tag="div" to="/online-intro">
                    <img src="~@/assets/img/title4.png">
                </router-link>
                <router-link class="title" tag="div" to="/education-intro">
                    <img src="~@/assets/img/title5.png">
                </router-link>
                <div class="title ul">
                    <p>AED</p>
                    <ul>
                        <router-link tag="li" to="/aedtype/1">心脏猝死小科普</router-link>
                        <router-link tag="li" to="/aedtype/2">微创AED地图</router-link>
                        <router-link tag="li" to="/aedtype/3">呼唤APP</router-link>
                        <router-link tag="li" to="/aedcontent/41">AED培训日程</router-link>
                        <router-link tag="li" to="/video?id=25">AED宣传视频</router-link>
                        <router-link tag="li" to="/aedtype/5">附录</router-link>
                    </ul>
                </div>
                <div class="search" @click="searchFlag = true">
                    <img src="~@/assets/img/search.png">
                </div>
            </div>
            <transition name="fade">
                <div class="search" v-if="searchFlag">
                    <div class="search-input">
                        <input type="text" v-model="searchText" />
                        <i class="icon-search" @click="search"></i>
                    </div>
                    <div class="line">
                        <i class="icon-line"></i>
                    </div>
                    <div class="close">
                        <i class="icon-close" @click="close"></i>
                    </div>
                </div>
            </transition>
        </main>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Head extends Vue {
    searchText: string = "";
    searchFlag: boolean = false;

    mounted() {
        document.onkeydown = (e) => {
            if (!this.searchFlag) return;
            if (e && e.keyCode === 13) this.search();
        }
    }
    // 搜索
    search() {
        if (this.searchText && this.searchText !== "") {
            this.$router.push("/search?key=" + this.searchText);
        }
    }
    toPdf(type) {
        let routeData = this.$router.resolve({ path: '/Pdf/' + type });
        window.open(routeData.href, '_blank');
    }
    // 关闭
    close() {
        this.searchText = "";
        this.searchFlag = false;
    }
}
</script>

<style scoped lang="less">
main {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 200;
    .back {
        height: 120px;
        line-height: 150px;
        left: 50px;
        top: 0;
        cursor: pointer;
        z-index: 200;
        position: fixed;
    }
    .head-main {
        display: flex;
        align-items: center;
        height: 120px;
        .title {
            margin: 0 22px;
            cursor: pointer;
            padding: 10px 0;
        }
        .title1 {
            margin-left: 40px;
        }
        .search {
            margin-left: 45px;
            cursor: pointer;
        }
        .ul {
            color: rgba(255, 255, 255, 0.8);
            position: relative;
            p {
                &:after {
                    content: "";
                    position: absolute;
                    top: 16px;
                    right: -15px;
                    border: 6px solid transparent;
                    border-left-color: #fff;
                    transform: rotate(90deg);
                }
            }
            &:hover {
                ul {
                    display: block;
                }
            }
            ul {
                position: absolute;
                text-indent: 2em;
                width: 180px;
                top: 30px;
                left: 0;
                z-index: 1;
                display: none;
                background-color: #fff;
                color: #333;
                li {
                    list-style: none;
                    padding: 14px 0;
                    border-bottom: 1px solid #999;
                }
            }
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
            top: 0px;
            right: 0px;
            width: 29px;
            height: 29px;
            display: block;
            background: url("~@/assets/img/icon-search.png");
            cursor: pointer;
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
            margin: 35px auto;
            cursor: pointer;
            transition: All 0.2s ease-in-out;
            -webkit-transition: All 0.2s ease-in-out;
            -moz-transition: All 0.2s ease-in-out;
            -o-transition: All 0.2s ease-in-out;
            &:hover {
                transform: rotate(90deg);
            }
        }
    }
    .fade-enter-active {
        transition: opacity 1s;
    }
    .fade-leave-active {
        transition: opacity 0.3s;
    }
    .fade-enter,
    .fade-leave-to {
        opacity: 0;
    }
}
.head {
    background: url("~@/assets/img/head.png") no-repeat;
    background-size: cover;
    width: 100vw;
    height: 120px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99;
}
</style>
