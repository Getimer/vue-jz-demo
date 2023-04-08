const localStorageKeyName='recordList'
const  model={
    clone(data){
        return JSON.parse(JSON.stringify(data))
    },
    fetch(){
        if(window.localStorage.getItem(localStorageKeyName)){return  JSON.parse(localStorage.getItem(localStorageKeyName))}

    },
    save(data){
        localStorage.setItem(localStorageKeyName, JSON.stringify(data))
    }
}
export {model}