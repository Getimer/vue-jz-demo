<template>
    <Layout>编辑标签</Layout>
</template>

<script lang="js">

    import Layout from "@/components/Layout";
    import {tagListModel} from "@/models/tagListModel";
    export default {
        name: 'EditLabel',
        components: {Layout},
        created(){
            const id=this.$route.params.id;
            tagListModel.fetch();
            const tags=tagListModel.data;
            const tag=tags.filter(t=>t.id===id)[0]
            if(tag){
                console.log(tag)
            }else {
                this.$router.replace('/404')
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>