import Vue from 'vue'

window._ = require('lodash');
window.axios = require('axios');

Vue.component('technologies', require('./components/sections/Technologies').default);
Vue.component('vue-svg', require('./components/partials/SVG').default);
Vue.component('rounded-button', require('./components/partials/RoundedButton').default);
Vue.component('home', require('./components/Home').default);
Vue.component('packagist-downloads', require('./components/PackagistDownloads').default);
Vue.component('github-repos', require('./components/GitHubRepos').default);
// import {scrollTo} from 'scroll-js';

const app = new Vue({
    el: '#app',
    data: {
        mobileMenu: false,
    },

    methods: {
        vueScroll(el) {
            scrollIntoView(el, document.body, {behavior: 'smooth'}).then(
                function () {
                    console.log('scroll do')
                }
            );
        },

        sendMC(e) {
            let form = e.target;
            let action = form.getAttribute('action');
            let method = form.getAttribute('method');
            let post_vars = {};
            let fields = form.getElementsByTagName("input");
            for (let i = 0; i < fields.length; i++) {
                post_vars[fields[i].getAttribute('name')] = fields[i].value
            }

            axios({
                method: 'get',
                url: action,
                data: post_vars
            })
                .then((response) => console.log(response))
                .catch((error) => console.log(error))

        }
    }
});

function controlActiveMenuBar() {
    let header = document.getElementById('main-header');
    let header_height = header.offsetHeight;
    if (window.scrollY > header_height) {
        header.classList.add('active');
    } else {
        header.classList.remove('active');
    }
}

window.addEventListener('scroll', controlActiveMenuBar);
window.addEventListener('load', controlActiveMenuBar);