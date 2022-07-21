<template>
  <t-layout>
    <t-content class="content">
      <t-row class="t-skeleton-demo">
        <t-col v-for="(animation, index) in animations" :key="`animation-${index}`">
          <section class="t-skeleton-demo-card">
            <div class="header">
              {{ animation.label }}
            </div>
            <div class="content">
              <t-skeleton :animation="animation.value"></t-skeleton>
            </div>
          </section>
        </t-col>
      </t-row>
    </t-content>
    <t-aside>
      564
    </t-aside>
  </t-layout>
</template>

<script setup lang="jsx">
const animations = [
  { label: '渐变加载动画', value: 'gradient' },
];
</script>

<style scoped>

</style>