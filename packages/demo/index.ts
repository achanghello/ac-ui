// 每个组件的入口文件

import Demo from './src/demo.vue'
import { App } from 'vue'

Demo.install = (app:App)=>{
    app.component(Demo.name,Demo)
}


export default Demo