<template>
    <Layout class-prefix="layout">
        <NumberPad @update:value="onUpdateAmount" @saveRecord="onSaveRecord" v-model:value="record.amount"/>
        <Types @update:value="onUpdateType" v-model:type="this.record.type"/>
        <Notes @update:value="onUpdateNotes"/>
        <Tags v-model:data-source="tags" @update:value="onUpdateTags"/>
    </Layout>
</template>

<script lang="js">
    import NumberPad from "@/components/Journal/NumberPad.vue";
    import Types from "@/components/Journal/Types.vue";
    import Notes from "@/components/Journal/Notes.vue";
    import Tags from "@/components/Journal/Tags.vue";
    import {model} from '@/model.js'
    export default {
        name: 'Journal',
        components: {Tags, Notes, Types, NumberPad},
        data() {
            return {
                tags: ['衣', '食', '住', '行'],
                record: {
                    tags: [],
                    notes: '',
                    type: '-',
                    amount: 0,
                    created:'',
                },
                recordList: []
            }
        },
        mounted() {
            this.recordList=model.fetch()
        },
        methods: {
            onUpdateTags(value) {
                this.record.tags = value;
            },
            onUpdateType(value) {
                this.record.type = value
            },
            onUpdateNotes(value) {
                this.record.notes = value
            },
            onUpdateAmount(value) {
                this.record.amount = value
            },
            onSaveRecord() {
                this.record.created=new Date()
                const record2 = model.clone(this.record);
                this.recordList.push(record2);
                model.save(this.recordList)
            }
        }
    }
</script>
<style lang="scss">
    .layout-content {
        display: flex;
        flex-direction: column-reverse;
    }
</style>
