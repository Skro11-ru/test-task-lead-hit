import Vue from "vue";
import Vuex from "vuex";
import store from "@/store/";
import {
  Module,
  getModule,
  VuexModule,
  Action,
  Mutation
} from "vuex-module-decorators";
import { authorizationService } from "@/modules/Authorization/services";

const name = "AuthorizationModule";

Vue.use(Vuex);

@Module({ dynamic: true, namespaced: true, name, stateFactory: true, store })
class AuthorizationModule extends VuexModule {
  isAuthorized = false;

  @Mutation
  toggleAuthorizationStates(isAuthorized: boolean) {
    this.isAuthorized = isAuthorized;
  }

  @Action
  async authorizationAction(id: string) {
    const response = await authorizationService.authorization(id);
    if (response.message === "ok") {
      this.toggleAuthorizationStates(true);
      localStorage.setItem("leadhit-site-id", "5f8475902b0be670555f1bb3");
    }
    return response.message;
  }
}
export default getModule(AuthorizationModule);
