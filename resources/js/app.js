require("./bootstrap");

// window.Vue = require("vue").default;

// import dependecies tambahan
import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import router from "./router";

Vue.use(VueRouter);

const app = new Vue({
    el: "#app",
    router,
    components: { App },
});
