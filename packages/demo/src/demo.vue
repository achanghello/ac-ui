<template>
  <div class="demo-block">
    <div class="demo-block__code">
      <pre><code :class="codeClass">{{ code }}</code></pre>
    </div>
    <div class="demo-block__result">
      <!-- <iframe :srcdoc="compiledCode" :class="resultClass"></iframe> -->
    </div>
  </div>
</template>

<script>
import { compile } from '@vue/compiler-dom'

export default {
  name: 'AcDemo',
  props: {
    code: String,
    // language: String,
    // compiledCode: String,
    resultClass: String,
    codeClass: String
  },
  mounted(){
    console.log(this.code);
    // console.log(compile(`<style></style>`));
  },
  computed: {
    // compiledCode() {
    //   return compile(this.code).code
    // }
  }
}
</script>

<style scoped>
.demo-block {
  margin: 24px 0;
  border-radius: 4px;
  background-color: #f2f2f2;
  overflow: hidden;
  box-shadow: 0 1px 2px rgba(0,0,0,.1);
  border: 1px solid #ddd;
}

.demo-block__code {
  padding: 24px;
  font-size: 14px;
  line-height: 1.5;
  border-right: 1px solid #ddd;
  overflow: auto;
}

.demo-block__code pre {
  margin: 0;
  padding: 0;
}

.demo-block__result {
  position: relative;
  width: 100%;
}

.demo-block__result iframe {
  width: 100%;
  height: 100%;
  border: none;
}
</style>
