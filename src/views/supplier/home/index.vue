<template>
  <div>
    <business-statistics></business-statistics>
  </div>
</template>

<script>
import BusinessStatistics from "./components/business-statistics";

export default {
  components: { BusinessStatistics },
  name: "home",
  data() {
    return {
      link: "/supplier/finance"
    };
  }
};
</script>