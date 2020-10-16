<template>
  <div>
    <div
      id="img-bg"
      style="position: absolute; left:0; top:0; width:100%; height:100%; border-width: 0; z-index: -2;overflow: hidden;"
    >
      <img src="../../assets/images/login/bg.jpg" style="width:1920px;height:1080px;" />
    </div>

    <div class="login-drawer-bg"></div>

    <img class="logo-img" src="../../assets/images/login/logo01.svg" alt="东方瑞云" />

    <div class="login-drawer clearfix">
      <div class="login-block clearfix">
        <div class="login-main-right clearfix">
          <div class="toggle-login-type" @click="toggleLoginType(false)">
            <img src="../../assets/images/login/byQRCode.png" style="width:52px;height:52px;" />
          </div>
          <div class="login-title">供应链金融平台</div>

          <div class="login-block-body">
            <a-form :form="form">
              <a-form-item
                :label-col="formItemLayout.labelCol"
                :wrapper-col="formItemLayout.wrapperCol"
                label="账号"
              >
                <a-input
                  v-decorator="['userName',{ rules: [{ required: true, message: '请输入账户名/手机号' }] },]"
                  placeholder="请输入账户名/手机号"
                />
              </a-form-item>
              <a-form-item
                :label-col="formItemLayout.labelCol"
                :wrapper-col="formItemLayout.wrapperCol"
                label="密码"
              >
                <a-input
                  v-decorator="['password', { rules: [{ required: true, message: '请输入密码' }] },]"
                  placeholder="请输入密码"
                />
              </a-form-item>
              <a-form-item
                :label-col="formItemLayout.labelCol"
                :wrapper-col="formItemLayout.wrapperCol"
                label="验证码"
              >
                <a-input
                  v-decorator="['captchaCode', { rules: [{ required: true, message: '请输入短信验证码' }] },]"
                  placeholder="请输入短信验证码"
                />
              </a-form-item>
              <a-form-item
                :label-col="formTailLayout.labelCol"
                :wrapper-col="formTailLayout.wrapperCol"
              >
                <a-button type="primary" @click="login">登录</a-button>
              </a-form-item>
            </a-form>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- <div>
    <div class="main" v-title data-title="东方瑞云供应链金融"></div>
    <div>{{pageName}}</div>
    <br />
    <a-button type="primary" @click="goToHomePage()">登录</a-button>
  </div>-->
</template>

<script>
import { loginFn } from "../../api/login";

const formItemLayout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 }
};
const formTailLayout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16, offset: 8 }
};

export default {
  name: "login",
  data: function() {
    return {
      pageName: "这是登录页a",
      imgSrc: "../../assets/images/login/bg.jpg",
      formItemLayout,
      formTailLayout,
      form: this.$form.createForm(this, { name: "dynamic_rule" })
    };
  },
  created: function() {
    setTimeout(function() {
      this.pageName = "这是登录页,可惜页面不更新";
    }, 2000);
  },
  methods: {
    goToHomePage: function() {
      this.$router.push("/supplier/home");
    },
    toggleLoginType: function(flag) {
      alert(flag);
    },
    login() {
      this.form.validateFields((err, values) => {
        console.log(values);
        if (!err) {
          loginFn(values).then((res) => {
            console.log(res);
            this.goToHomePage();
          });

          // console.info("success");
        }
      });
    }
  }
};
</script>

<style scoped>
.clearfix:after {
  content: "";
  display: block;
  clear: both;
}

/* logo样式 */

.logo-img {
  float: left;
  width: 178px;
  margin: 40px 50px;
}

/* 登录页整体样式 */

.login-main {
  position: relative;
  height: 100%;
  min-height: 700px;
  /* background: #fff url("/assets/images/login/bg.jpg") no-repeat; */
  /* background-size: cover; */
}

.login-drawer-bg {
  position: absolute;
  right: 0;
  top: 0;
  z-index: -1;
  width: 560px;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.29);
}

.login-drawer {
  float: right;
  width: 560px;
  padding-top: 100px;
  background-color: rgba(0, 0, 0, 0.01);
}

/************* 登录框组件样式 start *************/

.login-block {
  position: relative;
  width: 370px;
  height: 440px;
  margin: 0 auto;
}

.login-main-right {
  width: 100%;
  height: 100%;
  background-color: #fff;
  border: 0px solid #ccc;
  border-radius: 10px;
}

.toggle-login-type {
  position: absolute;
  right: 0;
  margin: 16px 16px 0 0;
  cursor: pointer;
}

/* 登录框标题 */

.login-title {
  margin: 42px 0 42px 0;
  text-align: center;
  font-size: 26px;
  letter-spacing: 1px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.85);
}

/* 登陆错误提示语 */

.login-warn {
  height: 24px;
  margin-top: -6px;
}

.login-warn > p {
  text-align: left;
  padding-left: 54px;
  color: red;
}

/* 验证码图片 */

.captchacode-img {
  width: 88px;
  height: 24px;
  border-radius: 1px;
  position: relative;
  top: -2px;
  right: 4px;
}

/* 忘记密码 */

.login-main-right .forget-pwd {
  text-align: center;
  margin-top: 18px;
}

.forget-pwd a {
  font-size: 12px;
}

/************* 登录框组件样式 end *************/

/* 重写登录页的链接字体样式 */

.link-font {
  font-size: 12px;
  color: #40a9ff;
  text-decoration: underline;
}

.link-font:hover {
  color: #1292cc;
}

.cos-link {
  font-size: 12px;
  color: #ccc;
  text-decoration: none;
}

.ssl-link,
.beian-link {
  font-size: 12px;
  color: #ccc;
  text-decoration: none;
}

.ssl-link:hover,
.beian-link:hover,
.cos-link:hover {
  text-decoration: underline;
}

/* 登录页底部样式 */

.login-footer {
  width: 480px;
  margin: 0 auto;
  margin-top: 100px;
  color: #ccc;
  font-size: 12px;
}

.app-block {
  width: 85px;
  border: 0;
  margin: 0 auto;
}

.app-download-img {
  width: 85px;
  height: 85px;
  vertical-align: top;
}

.app-download-txt {
  margin-top: 8px;
  margin-bottom: 24px;
  text-align: center;
}

.ssl-certificate {
  width: 81px;
  height: 39px;
  vertical-align: top;
}

.footer-content {
  border-width: 0;
}

.footer-content-bottom {
  display: flex;
  align-items: flex-end;
}

.footer-content-block {
  float: left;
  height: 40px;
  line-height: 40px;
  margin-left: 85px;
  border-width: 0;
  font-size: 12px;
}

.footer-content-bottom .footer-content-block:first-child {
  margin-left: 0;
}

/* 二维码模块 */

.qrcode-block {
  position: absolute;
  top: 122px;
  left: 75px;
  text-align: center;
  color: red;
}

.qrcode-bg {
  width: 220px;
  height: 220px;
  background-color: white;
  opacity: 0.8;
}

.qrcode-msg {
  width: 100%;
  position: absolute;
  top: 75px;
}

.qrcode-refresh-btn {
  position: absolute;
  top: 100px;
  left: 70px;
  height: 28px;
  padding: 0 8px;
  font-size: 13px;
}

/* 竖线 */

.vertical-line {
  display: inline-block;
  width: 0;
  height: 12px;
  margin: 0 10px;
  border-left: 1px solid #999;
  position: relative;
  top: 2px;
}

:host ::ng-deep .ant-row.ant-form-item {
  margin-bottom: 18px;
}

:host ::ng-deep .ant-input,
:host ::ng-deep .login-btn {
  height: 32px;
  border-radius: 4px !important;
}

:host ::ng-deep .ng-trigger-formExplainAnimation {
  height: 2px;
  font-size: 13px;
}

:host ::ng-deep .login-btn span {
  font-size: 16px;
  letter-spacing: 5px;
}

:host ::ng-deep .ant-tabs-nav-scroll {
  text-align: center;
}

:host ::ng-deep .ant-tabs-bar {
  border-bottom-width: 0;
}

:host ::ng-deep .ant-tabs-nav .ant-tabs-tab {
  padding: 8px 16px;
}

.login-block-body {
  width: 270px;
  margin: 0 auto;
}

/******************  小屏幕样式  *******************/

@media (max-width: 1440px) {
  .login-drawer {
    width: 520px;
    padding-top: 40px;
  }
  .login-drawer-bg {
    width: 520px;
  }
  .login-block {
    width: 320px;
    height: 420px;
  }
  .login-footer {
    margin-top: 40px;
  }
  .logo-img {
    width: 150px;
  }
  .login-block-body {
    width: 240px;
    margin: 0 auto;
  }
  .login-title {
    margin: 28px 0 12px 0;
  }
  .app-download-txt {
    margin-bottom: 0;
  }
  .qrcode-block {
    position: absolute;
    top: 102px;
    left: 50px;
  }
}

@media (min-width: 1922px) {
  .login-main {
    width: 1920px;
    height: 969px;
    margin: 0 auto;
  }
}
</style>