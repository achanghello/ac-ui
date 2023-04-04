<template>
  <div>
    <AcTabs v-model="activeName" @tab-click="handleClick" type="border">
      <AcTabPane
        v-for="item in arr"
        :key="item.name"
        :label="item.label"
        :name="item.name"
        >{{ item.label }}</AcTabPane
      >
    </AcTabs>
    <AcTabs v-model="haha" @tab-click="handleClick">
      <AcTabPane label="456" name="456"></AcTabPane>
      <AcTabPane label="123" name="123"></AcTabPane>
    </AcTabs>

    <div>
      <AcSteps :steps="steps" :currentStep="currentStep" />
    </div>
    <AcDemo :code="code" :codeClass="codeClass" :resultClass="resultClass" />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent,h, reactive, ref } from "vue";
export default defineComponent({
  setup() {
      
    let arr = reactive([
        {
            label:"首页",
            name:"first",
        },
        {
            label:"博客",
            name:"second",
        },
        {
            label:"留言",
            name:"third",
        },
        {
            label:"日记",
            name:"fourth",
        },
        {
            label:"甲乙",
            name:"fifth",
        }
    ])
    let activeName = ref('second')
    let haha = ref('123')
    const handleClick = (tab, event) => {
        console.log('------------', tab, event);
        // arr.pop()
    }

    // steps
    const steps = ref(['Step 1', 'Step 2', 'Step 3', 'Step 4'])
    const currentStep = ref(3)

    // demo
    const code = ref(`<template>

  <div class="hello">Hello, {{ name }}!</div>
</template>
<script>
export default {
  name: 'HelloWorld',
  props: {
    name: {
      type: String,
      default: 'World'
    }
  }
}
<\/script>
<style scoped>
.hello {
  font-size: 24px;
  color: blue;
}
</style>`)
    const codeClass = ref("html")
    const resultClass = ref("demo-result")
    return {
        activeName,
        handleClick,
        arr,

        haha,

        steps,
        currentStep,
        code,
        codeClass,
        resultClass
    }
  }
});
</script>