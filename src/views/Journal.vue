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
    import {recordListModel} from '@/models/recordListModel.js'
    import {tagListModel} from "@/models/tagListModel";
    tagListModel.fetch()
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
            if(recordListModel.fetch()!==null){
                this.recordList=recordListModel.fetch()
            }
            this.tags=tagListModel.data
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
                recordListModel.create(this.record)
                recordListModel.save()
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
