<script setup lang="ts">
import { ref } from "vue";
import Icon from "./Icon.vue";

defineProps<{ value: number | undefined }>();
defineEmits<{
  (e: "scoreChanged", value: number): void;
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
      :fill="
        value !== undefined && ((hoverValue && hoverValue >= i) || value >= i)
      "
      @click="$emit('scoreChanged', i)"
      @mouseover="hoverValue = i"
      @mouseleave="hoverValue = undefined"
    />
  </div>
</template>

<style lang="scss" scoped>
div {
  display: flex;
  flex-wrap: nowrap;
}
.star {
  cursor: pointer;
}
</style>
