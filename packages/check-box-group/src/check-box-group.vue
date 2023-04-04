<template>
  <div class="ac-checkbox-group">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { DefineComponent } from 'vue';
export default {
  name:'AcCheckBoxGroup',
  provide () {
    return {
      CheckboxGroup: this
    }
  },
  props: {
    modelValue: {
      type: Array,
      default: function () {
        return []
      }
    }
  },
  emits:['update:modelValue']
}
</script>

<style>

</style>