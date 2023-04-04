// 每个组件的入口文件

import TabPane from './src/tab-pane.vue'
import { App } from 'vue'

TabPane.install = (app:App)=>{
    app.component(TabPane.name,TabPane)
}


export default TabPane