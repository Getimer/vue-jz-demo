<template>
    <Layout>
        <Tabs class="abc" :data-source="typeList" class-prefix="type" @update:value="onUpdateType"
              v-model:values="this.type"/>
        <ol v-if="groupedList.length>0">
            <li v-for="(group,index) in groupedList" :key="index">
                <h3 class="title">{{beautify(group.title)}} <span>￥{{group.total}}</span> </h3>
                <ol>
                    <li class="record" v-for="item in group.items" :key="item.id">
                       <span>{{tagString(item.tags)}}</span>
                        <span class="notes">{{item.formItem}}</span>
                        <span>￥{{item.amount}}</span>
                    </li>
                </ol>
            </li>

        </ol>
        <div v-else class="noResult">
            目前没有相关记录!
        </div>

    </Layout>
</template>

<script>
    import Tabs from "@/components/Tabs";
    import intervalList from "@/constants/intervalList";
    import recordTypeList from "@/constants/recordTypeList";
    import dayJs from "dayjs";
    import clone from "@/lib/clone";


    export default {
        name: "Count",
        data() {
            return {
                type: '-',
                interval: 'day',
                intervalList: intervalList,
                typeList: recordTypeList
            }
        },
        components: {Tabs},
        computed: {
            groupedList() {
                const {recordList} = this

                const newList=clone(recordList).filter(r=>r.type===this.type).sort((a,b)=>dayJs(b.created).valueOf()-dayJs(a.created).valueOf())
                if(newList.length===0){return []}
                const result=[{title:dayJs(newList[0].created).format('YYYY-MM-DD'),items:[newList[0]]}]
                for(let i=1;i<newList.length;i++){
                    const current=newList[i]
                    const last=result[result.length-1]
                    if(dayJs(last.title).isSame(dayJs(current.created,),'day')){
                        last.items.push(current)
                    }else{
                        result.push({title: dayJs(current.created).format('YYYY-MM-DD'),items:[current]})
                    }
                }
                result.map(group=>{
                    group.total=group.items.reduce((sum,item)=>{
                        console.log(typeof sum)
                        console.log(typeof item.amount)
                        return sum+item.amount},0)
                })
                return result
            },
            recordList() {
                return this.$store.state.recordList;
            }
        },
        created() {
            this.$store.commit('fetchRecords')
        },
        methods: {
            beautify(string){
                const day=dayJs(string)
                const now=dayJs()
                if(day.isSame(now.valueOf(),"day")){
                    return '今天'
                }else if(day.isSame(now.subtract(1,'day'),"day")){
                    return  '昨天'
                }else if(day.isSame(now.subtract(2,'day'),"day")){
                    return '前天'
                }else if(day.isSame(now,'year')){
                    return day.format('M月D日')
                }else{
                    return day.format('YYYY年M月D日')
                }

            },
            tagString(tags){
                if(tags.length!==0){
                    return tags.join("，")
                }else {
                    return '—'
                }

            },
            onUpdateType(value) {
                this.type = value
            },
        }
    }
</script>
<style lang="scss" scoped>
    %item{
        padding:0 16px;
        min-height: 40px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    :deep(.type-item) {
        background: white;
        &.selected {
            background: #c4c4c4;
        }
    }
    .noResult{
        text-align: center;
        padding: 40px;
    }
    .title{
        @extend %item
    }
    .record{
        background: white;
        @extend %item

    }
    .notes{
        margin-right: auto;
        margin-left: 16px;
        color: #999999;
    }
</style>