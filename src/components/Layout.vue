<template>
    <div class="nav-wrapper">
        <div class="contain">
            <slot/>
        </div>
        <Nav/>
    </div>
</template>

<script lang="ts">
    export default {
        name: "Layout"
    }
</script>

<style lang="scss" scoped>
    .nav-wrapper {
        border: 1px solid blue;
        display: flex;
        flex-direction: column;
        height: 100vh;
    }

    .contain {
        border: 1px solid green;
        overflow: auto;
        flex-grow: 1;
    }
</style>