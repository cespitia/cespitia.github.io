<script setup lang="ts">
defineProps<{ text: string }>();
</script>

<template>
  <span class="tag">{{ text }}</span>
</template>

<style scoped>
.tag{
  display:inline-flex;
  align-items:center;
  padding:4px 10px;
  border:1px solid rgba(255,255,255,0.18);
  border-radius:999px;
  font-size:12px;
  line-height:1;
  background: rgba(255,255,255,0.06);
  white-space: nowrap;
}
</style>