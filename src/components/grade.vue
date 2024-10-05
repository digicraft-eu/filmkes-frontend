<script setup lang="ts">
import { ref } from "vue";
import Icon from "./Icon.vue";

defineProps<{ grade: number }>();
defineEmits<{
  (e: "gradeChanged", value: number): void;
}>();
const hoverValue = ref<number | undefined>(undefined);
</script>

<template>
  <div>
    <Icon
      v-for="i in 5"
      class="star"
      :key="i"
      name="star"
      :fill="(hoverValue && hoverValue >= i) || grade >= i"
      @click="$emit('gradeChanged', i)"
      @mouseover="hoverValue = i"
      @mouseleave="hoverValue = undefined"
    />
  </div>
</template>

<style lang="scss" scoped>
.star {
  cursor: pointer;
}
</style>
