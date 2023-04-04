import { computed, getCurrentInstance } from "vue"
import { checkboxProps } from "./check-box.type"
export const useCheckBoxProps = (props:checkboxProps)=>{
    
    let mode =useModel(props)
    // let isChecked = useChecked(props)
    return {
        mode,
        // isChecked
    }
}



function useModel(props: checkboxProps) {
    let {emit} = getCurrentInstance()
    return computed({
        get(){
            return props.modelValue
        },
        set(val){
            console.log("设置了值",val);
            emit('update:modelValue',val)
        }
    })
}

function useChecked(props: checkboxProps) {
    return computed(
        ()=>{
            return props.checked
        }
    )
}
