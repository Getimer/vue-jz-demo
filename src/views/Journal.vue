<template>
    <div class="nav-wrapper">
        <div class="contain">
            <p>Journal.vue</p>
            </div>
        <Nav/>
    </div>
</template>

<script>

    export default {
        name: 'Journal',

    }
</script>

<style scoped>
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