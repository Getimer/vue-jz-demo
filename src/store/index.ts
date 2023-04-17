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
        fetchTags(state){
            if(window.localStorage.getItem('tagList')){
                state.tagList=JSON.parse(<string>localStorage.getItem('tagList'))
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
        createRecords({commit,state}, record) {
            const record2 = clone(record);
            record2.created = new Date();
            // @ts-ignore
            state.recordList.push(record2);
            commit('saveRecords')
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
            window.alert('添加成功！')
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
