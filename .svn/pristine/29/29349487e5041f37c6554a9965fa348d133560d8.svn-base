<!-- 学生问答 -->
<template>
  <div class="studentQuestion">
      <div class="curriculumList clearfix m-t-10" v-for="(item,index) in studentDialogue" :key="index">
        <i class="f-fl questimgs"><img :src="item.head" alt=""></i>
        <div class="f-fl rgtBlocks">
          <p class="questtitle">来自：{{item.courseName}}</p>
          <p class="questCont">{{item.askContent}}</p>
          <div class="clearfix p-b-10">
            <span class="questtime">{{item.answerTime}}</span>
            <!--<Collapse class="reply">-->
              <!--<Panel name="1">-->
                <!--回复-->
                <!--<div slot="content">-->
                  <!--<Form ref="answerForm" :model="answerForm" label-position="left" :rules="ruleValidate" :label-width="80">-->
                    <!--<FormItem label="回复内容" class="padd-top" prop="answerCon">-->
                      <!--<Input type="textarea" placeholder="回复的内容..." v-model="answerForm.answerCon" @on-focus="inputFocus(item)"></Input>-->
                    <!--</FormItem>-->
                  <!--<Button type="warning" class="f-fr m-t-10 m-b-10" @click="personalSubmit('answerForm')">提交</Button>-->
                  <!--</Form>-->
                <!--</div>-->
              <!--</Panel>-->
            <!--</Collapse>-->
          </div>
          <!--<div class="dialogueConts" v-show="isShow" >-->
            <!--<Input v-model="questions" type="textarea" :rows="3" placeholder="提问内容..."></Input>-->
            <!--<Button type="warning" class="f-fr m-t-10 m-b-10">提交</Button>-->
          <!--</div>-->
        </div>
      </div>
    </div>
</template>

<script>
  export default {
    props: {
      studentDialogue: {
        required: true
      }
    },
    data() {
      return {
        questions: '',
        isShow: false,
        askId:0,
        answerUserId: 22,
        answerForm: {
          answerCon: ''
        },
        ruleValidate: {
          answerCon: [
            { required: true, message: '不能为空', trigger: 'blur' }
          ]
        }
      };
    },
    mounted() {

    },
    beforeDestroy() {

    },
    components: {
    },
    methods: {
      // 跳详情页
      courseDetailPage(){
        this.$router.push('DirectCourseDetails');
      },
      inputFocus(item){
        this.askId = item.askId;
      },
      personalSubmit(name){
        console.log(this.askId +'====='+this.answerUserId+'====='+this.answerForm.answerCon);
        this.service.courseAnswerData(this.askId, this.answerUserId, this.answerForm.answerCon).then(result => {
          console.log(result);
        }).catch(error => {
          this.$Loading.error();
        });
//        this.$refs[name].validate((valid) => {
//          if (valid) {
//            this.service.courseAnswerData(this.askId, this.answerUserId, this.answerForm.answerCon).then(result => {
//              console.log(result);
//            }).catch(error => {
//              this.$Loading.error();
//            })
//          } else {
//            this.$Message.error('表单验证失败!');
//          }
//        });
      }
    }
  };
</script>

<style lang="less">
    .studentQuestion {
      padding: 10px 20px;
      >div{
        padding-bottom: 10px;
      }
      /*问题*/
      .curriculumList {
        padding: 5px 0;
        border-radius: 0;
        background: #ffffff;
        border-bottom: 1px solid #efefef;
        cursor: pointer;
        .questimgs{
          margin-right: 25px;
          width: 80px;
          height: 80px;
          border-radius: 100%;
          img{
            width: 100%;
            height: 100%;
            border-radius: 100%;
          }
        }
        div.rgtBlocks{
          width: 795px;
          .questtitle{
            color: #999999;
            font-size: 12px;
          }
          .questCont{
            padding: 10px 0;
            font-size: 16px;
            color: #494949;
            font-weight: 600;
            line-height: 32px;
          }
          .questtime{
            margin-right: 50px;
            color: #aaaaaa;
            font-size: 12px;
          }
          .questmessage{
            cursor: pointer;
            color: #aaaaaa;
            font-size: 12px;
            i{
              padding-left: 5px;
              vertical-align: bottom;;
            }
          }
          .dialogueConts{
            /*display: none;*/
          }
        }
      }

      /*.ivu-collapse {*/
        /*background-color: #fff9f7;*/
        /*border-radius: 0px;*/
        /*border: 0px #fff9f7 solid;*/
      /*}*/
      /*.ivu-collapse>.ivu-collapse-item>.ivu-collapse-header {*/
        /*padding-right: 20px;*/
        /*font-size: 14px;*/
        /*text-align: right;*/
        /*border-top: 1px #e5e5e5 solid;*/
      /*}*/
      /*.ivu-input {*/
        /*border: 1px #e5e5e5 solid;*/
      /*}*/
      /*.ivu-collapse-item:last-child>.ivu-collapse-content {*/
        /*!*border-top: 1px #e5e5e5 solid;*!*/
        /*background-color: #fff9f7;*/
      /*}*/
      /*.ivu-btn {*/
        /*font-size: 14px;*/
        /*padding: 5px 25px;*/
      /*}*/
      .studentQuestion .curriculumList div.rgtBlocks {
        position: relative;
      }
      .reply {
        border: 0;
        background: none;
        width: 35px;
        float: right;
        .ivu-collapse-item > .ivu-collapse-header {
          padding-left: 0 !important;
          height: 12px;
          line-height: 12px;
        }
        .ivu-collapse-content {
          overflow: initial;
          position: relative;
          right: 865px;
          width: 903px;
          padding: 0;
          background: none;
          > .ivu-collapse-content-box {
            padding-bottom: 0;
          }
        }
      }
    }

</style>
