// 每个组件的入口文件

import Radio from './src/radio.vue'
import { App } from 'vue'

Radio.install = (app:App)=>{
    app.component(Radio.name,Radio)
}


export default Radio