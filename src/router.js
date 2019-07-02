import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import NewMessage from "./views/NewMessage.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/messages/new",
      name: "newMessage",
      component: NewMessage
    }
  ],
  mode: "history"
});
