import CheckBoxGroup from './src/check-box-group.vue'
import { App } from 'vue'

CheckBoxGroup.install = (app:App)=>{
    app.component(CheckBoxGroup.name,CheckBoxGroup)
}


export default CheckBoxGroup