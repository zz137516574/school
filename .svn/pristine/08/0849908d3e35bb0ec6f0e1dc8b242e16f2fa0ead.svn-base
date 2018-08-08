<!-- 课程专区 / 我的收藏 -->
<template>
  <div class="information clearfix">
    <!-- title -->
    <div class="title">
      <span class="tit">我的问答</span>
    </div>

    <!-- 内容区域 -->
    <div class="clearfix myQuestWrap">
      <!--提问/回答 导航-->
      <div class="myQuestMenu clearfix">
        <span :class="{'active': !changeColor}" style="border-right: 1px solid #cccccc;cursor: pointer;" @click="answerDetails">提问</span>
        <span @click="askDetails" :class="{'active': changeColor}" style="cursor: pointer;">回答</span>
      </div>
      <!--提问-->
      <div class="myQuestCont" v-show="!changeColor">
        <div class="clearfix" v-for="(item,index) in myAnswersData" :key="index">
          <i class="f-fl questimgs"><img :src="item.head" alt=""></i>
          <div class="f-fl">
            <p class="questtitle">来自：{{item.courseName}}</p>
            <p class="questCont">{{item.askContent}}</p>
            <div>
              <span class="questtime" v-if="item.hasOwnProperty('answerTime') || item.askAddtime != null">{{item.answerTime}}</span>
              <span class="questmessage"><Icon type="chatbox-working" size="15"></Icon>{{item.answerNumber}}</span>
            </div>
          </div>
        </div>
      </div>
    <!--回答-->
      <div class="myQuestCont" v-show="changeColor">
        <div class="clearfix" v-for="(item,index) in myAnswersData" :key="index">
          <i class="f-fl questimgs"><img :src="item.head" alt=""></i>
          <div class="f-fl">
            <p class="questtitle">来自：{{item.courseName}}</p>
            <p class="questCont">{{item.answerContent}}</p>
            <div>
              <span class="questtime" v-if="item.hasOwnProperty('answerTime') || item.addtime != null">{{item.askAddtime}}</span>
              <span class="questmessage"><Icon type="chatbox-working" size="15"></Icon>{{item.answerNumber}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Page :total="pageNumber*10" class="text-center" style="padding: 20px 0;" @on-change="newsPageChange"></Page>
  </div>
</template>

<script>
  import commonDivs from '../../../components/myClassroom/class/commonDivs.vue';
  export default {
    data() {
      return {
        page: 1,
        limit: 6,
        pageNumber:1,
        myAnswersData:'',
        changeColor:false,
        msg:'',
        userInfo:'',
        userId: 0,
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
      this.myAnswerDatas();
    },
    beforeDestroy() {

    },
    components: {
      'v-commonDivs':commonDivs
    },
    methods: {
      // 跳详情页
      courseDetailPage(){
//        this.$router.push('DirectCourseDetails');
      },
      newsPageChange(pageNum){
        this.page = pageNum;
        this.myAnswerDatas();
      },
      answerDetails(){
        this.changeColor = !this.changeColor;
        this.myAnswerDatas();
      },
      askDetails(){
        this.changeColor = !this.changeColor;
        this.myAskDatas();
      },
      myAnswerDatas(){
        this.service.myAnswerData(this.userId, this.page, this.limit).then(result => {
          this.myAnswersData = result.page.list;
          this.pageNumber = result.page.totalPage;
        }).catch(error => {
          this.$Loading.error();
        })
      },
      myAskDatas(){
        this.service.myAskData(this.userId, this.page, this.limit).then(result => {
          this.myAnswersData = result.page.list;
          this.pageNumber = result.page.totalPage;
        }).catch(error => {
          this.$Loading.error();
        })
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
  /*  内容区域  */
  .myQuestWrap{
    /*提问/回答 导航*/
    .myQuestMenu{
      padding: 15px 20px;
      font-size: 16px;
      span{
        float: left;
        padding: 7px 20px;
        background: #efefef;
        color: #aaaaaa;
      }
      .active{
        color: #454545;
        background: #BBBBBB;
      }
    }
    /*提问/回答 内容*/
    .myQuestCont{
      padding: 10px 20px;
      >div{
        padding: 10px 0;
        cursor: pointer;
        border-bottom: 1px solid #efefef;
        .questimgs{
          margin-right: 30px;
          width: 70px;
          height: 70px;
          border-radius: 100%;
          img{
            width: 100%;
            height: 100%;
            border-radius: 100%;
            background-repeat: no-repeat;
            background-size: 100% 100%;
            background-image: url('../../../assets/image/imgbg.jpg');
          }
        }
        >div{
          width: 790px;
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
              padding-right: 5px;
              vertical-align: middle;
            }
          }
        }
      }
    }
  }
</style>
