<!-- 个人主页 / 资料设置 -->
<template>
  <div class="dataSetting clearfix">
    <!-- title -->
    <div class="title">
      <span class="tit">资料设置</span>
    </div>
    <!--用户头像-->
    <div class="userImage">
      <!--<span>*</span>-->
      <div class="userHead" style="">用户头像</div>
      <div style="display: inline-block;width:58px;height:58px;line-height: 58px;vertical-align: middle;margin-left: 20px">
        <img src=""  ref="newPicture" style="width: 100%;height: 100%;">
      </div>
      <!--<div class="demo-upload-list" v-for="item in uploadList" ref="uploadImg" v-show="pictureAppear">-->
        <!--<template v-if="item.status === 'finished'">-->
          <!--<img :src="item.url">-->
          <!--<div class="demo-upload-list-cover">-->
          <!--<Icon type="ios-trash-outline" @click.native="handleRemove(item)"></Icon>-->
          <!--</div>-->
        <!--</template>-->
        <!--&lt;!&ndash;&ndash;&gt;-->
      <!--</div>-->
      <Upload
        ref="upload"
        :show-upload-list="false"
        :default-file-list="defaultList"
        :on-success="handleSuccess"
        :format="['jpg','jpeg','png']"
        :max-size="2048"
        :on-format-error="handleFormatError"
        :on-exceeded-size="handleMaxSize"
        :before-upload="handleBeforeUpload"
        multiple
        type="drag"
        action='#'
        style="display: inline-block;width:58px;vertical-align: middle;margin-left: 20px">
        <div style="width: 58px;height:58px;line-height: 58px;">
          <Icon type="camera" size="20"></Icon>
        </div>
      </Upload>
    </div>
    <!-- 表单 -->
    <div class="content">
      <Form ref="formPersonal" :model="formPersonal" label-position="left" :label-width="100">
        <FormItem label="用户名" class="padd-top"  prop="username" >
          <Input v-model="formPersonal.username" readonly="readonly"/>
        </FormItem>
        <FormItem label="手机号" class="padd-top">
          <Input v-model="formPersonal.mobile" readonly="readonly"/>
        </FormItem>
        <FormItem label="性别" class="padd-top"  prop="sex" style="display: none">
          <RadioGroup v-model="formPersonal.sex">
            <Radio label="1">男</Radio>
            <Radio label="0" class="m-l-30">女</Radio>
          </RadioGroup>
        </FormItem>
        <!--<FormItem label="个人签名" class="padd-top"  prop="sign">-->
          <!--<Input v-model="formPersonal.sign" type="textarea" class="textarea-style" :rows="4" placeholder="个人签名..."/>-->
        <!--</FormItem>-->
        <!--<FormItem label="自我介绍" class="padd-top"  prop="profiles">-->
          <!--<Input v-model="formPersonal.profiles" type="textarea" class="textarea-style" :rows="4" placeholder="自我介绍..."/>-->
        <!--</FormItem>-->
        <Button type="warning" class="m-t-30"  @click="personalSubmit('formPersonal')">保&nbsp;&nbsp;&nbsp;存</Button>
      </Form>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  var _this = this;
  export default {
    data () {
      return {
        defaultList: [{
          'name':'',
          'url': ''
        }],
        imgChange:true,
        imgName: '',
        visible: false,
        uploadList: [],
        item: '',
        userId:0,
        msg:'',
        userInfo:'',
        formPersonal: {
          username: '',
          sex: 1,
          sign: '',
          introduce: ''
        },
        testValue:'',
        pictureAppear:true,
        ext:''
      };
    },
    computed: {

    },
    mounted (){
      if(window.localStorage.msg) {
        this.msg = JSON.parse(window.localStorage.msg);
      }
      if(window.localStorage.userInfo) {
        this.userInfo = JSON.parse(window.localStorage.userInfo);
        this.userId = JSON.parse(window.localStorage.userInfo).userId;
      }
      this.formPersonal.username = this.userInfo.username;
      this.formPersonal.mobile = this.userInfo.mobile;
      this.formPersonal.sex = this.userInfo.sex;
      this.uploadList = this.$refs.upload.fileList;
      if(this.userInfo.head === null){
        this.$refs.newPicture.src = 'src/assets/image/imgbg.jpg';
      }else{
        this.$refs.newPicture.src = this.userInfo.head;
      }
    },
    methods: {
//       删除头像
      handleRemove (file) {
        const fileList = this.$refs.upload.fileList;
        this.$refs.upload.fileList.splice(fileList.indexOf(file), 1);
      },

      // 头像上传成功提示
      handleSuccess (res,file) {
        file.url = axios.defaults.baseURL + this.defaultList[0].name;
        file.name = this.defaultList[0].name;
      },
      // 头像验证
      handleFormatError (file) {
        this.$Notice.warning({
          title: '文件格式不正确',
          desc: '文件 ' + file.name + ' 格式不正确，请上传 jpg 或 png 格式的图片。'
        });
      },
      handleMaxSize (file) {
        this.$Notice.warning({
          title: '超出文件大小限制',
          desc: '文件 ' + file.name + ' 太大，不能超过 2M。'
        });
      },

      // 上传头像
      handleBeforeUpload (file) {
        this.uploadList.name = file.name;
        this.uploadList.url = file.lastModified;
        this.ext = file.name.substring(file.name.lastIndexOf('.') + 1);
        var preview = this.$refs.newPicture;
        var newTest = this.$refs.newTest;
        var uploadImg = this.$refs.uploadImg;

        var reader = new FileReader();
        reader.onload = function(e){
          _this.testValue = e.target.result;

          preview.src = e.target.result;
          preview.style.width = '100%';
          preview.style.height = '100%';

          if( _this.testValue){
           _this.handleRemove;
          }
        };
        reader.readAsDataURL(file);
      },
      // 表单验证
      personalSubmit(){
        if(!_this.testValue){
          this.formPersonal.head = this.userInfo.head;
        }else{
          this.formPersonal.head = _this.testValue;
        }
//        console.log(this.userId+'======'+this.formPersonal.username+'======'+this.formPersonal.head+'========'+this.ext);
        if(this.imgChange){
          this.service.dataUpdata(this.userId, this.formPersonal.username, this.formPersonal.head,this.ext).then(result => {
            this.imgChange = false;
            if(result.code === 0){
              this.$Message.success({
                content:'恭喜您，信息修改成功！',
                duration: 5
              });
              this.service.lecInfo(this.userId).then(result=>{
                if(result.code === 0){
                  window.localStorage.userInfo = '';
                  window.localStorage.userInfo = JSON.stringify(result.user);

                  this.pictureAppear = !this.pictureAppear;
                  if(result.user.head === null){
                    this.uploadList[0].url = 'src/assets/image/imgbg.jpg';
                  }else{
                    this.$refs.newPicture.src = result.user.head;
                  }
                }
              }).catch(error => {
                if(error === 'token失效，请重新登录'){
                  this.$Message.info({
                    content: '当前登陆状态已过期,请重新登陆',
                    duration: 5
                  });
                }else{
                  this.$Loading.error();
                }
              })
            }
          }).catch(error => {
            this.imgChange = false;
            if(error === 'token失效，请重新登录'){
              this.$Message.info({
                content: '当前登陆状态已过期,请重新登陆',
                duration: 5
              });
            }else{
              this.$Loading.error();
            }
          })
        }else{
          this.$Message.error({
            content:'操作频繁，请稍后！',
            duration: 5
          });
        }
        this.imgChange = true;
      }
    }
  };
</script>

<style lang="less">
  .dataSetting {
    width: 945px;
    height: auto;
    border: 1px #ededed solid;
    padding-bottom: 40px;
    .title {
      width:auto;
      height: 50px;
      line-height: 50px;
      font-size: 16px;
      color: #3e3e3e;
      border-bottom: 1px #ededed solid;
      .tit {
        padding: 15px;
        border-bottom: 2px #ff8a0c solid;
      }
    }
    .userImage{
      margin: 45px 45px 0 45px;
      .userHead{
        display:inline-block;
        vertical-align: middle;
        padding: 9px 12px 11px 0px !important;
        font-size: 14px;
        span{
          color: #ff3300;
          display: inline-block;
          margin-right:4px;
          font-size:16px;
          vertical-align: bottom;
        }
      }
    }
    .content {
      border: 0px #ccc solid;
      width: auto;
      margin: 25px 45px 0 45px;
      .editor {
        border: 1px #e5e5e5 solid;
        width: 715px;
        /*height: 257px;*/
        border-radius: 4px;
        .ivu-card-body {
          padding: 0;
        }
        .mce-panel[style] {
          border-width: 0px !important;
        }
        .mce-tinymce {
          box-shadow: 0 1px 2px rgba(0, 0, 0, 0);
        }
      }
      .ivu-input-wrapper input,.ivu-select {
        width: 300px !important;
      }
      .padd-top {
        .ivu-form-item-label {
          padding: 9px 12px 11px 0 !important;
          font-size: 14px;
        }
      }
      .ivu-btn {
        padding: 6px 50px;
        font-size: 16px;
        margin-left: 43%;
      }
    }
    /* input select */
    .ivu-input,.ivu-select-single .ivu-select-selection {
      height: 36px !important;
    }
    .ivu-select-single .ivu-select-selection .ivu-select-placeholder, .ivu-select-single .ivu-select-selection .ivu-select-selected-value {
      height: 36px !important;
      line-height: 36px !important;
    }
    .textarea-style {
      textarea {
        height: auto !important;
      }
    }
    .demo-upload-list{
      display: inline-block;
      width: 60px;
      height: 60px;
      text-align: center;
      line-height: 60px;
      border: 1px solid transparent;
      border-radius: 4px;
      overflow: hidden;
      background: #fff;
      position: relative;
      box-shadow: 0 1px 1px rgba(0,0,0,.2);
      margin-right: 4px;
      vertical-align: middle;
      margin-left: 20px;
      img{
        width: 100%;
        height: 100%;
      }
    }
    .demo-upload-list-cover{
      display: none;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background: rgba(0,0,0,.6);
    }
    .demo-upload-list:hover .demo-upload-list-cover{
      display: block;
    }
    .demo-upload-list-cover i{
      color: #fff;
      font-size: 20px;
      cursor: pointer;
      margin: 0 2px;
    }
  }
</style>
