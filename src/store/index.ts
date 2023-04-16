import {createStore} from 'vuex';

// @ts-ignore
import clone from '@/lib/clone.js'


export default createStore({
    state: {
        recordList: []
    },
    getters: {},
    mutations: {
        fetchRecords(state) {
            if (window.localStorage.getItem('recordList') !== null) {
                state.recordList= JSON.parse(<string>localStorage.getItem('recordList'))
            }
        },
        saveRecords(state) {
            localStorage.setItem('recordList', JSON.stringify(state.recordList));
        },
    },
    actions: {
        createRecords({commit,state}, record) {
            const record2 = clone(record);
            record2.created = new Date();
            // @ts-ignore
            state.recordList.push(record2);
            commit('saveRecords')
        }

    },
    modules: {}
});
