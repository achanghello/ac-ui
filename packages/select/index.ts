// 每个组件的入口文件

import Select from './src/select.vue'
import { App } from 'vue'

Select.install = (app:App)=>{
    app.component(Select.name,Select)
}


export default Select