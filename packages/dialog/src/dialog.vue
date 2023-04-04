<template>
  <transition name="dialog-fade">
    <div class="ac-dialog__wrapper" v-show="visible" @click.self="handleClose">
      <div class="ac-dialog" :style="style">
        <div class="ac-dialog__header">
          <slot name="title">
            <span class="ac-dialog__title">{{ title }}</span>
          </slot>
          <button class="ac-dialog__headerbtn" @click="handleClose">
            <i class="ac-icon-guanbi"></i>
            关闭
          </button>
        </div>
        <div class="ac-dialog__body">
          <slot></slot>
        </div>
        <div class="ac-dialog__footer" v-if="$slots.footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
// import AcButton from './button'
export default {
  name: "AcDialog",
  props: {
    title: {
      type: String,
      default: "标题",
    },
    width: {
      type: String,
      default: "50%",
    },
    top: {
      tpye: String,
      default: "15vh",
    },
    visible: {
      type: Boolean,
      default: false,
    },
  },
  mounted(){
    console.log("打印一下视图",this.visible);
  },
  components: {
    // AcButton
  },
  computed: {
    style() {
      return {
        width: this.width,
        marginTop: this.top,
      };
    },
  },
  methods: {
    handleClose() {
      this.$emit("update:visible", false);
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
