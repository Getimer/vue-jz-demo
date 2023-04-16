import clone from "@/lib/clone";
const localStorageKeyName = 'recordList'

const recordStore = {
    recordList: [],
    fetchRecords() {
        if (window.localStorage.getItem(localStorageKeyName) !== null) {
            this.recordList = JSON.parse(localStorage.getItem(localStorageKeyName))
            return this.recordList
        } else {
            return []
        }
    },
    saveRecords() {
        localStorage.setItem(localStorageKeyName, JSON.stringify(this.recordList))
    },
    createRecords(record) {
        const record2 = clone(record);
        record2.created = new Date()
        this.recordList && this.recordList.push(record2);
        recordStore.saveRecords()
    }
}
recordStore.fetchRecords()
export default recordStore