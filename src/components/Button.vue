<template>
    <button class="button" ><slot/></button>
</template>

<script lang="js">
    export default {
        name: 'Button',
    }
</script>

<style lang="scss" scoped>
    .button{
        padding: 0 16px;
        background: #767676;
        border-radius: 4px;
        height: 40px;
        color: white;
        border: none;
        &-wrapper{
            text-align: center;
            padding: 16px;
            margin-top: 16px;
        }
    }
</style>