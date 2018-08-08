<!-- 账户中心 / 课程推广 -->
<template>
  <div class="myAccount clearfix m-l-30">
    <!-- title -->
    <div class="title clearfix">
      <span class="tit">课程推广</span>
    </div>

    <!-- List -->
    <div class="account-tab clearfix m-t-20 m-l-20 m-r-20 m-b-20">
      <!--<Table border :columns="columns1" :data="data1"></Table>-->
      <table class="orderTable" border>
        <thead>
        <tr>
          <th>课程名</th>
          <th>返利（元）</th>
          <th>推广用户数（人）</th>
          <th>推广码</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(item,index) in recommendItem" :key="index">
          <td>
            <span v-if="item.courseName != null || item.courseName != undefined">{{item.courseName}}</span>
            <span v-if="item.seriesCourseName  != null || item.seriesCourseName != undefined">{{item.seriesCourseName }}</span>
          </td>
          <td>{{item.recommendUserRatio}}</td>
          <td>{{item.recommendPrice}}</td>
          <td>{{item.recommendCode}}</td>
        </tr>
        </tbody>
      </table>
    </div>
    <Page :total="pageNumber * 10" class=" text-center" style="padding: 50px 0 100px;" @on-change="newsPageChange"></Page>
  </div>
</template>

<script>
  export default {
    props: {},
    data() {
      return {
        page:1,
        limit:8,
        userId:0,
        msg:'',
        personInfo:'',
        recommendItem:'',
        pageNumber:1
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
      this.recommendcodeDatas();
    },
    beforeDestroy() {

    },
    methods: {
      newsPageChange(pageNum){
        this.page = pageNum;
        this.recommendcodeDatas();
      },
      recommendcodeDatas(){
        console.log(this.userId);
        this.service.recommendcodeData(this.page, this.limit,this.userId).then(result => {
          this.recommendItem = result.page.list;
          this.pageNumber = result.page.totalPage;
        }).catch(error => {
          this.$Loading.error();
        })
      }
    }
  };
</script>

<style lang="less">
  .myAccount {
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
    .account-tab {
      border: 0px #ccc solid;
      width: auto;
      .ivu-tabs {
        width: auto;
        min-height: 600px;
        padding-bottom: 30px;
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
    /*  记录 */
    .record {
      .record-tit {
        width: auto;
        height: 50px;
        padding: 0 10px;
        font-size: 14px;
        border: 1px #f2f2f2 solid;
        background-color: #fafafa;
        border-radius: 3px;
        .currency {
          line-height: 48px
        }
      }
    }
    table{
      width: 100%;
      border: 1px solid #e9e9e9;
      border-collapse: collapse;
      /*border-color: #fefefe;*/
      th{
        /*padding: 0px 20px;*/
        width: 150px;
        height: 40px;
        line-height: 40px;
        text-align: center;
      }
      td{
        text-align: center;
        width: 150px;
        height: 40px;
        line-height: 40px;
      }
    }
  }
</style>
