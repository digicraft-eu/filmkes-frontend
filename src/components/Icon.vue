<script setup lang="ts">
withDefaults(
  defineProps<{
    name: string;
    fill?: boolean;
    weight?: number;
  }>(),
  {
    fill: false,
    weight: 700,
  }
);
</script>
<template>
  <span
    class="material-symbols-outlined"
    :style="`font-variation-settings: 'FILL' ${
      fill ? '1' : '0'
    }, 'wght' ${weight}, 'GRAD' 0, 'opsz' 48`"
  >
    {{ name }}
  </span>
</template>
