import RadioGroup from './src/radio-group.vue'
import { App } from 'vue'

RadioGroup.install = (app:App)=>{
    app.component(RadioGroup.name,RadioGroup)
}


export default RadioGroup