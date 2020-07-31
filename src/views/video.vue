<template>
    <div class="video">
        <main>
            <div class="title">
                <img src="~@/assets/img/online-title.png" v-show="data.navigate === 2">
                <img src="~@/assets/img/education-title.png" v-show="data.navigate === 3">
            </div>
            <div class="play-area">
                <iframe :src="data.href"></iframe>
            </div>
        </main>
    </div>
</template>

<script>
import { Vue, Component } from "vue-property-decorator";

@Component
export default class Video extends Vue {

    data = {};

    created() {
        this.$http.post(
            "http://me.amrtang.com/vr_photo/api/web/v1/resource/info",
            {
                time: 1480576266,
                token: "c92114bcc9e4454f1d2b7399dc9d62a9",
                authToken: "",
                id: this.$route.query.id
            }
        ).then(res => {
            res.status === 1 && (this.data = res.data);
        });
    }
}
</script>

<style lang="less" scoped>
.video {
    background: url("~@/assets/img/online-bg.png") no-repeat center left;
    background-size: cover;
    height: 100vh;
    .title {
        padding-top: 140px;
        text-align: center;
    }
    .play-area {
        margin-top: 20px;
        iframe {
            width: 100%;
            height: 700px;
            border: 0;
        }
    }
}
</style>