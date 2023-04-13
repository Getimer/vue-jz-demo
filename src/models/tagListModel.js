import {idCreator} from "@/lib/idCreator";

const localStorageKeyName='tagList'
const  tagListModel={
    data:[],
    fetch(){
        if(window.localStorage.getItem(localStorageKeyName)){
            this.data=JSON.parse(localStorage.getItem(localStorageKeyName))
        }
    },
    create(name){
        const names=this.data.map(item=>item.name)
        if(names.indexOf(name)>=0){
            return 'duplicated'
        }
        const id=idCreator.createId().toString()
        idCreator.save()
        this.data.push({id,name:name})
        this.save()
        location.reload()
        return 'success'
    },
    update(id,name){
        const idList=this.data.map(item=>item.id)
        if(idList.indexOf(id)>=0){
            const names=this.data.map(item=>item.name)
            if(names.indexOf(name)>=0){
                return 'duplicated'
            }else {
                const tag=this.data.filter(item=>item.id===id)[0]
                tag.name=name
                this.save()
                return 'success'
            }
        }else {
            return 'not found'
        }
    },
    remove(id){
        let index=-1;
        for(let i=0;i<this.data.length;i++){
            if(this.data[i].id===id){
                index=i
                break
            }
        }
        this.data.splice(index,1)
        this.save()
        location.reload()
        return true
    },
    save(){
        window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.data))
    }
}
export {tagListModel}