<template>
  <li
    @click.stop="selectOptionClick"
    class="ac-select-dropdown__item"
    :class="{
      'selected': itemSelected
    }">
    <slot>
      <span>{{ label }}</span>
    </slot>
  </li>
</template>

<script>
import { inject,computed } from 'vue';
  export default {
    name: 'AcOption',
    props: {
      value: {
        required: true
      },
      label: [String, Number],
    },
    // methods: {
    //   selectOptionClick(){
    //     console.log("我在进行点击",this.select);
    //     this.select.openSelect(false,true,this.props.value)
    //     console.log(this.props);
    //   }
    // },
    setup(props,ctx){
      let select = inject("select")
      select.arrAdd({value:props.value,label:props.label})
      const selectOptionClick = ()=>{
        select.openSelect(false,true,props.value)
      }
      let itemSelected = computed(()=>{
        return select.modelValue===props.value
      })
      return {
        select,
        selectOptionClick,
        itemSelected
      }
    }
  };
</script>