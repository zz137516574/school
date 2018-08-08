<!-- 课程专区 / 我的收藏 -->
<template>
  <div class="information clearfix">
    <!-- title -->
    <div class="title">
      <span class="tit">我的笔记</span>
    </div>

    <!-- 内容区域 -->
    <div class="clearfix myNotesWrap">
      <!--我的笔记 内容-->
      <div class="myNotesCont">
        <div class="clearfix" v-for="(item,index) in myNotesData" :key="index">
          <Icon type="android-list"  class="f-fl questimgs" size="24" color="#ff8a0c"></Icon>
          <div class="f-fl">
            <p class="notestitle" v-if="item.seriesCourseName!= null">{{item.seriesCourseName}}</p>
            <p class="noteschapter" v-if="item.courseName != null ">{{item.courseName}}</p>
            <p class="notesCont">{{item.comments}}</p>
            <div>
              <span class="notestime">{{item.addTime}}</span>
              <span class="questmessage"><Icon type="thumbsup" size="16"></Icon>{{item.pointsNumber}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Page :total="pageNumber*10" class="text-center" style="padding: 20px 0;" @on-change="newsPageChange"></Page>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        userId: 0,
        page: 1,
        limit: 6,
        pageNumber:1,
        myNotesData:'',
        msg:'',
        userInfo:''
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
      this.myNoteDatas();
    },
    beforeDestroy() {

    },
    components: {
    },
    methods: {
      //          进入详情页面
      courseDetailPage(){
//        this.$router.push({ path: 'courseDetailPage'});
      },
      newsPageChange(pageNum){
        this.page = pageNum;
        this.myNoteDatas();
      },
      myNoteDatas(){
        this.service.myNoteData(this.userId, this.page, this.limit).then(result => {
          this.myNotesData = result.page.list;
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
  .myNotesWrap{
    /*我的笔记 内容*/
    .myNotesCont{
      padding: 10px 20px;
      >div{
        padding: 10px 0;
        cursor: pointer;
        border-bottom: 1px solid #efefef;
        .questimgs{
          margin-right: 20px;
        }
        >div{
          width: 860px;
          .notestitle{
            color: #666666;
            font-size: 14px;
          }
          .noteschapter{
            padding-top: 10px;
            color: #999999;
            font-size: 12px;
          }
          .notesCont{
            padding: 10px 0;
            font-size: 16px;
            color: #333;
            line-height: 32px;
          }
          .notestime{
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
              vertical-align: bottom;
            }
          }
        }
      }
    }
  }
</style>
