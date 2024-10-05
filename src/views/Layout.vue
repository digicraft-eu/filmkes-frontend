<script setup lang="ts">
import { RouterView } from "vue-router";
</script>
<template>
  <nav class="container">
    <ul>
      <li><strong>Filmkes website</strong></li>
    </ul>
    <ul>
      <li><RouterLink to="/">Home</RouterLink></li>
    </ul>
  </nav>
  <main class="container">
    <RouterView />
  </main>
</template>
