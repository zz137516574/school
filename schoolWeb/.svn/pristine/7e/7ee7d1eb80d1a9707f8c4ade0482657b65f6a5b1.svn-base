<!-- 讲师专区 / 学生问答 -->
<template>
  <div class="studentQA clearfix">
    <!-- title -->
    <div class="title">
      <span class="tit">学生问答</span>
    </div>

    <!-- 问答List -->
    <div class="studentsQuestion clearfix">
      <v-studentDialogue :studentDialogue="studentDialogue"></v-studentDialogue>
    </div>
    <Page :total="pageNumber*10" class="text-center" style="padding: 20px 0;" @on-change="newsPageChange"></Page>
  </div>
</template>

<script>
  import studentDialogue from '../../curriculumList/studentsQuestion.vue';

  export default {
    props: {},
    data() {
      return {
        page:1,
        limit:3,
        classTeacherId:0,
        msg:'',
        personInfo:'',
        pageNumber: 1,
        studentDialogue:{}
      };
    },
    mounted() {
      if(window.localStorage.msg)
      {
        this.msg = JSON.parse(window.localStorage.msg);
      }
      if(window.localStorage.userInfo)
      {
        this.userInfo = JSON.parse(window.localStorage.userInfo);
        this.classTeacherId = JSON.parse(window.localStorage.userInfo).userId;
      }
      this.courseQuestionDatas();
    },
    beforeDestroy() {

    },
    components: {
      'v-studentDialogue': studentDialogue

    },
    methods: {
      newsPageChange(pageNum){
        this.page = pageNum;
        this.courseQuestionDatas();
      },
      courseQuestionDatas(){
        this.service.courseQuestionData(this.page, this.limit, this.classTeacherId).then(result => {
          this.studentDialogue = result.page.list;
          this.pageNumber = result.page.totalPage;
        }).catch(error => {
          this.$Loading.error();
        })
      }
    }
  };
</script>

<style lang="less">
  .studentQA {
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
    /*.studentsQuestion{*/
      /*padding: 15px 20px;*/
    /*}*/
    /*.ivu-alert {*/
      /*margin-bottom: 0 !important;*/
    /*}*/
  }
</style>
