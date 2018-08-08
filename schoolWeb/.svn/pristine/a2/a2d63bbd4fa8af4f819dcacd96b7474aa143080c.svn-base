<template>
  <div>
    <div class="head container">
      <i style="margin-left: 20px;display:inline-block;"><img src="../assets/image/logo.png" alt=""></i>
      <span class="f-fr" @click="returnIndex" style="padding-top: 20px;font-size: 16px;cursor: pointer;margin-right: 20px;"> << 返回首页 </span>
    </div>
    <div class="wrap">
      <div class="container">
        <Tabs type="card" :value="this.activiName" @on-click="tabsClick" style="margin-right: 20px">
          <TabPane label="登 录" class="TabPane">
          </TabPane>
          <TabPane label="注 册" class="TabPane">
            <Form ref="formCustomReg" :label-width="60" :model="retrievePassFormRes">
              <div class="ivu-form-item ">
                <label class="ivu-form-item-label">手机号码</label>
                <Input type="text" placeholder="请输入手机号码" v-model="retrievePassFormRes.mobile"/>
              </div>
              <div class="ivu-form-item ">
                <label class="ivu-form-item-label">用&nbsp;&nbsp;户&nbsp;&nbsp;名</label>
                <Input type="text" placeholder="请输入用户名" v-model="retrievePassFormRes.username"/>
              </div>
              <div class="ivu-form-item ">
                <label class="ivu-form-item-label">密&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;码</label>
                <Input type="password" placeholder="请输入密码"  v-model="retrievePassFormRes.password"/>
              </div>
              <div class="ivu-form-item">
                <label class="ivu-form-item-label">验&nbsp;&nbsp;证&nbsp;码&nbsp;</label>
                <Input type="text" style="width: 41%!important;float: left;" placeholder="请输入验证码"  v-model="retrievePassFormRes.captcha"/>
                <img :src="codeUrl" style="width: 110px; height: 39px;margin-left: 10px;" @click="refreshCode"/>
              </div>
              <div class="ivu-form-item btn" style="margin-bottom: 15px;">
                <button @click="registerNow">注 册</button>
              </div>
              <Row class="ivu-form-item p-l-60">
                <Col span="16">
                <Checkbox v-model="remPwd" class="col-999 m-r-0">我完全同意《用户服务条款》</Checkbox>
                </Col>
                <Col span="8" class="text-right">
                <a href="#" class="col-999" @click="switchLogin">立即登录</a>
                </Col>
              </Row>
            </Form>
          </TabPane>
        </Tabs>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  import qs from 'qs';
  export default {
    data() {
      return {
        remPwd: true,
        codeUrl: '',
        imgUrl:'',
        imgUrlOne:'',
        activiName: 1,
        timer: null,
        equementId:'',
        retrievePassForm: {
          username:'',
          password:'',
          captcha:'',
        },
        retrievePassFormRes:{
          username:'',
          password:'',
          equementId:'',
          mobile:'',
        }
      };
    },
    mounted() {
      this.refreshCode();
    },
    beforeDestroy() {

    },
    created() {

    },
    methods: {
      tabsClick(name) {
        if(name === 0){
          this.$router.push('login');
        }
//        this.activiName = name
      },
      // 切换点击
      switchLogin() {
        this.activiName = 0
      },
      switchRegist(){
        this.activiName = 1
      },
      // 忘记密码
      forgetPass(){
        this.$router.push('retrievePass');
      },

      // 获取验证码
      refreshCode() {
        this.equementId = new Date().getTime() + 1;
        this.codeUrl = axios.defaults.baseURL + 'captcha.jpg/' + this.equementId + '_' + new Date().getTime();
      },
      //校验
      select(){
        if(!this.retrievePassForm.password){
          this.$Message.error("用户密码不能为空");
          return false;
        }
        if(!this.retrievePassForm.username){
          this.$Message.error("用户名不能为空");
          return false;
        }
        if(!this.retrievePassForm.captcha){
          this.$Message.error("验证码不能为空");
          return false;
        }
      },
      selectForm(){
        if (!this.retrievePassFormRes.mobile) {
          this.$Message.error('手机号码不能为空！');
        }else if(!(/^1(3|4|5|7|8)\d{9}$/.test(this.retrievePassFormRes.mobile))){
          this.$Message.error('手机号码格式不正确！');
        }
        if(!this.retrievePassFormRes.password){
          this.$Message.error("用户密码不能为空");
          return false;
        }
        if(this.retrievePassFormRes.password.length < 6){
          this.$Message.error("用户密码不能小于6位");
          return false;
        }
        if(!(/^[a-zA-Z0-9_]{0,}$/.test(this.retrievePassFormRes.username))){
          this.$Message.error("用户名不能含有中文或特殊字符");
          return false;
        }
        if(!this.retrievePassFormRes.captcha){
          this.$Message.error("验证码不能为空");
          return false;
        }
      },
      // 注册
      registerNow() {
        if (!this.retrievePassFormRes.mobile) {
          this.$Message.error('手机号码不能为空！');
        }else if(!(/^1(3|4|5|7|8)\d{9}$/.test(this.retrievePassFormRes.mobile))){
          this.$Message.error('手机号码格式不正确！');
        }
        if(!this.retrievePassFormRes.password){
          this.$Message.error("用户密码不能为空");
          return false;
        }
        if(this.retrievePassFormRes.password.length < 6){
          this.$Message.error("用户密码不能小于6位");
          return false;
        }
        if(!(/^[a-zA-Z0-9_]{0,}$/.test(this.retrievePassFormRes.username))){
          this.$Message.error("用户名不能含有中文或特殊字符");
          return false;
        }
        if(!this.retrievePassFormRes.captcha){
          this.$Message.error("验证码不能为空");
          return false;
        }
        this.service.register(this.retrievePassFormRes.username,this.retrievePassFormRes.password,this.retrievePassFormRes.captcha,this.equementId,this.retrievePassFormRes.mobile).then(result => {
          this.$Message.success({
            content: result.msg+'请登录'
          });
          setTimeout(() => {
            this.$router.push('login');
          },3000);
        }).catch(error => {
          this.$Message.error({
            content: error,
            duration: 5
          });
        })
      },
      returnIndex(){
        this.$router.replace('index');
      }
    }
  };
</script>

<style lang="less">
  .head {
    width: 100%;
    height: 90px;
    padding: 15px 0;
  }
  .wrap {
    width: 100%;
    min-width:1200px;
    height: 600px;
    background: url("../assets/image/bgimg.jpg") no-repeat;
    background-size: 100% 100%;
    padding-top: 88px;
  }
  /*标签切换*/
  .ivu-tabs {
    width: 360px;
    height: 418px;
    float: right;
    background: #f1f4ff;
  }
  .ivu-tabs-nav {
    width: 100%;
  }
  .ivu-tabs-bar {
    margin-bottom: 0 !important;
  }
  .ivu-tabs.ivu-tabs-card > .ivu-tabs-bar .ivu-tabs-nav-container {
    height: 60px !important;
    line-height: 60px;
  }
  .ivu-tabs.ivu-tabs-card > .ivu-tabs-bar .ivu-tabs-tab {
    width: 50%;
    height: 60px !important;
    line-height: 60px;
    font-size: 16px;
    color: #2a2a2a !important;
    text-align: center;
    background: #d8dae6 !important;
    border: none !important;
    margin-right: 0 !important;
    padding: 0;
  }
  .ivu-tabs.ivu-tabs-card > .ivu-tabs-bar .ivu-tabs-tab-active {
    background: #f1f4ff !important;
    color: #2a2a2a;
  }
  .TabPane {
    padding: 20px;
  }
  /*input框*/
  .ivu-input-wrapper {
    width: 80% !important;
  }
  .ivu-input {
    width: 100%;
    height: 40px !important;
  }
  /*label文字*/
  .ivu-form .ivu-form-item-label {
    width: 60px;
    padding: 12px 12px 11px 0 !important;
    line-height: inherit !important;
  }
  form .ivu-form-item {
    margin-bottom: 20px;
    vertical-align: top;
    zoom: 1;
    .getBt{
      width: 110px;
      height: 39px;
      margin-left: 10px;
      border: none;
      outline: none;
      background: #ff8a0c;
      color: #ffffff;
      border-radius: 4px;
      cursor: pointer;
    }
  }
  .btn {
    padding-left: 60px;
  }
  .btn Button {
    background: #ff8a0c;
    width: 100%;
    height: 37px;
    border-radius: 5px;
    text-align: center;
    color: #ffffff;
    font-size: 16px;
    border: none;
    outline: none;
    cursor: pointer;
  }
  .btn Button:hover{
    background: #ff8a0c;
    color: #ffffff;
  }
</style>
