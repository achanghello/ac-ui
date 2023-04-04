// 导入需要变为虚拟节点的组件
import AcMessage from './message.vue'
// 导入创建虚拟节点方法和render函数
import { createVNode, render } from 'vue'
 
// 创建一个真实的DOM节点
const div = document.createElement('div')
// 给这个DOM节点加上一个class类
div.setAttribute('class', 'ac-message-container')
// 将这个DOM节点插入到body标签中
document.body.appendChild(div)
 
let timeId = null
 
// 向外默认导出一个函数
export default (props) => {
  // 将消息提示框组件变为一个虚拟节点
  // vnode的第一个参数是对应组件, 第二个参数是需要的props属性
  const vnode = createVNode(AcMessage, props)
  // 将虚拟节点插入到正式的DOM节点中
  render(vnode, div)
 
  if (timeId) {
    clearTimeout(timeId)
  }
  timeId = setTimeout(() => {
    // 将div元素里面内容变为null就会销毁
    render(null, div)
  }, 3000)
}