import Vue from "vue";
import Login from "./views/Login.vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./style/style.css";

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

Vue.use(ElementUI);

Vue.config.productionTip = false;
new Vue({
  router,
  store,
  el: "#app",
  render: (h) => h(APP),
}).$mount("#app");
