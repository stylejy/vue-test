import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";

const newProject = {
  template: "<h1>말없이 서브웨이 주문하는 Assistant 웹앱</h1>"
};

const routes = [{ path: "/new-project", component: newProject }];
const router = new VueRouter({ routes });

Vue.use(VueRouter);
new Vue({
  router,
  el: "#app",
  render: h => h(App)
});
