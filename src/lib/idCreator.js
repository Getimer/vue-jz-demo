
const idCreator={
    id:parseInt(window.localStorage.getItem('_idMax')||'0')||0,
    createId(){
        this.id++
        return this.id
    },
    save(){
        window.localStorage.setItem('_idMax',this.id.toString())
    }
}
export {idCreator};