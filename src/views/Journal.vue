<template>
    <Layout class-prefix="layout">
        <NumberPad/>
        <Types/>
        <Notes/>
        <Tags v-model:data-source="tags" />
    </Layout>
</template>

<script>
    import NumberPad from "@/components/Journal/NumberPad";
    import Types from "@/components/Journal/Types";
    import Notes from "@/components/Journal/Notes";
    import Tags from "@/components/Journal/Tags";
    export default {
        name: 'Journal',
        components: {Tags, Notes, Types, NumberPad},
        data(){
            return{
                tags:['衣','食','住','行']
            }
        }
    }
</script>
<style lang="scss">
    .layout-content{
        display: flex;
        flex-direction: column-reverse;
    }
</style>
