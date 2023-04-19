<template>
    <Layout>
        <Tabs :data-source="typeList" class-prefix="type" @update:value="onUpdateType" v-model:values="this.type"/>
        <Tabs :data-source="intervalList" class-prefix="interval" @update:value="onUpdateInterval" v-model:values="this.interval"/>
    </Layout>
</template>

<script>
    import Tabs from "@/components/Tabs";
    import intervalList from "@/constants/intervalList";
    import recordTypeList from "@/constants/recordTypeList";


    export default {
        name: "Count",
        data() {
            return {
                type: '-',
                interval: 'day',
               intervalList:intervalList,
               typeList:recordTypeList
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