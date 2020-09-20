<template>
    <div id="app">
        <template v-if="$route.meta.nohead">
            <router-view />
        </template>
        <template v-else>
            <Head></Head>
            <router-view />
        </template>

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
