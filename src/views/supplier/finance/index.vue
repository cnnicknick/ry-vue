<template>
  <div>
    这是供应商融资列表
    <router-link :to="link">去首页</router-link>
  </div>
</template>

<script>
export default {
  name: "finance",
  data() {
    return {
      link: "/supplier/home"
    };
  }
};
</script>