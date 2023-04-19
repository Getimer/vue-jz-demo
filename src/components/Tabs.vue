<template>
    <ul class="tabs" :class="{[classPrefix+'-tabs']:classPrefix}">
        <li v-for="item in dataSource" :key="item.value"
            class="tabs-item"
            :class="{[classPrefix+'-item']:classPrefix,selected:item.value===values}"
            @click="select(item)">
            {{item.text}}
        </li>
    </ul>
</template>

<script lang="js">
    export default {
        name: 'Tabs',
        props:['dataSource','values','classPrefix'],
        methods:{
            select(item){
                this.$emit('update:value', item.value);
            },

        }
    }
</script>

<style lang="scss" scoped>
    .tabs{
        display: flex;
        background: #c4c4c4;
        text-align: center;
        font-size: 24px;

        &-item{
            width: 50%;
            height: 64px;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
            &.selected::after {
                content: '';
                position: absolute;
                bottom: 0;
                left: 0;
                width: 100%;
                height: 4px;
                background: #333333;
            }
        }
    }
</style>