<template>
    <Layout class-prefix="layout">
        <NumberPad @update:value="onUpdateAmount" @saveRecord="onSaveRecord" v-model:value="record.amount"/>
        <Types @update:value="onUpdateType" v-model:type="this.record.type"/>
        <div class="formItem-wrapper">
        <FormItem file-name="备注" placeholder="在这里添加备注"  @update:value="onUpdateNotes"/>
        </div>
        <Tags v-model:data-source="tags" @update:value="onUpdateTags"/>
    </Layout>
</template>

<script lang="js">
    import Layout from "@/components/Layout";
    import NumberPad from "@/components/Journal/NumberPad.vue";
    import Types from "@/components/Journal/Types.vue";
    import FormItem from "@/components/Journal/FormItem.vue";
    import Tags from "@/components/Journal/Tags.vue";
    import store from "@/store/index2";
    export default {
        name: 'Journal',
        components: {Tags, FormItem, Types, NumberPad,Layout},
        data() {
            return {
                tags: [],
                record: {
                    tags: [],
                    formItem: '',
                    type: '-',
                    amount: 0,
                    created:'',
                },
                recordList: []
            }
        },
        mounted() {
            if(store.recordList!==null){
                this.recordList=store.recordList
            }
            this.tags=store.tagList
        },
        methods: {
            onUpdateTags(value) {
                this.record.tags = value;
            },
            onUpdateType(value) {
                this.record.type = value
            },
            onUpdateNotes(value) {
                this.record.formItem = value
            },
            onUpdateAmount(value) {
                this.record.amount = value
            },
            onSaveRecord() {
                store.createRecord(this.record)
            }
        }
    }
</script>
<style lang="scss">
    .layout-content {
        display: flex;
        flex-direction: column-reverse;
    }
    .formItem-wrapper{
        padding: 12px 0;
    }
</style>
