<template>
    <div class="search">
        <main>
            <ul class="list">
                <li v-for="(item,i) in data" :key="i" @click="toUrl(item.navigate)">
                    <img :src="item.base_path + '/'+ item.avatar_path">
                    <p class="zh">{{item.title}}</p>
                    <p class="en">{{item.title_en}}</p>
                </li>
            </ul>
        </main>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Watch } from "vue-property-decorator";

@Component
export default class Search extends Vue {
    data = [{
        avatar_path: "",
        base_path: "",
        title: "",
        title_en: ""
    }];

    index: number = 0;

    @Watch("$route.query.key")
    changeKey(val) {
        this.search(val);
    }

    created() {
        this.search(this.$route.query.key);
    }

    toUrl(navigate) {
        this.$router.push(["/shanghai", "/suzhou", "/online-intro", "/education-intro"][+navigate]);
    }

    search(keywords) {
        this.$http.post(
            "http://me.amrtang.com/vr_photo/api/web/v1/resource/list",
            {
                time: 1480576266,
                token: "c92114bcc9e4454f1d2b7399dc9d62a9",
                authToken: "",
                keywords
            }
        ).then(res => {
            res.status === 1 && (this.data = res.data);
        });
    }
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