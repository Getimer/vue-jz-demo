import {recordListModel} from '@/models/recordListModel.js';

const recordListStore={
    recordList:recordListModel.fetch(),
    createRecord:(record)=>{
        recordListModel.create(record)

    }
}
export default recordListStore