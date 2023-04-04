import { provide } from 'vue'
import { props,emits,tabs } from './useTabsVMdel'

export default {
  name: 'AcTabs',
  props: props,
  emit: emits,
  setup (props, { emit,slots }) {
    let tab = new tabs(props,emit,slots.default())
    provide('activeName', tab.mode)
    return { tab }
  },
  render () {
    const {tab} = this

    const nav = <nav>{
      tab.VNodes.map((item, index) => {
        return <a onClick={(e) => tab.clickCheckName(item,e)} class={{ active: item.props.name === this.modelValue }}>{ item.props.label }</a>
      })
    }</nav>
    // const nav = 123
 
    
    return <div class={{'ac-tabs':true,'ac-tabs--border':tab.type==='border'}}>{[nav,tab.slots]}</div>
  }
}
