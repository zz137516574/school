<template>
    <div id="class">
        <v-top :top="top"></v-top>
        <div class="clearfix container m-t-20 m-b-20">
            <i class="f-fl"><img src="../assets/image/logo.png" alt=""></i>
            <v-search :search="search" class="f-fr"></v-search>
        </div>

        <!--导航-->
        <v-subpageMenu :subpageMenu="subpageMenu" menuName="liveBroadcast"></v-subpageMenu>

        <!--banner-->
        <div class="bannerimg">
            <img src="../assets/image/live-banner.jpg" alt="" width="100%">
        </div>

        <div style="display: none">
          <breadcrumb></breadcrumb>
        </div>
        <!--title-->
        <div class="clearfix container yun-main-title p-t-65 m-b-25">
            <p>在线直播</p>
            <p class="yun-main-title-1">在线直播，让我们的距离更亲近~</p>
        </div>

        <!--在线直播-->
        <div class="clearfix container m-t-25 m-b-25">
            <v-courseItem class="container" :courseData="liveBroadcastDate" :courseStatusData="courseLiveItemStatus" v-on:refre="liveDetail"></v-courseItem>
        </div>
        <!--<v-listCom :listdata="newsdata" v-on:refre="detailsCon"></v-listCom>-->
        <div class="container more-button-1" style="margin-top: 46px;margin-bottom: 46px;" @click="liveBroadcastList">更多&nbsp;&nbsp;></div>

        <v-footer :footer="footer"></v-footer>
    </div>
</template>

<script>
    import Vue from 'vue';
    import top from '../components/top.vue';
    import search from '../components/search.vue';
    import breadcrumb from '../components/breadcrumb.vue';
    import subpageMenu from '../components/class/subpageMenu.vue';
    import courseItem from '../components/course/courseItem.vue';
    import footer from '../components/footer.vue';

    export default {
        data() {
            return {
                top: {},
                search: {},
                subpageMenu:{},
                footer: {},
                page: 1,
                limit: 8,
                courseType: 1,  // 直播课程类型
                liveBroadcastDate: '',
                courseLiveItemStatus:''
            }
        },
        mounted() {
          this.liveBroadcast()
        },
        beforeDestroy() {

        },
        components: {
            'v-top': top,
            'v-search': search,
            'breadcrumb':breadcrumb,
            'v-subpageMenu': subpageMenu,
            'v-courseItem': courseItem,
            'v-footer': footer
        },
        methods: {
            // 更多
            liveBroadcastList(){
              this.$router.push('liveBroadcastList');
            },
            // 跳转详情
            liveDetail(item) {
              if(item.onorsome === 0){  //普通课程
                this.onorsome = 0;
                this.$router.push({ path: 'DirectCourseDetails', query: { onorsome:this.onorsome, courseId:item.courseId, price:item.price}});
              }
              if(item.onorsome === 1){ //系列课程
                this.onorsome = 1;
                this.$router.push({ path: 'DirectCourseDetailsSeries', query: { onorsome:this.onorsome, seriesCourseId:item.courseId, price:item.price}});
              }
            },
            // 直播专区 List
            liveBroadcast() {
              var _this = this;
              this.service.liveBroadcasts(this.courseType ,this.page, this.limit).then(result => {
                this.liveBroadcastDate = result.page.list;
                this.liveBroadcastDate.forEach(function (item,index) {
                  _this.service.courseTypeGroup(item.courseId).then(result => {
                    _this.courseLiveItemStatus.push(result.status);
                  }).catch(error => {
                    _this.$Loading.error();
                  })
                })
              }).catch(error => {
                this.$Loading.error();
              })
            }
        }
    };

</script>

<style lang="less">
    .yun-main-title{
        color: #333333;
        font-size: 30px;
        font-weight: 700;
        text-align: center;
        .yun-main-title-1{
            font-size: 16px;
            padding-top: 10px;
        }
    }
    .more-button-1{
        background-color: #ff8a0c;
        border:1px #ff8a0c solid;
        color: #ffffff;
        width: 142px !important;
        height: 42px !important;
        border-radius: 5px;
        font-size: 14px;
        text-align: center;
        line-height: 42px;
        cursor: pointer;
    }
    .bannerimg{
      width: 100%;
      min-width: 1200px;
    }
</style>
