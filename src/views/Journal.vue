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
                    amount: 0
                },
                recordList: []
            }
        },
        mounted() {
            this.recordList = JSON.parse(localStorage.getItem('recordList'))
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
                console.log(typeof this.record)
                console.log(JSON.stringify(this.record))
                const record2 = JSON.parse(JSON.stringify(this.record));
                console.log(record2)
                this.recordList.push(record2);
                localStorage.setItem('recordList', JSON.stringify(this.recordList))
                console.log(this.recordList)
                console.log(typeof this.recordList)
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
