<template>
  <!-- 抽屉打开关闭过渡效果根据name去指定 -->
  <transition :name="computedName">
    <!-- clickMaskCloseFn搭配@click.stop -->
    <div
      @click="clickMaskCloseFn"
      class="myDrawerWrap"
      :class="{ isShowDrawerMask: mask }"
      v-show="modelValue"
    >
      <div
        ref="drawerContentRef"
        :class="['drawerContent']"
        :style="computedDrawerPosition"
        @click.stop
      >
        <header v-show="isShowHeader" class="drawerHeader">
          <slot name="title">
            <span>{{ title }}</span>
          </slot>
          <i class="el-icon-close" @click="closeDrawer" v-show="showCloseIcon">
          </i>
        </header>
        <section class="drawerBody">
          <slot></slot>
        </section>
      </div>
    </div>
  </transition>
</template>

<script>
const directionArr = ["top", "bottom", "left", "right"]; // "ttb","btt","ltr","rtl"
const moveObj = {
  top: "topMove",
  bottom: "bottomMove",
  left: "leftMove",
  right: "rightMove",
};
export default {
  name: "AcDrawer",
  props: {
    // 是否显示抽屉
    modelValue: {
      type: Boolean,
      default: false,
    },
    // 是否显示抽屉头部内容
    isShowHeader: {
      type: Boolean,
      default: true,
    },
    // 父组件传过来的抽屉标题值
    title: {
      type: String,
      default: "我是title",
    },
    // 是否显示关闭小图标
    showCloseIcon: {
      type: Boolean,
      default: true,
    },
    // 是否开启抽屉背景遮罩层
    mask: {
      type: Boolean,
      default: true,
    },
    // 点击遮罩层关闭默认为true
    clickMaskClose: {
      type: Boolean,
      default: true,
    },
    // 校验抽屉的4个方向
    direction: {
      type: String,
      default: "right",
      validator(val) {
        return directionArr.includes(val);
      },
    },
    // 接收父组件传递过来的关闭函数，会中断关闭抽屉的操作
    beforeClose: {
      type: Function,
    },
  },
  computed: {
    // 动态控制上下左右的抽屉内容区的位置以及抽屉的宽度
    computedDrawerPosition() {
      let positionObj = {
        width:
          (this.direction == "left") | (this.direction == "right")
            ? "30%"
            : "100%",
        height:
          (this.direction == "top") | (this.direction == "bottom")
            ? "30%"
            : "100%",
        'min-width':'450px',
      };
      positionObj[this.direction] = 0;
      return positionObj;
    },
    // 动态控制抽屉从上下左右进入和退出
    computedName() {
      return moveObj[this.direction]; // topMove、bottomMove、leftMove、rightMove
    },
  },
  methods: {
    // 点击遮罩层关闭弹框
    clickMaskCloseFn() {
      if (this.clickMaskClose == true) {
        this.closeDrawer();
      } else {
        /* 这里要控制一下冒泡事件，注意第十行使用@click.stop
           不控制冒泡的话，点击内容区也会导致弹出框关闭*/
        return;
      }
    },
    // 准备关闭抽屉弹出框
    closeDrawer() {
      console.log(888);
      // 若传递了beforeClose函数，就抛出关闭函数，供外部使用
      if (this.beforeClose) {
        this.beforeClose(this.close);
      }
      // 没有beforeClose函数，直接关闭即可
      else {
        this.close();
      }
    },
    // 关闭抽屉弹出框
    close() {
      this.$emit("update:modelValue", false); // 关闭
      this.$emit("shutDown"); // 并抛出一个shutDown通知事件
    },
  },
};
</script>

<style lang='scss' scoped>

</style>