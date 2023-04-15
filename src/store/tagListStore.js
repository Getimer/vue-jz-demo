import {tagListModel} from "@/models/tagListModel";
// const tagList=tagListModel.fetch()
// console.log(tagList)
const tagListStore={
    tagList :tagListModel.fetch(),
    findTag(id){
        return this.tagList.filter(t => t.id === id)[0]
    },
    createTag : (name) => {
        const message=tagListModel.create(name)
        if(message==='duplicated'){
            window.alert('标签名重复!')
        }else if(message==='success'){
            window.alert('添加成功！')
        }else {
            window.alert('操作异常！')
        }
    },
    removeTag:(id)=>{
        return tagListModel.remove(id)
    },
    updateTag:(id,name)=>{
        return tagListModel.update(id,name)
    }
}
export default tagListStore