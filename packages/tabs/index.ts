// 每个组件的入口文件

import Tabs from './src/tabs'
import {withInstall} from './src/utils'

// Tabs.install = (app:App)=>{
//     app.component(Tabs.name,Tabs)
// }


export default withInstall(Tabs)