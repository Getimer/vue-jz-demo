
import {idCreator} from "@/lib/idCreator";
const localStorageKeyName='tagList'

const tagStore={
    tagList :[],
    fetchTags(){
        if(window.localStorage.getItem(localStorageKeyName)){
            this.tagList=JSON.parse(localStorage.getItem(localStorageKeyName))
            return this.tagList
        }
    },
    findTag(id){
        return this.tagList.filter(t => t.id === id)[0]
    },
    createTag(name){
        const names=this.tagList.map(item=>item.name)
        if(names.indexOf(name)>=0){

            return 'duplicated'
        }
        const id=idCreator.createId().toString()
        idCreator.save()
        this.tagList.push({id,name:name})
        this.saveTag()
        location.reload()
        window.alert('添加成功！')
        return 'success'
    },
    removeTag(id){
        let index=-1;
        for(let i=0;i<this.tagList.length;i++){
            if(this.tagList[i].id===id){
                index=i
                break
            }
        }
        this.tagList.splice(index,1)
        this.saveTag()
        return true
    },
    updateTag:(id,name)=>{
        const idList=this.tagList.map(item=>item.id)
        if(idList.indexOf(id)>=0){
            const names=this.tagList.map(item=>item.name)
            if(names.indexOf(name)>=0){
                return 'duplicated'
            }else {
                const tag=this.tagList.filter(item=>item.id===id)[0]
                tag.name=name
                this.saveTag()
                return 'success'
            }
        }else {
            return 'not found'
        }
    },
    saveTag(){
        window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.tagList))
    }
}

tagStore.fetchTags()
export default tagStore