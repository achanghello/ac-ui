<template>
    <div class="ac-radio-group">
        <slot></slot>
    </div>
</template>

<script>
export default {
  name: 'AcRadioGroup',
  provide () {
    return {
      RadioGroup: this
    }
  },
  props: {
    modelValue: [String,Number,Boolean],
  },
  emits: ["update:modelValue"],
}
</script>
