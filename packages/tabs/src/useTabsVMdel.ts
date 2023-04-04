import { computed, Ref } from "vue";
import { App } from 'vue'
// 定义常量
// 定义接口和类型
type modelValueType = [string, number];
interface propsType {
  modelValue: modelValueType;
  type: string;
}
interface tabsType {
  mode: Ref<modelValueType>;
  type: string;
  emit: Function;
  clickCheckName: Function;
  slots: Array<VNodeOut>
  VNodes: Array<VNode>
}

// 定义虚拟节点
// type VNodeChildren = Array<VNode | string | boolean>;

type VNode = {
  name: string;
}
interface VNodeOut {
  children: null | Array<VNodeOut>;
  type: VNode | symbol;
}

type InstallFunction = (app:App)=>void
// 定义类和对象
const props = {
  modelValue: {
    type: [String, Number],
    default: "",
  },
  type: {
    type: String,
    default: "",
  },
};
const emits = ["update:modelValue"];

class tabs implements tabsType {
  mode: Ref<modelValueType>;
  type: string;
  emit: Function;
  slots: Array<VNodeOut>
  VNodes: Array<VNode>
  constructor(props: propsType, emit: Function, slots: Array<VNodeOut>) {
    this.type = props.type;
    this.mode = computed({
      get() {
        return props.modelValue;
      },
      set(value) {
        emit("update:modelValue", value);
      },
    });
    this.emit = emit;

    this.slots = slots
    let arr = [];
    // slot节点的整理
    slots.forEach((item:VNodeOut) => {
      // 提取静态的组件内容
      console.log('输出一下类型',item.type==Symbol);
      
      if (typeof(item.type)!=='symbol' && item.type.name === "AcTabPane") {
        arr.push(item);
      } else {
        // 提取动态的组件内容
        item.children.forEach((i) => {
          arr.push(i);
        });
      }
    });
    this.VNodes = arr
  }
  clickCheckName(item, e) {
    this.mode.value = item.props.name;
    this.emit("tab-click", item.props, e);
  }
}
// 定义函数
// 统一暴露
export { props, emits, tabs,InstallFunction };
