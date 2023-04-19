<template>
    <Layout>
        <Tabs :data-source="typeList" class-prefix="type" @update:value="onUpdateType" v-model:values="this.type"/>
        <Tabs :data-source="intervalList" class-prefix="interval" @update:value="onUpdateInterval" v-model:values="this.interval"/>
    </Layout>
</template>

<script>
    import Tabs from "@/components/Tabs";

    export default {
        name: "Count",
        data() {
            return {
                type: '-',
                interval: 'day',
               intervalList: [{text: '按天', value: 'day'},{text: '按月', value: 'month'},{text: '按年', value: 'year'}],
               typeList:[{text: '支出', value: '-'}, {text: '收入', value: '+'}, ]
            }
        },
        components: {Tabs},
        methods: {
            onUpdateType(value) {
                this.type = value
            },
            onUpdateInterval(value) {
                this.interval = value
            },

        }
    }
</script>
<style lang="scss" scoped>
    ::v-deep .type-item {
        background: white;
        &.selected {
            background: #c4c4c4;
            &::after {
                display: none;
            }
        }
    }
</style>