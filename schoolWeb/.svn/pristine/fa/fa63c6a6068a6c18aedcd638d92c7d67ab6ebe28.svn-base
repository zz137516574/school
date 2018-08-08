<!-- 互动直播 / 普通课列表 -->
<template>
  <div class="genCourse clearfix">
    <!-- title -->
    <div class="title">
      <span class="tit">普通课列表</span>
    </div>

    <!-- 课程List -->
    <div class="curriculumList clearfix" v-for="(item,index) in myCollectionData " :key="index">
      <i class="f-fl currimg" @click="courseDetails(item)">
        <img :src="item.photo">
      </i>
      <div class="listTitle m-l-15 m-t-5 f-fl" @click="courseDetails(item)">
        <p class="m-b-10 sharedTitle">{{item.courseName}}</p>
        <p class="sharedPerson">
          <span class="courseState" v-show =" item.typeStr != null " :style="{ background: item.typeStr == '视频直播'|| item.typeStr == '视频互动直播'? '#55a7d9' : '#ff8a0c' }">{{item.typeStr}}</span>
        </p>
        <p class="m-t-15">
          <span class="sharedprice"  v-if="item.price != null" style="color: #ff8a0c;">￥<span v-if="item.price != 0 ">{{item.price}}</span></span>
          <span class="sharedprice"  v-if="item.price == 0 "  style="color: #ff8a0c;">免费</span>
          <span class="courseTime m-l-30" v-if="item.createTime!=null">{{item.createTime}}</span>
        </p>
        <p class="m-t-15 m-l-5"><span v-if="item.studentCount === null">购买人数：0人</span><span v-if="item.studentCount !== null">购买人数：{{item.studentCount}}人</span></p>
      </div>
      <div class="f-fr" id="startLive">
        <div><button class="startLive m-t-30" @click="courseDetailsLists(item)">发起直播</button></div>
      </div>
    </div >
    <Page :total="pageNumber*10" class="text-center" style="padding: 20px 0;" @on-change="newsPageChange"></Page>
  </div>
</template>

<script>
//  import commonsDiv from '../../components/myClassroom/class/commonsDiv.vue';

  export default {
    props: {},
    data() {
      return {
        userId:0,
        page: 1,
        limit:6,
        pageSize: 6,
        pageNumber:1,
        onorsome: 0,
        myCollectionData:'',
        msg:'',
        personInfo:'',
        creatUser:0,
        courseType:1,
        courseId:'',
        password:'',
        createUser:0,
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
        this.createUser = JSON.parse(window.localStorage.userInfo).userId;
//            if(this.userInfo.usertype === 0){
//              this.topMenu = this.topMenu.filter(this.checkAdult);
//            }
      }
      this.generalCourseLists();
    },
    beforeDestroy() {

    },
    components: {
//      'v-commonsDiv':commonsDiv
    },
    methods: {
      //          进入详情页面
      courseDetails(newItem){
        this.$router.push({ path: 'freeCourse', query: { onorsome:this.onorsome, courseId:newItem.courseId, price:newItem.price}});
      },
      newsPageChange(pageNum){
        this.page = pageNum;
        this.generalCourseLists();
      },
//      generalCourseLists(){
//        this.service.interGeneralCourse(this.creatUser, this.page, this.limit,this.courseType).then(result => {
//          this.myCollectionData = result.page.list;
//          this.pageNumber = result.page.totalPage;
//        }).catch(error => {
//          this.$Message.error({
//            content: error,
//            duration: 5
//          });
//        })
//      },
      generalCourseLists(){
        this.service.interReviewManage(this.page, this.limit, this.courseType, this.auditStatus,this.createUser).then(result => {

          this.myCollectionData = result.page.list;
          this.pageNumber = result.page.totalPage;
        }).catch(error => {
          this.$Message.error({
            content: error,
            duration: 5
          });
        })
      },
//      获取课程详情
      courseDetailsLists(item){
        this.courseId = item.courseId;
        this.service.courseInfo(this.courseId,this.onorsome,this.userId).then(result => {
          this.vhallID = result.course.teacher.vhallUserId;
          this.vhallAccount = result.course.teacher.vhallUserAccount;
          this.roomNo = result.course.roomNo;
          this.password = result.course.teacher.vhallUserPassword;

          console.log(this.courseId +'===='+this.onorsome+'===='+this.roomNo+'===='+this.vhallID+'====='+this.vhallAccount+'====='+this.userId);
          let myurl="http://room.goboosoft.com/liveBroad.html"+"?"+"courseId="+this.courseId+"&onorsome="+this.onorsome + "&roomNo=" + this.roomNo + "&vhallID=" + this.vhallID + "&vhallAccount=" + this.vhallAccount+'&userId='+this.userId+'&password='+this.password;
          window.location.assign(encodeURI(myurl));
        }).catch(error => {
          this.$Loading.error();
        })
      },
//      startLive(){
//        let myurl="../room/liveBroad.html"+"?"+"courseId="+this.courseId+"&onorsome="+this.onorsome + "&roomNo=" + this.roomNo + "&vhallID=" + this.vhallID + "&vhallAccount=" + this.vhallAccount+'&userId='+this.userId;
//        window.location.assign(encodeURI(myurl));
//      },
    }
  };
</script>

<style lang="less">
  .genCourse{
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
    .curriculumList{
      padding: 10px 15px;
      border-bottom: 1px solid #efefef;
      .currimg{
        width: 150px;
        height: 100px;
        overflow: hidden;
        background-image: url('../../assets/image/imgbg.jpg');
        background-repeat: no-repeat;
        background-size: 100% 100%;
        img{
          width: 100%;
          height: 100%;
        }
      }
      .listTitle{
        cursor: Default;
      }
      .sharedTitle,.sharedprice{
        font-size: 16px;
      }
      .courseTime{
        font-size: 14px;
      }
    }
  }
  #startLive{
    button{
      width: 120px;
      height: 38px;
      border-radius: 5px;
      background: #ff8a0c;
      color: #ffffff;
      font-size: 14px;
      border: none;
      outline: none;
      cursor:pointer;
    }
  }
</style>
