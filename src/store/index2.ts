// @ts-ignore
import tagStore from "@/store/tagListStore.js"
// @ts-ignore
import recordStore from '@/store/recordListStore.js';
const store={
    ...tagStore,
    ...recordStore,
}
export default store