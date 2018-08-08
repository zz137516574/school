<!-- 互动直播 / 课程审核管理 -->
<template>
  <div class="courseAudit clearfix m-l-30">
    <!-- title -->
    <div class="title clearfix">
      <span class="tit">课程审核管理</span>
    </div>

    <!-- List -->
    <div class="course-tab clearfix">
      <Tabs class="m-t-30" @on-click="coursesDetails">
        <TabPane v-for="tab in courseStatus" :key="tab" :label="tab" style="padding: 10px 20px;" ></TabPane>
      </Tabs>
    </div>
    <div class="curriculumList clearfix" v-for="(item,index) in teacherList " :key="index">
      <img :src="item.photo">
      <div class="listTitle m-l-15 m-t-10 f-fl">
        <p class="m-b-10">{{item.courseName}}</p>
        <span v-if="item.onorsome === 0">普通课</span>
        <span v-if="item.onorsome === 1">系列课</span>
        <span v-show="item.auditStatus === 20">未通过原因</span>
      </div>
      <div class="price-info f-fr">
        <p class="m-t-10">{{item.typeStr}}</p>
        <span>{{item.createTime}}</span>
      </div>
    </div >
    <Page :total="pageNumber*10" class="text-center" style="padding: 20px 0;" @on-change="newsPageChange"></Page>
  </div>
</template>

<script>
  export default {
    props: {},
    data() {
      return {
        msg:'',
        personInfo:'',
        page: 1,
        limit: 6,
        courseType:1,
        auditStatus:0,
        courseStatus: ['待审核','已通过','未通过'],
        teacherList: '',
        pageNumber:1,
        model1: '',
        userId: 0,
        createUser:0
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
        this.userId = JSON.parse(window.localStorage.userInfo).userId;
//            if(this.userInfo.usertype === 0){
//              this.topMenu = this.topMenu.filter(this.checkAdult);
//            }
      }
      this.courseAuditDatas();
    },
    beforeDestroy() {

    },
    methods: {
      coursesDetails(name){
        let indexName = name;
        switch (indexName)
        {
          case 0:
            this.auditStatus = 18;
            this.courseAuditDatas();
            break;
          case 1:
            this.auditStatus = 19;
            this.courseAuditDatas();
            break;
          case 2:
            this.auditStatus = 20;
            this.courseAuditDatas();
            break;
        }
      },
      newsPageChange(pageNum){
        this.page = pageNum;
        this.courseAuditDatas();
      },
      courseAuditDatas(){
        this.createUser=this.userId;
        this.service.interReviewManage(this.page, this.limit, this.courseType, this.auditStatus,this.createUser).then(result => {
          this.teacherList = result.page.list;
          this.pageNumber = result.page.totalPage;
        }).catch(error => {
          this.$Message.error({
            content: error,
            duration: 5
          });
        })
      }
    }
  };
</script>

<style lang="less">
  .courseAudit {
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
    .course-tab {
      border: 0px #ccc solid;
      width: auto;
      height: 40px;
      .ivu-tabs {
        width: auto;
        float: none;
        background: none;
      }
      .ivu-tabs-ink-bar {
        height: 36px;
        background: none;
        border-top: 2px #ff8a0c solid;
        border-right: 1px #e4e4e4 solid;
        border-left: 1px #e4e4e4 solid;
        border-bottom: 1px #ffffff solid;
        bottom: auto;
      }
      .ivu-tabs-nav .ivu-tabs-tab-active {
        color: #3e3e3e;
      }
      .ivu-tabs-nav .ivu-tabs-tab {
        font-size: 14px;
      }

      .ivu-input-wrapper{
        width: 252px !important;
        float: left;
        height: 33px;
        .ivu-input-large {
          border-radius: 0;
          box-sizing: border-box;
          height: 35px!important;
          padding: 6px 10px 6px 10px !important;
        }
        .ivu-input-icon {
          right: auto;
          color: #dbdbdb;
        }
      }
      .ivu-btn {
        border-radius: 0;
        padding: 6px 15px;
        font-size: 14px;
      }
    }
    /* 课程List */
    .curriculumList {
      width: auto;
      min-height: 100px;
      padding: 20px;
      border-radius: 0;
      border-bottom: 1px solid #efefef;
      img {
        width: 150px;
        height: 100px;
        display: block;
        float: left;
        background-repeat: no-repeat;
        background-size: 100% 100%;
        background-image: url('../../assets/image/imgbg.jpg');
        /*background-color: #ededed;*/
      }
      .listTitle {
        p {
          font-size: 16px;
          color: #333333;
        }
        span {
          font-size: 14px;
          color: #767676;
          margin-bottom: 5px;
          display: block;
        }
      }
      .ivu-alert-close .ivu-icon-ios-close-empty {
        font-size: 35px;
        top: 0;
      }
    }
    .price-info {
      width: 150px;
      text-align: left;
      p {
        color: #ff8a0c;
        font-size: 16px;
        margin-bottom: 20px;
      }
      span {
        color: #767676;
        font-size: 14px;
      }
    }
  }
</style>
