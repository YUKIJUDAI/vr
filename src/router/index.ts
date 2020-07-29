import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";
import Suzhou from "../views/suzhou.vue";
import Shanghai from "../views/shanghai.vue";
import OnlineIntro from "../views/online_introduction.vue";
import EducationIntro from "../views/education_introduction.vue";
import Search from "../views/search.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
    {
        path: "/",
        name: "Home",
        component: Home,
        meta: { noback: true },
    },
    {
        path: "/suzhou",
        name: "Suzhou",
        component: Suzhou,
    },
    {
        path: "/shanghai",
        name: "Shanghai",
        component: Shanghai,
    },
    {
        path: "/online-intro",
        name: "onlineIntro",
        component: OnlineIntro,
    },
    {
        path: "/education-intro",
        name: "educationIntro",
        component: EducationIntro,
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
