<!-- 课程专区 / 普通课列表 -->
<template>
  <div class="information clearfix">
    <!-- title -->
    <div class="title">
      <span class="tit">讲师培训</span>
    </div>

    <!-- 课程List -->
    <div class="curriculum-alert clearfix">
      <v-commonDivs :courseData="myCollectionData"></v-commonDivs>
    </div>
  </div>
</template>

<script>
  import commonDivs from '../../../components/myClassroom/class/commonDivs.vue';
  export default {
    props: {},
    data() {
      return {
        myCollectionData:[
          {
            photo: '../../src/assets/image/class1.jpg',
            courseName: '普通课程1',
            typeStr: '视频直播',
            createTime: '2017-12-20 18:30:00',
            price: '免费'
          },
          {
            photo: './src/assets/image/class2.jpg',
            courseName: '普通课程2',
            typeStr: '音频直播',
            createTime: '2017-12-20 18:30:00',
            price: '100.99'
          },
          {
            photo: './src/assets/image/class3.jpg',
            courseName: '普通课程3',
            typeStr: '视频互动直播',
            createTime: '2017-12-20 18:30:00',
            price: '100.99'
          },

          {
            photo: './src/assets/image/class1.jpg',
            courseName: '普通课程1',
            typeStr: '视频直播',
            createTime: '2017-12-20 18:30:00',
            price: '免费'
          },
          {
            photo: './src/assets/image/class2.jpg',
            courseName: '普通课程2',
            typeStr: '视频互动直播',
            createTime: '2017-12-20 18:30:00',
            price: '100.99'
          },
          {
            photo: './src/assets/image/class3.jpg',
            courseName: '普通课程3',
            typeStr: '视频互动直播',
            createTime: '2017-12-20 18:30:00',
            price: '100.99'
          }
        ]
      };
    },
    mounted() {

    },
    beforeDestroy() {

    },
    components: {
      'v-commonDivs':commonDivs
    },
    methods: {
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
    }
    li.coursesLi:nth-child(3n){
      margin-right: 0;
    }
  }
</style>
