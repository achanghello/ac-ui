// 每个组件的入口文件

import Input from './src/input.vue'
import { App } from 'vue'

Input.install = (app:App)=>{
    app.component(Input.name,Input)
}


export default Input