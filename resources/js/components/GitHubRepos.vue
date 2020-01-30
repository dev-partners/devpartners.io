<template>
    <div>{{ repositories }}</div>
</template>

<script>
    export default {
        data() {
            return {
                repositories: 0,
            }
        },

        mounted() {
            axios.get(`https://api.github.com/users/dev-partners/repos`)
                .then(({data}) => {
                    this.repos = data.filter((repo) => {
                        console.log(repo.fork)
                        return repo.fork
                    })
                    .forEach(() => {
                        this.repositories = this.repositories + 1;
                    })
                })
                .catch(() => {
                })
        }
    }
</script>