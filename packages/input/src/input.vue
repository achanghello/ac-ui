

<template>
  <div
    class="ac-input"
    :class="[
      {
        'ac-input-group': $slots.prepend || $slots.append,
        'ac-input-group--append': $slots.append,
        'ac-input-group--prepend': $slots.prepend,
        'ac-input--suffix': showSuffix,
      },
    ]"
  >
    <!-- prepend slot -->
    <div class="ac-input__prepend">
      <slot name="prepend" />
    </div>
    <input
      class="ac-input__inner"
      :class="{'is-disabled': disabled}"
      :value="modelValue"
      :type="showPassword ? (passwordVisible ? 'text': 'password') : type"
      :placeholder="placeholder"
      :name="name"
      :disabled="disabled"
      @input="handleInput"
    />
    <span class="ac-input__suffix" v-if="showSuffix">
      <i class="ac-icon-jiazai" v-if="clearable && modelValue" @click="clear"></i>
        <i class="ac-icon-jiazai" v-if="showPassword" :class="{'ac-icon-yanjing-active': passwordVisible}" @click="passwordVisible=!passwordVisible"></i>
    </span>
    <div class="ac-input__append">
      <slot name="append" />
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";
export default defineComponent({
  name: "AcInput",
  props: {
    placeholder: {
      type: String,
      default: '请输入内容'
    },
    type: {
      type: String,
      default: 'text'
    },
    name: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    modelValue: {
      type: String,
      required: true,
    },
    clearable: {
      type: Boolean,
      default: false,
    },
    showPassword: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    function handleInput(e) {
      emit("update:modelValue", e.target.value);
    }
    function clear(){
      emit("update:modelValue", '');
    }

    // 是否展示后缀图标
    const showSuffix = computed(() => props.clearable || props.showPassword);
    const passwordVisible = ref(false)
    return {
      handleInput,

      showSuffix,
      // 是否显示密码
      passwordVisible,
      clear
    };
  },
});
</script>



<style lang="scss">

</style>
