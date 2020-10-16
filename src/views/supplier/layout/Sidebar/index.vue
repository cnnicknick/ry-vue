<template>
  <div>
    <a-menu mode="inline" :openKeys="openKeys" @openChange="onOpenChange">
      <a-sub-menu key="sub1">
        <span slot="title">
          <a-icon type="appstore" />
          <span>我的业务</span>
        </span>
        <a-menu-item key="1">
          <router-link :to="'/supplier/home'" :key="1">首页</router-link>
        </a-menu-item>
        <a-menu-item key="2">
          <router-link :to="'/supplier/finance'" :key="2">业务查询</router-link>
        </a-menu-item>
        <a-menu-item key="3">
          <router-link :to="'/supplier/sign-inline'" :key="3">在线签约</router-link>
        </a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="sub2">
        <span slot="title">
          <a-icon type="setting" />
          <span>账号信息</span>
        </span>
        <a-menu-item key="4">
          <router-link :to="'/supplier/user-info'" :key="4">基本信息</router-link>
        </a-menu-item>
        <a-menu-item key="5">
          <router-link :to="'/supplier/password'" :key="5">修改密码</router-link>
        </a-menu-item>
      </a-sub-menu>
    </a-menu>
  </div>
</template>
<script>
export default {
  name: "side-bar",
  data() {
    return {
      rootSubmenuKeys: ["sub1", "sub2"],
      openKeys: ["sub1", "sub2"]
    };
  },
  methods: {
    onOpenChange(openKeys) {
      const latestOpenKey = openKeys.find(
        key => this.openKeys.indexOf(key) === -1
      );
      if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
        this.openKeys = openKeys;
      } else {
        this.openKeys = latestOpenKey ? [latestOpenKey] : [];
      }
    }
  }
};
</script>