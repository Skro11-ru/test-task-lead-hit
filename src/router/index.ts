import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import AuthorizationPage from "@/modules/Authorization/views/AuthorizationPage.vue";
Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "AuthorizationPage",
    component: AuthorizationPage
  },
  {
    path: "/analytics",
    name: "AnalyticsPage",
    component: () => import("@/modules/Analytics/views/AnalyticsPage.vue")
  },
  /* This is a wildcard route. It will match any path that is not matched by any other route. */
  {
    path: "*",
    component: () => import("@/views/NotFoundPage.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
