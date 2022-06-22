import Vue from "vue";
import Vuex from "vuex";
import store from "@/store/";
import {
  Module,
  getModule,
  VuexModule,
  Mutation
} from "vuex-module-decorators";
import { INotificationOptions } from "@/modules/Notification/interfaces";

const name = "NotificationModule";

Vue.use(Vuex);

@Module({ dynamic: true, namespaced: true, name, stateFactory: true, store })
class NotificationModule extends VuexModule {
  isShowNotification = false;
  notificationOptions: INotificationOptions = { message: "", type: "" };

  @Mutation
  toggleShowNotification(isShowNotification: boolean) {
    this.isShowNotification = isShowNotification;
  }

  @Mutation
  setNotificationOptions(options: INotificationOptions) {
    this.notificationOptions = options;
  }
}
export default getModule(NotificationModule);
