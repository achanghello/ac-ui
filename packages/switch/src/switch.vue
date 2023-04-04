<template>
    <div class="ac-switch" @click="handleClick" :class="{'is-checked': modelValue}">
      <span class="ac-switch__core" ref="core">
        <span class="ac-switch__button"></span>
      </span>
      <input
        :name="name"
        class="ac-switch__input"
        type="checkbox"
        ref="input"
      >
    </div>
</template>

<script>
export default {
  name: 'AcSwitch',
  props: {
    modelValue: {
      type: Boolean,
      default: false
    },
    activeColor: {
      type: String,
      default: ''
    },
    inactiveColor: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    }
  },
  emits: ["update:modelValue"],
  mounted () {
    // 设置颜色
    this.setColor()
    this.$refs.input.checked = this.modelValue
  },
  methods: {
    async handleClick () {
      // console.log(123)
      this.$emit('update:modelValue', !this.modelValue)
      this.$refs.input.checked = this.value
      await this.$nextTick()
      this.setColor()
    },
    setColor () {
      if (this.activeColor || this.inactiveColor) {
        const color = this.modelValue ? this.activeColor : this.inactiveColor
        this.$refs.core.style.borderColor = color
        this.$refs.core.style.backgroundColor = color
      }
    }
  }
}
</script>

<style lang="scss">

</style>
