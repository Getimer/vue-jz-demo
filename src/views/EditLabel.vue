<template>
    <Layout>
        <div class="navBar">
            <Icon @click="goBack" class="leftIcon" name="left"/>
            <span class="title">编辑标签</span>
            <span class="rightIcon"></span>
        </div>
        <div class="form-wrapper">
            <FormItem :value="this.tag.name" @update:value="update" file-name="标签名" placeholder="请输入标签名"/>
        </div>
        <div class="btn-wrapper">
            <Button @click="remove">删除标签</Button>
        </div>
    </Layout>
</template>

<script lang="js">
    import Icon from "@/components/Icon";
    import Layout from "@/components/Layout";
    import FormItem from "@/components/Journal/FormItem"
    import Button from "@/components/Button";
    import store from "@/store/index2";

    export default {
        name: 'EditLabel',
        components: {Button, Layout, Icon, FormItem},
        data() {
            return {
                tag: store.findTag(this.$route.params.id),
            }
        },
        created() {
            if (!this.tag) {
                this.$router.replace('/404')
            }
        },
        methods: {
            update(name) {
                if (this.tag) {
                    store.updateTag(this.tag.id, name)
                }
            },
            remove() {
                if (this.tag) {
                    if (store.removeTag(this.tag.id)) {
                        this.$router.back()
                    } else {
                        window.alert('删除失败')
                    }
                }
            },
            goBack() {
                this.$router.back()
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

    .btn-wrapper {
        padding-top: 16px;
        margin-top: 16px;
        text-align: center;
    }
</style>