<template>
    <div>
        <AcCheckBox v-model="checkBoxVal" label="管他呢"></AcCheckBox>
        <!-- <AcCheckBox v-model="checkBoxVal" disabled label="管他呢"></AcCheckBox> -->
        <ac-check-box-group v-model="hobby">
            <AcCheckBox label="管他呢"></AcCheckBox>
            <AcCheckBox label="傻逼"></AcCheckBox>
        </ac-check-box-group>

        <AcRadioGroup v-model="radio">
            <AcRadio :label="0"></AcRadio>
            <AcRadio :label="1"></AcRadio>
        </AcRadioGroup>
        <AcSwitch v-model="checkBoxVal" active-color="#13ce66" inactive-color="#ff4949"></AcSwitch>
    </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
    setup(){
        let checkBoxVal = ref(true)
        let hobby = ref([])
        let radio = ref(0)
        return {
            hobby,
            checkBoxVal,
            radio
        }
    }
})
</script>