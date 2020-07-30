import Vue from "vue";
import VueAwesomeSwiper from "vue-awesome-swiper";

import App from "./App.vue";
import router from "./router";
import store from "./store";

import "swiper/swiper.less";
import "./assets/less/normalize.less";

Vue.use(VueAwesomeSwiper);

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount("#app");
