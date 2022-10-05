import Vue from 'vue'
import VueRouter from 'vue-router'

// components
import TheHomePage from '../js/components//pages/TheHomePage.vue'
import TheAbout from '../js/components//pages/TheAbout.vue'

Vue.use(VueRouter);

// routes
const routes = new VueRouter({
    mode: 'history', // cronology
    routes: [
        {path: '/', component: TheHomePage},
        {path: '/about', component: TheAbout}
    ]
});

export default routes;
