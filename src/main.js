import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import "./assets/css/styles.css";

Vue.config.productionTip = false;

function authRoute(to, from, next) {
  const loginInfoStored = JSON.parse(localStorage.getItem("loginInfo"));
  if (loginInfoStored == null) {
    next("/login");
  } else {
    next();
  }
}

const routes = [
  {
    path: "/",
    beforeEnter: authRoute,
    component: () =>
      import(/* webpackChunkName: "users" */ "./views/Users.vue"),
  },
  {
    path: "/login",
    component: () =>
      import(/* webpackChunkName: "login" */ "./views/Login.vue"),
  },
  {
    path: "/users",
    beforeEnter: authRoute,
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
