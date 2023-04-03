<template>
    <div class="tags">
        <div class="add">
            <button>新增标签</button>
        </div>
        <ul class="current">
            <li>衣</li>
            <li>食</li>
            <li>住</li>
            <li>行</li>
            <li>衣</li>
            <li>食</li>
            <li>住</li>
            <li>行</li>
            <li>衣</li>
            <li>食</li>
            <li>住</li>
            <li>行</li>
            <li>衣</li>
            <li>食</li>
            <li>住</li>
            <li>行</li>
            <li>衣</li>
            <li>食</li>
            <li>住</li>
            <li>行</li>
            <li>衣</li>
            <li>食</li>
            <li>住</li>
            <li>行</li>
            <li>衣</li>
            <li>食</li>
            <li>住</li>
            <li>行</li>
            <li>衣</li>
            <li>食</li>
            <li>住</li>
            <li>行</li>
        </ul>

    </div>
</template>

<script lang="ts">
    export default {
        name: 'Tags'
    };
</script>

<style lang="scss" scoped>
    .tags {
        display: flex;
        font-size: 14px;
        padding: 16px;
        flex-grow: 1;
        flex-direction: column-reverse;

        > .current {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;

            > li {
                background: #d9d9d9;
                $h: 24px;
                height: $h;
                border-radius: $h/2;
                padding: 0 16px;
                margin-right: 12px;
                margin-top: 5px;
            }
        }

        > .add {
            margin-top: 16px;

            button {
                background: transparent;
                border: none;
                border-bottom: 1px solid;
                color: #999999;
                padding-right: 2px;
                padding-left: 2px;
            }
        }
    }
</style>