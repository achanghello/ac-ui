// 每个组件的入口文件

import Drawer from './src/drawer.vue'
import { App } from 'vue'

Drawer.install = (app:App)=>{
    app.component(Drawer.name,Drawer)
}


export default Drawer