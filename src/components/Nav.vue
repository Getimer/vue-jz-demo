<template>
    <div class="nav" >
        <router-link to="/labels"><Icon name="labels"/>标签</router-link>|
        <router-link to="/journal"><Icon name="journal"/>记账</router-link> |
        <router-link to="/count"><Icon name="count"/>统计</router-link>
    </div>
</template>

<script lang="ts">
    import Icon from '@/components/Icon.vue';
    export default {
        name: "Nav",
        components: {Icon}
    }
</script>

<style scoped>
.nav{
    border: 1px solid red;
}
</style>