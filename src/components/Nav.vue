<template>
    <nav>
        <router-link to="/labels" class="item" active-class="selected">
            <Icon name="labels"/>
            标签
        </router-link>
        <router-link to="/journal" class="item" active-class="selected">
            <Icon name="journal"/>
            记账
        </router-link>
        <router-link to="/count" class="item" active-class="selected">
            <Icon name="count"/>
            统计
        </router-link>
    </nav>
</template>

<script lang="ts">
    import Icon from '@/components/Icon.vue';
    export default {
        name: "Nav",
        components: {Icon}
    }
</script>

<style lang="scss" scoped>
    @import "~@/assets/styles/helper.scss";
nav{
    @extend %outerShadow;
    display: flex;
    flex-direction: row;
    font-size: 12px;
    > .item{
        padding:2px 0 ;
        display: flex;
        width:33.33333%;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        .icon{

            width: 32px;
            height: 32px;
        }
    }
    > .item.selected{
        color:$color-highlight;
    }
}
</style>