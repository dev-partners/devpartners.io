import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from "./routes"
window._ = require('lodash');

Vue.use(VueRouter);

Vue.component('technologies', require('./components/sections/Technologies').default);
Vue.component('vue-svg', require('./components/partials/SVG').default);
Vue.component('rounded-button', require('./components/partials/RoundedButton').default);

const router = new VueRouter({
    routes
});

const app = new Vue({
    router,
    el: '#app',
    data: {
        mobileMenu: false,
    },

    mounted() {},

    methods: {}
});

router.beforeEach((to, from, next) => {
    app.$data.mobileMenu = false;
    window.scrollTo(0, 0);
    return next()
})

function controlActiveMenuBar()
{
    let header = document.getElementById('main-header');
    let header_height = header.offsetHeight;
    if (window.scrollY > header_height) {
        header.classList.add('active');
    }
    else {
        header.classList.remove('active');
    }
}

window.addEventListener('scroll', controlActiveMenuBar);
window.addEventListener('load', controlActiveMenuBar);