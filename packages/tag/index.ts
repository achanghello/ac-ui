// 每个组件的入口文件

import Tag from './src/tag.vue'
import { App } from 'vue'

Tag.install = (app:App)=>{
    app.component(Tag.name,Tag)
}


export default Tag