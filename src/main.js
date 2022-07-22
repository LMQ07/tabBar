import Vue from "vue";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.css";
import "./assets/fonts/iconfont.css";
import axios from "axios";
import goodlist from "./views/MyGoodsList.vue";
import goodsearch from "./views/MyGoodsSearch.vue";
import userinfo from "./views/MyUserInfo.vue";
import vueRouter from "vue-router";
Vue.use(vueRouter);
const VueRouterPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(to) {
  return VueRouterPush.call(this, to).catch((err) => err);
};
const routes = [
  {
    path: "/",
    redirect: "/goodlist",
  },
  {
    path: "/goodlist",
    component: goodlist,
  },
  {
    path: "/goodsearch",
    component: goodsearch,
  },
  {
    path: "/userinfo",
    component: userinfo,
  },
];
const router = new vueRouter({
  routes,
});
axios.defaults.baseURL = "https://www.escook.cn";
Vue.prototype.$axios = axios;
Vue.config.productionTip = false;
Vue.directive("focus", {
  inserted(el) {
    el.focus();
  },
});
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
