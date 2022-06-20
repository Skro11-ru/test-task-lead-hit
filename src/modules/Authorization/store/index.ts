import Vue from "vue";
import Vuex from "vuex";
import store from "@/store/";
import { Module, getModule, VuexModule } from "vuex-module-decorators";

const name = "Authorization";

Vue.use(Vuex);

@Module({ dynamic: true, namespaced: true, name, stateFactory: true, store })
class Authorization extends VuexModule {}
export default getModule(Authorization);
