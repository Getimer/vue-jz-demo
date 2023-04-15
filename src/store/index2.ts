// @ts-ignore
import tagListStore from "@/store/tagListStore.js"
// @ts-ignore
import recordListStore from '@/store/recordListStore.js';
const store={
    ...tagListStore,
    ...recordListStore,
}
export default store