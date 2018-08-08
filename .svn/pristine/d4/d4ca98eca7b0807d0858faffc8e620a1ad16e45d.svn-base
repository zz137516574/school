<template>
  <div>
    <ul class="courseItemUl clearfix">
      <li class="coursesLi clearfix" v-for="(item,index) in courseData" :key="index" @click="freeCourse(item)">
        <div class="courseTop">
          <img :src="item.photo" alt="" v-if="item.hasOwnProperty('photo')">
        </div>
        <div class="courseBottom">
          <div class="top">
            <span class="courseTitle" v-if="item.hasOwnProperty('courseName') || item.courseName != null" @click="courseDetailPage">{{item.courseName}}</span>
            <span class="courseTitle" v-if="item.hasOwnProperty('seriesCourseName') || item.seriesCourseName != null" @click="courseDetailPage">{{item.seriesCourseName}}</span>
            <span class="courseState" v-show =" item.typeStr != null " :style="{ background: item.typeStr == '视频直播'|| item.typeStr == '视频互动直播'? '#55a7d9' : '#ff8a0c' }">{{item.typeStr}}</span>
            <!--<span class="courseRevise f-fr" @click="courseRevise"><Icon type="compose" size="18" color="#999"></Icon></span>-->
          </div>
          <div class="clearfix ">
            <span class="courseTime f-fl" v-if="item.hasOwnProperty('createTime')">{{item.createTime}}</span>
            <span class="f-fr price" v-if="item.hasOwnProperty('price')">{{item.price}}</span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
    export default {
        props: {
          courseData:{
            required: true
          }
        },
        data() {
            return {};
        },
        mounted() {

        },
        beforeDestroy() {

        },
        methods: {
          // 跳详情页
          courseDetailPage(){
            this.$router.push('DirectCourseDetails');
          },
          // 跳修改页面
          courseRevise(){
            this.$router.push('personalLecturer');
          },
          freeCourse(item) {
            this.$emit('courseDetailsRefre', item);
          }
        }
    };
</script>

<style lang="less">
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
      }
      .courseTime{
        font-size: 14px;
        color: #999999;
      }
      .courseRevise{
        width: 18px;
        img{
          width: 100%;
        }
      }
      .price{
        margin-top: -3px;
        font-size: 18px;
        color: #ff8a0c;
      }
    }
  }
  li.coursesLi:nth-child(3n){
    margin-right: 0;
  }
</style>
