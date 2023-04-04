<template>
    <Transition name="ac-message-fade" @before-leave="hei">
        <div class="ac-message" v-show="haha">
            Message
            <button @click="haha=false">123</button>
        </div>
    </Transition>
      
</template>
<script lang="ts">
import { defineComponent, onMounted, onUnmounted, ref } from 'vue';
export default defineComponent({
    props:{
        id:{type:String,default:''},
        message:{type:String,default:""},
        type:{type:String,default:'success'},
        duration:{
            type:Number,
            default:2000
        },
        center:{
            type:Boolean
        },
        Offset:{
            type:Number,default:20
        }
    },
    setup(props){
        console.log(props);
        let haha = ref(false)
        let timer = null
        onMounted(()=>{
            haha.value = true
            timer = setTimeout(()=>{
                haha.value = false
            },1500)
        })
        onUnmounted(()=>{
            clearTimeout(timer)
        })

        return {
            haha,
            hei:()=>{console.log(456);
            }
        }
    }
})
</script>