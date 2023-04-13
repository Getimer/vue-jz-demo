import clone from "@/lib/clone";

const localStorageKeyName = 'recordList'
const recordListModel = {
    data: [],
    create(record) {
        const record2 = clone(record);
        record2.created = new Date()
        this.data.push(record2);
    },
    fetch() {
        if (window.localStorage.getItem(localStorageKeyName) !== null) {
            this.data = JSON.parse(localStorage.getItem(localStorageKeyName))
            return this.data
        } else {
            return []
        }
    },
    save() {
        localStorage.setItem(localStorageKeyName, JSON.stringify(this.data))
    }
}
export {recordListModel}