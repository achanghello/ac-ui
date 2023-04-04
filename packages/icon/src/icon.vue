<template>
  <i :class="`ac-icon-${name}`"></i>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name:"AcIcon",
  props:{
    name:{
      type:String,
      default:'123'
    }
  },
  setup() {},
});
</script>

<style>
</style>