<script setup>

</script>

<template>
  <t-layout class="container">
    <t-header class="header">
      xxx
    </t-header>
    <t-layout class="content-wrapper">
      <t-content class="content">
        123
      </t-content>
      <t-aside>
        564
      </t-aside>
    </t-layout>
    <t-footer class="footer">
      Copyright @ 2022 red. All Rights Reserved
    </t-footer>
  </t-layout>
</template>

<style scoped>
.container {
  background-color: #ffffff;
}

.header {
  background-color: #ffffff;
  border-bottom: 1px solid #e3e3e3;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
}

.content-wrapper {
  background-color: #ffffff;
  margin: 0 auto;
  padding: 75px 0 15px 0;
  width: 800px;
}

.content {
  background-color: red;
  min-height: 1500px;
}

.footer {
  text-align: center;
  background-color: #ebebeb;
}
</style>