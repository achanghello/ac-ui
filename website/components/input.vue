<template>
  <div>
    <AcInput v-model="input1">
      <template v-slot:append>
        <AcButton>首发</AcButton>
      </template>
    </AcInput>
    <AcInput v-model="input1" type="password" clearable showPassword></AcInput>
    <div style="width: 20px; height: 50px"></div>
    <ac-form ref="form" :model="loginForm" :rules="rules" labelWidth="150px">
      <ac-form-item label="邮箱" prop="email">
        <ac-input
          placeholder="请输入邮箱"
          name="email"
          v-model="loginForm.email"
        ></ac-input>
      </ac-form-item>
      <ac-form-item label="密码" prop="password">
        <ac-input
          placeholder="请输入密码"
          name="password"
          type="password"
          v-model="loginForm.password"
          showPassword
        ></ac-input>
      </ac-form-item>
      <AcButton @click="submit">提交</AcButton>
    </ac-form>
    <AcCard header="我是标题" shadow="never">
      哈哈哈
    </AcCard>
    <AcCard header="第二篇" shadow="always">
      嘿嘿嘿
    </AcCard>
    <AcCard header="第三篇" shadow="hover">
      嘿嘿嘿
    </AcCard>
  </div>
</template>

<script lang="ts">
import { reactive, ref } from "vue";
export default {
  setup() {
    const input1 = ref("");
    const loginForm = reactive({
      email: "",
      password: "",
    });

    const validateEmail = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("不能为空"));
      }else if (value === "常文彬哈哈哈") {
        callback(new Error("不能是我的名字"));
      } else {
        callback();
      }
    };
    const validateEmail2 = (rule, value, callback) => {
      if (value.length<5) {
        callback(new Error("长度不能小于五"));
      } else {
        callback();
      }
    };
    const validatePassword = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("不能为空"));
      } else {
        callback();
      }
    };
    // const rules = reactive({
    //   email: [{ validator: validateEmail, trigger: "blur" }],
    //   password: [{ validator: validatePassword, trigger: "blur" }],
    // });
    const rules = {
      email: [{type:'email', len:17,trigger: "submit"},
              { validator: validateEmail, trigger: "submit" },
              { validator: validateEmail2, trigger: "submit" }],
      password: [{ validator: validatePassword, trigger: "submit" }],
    }

    // 获得form表单元素
    const form = ref()
    function submit(){
      form.value.validate((res)=>{
        console.log("验证结果",res);
      })
    }
    return {
      input1,

      loginForm,
      rules,
      submit,
      form
    };
  },
};
</script>

<style>
</style>