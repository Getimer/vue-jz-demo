<template>
    <Layout>
        <ol class="tags">
            <li v-for="tag in tags" :key="tag.id"><span>{{tag.name}}</span>
                <Icon name="right"/>
            </li>
        </ol>
        <div class="add-wrapper">
            <button class="add" @click="createTags">新增标签</button></div>
    </Layout>
</template>

<script>
    import Icon from "@/components/Icon";
    import {tagListModel} from "@/models/tagListModel";
    tagListModel.fetch()
    export default {
        name:'Labels',
        components: {Icon},
        data(){
            return{
                tags:tagListModel.data
            }
        },
       methods:{
           createTags(){
               const name=window.prompt("请输入标签名")
               if(name){
                   const message=tagListModel.create(name)
                   if(message==='duplicated'){
                       window.alert('标签名重复!')
                   }else if(message==='success'){
                       window.alert('添加成功！')
                   }else {
                       window.alert('操作异常！')
                   }
               }
           }
       }
    }
</script>
<style lang="scss" scoped>
    .tags{
        font-size: 16px;
        > li{
            display: flex;
            justify-content:space-between;
            background: white;
            padding: 0 16px;
            border-bottom: 1px solid #e6e6e6;
            align-items: center;
            min-height: 44px;
            svg{
                color: #666;
            }
        }
    }
    .add{
        padding: 0 16px;
        background: #767676;
        border-radius: 4px;
        height: 40px;
        color: white;
        border: none;
        &-wrapper{
            text-align: center;
            padding: 16px;
            margin-top: 16px;
        }
    }
</style>