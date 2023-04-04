// 每个组件的入口文件

import FormItem from './src/form-item.vue'
import { App } from 'vue'

FormItem.install = (app:App)=>{
    app.component(FormItem.name,FormItem)
}


export default FormItem