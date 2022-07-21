<script setup>

</script>

<template>
  <t-layout class="container">
    <t-header class="header">
      <t-head-menu default-value="home" expand-type="popup">
        <div class="menu-hold"></div>
        <t-menu-item value="home" to="/">首页</t-menu-item>
        <t-menu-item value="leave-message" to="/leaveMessage">留言</t-menu-item>
        <template #operations>
          <a href="javascript:void(0)">
            <t-icon class="t-menu__operations-icon" name="search"/>
          </a>
        </template>
      </t-head-menu>
    </t-header>
    <div class="content-wrapper">
      <router-view>

      </router-view>
    </div>
    <t-footer class="footer">
      Copyright @ 2022 red. All Rights Reserved
    </t-footer>
  </t-layout>
</template>

<style scoped>
.container {
  background-color: #F6F6F6;
}

.header {
  background-color: #ffffff;
  border-bottom: 1px solid #e3e3e3;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  box-shadow: 0 2px 6px 0 rgb(0 0 0 / 17%);
}

.menu-hold {
  margin-left: 300px;
}

.content-wrapper {
  margin: 75px auto 15px auto;
  width: 885pt;
}

.footer {
  text-align: center;
  background-color: #ebebeb;
}
</style>