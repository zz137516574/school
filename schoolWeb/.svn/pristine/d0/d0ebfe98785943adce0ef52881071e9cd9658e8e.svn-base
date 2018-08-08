<!-- 互动直播 / 创建课程 -->
<template>
  <div class="creatingCourses clearfix">
    <!-- title -->
    <div class="title">
      <span class="tit">创建课程</span>
      <span style="margin-left: 20px;font-size: 12px;color: red;">温馨提示：创建课程前，请先绑定云联惠账号！！！</span>
    </div>

    <!-- 表单 -->
    <div class="content">
      <Form ref="coursesForm" :model="coursesForm" label-position="left" :label-width="80">

        <div style="margin-bottom: 25px">
          <span style="font-size: 14px;padding-right:10px"><span style="color:red;font-size:16px;padding-right: 8px;vertical-align: middle;padding-top: 7px; display: inline-block;">*</span>名称</span>
          <Input v-model="coursesForm.courseName"/>
        </div>

        <div style="margin-bottom: 25px">
          <span style="font-size: 14px;padding-right:10px"><span style="color:red;font-size:16px;padding-right: 8px;vertical-align: middle;padding-top: 7px; display: inline-block;">*</span>是否共享</span>
          <RadioGroup v-model="coursesForm.isShare">
            <span  v-for="(item, index) in courseShareList" :key="index" @click="CourseShareChange(item)">
              <Radio  :label="item"  :value="item">
              </Radio>
            </span>
          </RadioGroup>
        </div>

        <div style="margin-bottom: 25px">
          <span style="font-size: 14px;padding-right:10px"><span style="color:red;font-size:16px;padding-right: 8px;vertical-align: middle;padding-top: 7px; display: inline-block;">*</span>购买用户</span>

          <RadioGroup v-model="coursesForm.purchaseUsers">
            <span  v-for="(item, index) in courseTypDataList" :key="index" @click="CourseTypeChange(item)">
              <Radio  :label="item"  :value="item">
              </Radio>
            </span>
          </RadioGroup>
          <Select  v-if="coursesForm.purchaseUsers ==='会员'"   @on-change="userDataChange"  placeholder="请选择会员级别" >
            <Option v-for="(item,index) in userListData" :key="index" :value="index">{{item.codeValue}}</Option>
          </Select>
          <Select v-if="coursesForm.purchaseUsers ==='讲师'" @on-change="teacherDataChange"  placeholder="请选择讲师级别" >
            <Option v-for="(item,index) in teacherListData" :key="index" :value="index">{{item.codeValue}}</Option>
          </Select>
        </div>

        <div style="margin-bottom: 25px">
          <span style="font-size: 14px;padding-right:10px"><span style="color:red;font-size:16px;padding-right: 8px;vertical-align: middle;padding-top: 7px; display: inline-block;">*</span>开始时间</span>
          <!--<FormItem label="开始时间">-->
          <DatePicker type="datetime" format="yyyy-MM-dd HH:mm:ss"  style="width: 200px" v-model="nowTime" @on-change="handleChange"></DatePicker>
          <!--</FormItem>-->
        </div>

        <div style="margin-bottom: 25px">
          <span style="font-size: 14px;padding-right:10px"><span style="color:red;font-size:16px;padding-right: 8px;vertical-align: middle;padding-top: 7px; display: inline-block;">*</span>上限人数</span>
          <Input v-model="coursesForm.admission"/>
        </div>

        <div style="margin-bottom: 20px">
          <span style="font-size: 14px;padding-right:10px"><span style="color:red;font-size:16px;padding-right: 8px;vertical-align: middle;padding-top: 7px; display: inline-block;">*</span>课程分类</span>
          <Select  @on-change="personCourseChange" >
            <Option v-for="(item,index) in personCourseListData" :key="index" :value="index">{{item.className}}</Option>
          </Select>

        </div>
        <!-- 图片上传 -->
        <div style="margin-bottom: 25px">
          <div style="font-size: 14px;padding-right:10px;margin-bottom: 10px"><span style="color:red;font-size:16px;padding-right: 8px;vertical-align: middle;padding-top: 7px; display: inline-block;">*</span>封面设置</div>
          <!--<FormItem label="开始时间">-->
          <v-imageEditor  v-on:imageRefer="acceptImage"></v-imageEditor>
        </div>

        <!-- 课程价格 -->
        <div style="margin-bottom: 25px">
          <span style="font-size: 14px;padding-right:10px"><span style="color:red;font-size:16px;padding-right: 8px;vertical-align: middle;padding-top: 7px; display: inline-block;">*</span>课程价格</span>
          <Input v-model="coursesForm.price" @on-change='priceValue'/>
          <!--<span style="display:inline-block;font-size: 12px;color: red;padding-left: 10px;">* 课程价格不能低于1元</span>-->
        </div>

        <!-- 直播类型 -->
        <div style="margin-bottom: 25px">
          <span style="font-size: 14px;padding-right:10px"><span style="color:red;font-size:16px;padding-right: 8px;vertical-align: middle;padding-top: 7px; display: inline-block;">*</span>直播类型</span>
          <Select  @on-change="personAboardChange">
            <Option v-for="(item,index) in typetList" :key="index" :value="index">{{ item.codeValue }}</Option>
          </Select>
          <!--<Select  @on-change="personAboardChange">-->
          <!--<Option v-for="(item,index) in typetList" :key="index" :value="index">{{ item}}</Option>-->
          <!--</Select>-->
        </div>

        <!--如果是视频直播和音频直播则没有资源上传-->
        <div style="margin-bottom: 25px;position: relative" v-show="resourceCtrl">
          <span style="font-size: 14px;padding-right:10px"><span style="color:red;font-size:16px;padding-right: 8px;vertical-align: middle;padding-top: 7px; display: inline-block;">*</span>课程资源</span>
          <div style="display: inline-block">
            <Upload
              :before-upload="handleUpload"
              action="#">
              <Button type="ghost" icon="ios-cloud-upload-outline">Select the file to upload</Button>
            </Upload>
            <div v-if="file !== null">Upload file: {{ file.name }} <Button type="text" @click="upload" :loading="loadingStatus">{{ loadingStatus ? 'Uploading' : 'Click to upload' }}</Button></div>
          </div>
        </div>


        <!-- 是否推广 -->
        <div style="margin-bottom: 25px">
          <span style="font-size: 14px;padding-right:10px"><span style="color:red;font-size:16px;padding-right: 8px;vertical-align: middle;padding-top: 7px; display: inline-block;">*</span>是否推广</span>
          <RadioGroup v-model="coursesForm.recommendType">
            <span  v-for="(item, index) in courseShareList" :key="index" @click="CourseRecommendChange(item)">
              <Radio  :label="item"  :value="item">
              </Radio>
            </span>
          </RadioGroup>
        </div>

        <!-- textarea -->
        <div style="margin-bottom: 25px">
          <span style="display: block;font-size: 14px;padding-bottom:20px">课程简介</span>
          <textarea name="" id="" rows="10" placeholder="请输入您的信息！" v-model="coursesForm.profiles" style="width: 850px"></textarea>
        </div>

        <!-- 富文本 -->
        <!--<FormItem label="课程简介" class="padd-top">-->
        <!--&lt;!&ndash;<v-textEditor :textEditor="textEditor" v-model="coursesForm.profiles"></v-textEditor>&ndash;&gt;-->
        <!--<div id="editor"></div>-->
        <!--</FormItem>-->

        <Button type="warning"  class="m-t-30"  @click="personalSubmit('coursesForm')">保存</Button>
      </Form>
    </div>

  </div>
</template>

<script>
  import imageEditor from '../imageEditor/imageEditor.vue';  //图片裁剪

  export default {
    data () {
      return {
//        editor: null,
        file: null,
        loadingStatus: false,
        liveName:true,
        photo:'',
        ext:'',
        disabled:true,
        userListData:'',
        teacherListData:'',
        personCourseListData:'',
        courseFormType:'',
        courseTypDataList:['所有','会员','讲师'],
        courseShareList:['是','否'],
        typetList: '',
        typetOldLists:'',
        typetNewList:'',
        nowTime:'',
        position:'',
        isShare:0,
        recommendType:0,
        resourceCtrl:true,
        userId: 0,
        coursesForm: {
          courseName: '',
          isShare: '否',
          purchaseUsers:'所有',
          vipLevel:'',
          classify: 0,
          curriculum: '',
          type: '',
          courseResourse:'',
          courseResourseExt:'',
          charge: '',
          admission:'',
          recommendType: '否',
          price: '',
          profiles: '',
          startTimeStr: '',
          courseType: 1, //课程专区0 互动直播1,
          memberId: '',
          loginId:''
        },
      };
    },
    mounted (){
      if(window.localStorage.msg)
      {
        this.msg = JSON.parse(window.localStorage.msg);
      }
      // 获取用户信息
      if(window.localStorage.userInfo)
      {
        this.userInfo = JSON.parse(window.localStorage.userInfo);
        this.userId = JSON.parse(window.localStorage.userInfo).userId;
        this.loginId = JSON.parse(window.localStorage.userInfo).vhallUserId;
      }
      // 获取用户绑定后的信息
      if(window.localStorage.memberInfo){
        this.memberInfo = JSON.parse(window.localStorage.memberInfo);
        this.memberId = JSON.parse(window.localStorage.memberInfo).memberId;
      }
//      this.editor = UE.getEditor('editor');
      this.membershipRestrictions();     //会员限制
      this.personnalCourseTypes();      //课程分类
      this.personnalAbroadTypes();       //直播类型
    },
    components: {
      'v-imageEditor': imageEditor
    },
    methods: {
      acceptImage(imageData){
        this.photo = imageData.photo;
        this.ext = imageData.ext;
      },
//      获取日期
      handleChange (date) {
        this.coursesForm.startTimeStr = date;
      },
      handleBeforeUpload(file){
        this.coursesForm.courseResourseExt = file.name.substring(file.name.lastIndexOf('.') + 1);
        // 创建一个 FileReader 对象
        let reader = new FileReader();
        reader.readAsDataURL(file);
        const _this = this;
        reader.onloadend = function (e) {
          file = reader.result;
          _this.coursesForm.courseResourse = file;
        }
      },
//      会员限制
      membershipRestrictions(){
        this.service.membershipRestriction().then(result => {
          this.userListData = result.userList;
          this.teacherListData = result.teacherList;
        }).catch(error => {
          this.$Message.error({
            content: error,
            duration: 5
          });
        })
      },
//      会员-select选中值
      userDataChange(index){
        this.coursesForm.vipLevel=this.userListData[index].id;
      },
//      讲师-select选中值
      teacherDataChange(index){
        this.coursesForm.vipLevel=this.userListData[index].id;
      },
      //      是否共享
      CourseShareChange(item){
        if(item === '是'){
          this.isShare = 1;
        }else{
          this.isShare = 0;
        }
      },
//      是否推广
      CourseRecommendChange(item){
        if(item === '是'){
          this.recommendType= 1;
        }else{
          this.recommendType = 0;
        }
      },
//      课程分类判断
      CourseTypeChange(item){
        this.courseTypeData = item;
        if(item == '所有'){
          this.coursesForm.vipLevel = '1,2,3,4,5,6';
        }
      },
//      课程分类
      personnalCourseTypes(){
        this.service.personnalCourseType().then(result => {
          this.personCourseListData = result.list;
        }).catch(error => {
          this.$Message.error({
            content: error,
            duration: 5
          });
        })
      },
//      课程分类选择
      personCourseChange(index){
        this.coursesForm.classify = this.personCourseListData[index].classId;
      },
//      数组筛选回调函数
      checkAdult(itemData) {
        return itemData.codeValue!='视频直播' && itemData.codeValue!='视频互动直播';
      },
      //      直播类型
      personnalAbroadTypes(){
        this.service.personnalAbroadType().then(result => {
          this.typetList = result.list;
          this.typetOldLists = result.list;
          this.typetNewList = this.typetList.filter(this.checkAdult);
        }).catch(error => {
          this.$Message.error({
            content: error,
            duration: 5
          });
        })
      },
//      价格判断
      priceValue(){
        if(this.coursesForm.price == 0){
          this.typetList = this.typetNewList;
        }else{
          this.typetList = this.typetOldLists;
        }
      },
//      直播类型选择
      personAboardChange(index){
        this.coursesForm.type = this.typetList[index].id;
        this.courseFormType = this.typetList[index].codeValue;
        if(  this.courseFormType =='音频直播' || '视频直播' ||'音频文档直播'||'视频文档直播'){
          this.resourceCtrl = false;
        }else{
          this.resourceCtrl = true;
        }
      },
      handleUpload (file) {
        this.coursesForm.courseResourse = file;
        this.file = file;
        return false;
      },
      upload () {
        this.loadingStatus = true;
        setTimeout(() => {
          this.file = null;
          this.loadingStatus = false;
          this.$Message.success('Success')
        }, 1500);
      },
      // 表单校验
      //  课程创建
      personalSubmit(name){
        if(window.localStorage.memberInfo != null && window.localStorage.memberInfo != undefined){
          if(this.liveName){
            if(this.resourceCtrl && !this.coursesForm.courseResourse){
              this.commonSub();
            }else{
              this.resourceSub();
            }
          }else{
            this.$Message.error({
              content: '数据提交中，请稍后',
              duration: 5
            });
          }
        }else{
          this.$Message.error({
            content: '请先绑定云联惠授权！ ',
            duration: 5
          });
        }
      },
      //      普通上传（没有课程资源）
      commonSub(){
        // 获取富文本组件的内容
//          this.coursesForm.profiles = this.editor.getContentTxt();
        // 表单校验
        if(!this.coursesForm.courseName){
          this.$Message.error("课程名不能为空");
          return false;
        }
        if(this.courseTypeData === '会员'&& !this.coursesForm.vipLevel){
          this.$Message.error("会员等级不能为空");
          return false;
        }
        if(this.courseTypeData === '教师'&& !this.coursesForm.vipLevel){
          this.$Message.error("教师等级不能为空");
          return false;
        }
        if(!this.coursesForm.startTimeStr){
          this.$Message.error("开始时间不能为空");
          return false;
        }
        if(!this.coursesForm.admission){
          this.$Message.error("上限人数不能为空");
          return false;
        }
        if(!this.coursesForm.classify){
          this.$Message.error("课程分类不能为空");
          return false;
        }
        if(!this.photo){
          this.$Message.error("封面图片不能为空");
          return false;
        }
        if(!this.coursesForm.price){
          this.$Message.error("课程价格不能为空");
          return false;
        }
        if(!this.coursesForm.type){
          this.$Message.error("直播类型不能为空");
          return false;
        }

        this.service.coursesForms(this.coursesForm.courseName, this.isShare, this.coursesForm.vipLevel, this.coursesForm.startTimeStr, this.coursesForm.admission, this.coursesForm.classify, this.photo, this.ext, this.coursesForm.price, this.coursesForm.type, this.coursesForm.courseResourse, this.coursesForm.courseResourseExt,this.recommendType, this.coursesForm.profiles, this.coursesForm.courseType).then(result => {
          this.liveName = false;
          if(result.code === 0){
            this.$Message.success('恭喜你创建成功!');
            setTimeout(function () {
              window.location.reload();
            },3000);
          }
        }).catch(error => {
          this.liveName = false;
          this.$Message.error({
            content: error,
            duration: 5
          });
        })
        this.liveName = true;
      },
      //      如果有课程资源的时候
      resourceSub(){
        // 获取富文本组件的内容
//          this.coursesForm.profiles = this.editor.getContentTxt();
        // 表单校验
        if(!this.coursesForm.courseName){
          this.$Message.error("课程名不能为空");
          return false;
        }
        if(this.courseTypeData === '会员'&& !this.coursesForm.vipLevel){
          this.$Message.error("会员等级不能为空");
          return false;
        }
        if(this.courseTypeData === '教师'&& !this.coursesForm.vipLevel){
          this.$Message.error("教师等级不能为空");
          return false;
        }
        if(!this.coursesForm.startTimeStr){
          this.$Message.error("开始时间不能为空");
          return false;
        }
        if(!this.coursesForm.admission){
          this.$Message.error("上限人数不能为空");
          return false;
        }
        if(!this.coursesForm.classify){
          this.$Message.error("课程分类不能为空");
          return false;
        }
        if(!this.photo){
          this.$Message.error("封面图片不能为空");
          return false;
        }
        if(!this.coursesForm.price){
          this.$Message.error("课程价格不能为空");
          return false;
        }
//          if(this.coursesForm.price >= 1){
//            this.$Message.error("课程价格不能低于1元");
//            return false;
//          }
        if(!this.coursesForm.type){
          this.$Message.error("直播类型不能为空");
          return false;
        }
        if(this.resourceCtrl && !this.coursesForm.courseResourse){
          this.$Message.error("课程资源不能为空");
          return false;
        }
        let formData = new FormData();
        formData.append('createUser',this.userId);
        formData.append('loginId', this.loginId);
        formData.append('courseName', this.coursesForm.courseName);
        formData.append('isShare', this.isShare);
        formData.append('vipLevel', this.coursesForm.vipLevel);
        formData.append('startTimeStr', this.coursesForm.startTimeStr);
        formData.append('admission', this.coursesForm.admission);
        formData.append('classify', this.coursesForm.classify);
        formData.append('photo', this.photo);
        formData.append('ext', this.ext);

        formData.append('price', this.coursesForm.price);
        formData.append('type', this.coursesForm.type);
        formData.append('file', this.coursesForm.courseResourse);
        formData.append('recommendType', this.recommendType);
        formData.append('profiles', this.coursesForm.profiles);
        formData.append('courseType', this.coursesForm.courseType);

        this.service.coursesFormData(formData).then(result => {
          this.liveName = false;
          if(result.code === 0){
            this.$Message.success('恭喜你创建成功!');
            setTimeout(function () {
              window.location.reload();
            },2000);
          }
        }).catch(error => {
          this.liveName = false;
          this.$Message.error({
            content: error,
            duration: 5
          });
        })
        this.liveName = true;
      },
    },
    destroyed() {
      // 释放富文本资源
//      this.editor.destroy();
    }
  };
</script>

<style lang="less">
  .creatingCourses {
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
    .content {
      border: 0px #ccc solid;
      width: auto;
      margin: 45px 45px 0 45px;
      .ivu-input-wrapper,.ivu-select {
        width: 251px;
      }
      .padd-top {
        .ivu-form-item-label {
          padding: 9px 12px 11px 0 !important;
          font-size: 14px;
        }
      }
      .ivu-btn {
        padding: 6px 28px;
        font-size: 14px;
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
    .appearVal{
      display: none;
    }
  }

  .ivu-modal-content,.ivu-modal-body{
    height: inherit !important;;
  }
  .ivu-form-item-content{
    z-index: 1;
  }
  .ivu-modal-footer{
    position: absolute;
    top: 0;
    right: 190px;
    z-index: 1000;
    border: none;
  }
</style>
