<template>
    <Layout class-prefix="layout">
        <NumberPad @update:value="onUpdateAmount" @saveRecord="onSaveRecord" v-model:value="record.amount"/>
        <Tabs :data-source="recordTypeList"  @update:value="onUpdateType" v-model:values="this.record.type"/>
        <div class="formItem-wrapper">
        <FormItem file-name="备注" placeholder="在这里添加备注" :num="this.record.formItem" @update:value="onUpdateNotes"/>
        </div>
        <Tags @update:value="onUpdateTags" />
    </Layout>
</template>
<script lang="js">
    import Layout from "@/components/Layout";
    import Tabs from "@/components/Tabs";
    import NumberPad from "@/components/Journal/NumberPad.vue";
    import FormItem from "@/components/Journal/FormItem.vue";
    import Tags from "@/components/Journal/Tags.vue";
    import recordTypeList from "@/constants/recordTypeList";
    export default {
        name: 'Journal',
        components: {Tags, FormItem,Tabs, NumberPad,Layout},
        data() {
            return {
                record: {
                    tags: [],
                    formItem: '',
                    type: '-',
                    amount: 0,
                    created:'',
                },
                recordTypeList:recordTypeList
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
            onUpdateTags(value){
                this.record.tags=value
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
                if(this.record.tags.length===0&&!this.record.tags){
                   return  window.alert('请至少输入一个标签')
                }
                if(this.$store.dispatch('createRecords',this.record)){
                    window.alert('已保存')
                    this.record.formItem=''
                }

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
