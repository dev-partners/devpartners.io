<template>
    <router-link :to="to" class="uppercase py-2 px-6 rounded-full inline-block normal-case font-sans font-normal">
        <slot></slot>
    </router-link>
</template>

<script>
    export default {
        props: ['to']
    }
</script>