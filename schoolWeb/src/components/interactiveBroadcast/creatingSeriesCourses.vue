<!-- 互动直播 / 创建课程 -->
<template>
  <div class="creatingCourses clearfix">
    <!-- title -->
    <div class="title">
      <span class="tit">创建系列课程</span>
    </div>

    <!-- 表单 -->
    <div class="content">
      <Form  ref="seriesCoursesForm" :model="seriesCoursesForm" :rules="ruleValidate"  label-position="left" :label-width="80">

        <FormItem label="名称" class="padd-top" prop="seriesCourseName">
          <Input v-model="seriesCoursesForm.seriesCourseName"></Input>
        </FormItem>

        <FormItem label="开始时间">
          <DatePicker type="datetime" format="yyyy-MM-dd HH:mm"  style="width: 200px" v-model="nowTime" @on-change="handleChange"></DatePicker>
        </FormItem>

        <FormItem label="课程分类" class="padd-top">
          <Select  @on-change="personSeriesCourseChange" >
            <Option v-for="(item,index) in personSeriesCourseListData" :key="index" :value="index">{{item.className}}</Option>
          </Select>
        </FormItem>

        <!-- 图片上传 -->
        <FormItem label="封面设置" class="padd-top" >
          <v-imageEditor v-on:imageRefer="acceptImage"></v-imageEditor>
        </FormItem>

        <!-- 课程价格 -->
        <FormItem label="课程价格" class="padd-top" prop="price">
          <Input v-model="seriesCoursesForm.price" number></Input>
        </FormItem>

        <!-- 收费类型 -->
        <FormItem label="收费类型" class="padd-top" prop="chargePattern">
          <Select  @on-change="chargeTypeChange">
            <Option v-for="(item,index) in chargeTypeList" :key="index" :value="index">{{ item.codeValue}}</Option>
          </Select>
        </FormItem>

        <!-- 富文本 -->
        <FormItem label="课程简介" class="padd-top">
          <v-textEditor :textEditor="textEditor" v-model="seriesCoursesForm.profiles"></v-textEditor>
        </FormItem>

        <Button type="warning" class="m-t-30"  @click="personalSeriesSubmi('seriesCoursesForm')">保存</Button>
      </Form>
    </div>

  </div>
</template>

<script>
  import textEditor from '../tinymce/textEditor.vue';  //富文本编辑器
  import imageEditor from '../imageEditor/imageEditor.vue';  //图片裁剪

  export default {
    data () {
//      const validatePrice = (rule, value, callback) => {
//        let reg = /(^[1-9]\d*(\.\d{1,2})?$)|(^0(\.\d{1,2})?$)/;
//        if( reg.test(value) === false) {
//          console.log(value);
////          this.$Message.error('输入错误');
//        }else{
////          this.$Message.success('输入正确');
//        }
//      };
      return {
        nowTime:'',
        personSeriesCourseListData:'',
        chargeTypeList:'',
        textEditor:{},
        imageEditor:{},
        seriesCoursesForm: {
          seriesCourseName: '',
          select: '',
          charge: '',
          price: '',
          startTimeStr: '',
          classify: 0,
          chargePattern: 0,
          seriesCourseType:1,//课程专区0 互动直播1
        },
        ruleValidate: {
          seriesCourseName: [
            { required: true, message: '不能为空', trigger: 'blur' }
          ],
          classify: [
            { required: true, message: '不能为空', trigger: 'blur' },
          ],
//          price: [
//            { validator: validatePrice, required: true,}
//          ],
          price: [
            { required: true, message: '不能为空'}
          ],
          chargePattern: [
            { required: true, message: '不能为空' }
          ]
        }
      };
    },
    components: {
      'v-textEditor': textEditor,
      'v-imageEditor': imageEditor
    },
    mounted (){
      this.personnalSeriesCourseTypes();   //课程分类
      this.chargeType();    //直播类型
    },
    methods: {
      //  上传图片
      acceptImage(imageData){
        this.photo = imageData.photo;
        this.ext = imageData.ext;
      },
      //  获取日期
      handleChange (date) {
        this.seriesCoursesForm.startTimeStr = date;
      },
      //  课程分类判断
      CourseTypeChange(item){
        this.courseTypeData = item;
        if(item == '所有'){
          this.seriesCoursesForm.vipLevel = '1,2,3,4,5,6';
        }
      },
      //  课程分类
      personnalSeriesCourseTypes(){
        this.service.personnalCourseType().then(result => {
          this.personSeriesCourseListData = result.list;
        }).catch(error => {
          this.$Message.error({
            content: error,
            duration: 5
          });
        })
      },
      //  课程分类选择
      personSeriesCourseChange(index){
        this.seriesCoursesForm.classify = this.personSeriesCourseListData[index].classId;
      },
      //  收费类型
      chargeType(){
        this.service.seriesChargeTypes().then(result => {
          this.chargeTypeList = result.list;
        }).catch(error => {
          this.$Message.error({
            content: error,
            duration: 5
          });
        })
      },
      //  收费类型选择
      chargeTypeChange(index){
//        console.log(this.chargeTypeList[index].id);

      },
      //  课程创建
      personalSeriesSubmi(name){
        this.seriesCoursesForm.profiles = localStorage.editorContent;
        this.$refs[name].validate((valid) => {
          if (valid) {
            this.service.personalSeriesSubmit(this.seriesCoursesForm.seriesCourseName, this.seriesCoursesForm.startTimeStr, this.seriesCoursesForm.classify, this.photo, this.ext, this.seriesCoursesForm.price, this.seriesCoursesForm.chargePattern, this.seriesCoursesForm.profiles, this.seriesCoursesForm.seriesCourseType).then(result => {
              if(result.code === 0){
                this.$Message.success('恭喜你创建成功!');
              }
            }).catch(error => {
              this.$Message.error({
                content: error,
                duration: 5
              });
            })

          } else {
            this.$Message.error('表单验证失败!');
          }
        });
      },
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
  }
</style>
