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
        this.data.push({id:name,name:name})
        this.save()
        location.reload()
        return 'success'
    },
    saveTag(value){
        this.data=value
    },
    save(){
        window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.data))
    }
}
export {tagListModel}