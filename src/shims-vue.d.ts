import { Store } from "vuex/types/index";

declare module "vue/types/vue" {
    interface Vue {
        $http: any;
        $store: Store<any>;
    }
}
