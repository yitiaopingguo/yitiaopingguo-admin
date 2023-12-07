/*
 * @Author: “chenjinwei” “507725948@qq.com”
 * @Date: 2023-10-26 11:49:01
 * @LastEditors: lucf 2572274368@qq.com
 * @LastEditTime: 2023-12-07 15:22:44
 * @FilePath: \vue2-template\src\main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Vue from 'vue'
import App from './App.vue'
import 'bytemd/dist/index.css'


import router from '@/router'
import store from '@/store'

import '@/utils/auto_import_elementUI';
import 'element-ui/lib/theme-chalk/index.css';
// 引入icon
import './assets/icon/iconfont.css'

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
