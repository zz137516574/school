<!-- 课程专区 / 系列课列表 -->
<template>
  <div class="information clearfix">
    <!-- title -->
    <div class="title">
      <span class="tit">系列课列表</span>
    </div>

    <!-- 课程List -->
    <div class="curriculumList clearfix" v-for="(item,index) in myCollectionData " :key="index">
      <img :src="item.photo" class="f-fl">
      <div class="listTitle m-l-15 m-t-5 f-fl">
        <p class="m-b-10 sharedTitle">{{item.courseName}}</p>
        <p class="sharedPerson">
          <span class="courseState" v-show =" item.typeStr != null " :style="{ background: item.typeStr == '视频直播'|| item.typeStr == '视频互动直播'? '#55a7d9' : '#ff8a0c' }">{{item.typeStr}}</span>
        </p>
        <p class="m-t-15">
          <span class="sharedprice"  v-if="item.price != null">￥<span  style="color: #ff8a0c;" v-if="item.price != 0 ">{{item.price}}</span></span>
          <span class="sharedprice"  v-if="item.price == 0 "  style="color: #ff8a0c;">免费</span>
          <span class="courseTime m-l-30" v-if="item.startTime!=null">{{item.startTime}}</span>
        </p>
      </div>
      <div class="f-fr">
        <p class="sharedagreed m-t-10" :class="{ active: isActive1 }" @click="addCourse(item)">添加普通课</p>
        <p class="sharedrefused m-t-10" :class="{ active: isActive2 }" @click="addShareCourse(item)">添加共享课</p>
      </div>
    </div>
    <Page :total="pageNumber*10" class="text-center" style="padding: 20px 0;" @on-change="newsPageChange"></Page>
  </div>
</template>

<script>
  import commonsDiv from '../../../components/myClassroom/class/commonsDiv.vue';
  export default {
    props: {},
    data() {
      return {
        headteacher:0,
        page: 1,
        limit: 6,
        pageNumber:1,
        onorsome: 1,
        msg:'',
        isActive1:false,
        isActive2:false,
        personInfo:'',
        seriesCourseId:'',
        sharedListData:[
          {
            photo:'',
            courseName:'1111',
            userName:'zhangsan',
            typeStr:'视频直播',
            createTime:'2018-01-09',
            price:1000,
            courseId:18,
            onorsome:1
          }
        ],
        myCollectionData:'',
        userId: 0,
        seriesCourseType: 1,
        auditStatus: 19
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
      }
      this.courseSeriesDatas();
    },
    beforeDestroy() {

    },
    components: {
      'v-commonsDiv':commonsDiv
    },
    methods: {
      //          进入详情页面
      courseDetails(newItem){
        this.$router.push({ path: 'freeSeriesCourse', query: {onorsome:this.onorsome, seriesCourseId:newItem.seriesCourseId, price:newItem.price}});
      },
      newsPageChange(pageNum){
        this.page = pageNum;
        this.courseSeriesDatas();
      },
      courseSeriesDatas(){
        this.service.courseSeriesData(this.page, this.limit, this.userId,this.auditStatus,this.onorsome).then(result => {
          this.myCollectionData = result.page.list;
          this.pageNumber = result.page.totalPage;
        }).catch(error => {
          this.$Loading.error();
        })
      },
//      创建普通课
      addCourse(item){
          this.isActive1 = true;
//        if(this.msg === '登陆成功！'){
          this.$router.push({ path: 'creatingSeriesCour', query: { seriesCourseId: item.courseId, onorsome:this.onorsome}});
//        }else{
//          this.$Message.info('请登录成功后进行操作！');
//          this.$router.push({ path: 'index'});
//        }
      },
//      添加共享课
      addShareCourse (item){
          this.isActive2 = true;
//        if(this.msg === '登陆成功！'){
          this.$router.push({ path: 'addSharedCourse',query: { seriesCourseId: item.courseId}});
//        }else{
//          this.$Message.info('请登录成功后进行操作！');
//          this.$router.push({ path: 'index'});
//        }
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
          .courseState{
            font-size: 12px;
            border-radius: 3px;
            padding: 5px 8px;
            color: #ffffff;
            background: #55a7d9;
          }
          .courseTime{
            font-size: 14px;
            color: #999999;
          }
        }
        .sharedprice{
          font-size: 14px;
          color: #ff8a0c;
        }
      }
      .sharedagreed{
        background: rgb(187, 190, 196);
        /*border: 1px solid rgb(187, 190, 196);*/
        border-radius: 3px;
        font-size: 14px;
        color: #555555;
        padding: 7px 15px;
        cursor: pointer;
      }
      .sharedrefused{
        background: rgb(187, 190, 196);
        /*border: 1px solid rgb(187, 190, 196);*/
        border-radius: 3px;
        font-size: 14px;
        color: #555555;
        padding: 7px 15px;
        cursor: pointer;
      }
      .ivu-alert-close .ivu-icon-ios-close-empty {
        font-size: 35px;
        top: 0;
      }
    }
    .curriculum-alert{
      padding: 20px 18px;
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
          background-image: url('../../../assets/image/imgbg.jpg');
          background-repeat: no-repeat;
          background-size: 100% 100%;
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
    .active{
      background: #ff8a0c !important;
      color: #fff !important;
    }
  }
</style>
