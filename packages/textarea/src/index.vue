<template>
  <form class="ac-textarea">
    <textarea
      class="comment-content"
      name="comment_content"
      :placeholder="placeholder"
      :maxlength="maxlength"
      :value="modelValue"
      @input="handleChange"
    ></textarea>
    <div class="comment-operate-box">
      <div class="comment-operate-l">
        <span id="tip_comment" class="tip"
          >还能输入<em>{{ maxlength - modelValue.length }}</em
          >个字符</span
        >
      </div>
      <div class="comment-operate-r">
        <slot></slot>
      </div>
    </div>
  </form>
</template>
<script>
export default {
  name: "AcTextarea",
  props: {
    placeholder: {
      type: String,
      default: "请输入文本域内容"
    },
    name: {
      type: String,
    },
    modelValue: {
      type: String,
      default: "",
    },
    maxlength: {
      type: Number,
      default: 100,
    },
  },
  emits: ["update:modelValue"],
  methods: {
    handleChange(e) {
      this.$emit("update:modelValue", e.target.value);
    }
  },
};
</script>

<style lang="scss" scoped>

</style>