<template>
  <a-card title="业务概览" :bordered="false">
    <a-row :gutter="16">
      <a-col :span="8" class="ry-statistic-card ry-statistic-card-finance">
        <div class="ry-statistic-card-title">融资申请</div>
        <div class="ry-statistic-card-content" style="padding: 8px 0 4px 0;">
          <span class="ry-statistic-label">数量</span>
          <span class="ry-statistic-value">{{financeCount}}</span>
          <span class="ry-statistic-unit">笔</span>
        </div>
        <div class="ry-statistic-card-content">
          <span class="ry-statistic-label">申请金额</span>
          <span class="ry-statistic-unit" style="font-size: 14px;">￥</span>
          <span class="ry-statistic-value">{{totalFinanceAmount}}</span>
        </div>
      </a-col>
      <a-col :span="8" class="ry-statistic-card ry-statistic-card-loan">
        <div class="ry-statistic-card-title">融资放款</div>
        <div class="ry-statistic-card-content" style="padding: 8px 0 4px 0;">
          <span class="ry-statistic-label">数量</span>
          <span class="ry-statistic-value">{{loanCount}}</span>
          <span class="ry-statistic-unit">笔</span>
        </div>
        <div class="ry-statistic-card-content">
          <span class="ry-statistic-label">放款金额</span>
          <span class="ry-statistic-unit" style="font-size: 14px;">￥</span>
          <span class="ry-statistic-value">{{totalLoanAmount}}</span>
        </div>
      </a-col>
      <a-col :span="8" class="ry-statistic-card ry-statistic-card-invoice">
        <div class="ry-statistic-card-title">发票</div>
        <div class="ry-statistic-card-content" style="padding: 8px 0 4px 0;">
          <span class="ry-statistic-label">数量</span>
          <span class="ry-statistic-value">{{invoiceCount}}</span>
          <span class="ry-statistic-unit">张</span>
        </div>
        <div class="ry-statistic-card-content">
          <span class="ry-statistic-label">总金额</span>
          <span class="ry-statistic-unit" style="font-size: 14px;">￥</span>
          <span class="ry-statistic-value">{{totalInvoiceListAmount}}</span>
        </div>
      </a-col>
    </a-row>

    <!-- <div class="text-center text-no-data" *ngIf="financeOverview.loanCount === null ">暂无业务概览数据</div> -->
  </a-card>
</template>

<script>
export default {
  name: "business-statistics",
  data: function() {
    return {
      financeCount: 111,
      totalFinanceAmount: 15260001,
      loanCount: 112,
      totalLoanAmount: 15260002,
      invoiceCount: 113,
      totalInvoiceListAmount: 15260003
    };
  }
};
</script>

<style scoped>
.ry-statistic {
  float: left;
  border-left: 1px solid #e8e8e8;
  white-space: nowrap;
}

.ry-statistic > div {
  display: block;
}
.ry-statistic > p:first-child {
  color: green;
  font-size: 14px;
  line-height: 22px;
  margin-bottom: 4px;
}
.ry-statistic > span.ry-statistic-label {
  display: inline-block;
  width: 60px;
  margin: 0 24px;
}
.ry-statistic > span.ry-statistic-unit {
  padding-right: 4px;
  color: #ff6f00;
}
.ry-statistic > span.ry-statistic-value {
  font-size: 22px;
  color: #ff6f00;
}
.ry-statistic > p {
  color: green;
  font-size: 18px;
  line-height: 38px;
  margin: 0;
}
.ry-statistic > p > span {
  color: green;
  font-size: 20px;
}
.ry-statistic:after {
  background-color: green;
  position: absolute;
  top: 8px;
  right: 0;
  width: 0;
  height: 40px;
  content: "";
}
.ry-statistic > div:first-child {
  margin-bottom: 8px;
}
.ry-statistic > div:last-child {
  padding-right: 0;
}
.ry-statistic > div:last-child:after {
  display: none;
}
.ry-statistic-card {
  height: 145px;
}
.ry-statistic-card-finance {
  background: url("../../../../assets/images/portal/ic_card_yellow.svg") no-repeat center;
}
.ry-statistic-card-loan {
  background: url("../../../../assets/images/portal/ic_card_blue.svg") no-repeat center;
}
.ry-statistic-card-invoice {
  background: url("../../../../assets/images/portal/ic_card_purple.svg") no-repeat center;
}

.ry-statistic-card-title {
  line-height: 50px;
  padding-left: 16px;
  font-size: 16px;
  color: #ffffff;
}

.ry-statistic-card-content > .ry-statistic-label {
  padding-left: 16px;
  line-height: 16px;
  font-size: 12px;
  color: #ffffff;
}
.ry-statistic-card-content > .ry-statistic-value {
  display: inline-block;
  max-width: 210px;
  padding-left: 6px;
  font-size: 22px;
  color: #ffffff;
}
.ry-statistic-card-content > .ry-statistic-unit {
  padding-left: 6px;
  font-size: 12px;
  color: #ffffff;
}
</style>