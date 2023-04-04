// 每个组件的入口文件

import Steps from './src/steps.vue'
import { App } from 'vue'

Steps.install = (app:App)=>{
    app.component(Steps.name,Steps)
}


export default Steps