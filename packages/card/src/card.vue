<template>
  <div class="ac-card" :class="shadow ? 'is-' + shadow + '-shadow' : 'is-always-shadow'">
    <div class="ac-card__header" v-if="$slots.header || header">
      <slot name="header">{{ header }}</slot>
    </div>
    <div class="ac-card__body" :style="bodyStyle">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
  export default {
    name: 'AcCard',
    props: {
      header: {},
      bodyStyle: {},
      shadow: {
        type: String
      }
    }
  };
</script>