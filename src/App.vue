<template>
    <div id="app">
        <Head></Head>
        <router-view />
    </div>
</template>

<script>
import { Vue, Component } from "vue-property-decorator";
import Head from "@/components/head.vue";

@Component({
    components: { Head }
})
export default class App extends Vue {

}
</script>

<style lang="less">
</style>
