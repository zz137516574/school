<template>
  <div>
    <v-top :top="top"></v-top>
    <div class="clearfix container m-t-20 m-b-20">
      <i class="f-fl"><img src="../assets/image/logo.png" alt=""></i>
      <v-search :search="search" class="f-fr"></v-search>
    </div>

    <!--导航-->
    <v-subpageMenu :subpageMenu="subpageMenu" class="m-b-20"></v-subpageMenu>

    <!--忘记密码-->
    <div class="retrievePass container">
      <div  class="retrievePass-title">找回密码</div>
      <Form ref="retrievePassForm" :model="retrievePassForm" :rules="retrievePassValidate" class="retrievePass-form">
        <FormItem prop="num">
          <Input v-model="retrievePassForm.num" placeholder="请输入手机号码"></Input>
        </FormItem>
        <FormItem  prop="checkCode" class="clearfix">
            <Input type="text" v-model="retrievePassForm.checkCode" placeholder="短信校验码" class="yzm f-fl" style="width: 225px!important;"></Input>
            <Button type="primary" style="width: 135px;" @click="getCode" class="f-fr">获取校验码</Button>
        </FormItem>
        <FormItem prop="password">
          <Input type="password" v-model="retrievePassForm.password" placeholder="请输入密码"></Input>
        </FormItem>
        <FormItem prop="passwdCheck">
          <Input type="password" v-model="retrievePassForm.passwdCheck" placeholder="请再次输入密码"></Input>
        </FormItem>
        <FormItem>
          <Button type="primary" @click="handleSubmit('retrievePassForm')" style="width: 370px;">确定</Button>
        </FormItem>
      </Form>
      <div style="text-align: center;padding-bottom: 50px;">
        <Button type="ghost" @click="goBcakPage" style="width: 370px;height: 45px;font-size: 15px;">返回登录</Button>
      </div>
    </div>

    <v-footer :footer="footer"></v-footer>
  </div>
</template>

<script>
  import Vue from 'vue';
  import top from '../components/top.vue';
  import search from '../components/search.vue';
  import subpageMenu from '../components/class/subpageMenu.vue';
  import footer from '../components/footer.vue';

  export default {
    data() {
      const validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入您的密码！'));
        } else if (value.length < 6) {
          callback(new Error('密码长度不能少于6位！'));
        } else {
          if (this.retrievePassForm.passwdCheck !== '') {
            // 对第二个密码框单独验证
            this.$refs.retrievePassForm.validateField('passwdCheck');
          }
          callback();
        }
      };
      const validatePassCheck = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入您的密码！'));
        } else if (value !== this.retrievePassForm.password) {
          callback(new Error('两次密码不一致！'));
        } else {
          callback();
        }
      };
      const validateNum = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('手机号码不能为空！'));
        }else if(!(/^1(3|4|5|7|8)\d{9}$/.test(value))){
          callback(new Error('手机号码不正确！'));
        }else{
          callback();
        }
      };
      const validateCheckCode = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('验证码不能为空！'));
        }else{
          callback();
        }
      };
      return {
        top: {},
        search: {},
        subpageMenu:{},
        footer: {},
        retrievePassForm: {
          num: '',
          checkCode: '',
          password:'',
          passwdCheck: '',
        },
        retrievePassValidate: {
          password: [
            { validator: validatePass, trigger: 'blur' }
          ],
          passwdCheck: [
            { validator: validatePassCheck, trigger: 'blur' }
          ],
          num: [
            { validator: validateNum, trigger: 'blur' }
          ],
          checkCode: [
            { validator: validateCheckCode, trigger: 'blur' }
          ],

        }
      };
    },
    mounted() {
      if(window.localStorage.msg) {
        this.msg = JSON.parse(window.localStorage.msg);
      }
      if(window.localStorage.personInfo) {
        this.personInfo = JSON.parse(window.localStorage.personInfo);
      }
    },
    beforeDestroy() {

    },
    components: {
      'v-top': top,
      'v-search': search,
      'v-subpageMenu': subpageMenu,
      'v-footer': footer,
    },
    methods: {
//      handleSubmit (name) {
//        console.log(123);
//        this.$refs[name].validate((valid) => {
//          console.log(456);
//          if (valid) {
//            this.$Message.success('密码找回成功，请重新登录!');
//          } else {
//            this.$Message.error('提交失败，请重新提交!');
//          }
//        })
//      },
      goBcakPage(){
        this.$router.push('login');
      },
      // 获取验证码
      getCode() {
        this.service.getCodeData(this.retrievePassForm.num).then(result => {
          console.log(result);
        }).catch(error => {
          this.$Message.error({
            content: error,
            duration: 15
          });
        })
      },
      // 修改密码
      handleSubmit (name) {
        this.$refs[name].validate((valid) => {
          if (valid) {
            this.service.changePass(this.retrievePassForm.num, this.retrievePassForm.password, this.retrievePassForm.checkCode).then(result => {
              // 提示消息框，样式、显示时间
              this.$Message.success({
                content: result.msg,
                duration: 30,
                closable: true
              });
            }).catch(error => {
              this.$Message.error({
                content: error,
                duration: 15
              });
            })
          } else {
            this.$Message.error('提交失败，请重新提交!');
          }
        })
      },
    }
  };

</script>

<style lang="less">
.retrievePass{
  margin-top: 40px;
  margin-bottom: 100px;
  height: 600px;
  border: 1px solid #dddddd;
  .retrievePass-title{
    margin: 0 auto;
    width: 995px;
    font-size: 24px;
    text-align: center;
    padding: 40px 0;
    border-bottom: 1px solid #efefef;
    color: #4e4e4e;
  }
  .retrievePass-form{
    margin: 40px auto 0;
    width: 370px;
    .ivu-input{
      width: 370px!important;
      height: 45px!important;
      line-height: 45px!important;
    }
    .yzm .ivu-input{
      width: 225px!important;
    }
    .ivu-btn{
      height: 45px!important;
      line-height: 33px!important;
      font-size: 15px;
    }

  }
}
.ivu-message{
  top: 200px;
}
.ivu-form-item-error-tip{
  top: 45px;
}
</style>
