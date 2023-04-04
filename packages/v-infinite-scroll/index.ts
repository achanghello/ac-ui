import { checkArriveBottom } from "./src/utils.js";
export default {
  install(Vue) {
    Vue.directive("infinite-scroll", {
      mounted(el, binding, vnode, prevVnode) {
        // 下面会介绍各个参数的细节
        // console.log("元素",el);
        // 这个里面有参数
        // console.log("绑定",binding);
        // console.log("函数",binding.value);
        // console.log("节点",vnode)
        // 拿到绑定函数
        const fn = binding.value
        let timer = null;
        // 指令的值必须是一个函数，我们好执行回调
        if (typeof fn != "function") {
          throw new Error("指令value必须为函数");
        }
        // console.log("十几岁时读的是");
        // 事件处理函数
        function handleScroll() {
          // console.log("元素的高度--",el.height);
          //   console.log("元素的client高度--",el.clientHeight);
          //   console.log("元素的包括内边距和边框高度--",el.offsetHeight);
          //   console.log("内部的高度--",el.scrollHeight);
          //   console.log("浏览器的高度--",window.innerHeight)
          // 判断滚动条到达底部了，才开始执行回调
          // console.log("感谢你特别邀请");
          if (checkArriveBottom(el)) {
            // console.log("拉到底了");
            // 执行回调的时候，要把this指向组件实例
            fn();
          }
        }
        // 如果设置有immediate说明立即执行，则立即执行回调，直到将内容撑满内容区
        if (binding?.modifiers?.immediate) {
          timer = setInterval(() => {
            // 子元素的总高度大于设置指令的父级包裹元素就表示填满了可视区，停止加载
            // const childScrollHeight = el.firstElementChild.scrollHeight;
            if (el.scrollHeight >= el.offsetHeight) {
              return clearInterval(timer);
            }
            handleScroll();
          }, 1500);
        }
        binding.instance.handleScroll = handleScroll;
        // 绑定滚动处理函数
        el.addEventListener("scroll", binding.instance.handleScroll);
      },
      //   组件更新的时候，会不断触发（最明显就是data中的响应式数据变化，会继续执行update方法）
      updated(el, binding, vnode, prevVnode) {
        console.log("天才从来都是孤独")
        // if(binding.instance.complated){
        //   el.removeEventListener("scroll",binding.instance.handleScroll);
        // }
      },
    });
  },
};