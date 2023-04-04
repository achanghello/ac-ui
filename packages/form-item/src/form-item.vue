<template>
  <div class="ac-form-item">
    <label class="ac-form-item__label" :style="labelStyle">{{ label }}</label>
    <!-- blur事件的监听 -->
    <div class="ac-form-item__content" tabindex="0" @blur.capture="validate">
      <slot></slot>
    </div>
    <div class="el-form-item__error" :style="{left:labelWidth}" v-if="showError">
      {{ errorMessage }}
    </div>
  </div>
</template>

<script>
export default {
  name: "AcFormItem",
  props: {
    prop: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      showError: false,
      errorMessage: "",
    };
  },
  methods: {
    validate(event) {
      // 获取规则
      // const rule = this.Form.rules[this.prop];
      const rule = this.currentRule;
      // 获取字段值
      const value = this.Form.model[this.prop];
      // 如果规则不是数组就转化为数组
      let validators = Array.isArray(rule) ? rule : [rule];

      // 根据事件过滤规则
      validators = validators.filter((item) => {
        return item.trigger === event.type;
      });
      // 如果没有规则就通过
      if (validators.length === 0) {
        return true;
      }

      for (let i = 0; i < validators.length; i++) {
        // 规则验证
        validators[i].validator({}, value, (erroritem) => {
          if (erroritem) {
            this.showError = true;
            this.errorMessage = erroritem.message;
          } else {
            this.showError = false;
            this.errorMessage = "";
          }
        });
        // 没通过直接返回
        if (this.showError) {
          return false;
        }
      }

      // 都通过后的返回
      return true;
    },
    makeValidator(item) {
      let arr = [];
      const {
        validator,
        required,
        pattern,
        type,
        min,
        max,
        len,
        message,
        trigger,
      } = item;
      if (validator) {
        arr.push({
          validator,
          trigger,
        });
      }
      if (required) {
        arr.push({
          validator: function (rule, value, callback) {
            if (value === "") {
              callback(new Error(message ? message : "不能为空"));
            } else {
              callback();
            }
          },
          trigger,
        });
      }
      if (pattern) {
        arr.push({
          validator: function (rule, value, callback) {
            if (!pattern.test(value)) {
              callback(new Error(message ? message : "正则不匹配"));
            } else {
              callback();
            }
          },
          trigger,
        });
      }
      if (type) {
        const emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        const urlRegex =
          /^((https?|ftp|file):\/\/)?([a-z0-9-]+\.)?[a-z0-9-]+\.[a-z0-9]+(\/([a-z0-9-._~:/?#\[\]@!$&'()*+,;=]+)*)?$/;
        arr.push({
          validator: function (rule, value, callback) {
            if (type === "email" && !emailRegex.test(value)) {
              callback(new Error(message ? message : "类型不匹配"));
            } else if (type === "url" && !urlRegex.test(value)) {
              callback(new Error(message ? message : "类型不匹配"));
            } else {
              callback();
            }
          },
          trigger,
        });
      }
      if (min | max | len) {
        arr.push({
          validator: function (rule, value, callback) {
            if (len && value.length !== len) {
              callback(new Error(message ? message : `长度应该在为${len}`));
            } else if (min && max && value.length < min && value.length > max) {
              callback(
                new Error(message ? message : `长度应该在${min}-${max}之间`)
              );
            } else if (min && value.length < min) {
              callback(new Error(message ? message : `长度应该大于${min}`));
            } else if (max && value.length > max) {
              callback(new Error(message ? message : `长度应该小于${max}`));
            } else {
              callback();
            }
          },
          trigger,
        });
      }
      return arr;
    },
  },
  // inject: ["Form"],
  inject: {
    Form: {},
    rules: {},
    model: {},
  },
  mounted() {
    this.Form.addField(this);
    // console.log("打印一下注入的inject",this.currentRule,this.currentModel)
    // console.log("打印一下当前的数组", this.currentRule);
  },
  computed: {
    labelStyle() {
      return {
        width: this.Form.labelWidth,
      };
    },
    labelWidth() {
      return this.Form.labelWidth
    },
    // 当前组件的item的规则和值
    currentRule() {
      let arr = [];
      let arrbefore = this.rules[this.prop];
      arrbefore.forEach((element) => {
        arr.push(...this.makeValidator(element));
      });
      return arr;
      // return this.rules[this.prop];
    },
    currentModel() {
      return this.model[this.prop];
    },
  },
  watch: {
    // change事件的监听
    currentModel(newValue, oldValue) {
      this.validate({ type: "change" });
    },
  },
};
</script>

<style lang="scss">

</style>
