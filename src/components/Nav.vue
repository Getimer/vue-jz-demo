<template>
    <div class="nav" >
        <router-link to="/labels">标签</router-link>|
        <router-link to="/journal">记账</router-link> |
        <router-link to="/count">统计</router-link>

    </div>
</template>

<script>
    export default {
        name: "Nav"
    }
</script>

<style scoped>
.nav{
    border: 1px solid red;
}
</style>