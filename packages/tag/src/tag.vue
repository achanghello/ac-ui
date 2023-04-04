<template>
  <span :class="classes" :style="`backgroundColor: ${color}`">
    <slot></slot>
  </span>
</template>

<script>
export default {
  name: 'AcTag',
  props: {
    text: String,
    type: String,
    color: String,
    size: String,
    effect: {
      type: String,
      default: 'light',
      validator(val) {
        return ['dark', 'light', 'plain'].indexOf(val) !== -1;
      }
    }
  },
  computed: {
    tagSize() {
      return this.size || (this.$ELEMENT || {}).size;
    },
    classes() {
      const { type, tagSize, effect } = this
      // console.log(type, tagSize, effect);
      let arr = [
        'ac-tag',
        type ? `ac-tag--${type}` : '',
        tagSize ? `ac-tag--${tagSize}` : '',
        effect ? `ac-tag--${effect}` : ''
      ];
      // console.log("数组", arr);
      return arr
    }
  }
};
</script>