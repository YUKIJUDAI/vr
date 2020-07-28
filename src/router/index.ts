import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";
import Suzhou from "../views/suzhou.vue";
import OnlineIntro from "../views/online_introduction.vue";
import Search from "../views/search.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/suzhou",
        name: "Suzhou",
        component: Suzhou,
    },
    {
        path: "/online-intro",
        name: "onlineIntro",
        component: OnlineIntro,
    },
    {
        path: "/search",
        name: "Search",
        component: Search,
    },
];

const router = new VueRouter({
    mode: "hash",
    base: process.env.BASE_URL,
    routes,
});

export default router;
