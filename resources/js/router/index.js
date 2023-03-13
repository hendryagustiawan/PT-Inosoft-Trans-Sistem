// import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "../View/Home.vue";

// Vue.use(Router);

// export default new Router({
//     routes: [
//         {
//             path: "/",
//             name: "HomePage",
//             component: Home,
//         },
//     ],
// });

// import Vue from "vue";
// import Router from "vue-router";
import Home from "../View/Home.vue";

// Vue.use(Router);

const routes = [
    {
        path: "/",
        name: "HomePage",
        component: Home,
    },
];

const router = new VueRouter({
    mode: "history",
    routes,
});

export default router;
