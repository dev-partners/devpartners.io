<template>
    <div>
        <div class="bg-center bg-cover bg-no-repeat" style="background-image: url('/dist/img/uncs-feature.jpg')">
            <div class="h-screen flex items-center" style="background: rgba(0, 0, 0, 0.7)">
                <div class="container text-white">
                    <div class="text-2xl uppercase font-light">Category</div>
                    <h1 class="font-serif text-6xl mb-8">
                        Article {{ article.title }}
                    </h1>
                    <rounded-button to="#article-body">Read More</rounded-button>
                </div>
            </div>
        </div>
        <div class="pt-12">
            <div class="container">
                <a name="article-body"></a>
                <main v-html="article.body"></main>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                article: {
                    title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
                    byline: 'By Matt Watson',
                    body: `
                    <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A autem beatae dolorem doloremque eaque
                        eligendi fugit id iste nisi officia praesentium quia reprehenderit tempore, temporibus voluptatem.
                        Dignissimos optio quos voluptate?
                    </div>
                    <div>Adipisci architecto consectetur culpa ducimus ea eligendi eos est fugit ipsa magni numquam odio
                        perferendis, placeat praesentium quas quasi quo repellendus repudiandae sint, tempora temporibus ut
                        veritatis voluptate voluptates voluptatibus.
                    </div>
                    <div>Ab alias aliquid assumenda autem commodi corporis dolorem ea error ex exercitationem fuga harum id
                        iusto, laboriosam laborum laudantium magni maxime molestias necessitatibus nesciunt nihil perferendis
                        placeat recusandae unde voluptates?
                    </div>
                    <div>Ab, adipisci aliquam amet architecto corporis cum deleniti, doloremque esse ex expedita, in
                        necessitatibus nobis nostrum odio omnis perferendis provident sit totam? Ab inventore laboriosam nam
                        natus, perspiciatis tempore temporibus.
                    </div>
                   `
                }
            }
        }
    }
</script>