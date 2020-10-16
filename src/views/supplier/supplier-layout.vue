<template>
  <div class="supplier-layout">
    <a-layout>
      <a-layout-header>Header</a-layout-header>
      <a-layout>
        <a-layout-sider>
          <Sidebar></Sidebar>
        </a-layout-sider>
        <a-layout-content>
          <router-view></router-view>
        </a-layout-content>
      </a-layout>
      <a-layout-footer>Footer</a-layout-footer>
    </a-layout>
  </div>
</template>

<script>
import Sidebar from "./layout/Sidebar/index";

export default {
  components: { Sidebar },
  name: "layout"
};
</script>

<style scoped>
.supplier-layout .ant-layout-sider {
  background: #fff;
}
.supplier-layout .ant-layout-content {
  padding: 24px;
}
</style>