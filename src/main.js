import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import Redirect from "./views/Redirect.vue";
import "./assets/css/styles.css";

Vue.config.productionTip = false;

const routes = [
  { path: "/", component: Redirect },
  {
    path: "/login",
    component: () =>
      import(/* webpackChunkName: "login" */ "./views/Login.vue"),
  },
  {
    path: "/users",
    component: () =>
      import(/* webpackChunkName: "users" */ "./views/Users.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

Vue.use(VueRouter);
new Vue({
  router: router,
  render: (h) => h(App),
}).$mount("#app");
