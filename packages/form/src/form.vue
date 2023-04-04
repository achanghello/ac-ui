<template>
  <div class="ac-form">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "AcForm",
  provide() {
    return {
      Form: this,
      // 规则
      rules: this.rules,
      // 组件的值
      model: this.model,
    };
  },
  props: {
    model: {
      type: Object,
      required: true,
    },
    labelWidth: {
      type: String,
      default: "80px",
    },
    rules: {
      type: Object,
    },
  },
  data() {
    return {
      fields: {},
      errors: {},
    };
  },
  methods: {
    addField(field) {
      this.fields[field.prop] = field;
    },
    removeField(field) {
      delete this.fields[field.prop];
      delete this.errors[field.prop];
    },
    validate(callback) {
      const errors = {};
      let isValid = true;
      
      const validatorKeys = Object.keys(this.fields || {});
      validatorKeys.forEach((item)=>{
        const result = this.fields[item].validate({ type: "submit" })
        if(!result){
          errors[item] = this.fields[item].errorMessage;
          isValid = false;
        }
      })
      this.errors = errors;
      callback(isValid);
      console.log(errors)
    },
    /*validate(callback){
      // const validatorKeys = Object.keys(this.fields || {});
      // validatorKeys.forEach((item)=>{
      //   this.fields[item].validate()
      // })

      const errors = {};
      let isValid = true;
      for (const prop in this.fields) {
        // 获取规则
        const rule = this.rules[prop]
        // 获取该表单项
        const field = this.fields[prop];
        // 获取表单值
        const value = this.model[prop];
        // 如果规则不是数组就转化为数组
        const validators = Array.isArray(rule)?rule:[rule]
        for (const validator of validators) {
          // console.log("规则",rule);
          // console.log("表单项",field);
          // console.log("表单值",value);
          // console.log("数组规则",validator);
          if (!field.validate()) {
            errors[prop] = field.errorMessage
            isValid = false
            break
          }
        }
      }
      this.errors = errors;
      callback(isValid)
    },*/
    validate1(callback) {
      let valid = true;
      let count = 0;
      const errors = {};
      const validatorKeys = Object.keys(this.rules || {});
      if (validatorKeys.length === 0) {
        callback(true);
      }

      // 外循环将（规则和值）分开
      validatorKeys.forEach((key) => {
        // 获取规则
        const rule = this.rules[key];
        // 获取字段值
        const value = this.model[key];
        // 如果规则不是数组就转化为数组
        const validators = Array.isArray(rule) ? rule : [rule];
        // 内循环进行验证
        validators.forEach((validator) => {
          count++;
          // console.log("拿到验证规则函数",validator);
          validator.validator({}, value, (erroritem) => {
            if (erroritem) {
              valid = false;
              errors[key] = erroritem;
            }
          });
        });
      });

      if (count === 0) {
        callback(true);
      }

      if (valid) {
        callback(true);
      } else {
        callback(false);
        console.log(errors);
      }
    },
  },
};
</script>
<style></style>
