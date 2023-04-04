<template>
  <div class="steps">
    <div
      v-for="(step, index) in steps"
      :key="index"
      class="step"
      :class="{ active: index === activeStep }"
      @click="handleClick(index)"
    >
      <div class="step-number">{{ index + 1 }}</div>
      <div class="step-label">{{ step }}</div>
    </div>
  </div>
  <div class="process">
    <div
      v-for="(step, index) in steps"
      :key="index"
      class="process-1"
      :class="{ active: index <= activeStep }"
    >
      <div>{{ step }}</div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "AcSteps",
  props: {
    steps: {
      type: Array,
      required: true,
    },
    currentStep: {
      type: Number,
      default: 0,
    },
  },
  setup(props) {
    const activeStep = ref(props.currentStep);

    const handleClick = (stepIndex) => {
      activeStep.value = stepIndex;
    };

    return {
      activeStep,
      handleClick,
    };
  },
};
</script>

<style lang="scss" scoped>

</style>
