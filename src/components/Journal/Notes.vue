<template>
    <label class="notes">
        <span class="name">备注</span>
        <input type="text" placeholder="在这里添加备注">
    </label>
</template>

<script lang="ts">
    export default {
        name: 'Notes'
    };
</script>

<style lang="scss" scoped>
    .notes {
        display: flex;
        background: #f5f5f5;
        font-size: 14px;
        padding-left: 16px;
        align-items: center;

        > .name {
            padding-right: 16px;
        }

        input {

            margin-left: 2px;
            height: 64px;
            flex-grow: 1;
            background: transparent;
            border: none;
        }
    }
</style>