import {createApp} from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import Nav from '@/components/Nav.vue';
import Icon from '@/components/Icon.vue';
import Layout from '@/components/Layout.vue';

createApp(App).component('Nav', Nav).component('Layout', Layout).component('Icon', Icon).use(store).use(router).mount('#app');
window.onload=function(){
    setTimeout(function() {
        window.scrollTo(0, 200)
    }, 0);
};

if(window.document.body.clientWidth>500){
    window.alert('请使用手机打开该地址以保证预览效果')
    const img=document.createElement('img')
    img.src='./qrcode.png'
    img.style.position='fixed'
    img.style.left='50%'
    img.style.top='50%'
    img.style.transform='translate(-50%,-50%)'
    img.style.boxShadow='0 0 10px rgba(0,0,0,0.25)'
    document.body.appendChild(img)
}