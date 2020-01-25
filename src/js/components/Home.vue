<template>
    <div>
        <div class="home min-h-screen bg-cover bg-center bg-no-repeat bg-fixed flex items-center flex-row z-40">

            <div id="particles" class="min-h-screen w-full"></div>
            <div class="w-full absolute">
                <div class="container mx-auto px-6 pb-20">
                    <div class="headline font-serif font-light vertical-align-center text-center lg:text-left text-white">
                        <div class="text-5xl lg:text-8xl xl:text-9xl lowercase mb-20">
                            <div class="">
                                Strategy <span class="text-pink-500 font-normal">&plus;</span>
                            </div>
                            <div class="">
                                <span v-html="special_quality" class="special-quality">Technology</span><span
                                    class="cursor text-gray-100">_</span>
                            </div>
                        </div>

                        <rounded-button to="/about-us" class="text-gray-800 bg-white hover:bg-gray-100">
                            What Makes Us Different
                        </rounded-button>
                        <!--                    <router-link to="/about" class="text-md lg:text-lg text-white font-mono mt-20 bg-gray-950 font-bold inline-block py-2 px-4 lg:px-6 lowercase hover:shadow-lg hover:text-white">-->
                        <!--                        >_ What Makes Us Different-->
                        <!--                    </router-link>-->
                    </div>
                </div>
            </div>

        </div>

        <div class="text-white bg-cover bg-no-repeat bg-center" style="background-image: url('/dist/img/carlos-muza-hpjSkU2UYSU-unsplash.jpg')">
            <div class="min-h-screen py-24 md:py-32 bg-gray-950-90% flex items-center flex-row">
                <div class="container text-center">
                    <h2 class="font-serif text-4xl lg:text-6xl mb-6">
                        <span class="lg:bg-gray-950 inline-block lg:px-12 lg:py-4">Solution-Based Approach</span>
                    </h2>
                    <p class="lg:w-3/4 mx-auto mb-32 text-xl">
                        <span class="">We deliver technology solutions that are catered toward the organization, <em>not the other way around</em>.</span>
                    </p>
                    <ul class="lg:flex items-top">
                        <li class="lg:px-10 mb-24 w-1/3">
                            <div class="border-2 border-transparent hover:border-pink-500 rounded-full bg-gray-950 text-gray-400 font-bold text-2xl inline-block h-16 w-16 flex flex-row items-center justify-center mx-auto mb-6">
                                <span class="block">
                                    <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="people-carry" class="h-6 svg-inline--fa fa-people-carry fa-w-20" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M128 96c26.5 0 48-21.5 48-48S154.5 0 128 0 80 21.5 80 48s21.5 48 48 48zm384 0c26.5 0 48-21.5 48-48S538.5 0 512 0s-48 21.5-48 48 21.5 48 48 48zm88 154.6l-19-78.4c-4.2-17.3-16.7-32-33.5-39.3-16.9-7.4-35.7-6.5-51.4 2.3-25.6 14.4-40.3 47.6-46.8 66.2l-12.2 34.7c-.6 1.7-1.7 3.2-3.4 4.3L416 250.5V128c0-8.8-7.2-16-16-16H240c-8.8 0-16 7.2-16 16v122.5l-17.8-10.1c-1.6-1.1-2.8-2.6-3.4-4.3l-12.2-34.7c-6.5-18.6-21.2-51.8-46.8-66.2-15.7-8.8-34.5-9.7-51.4-2.3-16.7 7.3-29.2 22-33.5 39.3L40 250.7c-5.1 21.1 2 43.2 18.3 57.5l68.7 60c6.3 5.5 10.2 13.2 10.9 21.5l8 100.2c.8 9.1 8.9 23.3 25.8 22 13.2-1.1 23.1-12.6 22-25.8L185 376.9c-1.2-15.1-8.3-29.1-19.7-39.1l-52.2-45.6 24.8-92.1c2.7 5.3 19.6 51.8 19.6 51.8 3.9 11.2 11.2 20.7 23 28.9l36.9 19.4c4.6 2.4 9.7 3.7 14.9 3.7h175.5c5.2 0 10.3-1.3 14.9-3.7l36.9-19.4c11.8-8.2 19.1-17.7 23-28.9 0 0 16.9-46.6 19.6-51.8l24.8 92.1-52.2 45.6c-11.4 10-18.5 24-19.7 39.1L446.3 486c-1 13.2 8.8 24.8 22 25.8 16.9 1.3 25.1-12.7 25.8-22l8-100.2c.7-8.3 4.6-16.1 10.9-21.5l68.7-59.9c16.3-14.3 23.3-36.5 18.3-57.6zM368 256h-96v-96h96v96zm270.2 222.9l-53.7-130.8-38.2 33.4 47.4 115.6c5 12.2 18.9 18.1 31.3 13.1 12.4-5 18.2-19 13.2-31.3zm-636.4 0c-5 12.3.8 26.3 13.1 31.3 12.4 5 26.3-.9 31.3-13.1l47.4-115.6-38.2-33.4L1.8 478.9z"></path></svg>
                                </span>
                            </div>
                            <h4 class="text-2xl font-serif text-gray-300 mb-6">Solutions have to work for the industry</h4>
                            We're not in the business of selling people tools they don't need, we're in the business of developing lasting partnerships.
                        </li>
                        <li class="lg:px-10 mb-24 w-1/3">
                            <div class="border-2 border-transparent hover:border-pink-500 rounded-full bg-gray-950 text-gray-400 font-bold text-2xl inline-block h-16 w-16 flex flex-row items-center justify-center mx-auto mb-6">
                                <span class="block">
                                    <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="chart-line" class="h-6 svg-inline--fa fa-chart-line fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M117.65 277.65c6.25 6.25 16.38 6.25 22.63 0L192 225.94l84.69 84.69c6.25 6.25 16.38 6.25 22.63 0L409.54 200.4l29.49 29.5c15.12 15.12 40.97 4.41 40.97-16.97V112c0-8.84-7.16-16-16-16H363.07c-21.38 0-32.09 25.85-16.97 40.97l29.5 29.49-87.6 87.6-84.69-84.69c-6.25-6.25-16.38-6.25-22.63 0l-74.34 74.34c-6.25 6.25-6.25 16.38 0 22.63l11.31 11.31zM496 400H48V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v336c0 17.67 14.33 32 32 32h464c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16z"></path></svg>
                                </span>
                            </div>
                            <h4 class="text-2xl font-serif text-gray-300 mb-6">Solutions have to provide return on investment</h4>
                            We only suggest technologies that will likely bring a good ROI.
                        </li>
                        <li class="lg:px-10 mb-24 w-1/3">
                            <div class="border-2 border-transparent hover:border-pink-500 rounded-full bg-gray-950 text-gray-400 font-bold text-2xl inline-block h-16 w-16 flex flex-row items-center justify-center mx-auto mb-6">
                                <span class="block">
                                    <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="user-friends" class="h-6 svg-inline--fa fa-user-friends fa-w-20" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M480 256c53 0 96-43 96-96s-43-96-96-96-96 43-96 96 43 96 96 96zm0-144c26.5 0 48 21.5 48 48s-21.5 48-48 48-48-21.5-48-48 21.5-48 48-48zM272.1 276c-11.9 0-23.9 1.7-35.5 5.3-14.2 4.3-29.1 6.7-44.7 6.7s-30.5-2.4-44.7-6.7c-11.6-3.5-23.6-5.3-35.5-5.3-36.3 0-71.6 16.2-92.3 46.9C7.2 341.3 0 363.4 0 387.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-44.8c0-23.8-7.2-45.9-19.6-64.3-20.7-30.7-56-46.9-92.3-46.9zM336 432H48v-44.8c0-28.9 18.4-53.6 44.1-63.1 10.3-3.8 21.6-3.7 31.9 0 22.1 7.9 45 11.9 68 11.9s45.8-4 68.1-11.9c10.3-3.7 21.6-3.8 31.9 0 25.7 9.4 44.1 34.2 44.1 63.1V432zM192 256c61.9 0 112-50.1 112-112S253.9 32 192 32 80 82.1 80 144s50.1 112 112 112zm0-176c35.3 0 64 28.7 64 64s-28.7 64-64 64-64-28.7-64-64 28.7-64 64-64zm431.7 237.1C606.4 291.5 577 278 546.8 278c-27.8 0-34.8 10-66.8 10s-39-10-66.8-10c-13.3 0-26.2 3-38.2 8.1 5.8 5.9 11.3 12 16 18.9 4.7 7 8.6 14.4 12 22 3.3-.7 6.7-1.1 10.2-1.1 17.2 0 29.6 10 66.8 10 37.4 0 49.5-10 66.8-10 15.7 0 29.5 6.7 37.1 17.9 5.3 7.9 8.1 17.1 8.1 26.7V400H416v32c0 5.5-.6 10.8-1.6 16H600c22.1 0 40-17.9 40-40v-37.3c0-19.9-6-38.3-16.3-53.6z"></path></svg>
                                </span>
                            </div>
                            <h4 class="text-2xl font-serif text-gray-300 mb-6">Solutions have to work for the organization</h4>
                            We only suggest technologies that work for the client's business.
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <technologies></technologies>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                qualities: ['Data', 'Creativity', 'Technology'],
                special_quality: 'Technology',
            }
        },

        mounted() {
            let vm = this;

            setTimeout(function () {
                vm.setNewQuality();
            }, 3000);

        },

        methods: {

            setNewQuality() {
                let vm = this;

                vm.special_quality = '';

                let shifted = vm.qualities.shift();

                setTimeout(function () {
                    vm.addNextLetter(shifted, 0);
                }, 200);

                vm.qualities.push(shifted);
            },

            addNextLetter(word, position) {
                let vm = this;

                vm.special_quality += word[position];

                if (word[position + 1]) {
                    setTimeout(function () {
                        vm.addNextLetter(word, position + 1);
                    }, 150);
                } else {
                    setTimeout(function () {
                        vm.setNewQuality();
                    }, 3000);
                }
            }

        }
    }
</script>