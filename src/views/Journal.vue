<template>
    <Layout class-prefix="layout">
        <NumberPad @update:value="onUpdateAmount" @saveRecord="onSaveRecord" v-model:value="record.amount"/>
        <Types @update:value="onUpdateType" v-model:type="this.record.type"/>
        <div class="formItem-wrapper">
        <FormItem file-name="备注" placeholder="在这里添加备注"  @update:value="onUpdateNotes"/>
        </div>
        <Tags/>
    </Layout>
</template>

<script lang="js">
    import Layout from "@/components/Layout";
    import NumberPad from "@/components/Journal/NumberPad.vue";
    import Types from "@/components/Journal/Types.vue";
    import FormItem from "@/components/Journal/FormItem.vue";
    import Tags from "@/components/Journal/Tags.vue";
    export default {
        name: 'Journal',
        components: {Tags, FormItem, Types, NumberPad,Layout},
        data() {
            return {
                record: {
                    tags: [],
                    formItem: '',
                    type: '-',
                    amount: 0,
                    created:'',
                },

            }
        },
        computed:{
          recordList(){
              return this.$store.state.recordList
          }
        },
        created(){
          this.$store.commit('fetchRecords')
        },
        methods: {
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
                this.$store.dispatch('createRecords',this.record)
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
