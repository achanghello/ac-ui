import { computed, defineComponent,h, provide } from "vue";
export default defineComponent({
  name: "AcRow",
  props: {
    tag: {
      type:String,
      default:'div'
    },
    gutter:{
      type:Number,
      default:0
    },
    justify:{
      type:String,
      default:'start'
    }
  },
  setup(props,ctx){
    // 向子组件提供中间隔离距离
    provide('AcRow',props.gutter)
    const styles = computed(()=>{
      let ret = {
        marginLeft:'',
        marginRight:''
      }
      if(props.gutter){
        ret.marginLeft = ret.marginRight = `${String(-props.gutter/2)}px`
      }
      return ret
    })

    const classs = computed(()=>{
      return ['ac-row',`is-justify-${props.justify}`]
    })
    return ()=>h(props.tag,{
      class:classs.value,
      style:styles.value
    },ctx.slots.default?.())
  }
});