import Vue from 'vue'
import App from './App.vue'
import 'bytemd/dist/index.css'

import router from '@/router'
import store from '@/store'

import '@/utils/auto_import_elementUI';
import 'element-ui/lib/theme-chalk/index.css';
// 引入icon
import './assets/icon/iconfont.css'
//引入公共样式
import './assets/styles/rest.scss'

import "@/directives/dialogDrag"
// 过滤器
import * as custom from './utils/util'
Object.keys(custom).forEach(key => {
    Vue.filter(key, custom[key])
})

Vue.config.productionTip = false

new Vue({
    router,
    store,
    data: {
        // 空的实例放到根组件下，所有的子组件都能调用
        Bus: new Vue()
    },
    render: h => h(App),
}).$mount('#app')
