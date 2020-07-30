<template>
    <div class="video">
        <main>
            <div class="title">
                <img src="~@/assets/img/online-title.png">
            </div>
            <div class="play-area">
                <iframe src="http://go.plvideo.cn/front/video/preview?vid=e4a87aabfe128e3de086fb594df29a3e_e"></iframe>
            </div>
        </main>
    </div>
</template>

<script>
import { Vue, Component } from "vue-property-decorator";

@Component
export default class Video extends Vue {
    mounted() {
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