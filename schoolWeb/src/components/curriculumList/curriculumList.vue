<!-- 课程List -->
<template>
  <div id="curriculumList">
    <Alert class="curriculumList clearfix m-t-10" style="background-color: #fff9f7;" v-for="(item,index) in curriculumList" :key="index" >
      <div class="clearfix "  @click="curriculumData(item.courseId)" style="cursor: pointer">
        <img :src="item.photo">
        <div class="listTitle m-l-15 m-t-10 f-fl">
          <p class="m-b-10">{{item.courseName}}</p>
          <span>{{item.creteuser}}</span>
        </div>
        <div class="price-info m-r-5 f-fr">
          <p class="m-t-10" v-if="item.price != null"> {{item.price}}元</p>
          <!--<span v-if="item.studentCount != null">{{item.studentCount}}个学员</span>-->
        </div>
      </div>
    </Alert>
  </div>
</template>

<script>
  export default {
    props: {
      curriculumList: {
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
      curriculumData(itemId) {
        this.$emit('curriculumRefre', itemId);
      }
    }
  };
</script>

<style lang="less">
    .curriculumList {
      width: auto;
      min-height: 130px;
      padding: 20px 25px;
      border-radius: 0;
      border: 0;
      img {
        width: 128px;
        height: 93px;
        display: block;
        float: left;
      }
      .listTitle {
        p {
          font-size: 16px;
          color: #333333;
        }
        span {
          font-size: 14px;
          color: #767676;
        }
      }
      .ivu-alert-close .ivu-icon-ios-close-empty {
        font-size: 35px;
        top: 0;
      }

      .price-info {
        width: 120px;
        text-align: right;
        p {
          color: #ff8a0c;
          font-size: 16px;
          margin-bottom: 54px;
        }
        span {
          color: #767676;
        }
      }
      .ivu-alert {
        margin-bottom: 0;
      }
    }


</style>
