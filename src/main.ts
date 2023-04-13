
import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Nav from '@/components/Nav.vue'
import Icon from '@/components/Icon.vue'
import Layout from '@/components/Layout.vue';
// @ts-ignore
import {tagListModel} from "@/models/tagListModel.js";
// @ts-ignore
window.tagList=tagListModel.fetch()
createApp(App).component('Nav',Nav).component('Layout',Layout).component('Icon',Icon).use(store).use(router).mount('#app')
