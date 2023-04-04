<template>
  <label class="ac-radio" :class="{'is-checked': model === label}">
    <span class="ac-radio__input">
      <span class="ac-radio__inner"></span>
      <input
        class="ac-radio__original"
        type="radio"
        :name="name"
        v-model="model"
        :value="label"
       />
    </span>
    <span class="ac-radio__label">
        <slot></slot>
        <!-- 如果没有插槽内容，那么label就是内容 -->
        <template v-if="!$slots.default">{{label}}</template>
      </span>
  </label>
</template>

<script>
export default {
  name: 'AcRadio',
  props: {
    label: {
      type: [String,Number,Boolean],
      default: ''
    },
    modelValue: [String,Number,Boolean],
    name: {
      type: [String,Number,Boolean],
      default: ''
    }
  },
  emits: ["update:modelValue"],
  inject: {
    RadioGroup: {
      default: ''
    }
  },
  computed: {
    model: {
      get () {
        return this.isGroup ? this.RadioGroup.modelValue : this.modelValue
      },
      set (value) {
        this.isGroup ? this.RadioGroup.$emit('update:modelValue', value) : this.$emit('update:modelValue', value)
      }
    },
    // 判断包裹在group中
    isGroup () {
      return !!this.RadioGroup
    }
  }
}
</script>

