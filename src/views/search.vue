<template>
    <div class="search">
        <main>
            <ul class="list">
                <li v-for="(item,i) in 20" :key="i">
                    <img src="~@/assets/img/list.png">
                    <p class="zh">中文</p>
                    <p class="en">English</p>
                </li>
            </ul>
        </main>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.search {
    background: url("~@/assets/img/search-bg.jpg") no-repeat center left;
    background-size: cover;
    height: 100vh;
    .list {
        display: flex;
        flex-wrap: wrap;
        padding-top: 360px;
    }
    .list li {
        margin-left: 8px;
        margin-top: 30px;
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
}
</style>