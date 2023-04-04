// 每个组件的入口文件

import Dialog from './src/dialog.vue'
import { App } from 'vue'

Dialog.install = (app:App)=>{
    app.component(Dialog.name,Dialog)
}


export default Dialog