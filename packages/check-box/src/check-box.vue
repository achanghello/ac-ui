<template>
  <label
    :class="[
      `ac-checkbox`,
      {
        'is-checked': isChecked
      },
    ]"
  >
    <span class="ac-checkbox__input">
      <span class="ac-checkbox__inner"></span>
      <input :name="name" type="checkbox" class="ac-checkbox__original" v-model="model" :value="label" />
    </span>
    <span class="ac-checkbox__label">
      <slot></slot>
      <!-- 如果没有插槽内容，那么label就是内容 -->
      <template v-if="!$slots.default">{{ label }}</template>
    </span>
  </label>
</template>

<script lang="ts">
import { defineComponent,computed, inject, Ref } from "vue";
type father = {
  modelValue:Array<string>
  $emit:Function
}
export default defineComponent({
  name: "AcCheckBox",
  props: {
    modelValue: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: ''
    }
  },
  emits: ["update:modelValue"],
  setup(props, {emit}) {
    // 注入父组件
    const CheckboxGroup:father =  inject('CheckboxGroup')
    
    const isGroup = computed(()=>!!CheckboxGroup)
    
    const model:Ref = computed({
      get(){
        return isGroup.value?CheckboxGroup.modelValue:props.modelValue
      },
      set(value){
         console.log(value)
         if (isGroup.value) {
          console.log(value, props.label)
          CheckboxGroup.$emit('update:modelValue', value)
        } else {
          emit('update:modelValue',value)
        }
      }
    })
    
    const isChecked = computed(()=>{
      if(isGroup.value){
        return model.value.includes(props.label)
      }else{        
        return model.value
      }
    })
    return {
      model,
      isChecked
    }
  }
})
</script>

