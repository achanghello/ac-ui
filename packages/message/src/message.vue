<template>
    <Transition name="down">
        <div class="ac-message" :style="style[type]" v-show="show">
            <i class="iconfont" :class="[style[type].icon]"></i>
            <span class="text">{{ text }}</span>
        </div>
    </Transition>
</template>
   
<script>
import { onMounted, onUnmounted, ref } from 'vue'
export default {
    name: 'AcMessage',
    props: {
        text: {
            type: String,
            default: ''
        },
        type: {
            type: String,
            // warn 警告  error 错误  success 成功
            default: 'warn'
        }
    },
    setup() {
        // 定义一个对象，包含三种情况的样式，对象key就是类型字符串
        const style = {
            warn: {
                icon: 'icon-warning',
                color: '#E6A23C',
                backgroundColor: 'rgb(253, 246, 236)',
                borderColor: 'rgb(250, 236, 216)'
            },
            error: {
                icon: 'icon-shanchu',
                color: '#F56C6C',
                backgroundColor: 'rgb(254, 240, 240)',
                borderColor: 'rgb(253, 226, 226)'
            },
            success: {
                icon: 'icon-queren2',
                color: '#67C23A',
                backgroundColor: 'rgb(240, 249, 235)',
                borderColor: 'rgb(225, 243, 216)'
            }
        }

        const show = ref(false)
        onMounted(() => {
            show.value = true
            setTimeout(()=>{
                show.value = false
            },2500)
        })

        return { style, show }
    }
}
</script>
 
<style scoped lang="scss">
</style>