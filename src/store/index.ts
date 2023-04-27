import {createStore} from 'vuex';
// @ts-ignore
import {idCreator} from "@/lib/idCreator.js";
// @ts-ignore
import clone from '@/lib/clone.js'


export default createStore({
    state: {
        recordList: [],
        tagList:[],
        tagName:'',
        tag:{},

    },
    getters: {},
    mutations: {
        fetchRecords(state) {
            if (window.localStorage.getItem('recordList') !== null) {
                state.recordList= JSON.parse(<string>localStorage.getItem('recordList'))
            }
        },
        fetchEditTag(state,id){
            // @ts-ignore
            state.tag=JSON.parse(JSON.stringify(state.tagList.filter(t => t.id === id)[0]))
        },
        saveTag(state){
            window.localStorage.setItem('tagList', JSON.stringify(state.tagList))
        },
        saveRecords(state) {
            localStorage.setItem('recordList', JSON.stringify(state.recordList));
        },
    },
    actions: {
        fetchTags({state}){
            if(window.localStorage.getItem('tagList')){
                state.tagList=JSON.parse(<string>localStorage.getItem('tagList'))
                return true
            }else {
                return false
            }
        },
        createRecords({commit,state}, record) {
            if(record){
                const record2 = clone(record);
                record2.created = new Date();
                // @ts-ignore
                state.recordList.push(record2);
                commit('saveRecords')
                return true
            }else {
                return false
            }


        },
        initTags({state}){
            if(state.tagList.length===0&&!state.tagList.length){
                // @ts-ignore
                this.dispatch('createTag','衣')
                // @ts-ignore
                this.dispatch('createTag','食')
                // @ts-ignore
                this.dispatch('createTag','住')
                // @ts-ignore
                this.dispatch('createTag','行')
            }
        },

        createTag({commit,state},name){
            // @ts-ignore
            const names=state.tagList.map(item=>item.name)
            if(names.indexOf(name)>=0){

                return 'duplicated'
            }
            const id=idCreator.createId().toString()
            idCreator.save()
            // @ts-ignore
            state.tagList.push({id,name:name})
            commit('saveTag')
            location.reload()
            if(state.tagList.length>4){
                window.alert('添加成功！')
            }
            return 'success'
        },
        removeTag({commit,state},id){
            let index=-1;
            for(let i=0;i<state.tagList.length;i++){
                // @ts-ignore
                if(state.tagList[i].id===id){
                    index=i
                    break
                }
            }
            state.tagList.splice(index,1)
            commit('saveTag')
            return true
        },
        updateTag({commit,state},{id,name}){
            // @ts-ignore
            const idList=state.tagList.map(item=>item.id)
            if(idList.indexOf(id)>=0){
                // @ts-ignore
                const names=state.tagList.map(item=>item.name)
                if(names.indexOf(name)>=0){
                    return 'duplicated'
                }else {
                    // @ts-ignore
                    const tag=state.tagList.filter(item=>item.id===id)[0]
                    // @ts-ignore
                    tag.name=name
                    commit('saveTag')
                    return 'success'
                }
            }else {
                return 'not found'
            }
        },
    },
    modules: {}
});
