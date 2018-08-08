<!-- 互动直播 / 系列课列表 -->
<template>
  <div class="information clearfix">
    <!-- title -->
    <div class="title">
      <span class="tit">系列课列表</span>
    </div>

    <!-- 课程List -->
    <div class="curriculum-alert clearfix">
      <v-commonSeriesDiv :seriesData="myCollectionData"  v-on:courseDetailsRefre="courseDetails"></v-commonSeriesDiv>
    </div>
    <Page :total="pageNumber*10" class="text-center" style="padding: 20px 0;" @on-change="newsPageChange"></Page>
  </div>
</template>

<script>
  import commonSeriesDiv from '../../components/index/commonSeriesDiv.vue';

  export default {
    data() {
      return {
        msg:'',
        personInfo:'',
        userId: 0,
        seriesCourseId:0,
        seriesCourseType: 1,
        recordType:1,
        page: 1,
        limit: 6,
        pageNumber:1,
        onorsome:1,
        myCollectionData:''
      };
    },
    mounted() {
      if(window.localStorage.msg)
      {
        this.msg = JSON.parse(window.localStorage.msg);
      }
      if(window.localStorage.personInfo)
      {
        this.personInfo = JSON.parse(window.localStorage.personInfo);
        this.userId = this.personInfo.userId;
      }
      this.seriesCourseDatas();
    },
    beforeDestroy() {

    },
    components: {
      'v-commonSeriesDiv':commonSeriesDiv
    },
    methods: {
      newsPageChange(pageNum){
        this.page = pageNum;
        this.seriesCourseDatas();
      },
      //          进入详情页面
      courseDetails(newItem){
        this.onorsome = 1;
        this.$router.push({ path: 'freeSeriesCourse', query: { onorsome:this.onorsome, seriesCourseId:newItem.courseId, price:newItem.price}});
      },
      seriesCourseDatas(){
          this.service.interSeriesList(this.userId, this.seriesCourseType, this.recordType, this.page, this.limit).then(result => {
          this.myCollectionData = result.page.list;
          this.pageNumber = result.page.totalPage;
          console.log(result);
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
    .curriculum-alert{
      padding: 20px 18px;
      .common-div:nth-child(3n){
        margin-right: 0 !important;
      }
      .common-div:nth-child(4n){
        margin-right: 22px !important;
      }
      li.coursesLi{
        margin: 0 30px 30px 0;
        float: left;
        width: 282px;
        height: 249px;
        border: 1px #ededed solid;
        background-color: #ffffff;
        cursor: pointer;
        -webkit-transition: all .4s ease;
        transition: all .4s ease;
        .courseTop{
          width: 100%;
          height: 172px;
          overflow: hidden;
          cursor: pointer;
          img{
            width: 100%;
            height: 100%;
          }
        }
        .courseBottom{
          width: 100%;
          height: 75px;
          padding: 10px 10px;
          box-sizing: border-box;
          .top{
            margin-bottom: 12px;
            font-size: 14px;
            color: #2a2a2a;
            background: #ffffff;
            .courseState{
              margin-left: 10px;
              font-size: 12px;
              border-radius: 3px;
              padding: 5px 8px;
              color: #ffffff;
              background: #55a7d9;
            }
            .courseRevise{
              width: 18px;
              img{
                width: 100%;
              }
            }
          }
          .courseTime{
            font-size: 14px;
            color: #999999;
          }
          .price{
            margin-top: -3px;
            font-size: 18px;
            color: #ff8a0c;
          }
        }
      }
    }

    li.coursesLi:nth-child(3n){
      margin-right: 0;
    }
  }
</style>
