import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";
import OnlineIntro from "../views/online_introduction.vue";
import EducationIntro from "../views/education_introduction.vue";
import Search from "../views/search.vue";
import Video from "../views/video.vue";
import Aed from "../views/aed.vue";
import AedType from "../views/aedtype.vue";
import AedContent from "../views/aedcontent.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
    {
        path: "/",
        name: "Home",
        component: Home,
        meta: { noback: true },
    },
    {
        path: "/aed",
        name: "aed",
        component: Aed,
    },
    {
        path: "/aedtype/:type",
        name: "aedtype",
        component: AedType,
    },
    {
        path: "/aedcontent/:id",
        name: "aedcontent",
        component: AedContent,
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
    {
        path: "/video",
        name: "Video",
        component: Video,
    },
    {
        path: "/aed",
        name: "aed",
        component: Aed,
    },
];

const router = new VueRouter({
    mode: "hash",
    base: process.env.BASE_URL,
    routes,
});

export default router;
