import { Store } from "vuex/types/index";
import Vue from "vue";

declare module "*.vue" {
    export default Vue;
}

declare module "vue/types/vue" {
    interface Vue {
        $http: any;
        $store: Store<any>;
    }
}
