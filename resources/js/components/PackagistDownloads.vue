<template>
    <div>{{ downloads }}</div>
</template>

<script>
    export default {
        data() {
            return {
                downloads: 0,
                vendors: ['devpartners', 'recycledbeans'],
            }
        },

        mounted() {
            this.vendors.forEach((vendor) => {
                axios.get(`https://packagist.org/packages/list.json?vendor=${vendor}`)
                .then(({data}) => {
                    data.packageNames.forEach((pkg) => {
                        axios.get(`https://packagist.org/packages/${pkg}.json`)
                            .then(({data}) => {
                                this.downloads = this.downloads + parseInt(data.package.downloads.total)
                            })
                    })
                })
                .catch(() => {})
            })
        }
    }
</script>