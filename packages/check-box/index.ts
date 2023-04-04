// 每个组件的入口文件

import CheckBox from './src/check-box.vue'
import { App } from 'vue'

CheckBox.install = (app:App)=>{
    app.component(CheckBox.name,CheckBox)
}


export default CheckBox