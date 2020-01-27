<template>
    <a :href="to" class="uppercase py-2 px-6 rounded-full inline-block normal-case font-sans font-normal">
        <slot></slot>
    </a>
</template>

<script>
    export default {
        props: ['to']
    }
</script>