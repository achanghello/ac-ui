// 每个组件的入口文件

import Option from './src/option.vue'
import { App } from 'vue'

Option.install = (app:App)=>{
    app.component(Option.name,Option)
}


export default Option