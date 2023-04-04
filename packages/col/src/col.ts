import { computed, defineComponent,h, inject } from "vue";
export default defineComponent({
  name: "AcCol",
  props: {
    tag: {
      type:String,
      default:'div'
    },
    span:{
      type:Number,
      default:24
    },
    offset:{
      type:Number,
      default:0
    }
  },
  setup(props,ctx){
    // 从父组件注入中间隔离距离
    const gutter = inject('AcRow',0)
    const styles = computed(()=>{
      if(gutter===0){
        return {}
      }

      return {
        paddingLeft:gutter/2+'px',
        paddingRight:gutter/2+'px'
      }
    })

    const classs= computed(()=>{
      let ret = [];
      ["span","offset"].forEach((item)=>{const size = props[item]
        // console.log(`x-col-${item}-${size}`);
        ret.push(`ac-col-${item}-${size}`)
      })
      return [
        'ac-col',
        ...ret
      ]
    })
    
    return ()=>h(props.tag,{
      class:classs.value,
      style:styles.value
    },ctx.slots.default?.())
  }
});