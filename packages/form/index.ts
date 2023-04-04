// 每个组件的入口文件

import Form from './src/form.vue'
import { App } from 'vue'

Form.install = (app:App)=>{
    app.component(Form.name,Form)
}


export default Form