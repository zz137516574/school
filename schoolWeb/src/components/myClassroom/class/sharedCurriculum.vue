<!-- 讲师专区 / 共享课申请 -->
<template>
  <div class="information clearfix">
    <!-- title -->
    <div class="title">
      <span class="tit">共享申请</span>
    </div>

    <!-- 课程List -->
    <div class="course-tab clearfix">
      <!--待同意、已同意、已拒绝-->
      <Tabs class="m-t-30" @on-click="changeTitle">
        <TabPane v-for="(item,index) in sharedData" :key="index" :label="item.name" style="padding: 10px 20px;" ></TabPane>
      </Tabs>
    </div>

    <!--<v-curriculumList :curriculumList="curriculumList" v-on:curriculumRefre="sharedDetailsCon" ></v-curriculumList>-->
    <div class="curriculumList clearfix" v-for="(item,index) in courseShareDatas " :key="index">
      <img :src="item.photo" class="f-fl">
      <div class="listTitle m-l-15 m-t-5 f-fl">
        <p class="m-b-10 sharedTitle">{{item.courseName}}</p>
        <p class="sharedPerson">发起人：{{item.creatUser}}</p>
        <p class="sharedprice"  v-if="item.price != 0 "><span  style="color: #ff8a0c;">￥{{item.price}}</span></p>
        <p class="sharedprice"  v-if="item.price == 0 "  style="color: #ff8a0c;">免费</p>
      </div>
      <div class="f-fr">
        <p class="sharedagreed m-t-10">同意</p>
        <p class="sharedrefused m-t-10">拒绝</p>
      </div>
    </div >
    <Page :total="pageNumber*10" class="text-center" style="padding: 20px 0;" @on-change="newsPageChange"></Page>
  </div>
</template>

<script>
//  import curriculumList from '../../curriculumList/curriculumList.vue';

  export default {
    props: {},
    data() {
      return {
        page: 1,
        limit: 6,
        createUser:0,
        isShare:1,
        pageNumber: 1,
        curriculumList:{},
        itemData: '',
        onorsome: 0,
        flag:0,
        sharedData:[
          {
            name:'待同意',
            num:-1
          },
          {
            name:'已同意',
            num:1
          },
          {
            name:'已拒绝',
            num:0
          },
        ],
        sharedListData:[
          {
            photo:'',
            courseName:'1111',
            userName:'zhangsan'
          }
        ],
        msg:'',
        personInfo:'',
        userId:0,
        state: -1
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
      this.courseShareDatas();
    },
    beforeDestroy() {

    },
    components: {
//      'v-curriculumList': curriculumList
    },
    methods: {
      newsPageChange(pageNum){
        this.page = pageNum;
        this.courseShareDatas();
      },
      changeTitle(index){
        this.state=this.sharedData[index].num;
        this.courseShareDatas();
      },
      courseShareDatas(){
        this.service.courseShareData(this.state, this.userId, this.page, this.limit).then(result => {
          this.curriculumList = result.page.list;
          this.pageNumber = result.page.totalPage;
        }).catch(error => {
          this.$Message.error({
            content: error,
            duration: 5
          });
        })
      },
      //  跳详情页
      sharedDetailsCon(itemData) {
        this.$router.push({ path: 'freeCourse', query: { courseId: itemData, onorsome: this.onorsome }});
      }
    }
  };
</script>

<style lang="less">
  .information {
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
  }
  /*待同意、已同意、已拒绝*/
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
      width: 140px;
      height: 95px;
      display: block;
      float: left;
      background-repeat: no-repeat;
      background-size: 100% 100%;
      background-image: url('../../../assets/image/imgbg.jpg');
      /*background-color: #ededed;*/
    }
    .listTitle {
      .sharedTitle{
        margin-top: 3px;
        font-size: 18px;
        color: #333333;
      }
      .sharedPerson{
        font-size: 14px;
        color: #666666;
      }
      .sharedprice{
        margin-top: 10px;
        font-size: 14px;
        color: #ff8a0c;
      }
    }
    .sharedagreed{
      background: #ff8a0c;
      border-radius: 3px;
      font-size: 14px;
      color: #ffffff;
      padding: 7px 25px;
      cursor: pointer;
    }
    .sharedrefused{
      background: rgb(187, 190, 196);
      border-radius: 3px;
      font-size: 14px;
      color: #555555;
      padding: 7px 25px;
      cursor: pointer;
    }
    .ivu-alert-close .ivu-icon-ios-close-empty {
      font-size: 35px;
      top: 0;
    }
  }
</style>
