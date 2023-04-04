<template>
  <div class="ac-select" tabindex="0" @focus.capture="openSelect(true)" @blur.capture="openSelect(false)">
    <input class="ac-select__inner" placeholder="请选择" :value="currentValue&&currentValue.label" readonly >
    <span class="ac-select__suffix">
      <svg :class="['triangle', { 'rotate': showOptions }]" viewBox="64 64 896 896" data-icon="down"
        aria-hidden="true" focusable="false">
        <path
          d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z">
        </path>
      </svg>
    </span>
    <ul class="dropdown-menu" v-show="showOptions">
      <slot></slot>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
export default defineComponent({
  name: 'AcSelect',
  props: {
    modelValue: {
      type: String,
      default:''
    }
  },
  provide() {
    return {
      select: this,
    };
  },
  emit:['update:modelValue'],
  setup(props,{emit}){
    let showOptions = ref(false)
    const openSelect=(val,flag=false,value='')=>{
      // alert(123)
      // console.log("------------", showOptions.value);
      showOptions.value = val
      // if(showOptions.value)
      if(flag){
        emit('update:modelValue',value)
      }
    }
    let arr = ref([])
    const arrAdd=(val)=>{
      arr.value.push(val)
    }

    let currentValue = computed(()=>{
      return arr.value.find((item)=>item.value===props.modelValue) 
    })
    
    return {
      showOptions,
      openSelect,
      arr,
      arrAdd,
      currentValue
    }
  }
})
</script>

<style lang="scss" scoped>
</style>
