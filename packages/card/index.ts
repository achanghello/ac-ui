// 每个组件的入口文件

import Card from './src/card.vue'
import { App } from 'vue'

Card.install = (app:App)=>{
    app.component(Card.name,Card)
}


export default Card