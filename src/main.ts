import {createApp} from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import Nav from '@/components/Nav.vue';
import Icon from '@/components/Icon.vue';
import Layout from '@/components/Layout.vue';
// @ts-ignore
import {tagListModel} from '@/models/tagListModel.js';
// @ts-ignore
window.tagList = tagListModel.fetch();
// @ts-ignore
window.createTag = (name) => {
    if(name){
        const message=tagListModel.create(name)
        if(message==='duplicated'){
            window.alert('标签名重复!')
        }else if(message==='success'){
            window.alert('添加成功！')
        }else {
            window.alert('操作异常！')
        }
    }
};

createApp(App).component('Nav', Nav).component('Layout', Layout).component('Icon', Icon).use(store).use(router).mount('#app');
