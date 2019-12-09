<template>
  <div>
    这是供应商首页
    <router-link :to="link">去融资</router-link>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      link: "/supplier/finance"
    };
  }
};
</script>