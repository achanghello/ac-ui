// 每个组件的入口文件

import Textarea from './src/index.vue'
import { App } from 'vue'

Textarea.install = (app:App)=>{
    app.component(Textarea.name,Textarea)
}


export default Textarea