const localStorageKeyName='recordList'
const  recordListModel={
    clone(data){
        return JSON.parse(JSON.stringify(data))
    },
    fetch(){
        if(window.localStorage.getItem(localStorageKeyName)!=='null')
        {return  JSON.parse(localStorage.getItem(localStorageKeyName))}
        else {
                return []
        }
    },
    save(data){
        localStorage.setItem(localStorageKeyName, JSON.stringify(data))
    }
}
export {recordListModel}