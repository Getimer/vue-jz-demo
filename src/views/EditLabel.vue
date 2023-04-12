<template>
    <Layout>
        <div class="navBar">
            <Icon class="leftIcon" name="left"/>
            <span class="title">编辑标签</span>
            <span class="rightIcon"></span>
        </div>
        <div class="form-wrapper">
            <FormItem :value="this.tag" file-name="标签名" placeholder="请输入标签名"/>
        </div>
        <div class="btn-wrapper">
            <Button>删除标签</Button>
        </div>
    </Layout>
</template>

<script lang="js">
    import Icon from "@/components/Icon";
    import Layout from "@/components/Layout";
    import FormItem from "@/components/Journal/FormItem"
    import {tagListModel} from "@/models/tagListModel";
    import Button from "@/components/Button";

    export default {
        name: 'EditLabel',
        components: {Button, Layout, Icon, FormItem},
        data(){
            return{
                tag:'',
            }
        },
        created() {
            const id = this.$route.params.id;
            tagListModel.fetch();
            const tags = tagListModel.data;
            const tag = tags.filter(t => t.id === id)[0]
            if (tag) {
                this.tag=tag.name
            }else {
                this.$router.replace('/404')
            }
        }
    }
</script>

<style lang="scss" scoped>
    .navBar {
        padding: 12px 16px;
        font-size: 16px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: white;
        .leftIcon {
            width: 24px;
            height: 24px;
        }
        .title {
        }
        .rightIcon {
            width: 24px;
            height: 24px;
        }
    }

    .form-wrapper {
        margin-top: 5px;
        background: white;
    }
    .btn-wrapper{
        padding-top: 16px;
        margin-top: 16px;
        text-align: center;
    }
</style>