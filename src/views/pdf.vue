<template>
    <div class="pdf">
        <object type="application/pdf" data="http://me.amrtang.com/pdf_tool/js/web/viewer.html?file=pdf/cusi.pdf"></object>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Pdf extends Vue {
    type: string | (string | null)[] = this.$route.params.type;

    get url() {
        return [
            "http://me.amrtang.com/pdf_tool/js/web/viewer.html?file=pdf/cusi.pdf",
            "http://me.amrtang.com/pdf_tool/js/web/viewer.html?file=pdf/aed.pdf",
            "http://me.amrtang.com/pdf_tool/js/web/viewer.html?file=pdf/app.pdf",
            "http://me.amrtang.com/pdf_tool/js/web/viewer.html?file=pdf/peixun.pdf",
            "http://me.amrtang.com/pdf_tool/js/web/viewer.html?file=pdf/fulu.pdf"
        ][+this.type]
    }
}
</script>

<style lang="less" scoped>
.pdf {
    object {
        width: calc(~"100vw - 5px");
        min-height: 100vh;
    }
}
</style>