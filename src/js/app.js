window.Vue = require('vue');

const app = new Vue({
    el: '#app',
    data: {
        qualities: ['technology', 'data', 'marketing'],
        special_quality: 'technology',
        mobileMenu: false,
    },

    mounted() {
        let vm = this;

        setTimeout(function() {
            vm.setNewQuality();
        }, 3000);
    },

    methods: {

        setNewQuality() {
            let vm = this;

            vm.special_quality = '';

            let shifted = vm.qualities.shift();

            setTimeout(function() {
                vm.addNextLetter(shifted, 0);
            }, 200);

            vm.qualities.push(shifted);
        },

        addNextLetter(word, position) {
            let vm = this;

            vm.special_quality += word[position];

            if (word[position+1]) {
                setTimeout(function() {
                    vm.addNextLetter(word, position + 1);
                }, 150);
            }
            else {
                setTimeout(function() {
                    vm.setNewQuality();
                }, 3000);
            }
        }

    }
});

function verticallyCenterItems()
{
    let vertically_aligned_elements = document.getElementsByClassName('vertical-align-center');
    let window_height = window.innerHeight;

    for (let i = 0; i < vertically_aligned_elements.length; i++) {
        let element_height = vertically_aligned_elements[i].clientHeight;
        let top_padding = parseInt(((window_height - element_height) / 2));

        top_padding = top_padding < 0 ? 0 : top_padding;
        vertically_aligned_elements[i].style.paddingTop = top_padding.toString() + 'px';
    }
}

window.addEventListener('resize', function() {
    verticallyCenterItems();
});
window.addEventListener('load', function() {
    verticallyCenterItems();
});