require("./bootstrap");

window.Vue = require("vue").default;

// import dependecies tambahan
import VueRouter from "vue-router";
import Axios from "axios";

Vue.use(VueRouter, Axios);

// import file yang dibuat tadi
import app from "./app.vue";
import Home from "./View/Home.vue";

// membuat router
const routes = [
    {
        name: "HomePage",
        path: "/",
        component: Home,
    },
];

const router = new VueRouter({ mode: "history", routes: routes });
new Vue(Vue.util.extend({ router }, app)).$mount("#app");
