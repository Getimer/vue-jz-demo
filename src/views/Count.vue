<template>
    <Layout>
        <Tabs class="abc" :data-source="typeList" class-prefix="type" @update:value="onUpdateType"
              v-model:values="this.type"/>
        <Tabs :data-source="intervalList" class-prefix="interval" @update:value="onUpdateInterval"
              v-model:values="this.interval"/>

        <ol>
            <li v-for="(group,index) in result" :key="index">
                <h3 class="title">{{group.title}}</h3>
                <ol>
                    <li class="record" v-for="item in group.items" :key="item.id">
                       <span>{{tagString(item.tags)}}</span>
                        <span class="notes">{{item.formItem}}</span>
                        <span>￥{{item.amount}}</span>
                    </li>
                </ol>
            </li>

        </ol>


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
                intervalList: intervalList,
                typeList: recordTypeList
            }
        },
        components: {Tabs},
        computed: {
            result() {
                const {recordList} = this
                const hashTable = {key: {title: '', items: []}}
                for (let i = 0; i < recordList.length; i++) {
                    const [date, time] = recordList[i].created.split("T");
                    hashTable[date] = hashTable[date] || {title: date, items: []}
                    if (hashTable[date].items) {
                        hashTable[date].items.push(recordList[i])
                    }
                }
                return hashTable;
            },
            recordList() {
                return this.$store.state.recordList;
            }
        },
        created() {
            this.$store.commit('fetchRecords')
        },
        methods: {
            tagString(tags){
                if(tags.length!==0){
                    return tags.join(",")
                }else {
                    return '—'
                }

            },
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
    %item{
        padding:0 16px;
        min-height: 40px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    :deep(.type-item) {
        background: white;
        &.selected {
            background: #c4c4c4;

            &::after {
                display: none;
            }
        }
    }

    :deep(.interval-item) {
        height: 48px;
    }
    .title{
        @extend %item
    }
    .record{
        background: white;
        @extend %item

    }
    .notes{
        margin-right: auto;
        margin-left: 16px;
        color: #999999;
    }
</style>