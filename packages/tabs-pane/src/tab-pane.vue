<template>
  <div class="ac-tab-pane" v-show="name === activeName">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent, inject } from "vue"
import { tabPaneProps } from "./tan-pane";
export default defineComponent ({
  name:'AcTabPane',
  props:tabPaneProps,
  setup () {
    
    const activeName = inject('activeName')
 
    return { activeName }
  }
})
</script>

<style>

</style>