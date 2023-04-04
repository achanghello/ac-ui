<template>
  <div>
    <button @click="ClickChange">点击出现message</button>
    <ac-button type="primary" @click="visible = true">确定</ac-button>
    <ac-button type="primary" @click="drawercommentstate = true"
      >确定</ac-button
    >
  </div>
  <div style="width: 500px; height: 500px">
    <ac-dialog width="20%" v-model:visible="visible">
      <template v-slot:title>
        <h1>我是标题</h1>
      </template>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
      <template v-slot:footer>
        <ac-button type="primary" @click="visible = false">确定</ac-button>
        <ac-button @click="visible = false">取消</ac-button>
      </template>
    </ac-dialog>
  </div>
  <ac-drawer
    v-model="drawercommentstate"
    direction="right"
    :clickMaskClose="true"
  >
    <template v-slot:title> 评论 </template>
    哈喽哈喽我的未来
  </ac-drawer>
  <ac-select v-model="type" class="select-type">
    <AcOption value="suki" label="点赞量"></AcOption>
    <AcOption value="release_time" label="发布时间"></AcOption>
    <AcOption value="collection" label="收藏量"></AcOption>
    <AcOption value="views" label="浏览量"></AcOption>
  </ac-select>
  <AcTag>1111</AcTag>
  <AcTag type="success">122</AcTag>
  <AcTag type="info">122</AcTag>
  <AcTag type="warning">122</AcTag>
  <AcTag type="danger">122</AcTag>
  <AcUpload
    class="avatar-uploader"
    name="blogImage"
    :multiple="false"
    :disabled="false"
    :onChange="onChange"
    :beforeUpload="beforeUpload"
    :onSuccess="onSuccess"
  >
    <img v-if="imageUrl" :src="imageUrl" class="avatar" />
    <i v-else class="ac-icon-jiazai avatar-uploader-icon"></i>
  </AcUpload>
  <div
    class="infinite-list"
    v-infinite-scroll.loading.complated.immediate="load"
    style="overflow: auto"
    ref="infiniteList"
  >
    <ul>
      <li v-for="i in count" :key="i" class="infinite-list-item">{{ i }}</li>
    </ul>
    <p v-if="loading && !complated" class="text">加载中...</p>
    <p v-if="complated" class="text">没有更多了</p>
  </div>
  <AcTextarea v-model="textarea">
    <AcButton>哈喽哈喽我的未来</AcButton>
  </AcTextarea>
  <AcBlogitem :normal="true"></AcBlogitem>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import Message from "@ac-ui/message";
// import Message from "../../packages/message/src/index";
export default defineComponent({
  setup() {
    const ClickChange = () => {
      // console.log("我自己");
      Message({
        text: "1111",
        type: "success",
      });
    };

    const visible = ref(false);
    const drawercommentstate = ref(false);
    const type = ref("suki");

    // 下面是上传封面的模块
    const imageUrl = ref("");
    function onChange(file, arr) {
      console.log("很高兴认识你我是onchange函数", file, arr);
    }
    function beforeUpload(file) {
      console.log("根据返回值确定是否上传", file);
      return false;
    }
    function onSuccess(filepath) {
      console.log("上传成功", filepath);
      imageUrl.value = filepath;
    }

    // 无限滚动
    let count = ref(1),
      loading = ref(false),
      complated = ref(false);
    const load = () => {
      loading.value = true;
      setTimeout(() => {
        if (count.value >= 30) {
          complated.value = true;
          return;
        }
        count.value += 3;
        loading.value = false;
      }, 1000);
    };
    // 文本域
    const textarea = ref('')
    return {
      ClickChange,

      visible,
      drawercommentstate,
      type,

      // 上传图片相关的函数
      onChange,
      beforeUpload,
      onSuccess,
      imageUrl,
      // 无限滚动
      count,
      loading,
      complated,
      load,
      // 文本域
      textarea
    };
  },
});
</script>

<style lang="scss">
  .infinite-list {
    height: 300px;
    width: 500px;
    border: 1px solid red;
    li {
      height: 50px;
      background: #e8f3fe;
      margin: 10px;
      color: #7dbcfc;
      text-align: center;
      line-height: 50px;
    }
    .text {
      color: green;
      text-align: center;
      line-height: 50px;
    }
  }
</style>