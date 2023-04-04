<template>
  <button :class="[`ac-button`,
                   `ac-button--${type}`,
                   {
                    'is-plain': plain,
                    'is-round': round,
                    'is-circle': circle,
                    'is-disabled': disabled,
                    'is-loading': loading
                   }
                  ]">
    <i :class="icon"></i>
    <span v-if="loading">
      <svg class="circular" viewBox="-10, -10, 50, 50">
          <path
            class="path"
            d="
            M 30 15
            L 28 17
            M 25.61 25.61
            A 15 15, 0, 0, 1, 15 30
            A 15 15, 0, 1, 1, 27.99 7.5
            L 15 15
          "
            style="stroke-width: 4px; fill: rgba(0, 0, 0, 0)"
          />
        </svg>
    </span>
    <span v-if="$slots.default">
      <slot></slot>
    </span>
  </button>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
type buttonType = "primary" | "danger" | "info" | "success" | "warning"
export default defineComponent({
  name: "AcButton",
  props: {
    type: {
      type: String as PropType<buttonType>,
      vaildator: (val: string) => {
        return ['primary', 'danger', 'info', 'success','warning'].includes(val)
      },
      default: "default",
    },
    icon: {
      type: String,
      default: ''
    },
    disabled:  {
      type: Boolean,
      default: false
    },
    round: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    plain: {
      type: Boolean,
      default: false
    },
    circle: {
      type: Boolean,
      default: false
    }
  }
});
</script>

