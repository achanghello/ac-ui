import {ImessageOptions} from './messgae.type'
import MessageComponent from './messageComponent.vue'
import { createVNode, render } from 'vue';
const Message = (options)=>{
  //console.log(options);
  let vm = createVNode(MessageComponent,options)
  const container = document.createElement('div')
  render(vm,container)
  // console.log(container);
  
  document.body.appendChild(container.firstElementChild!)
}
export default Message 
