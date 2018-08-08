<template>
    <div id="class">
        <v-top :top="top"></v-top>
        <div class="clearfix container m-t-20 m-b-20">
            <i class="f-fl"><img src="../assets/image/logo.png" alt=""></i>
            <v-search :search="search" class="f-fr"></v-search>
        </div>

        <!--导航-->
        <v-subpageMenu :subpageMenu="subpageMenu" class="m-b-20"></v-subpageMenu>

        <!--面包屑-->
        <breadcrumb></breadcrumb>

        <!--分类-->
        <v-liveification :liveBroadcastClass="liveBroadcastClasss" v-on:liveClasss="liveBroadcastClass"></v-liveification>

        <!--搜索热度-->
        <v-liveSearchVolume :liveSearchVolume="liveSearchVolume" v-on:liveSearchs="liveSearch" class="m-t-10"></v-liveSearchVolume>

        <!--直播列表-->
        <div class="clearfix container m-t-10 liveBroadcastList p-b-50">
          <v-courseItem :courseData="liveBroadcastDate" :courseStatusData ="liveBroadcastState" v-on:refre="liveDetail" v-on:newPage="newPages" ></v-courseItem>
        </div>
      <Page :total="pageNumber*10" @on-change="newsPageChange" class="container text-center m-t-15 m-b-120"></Page>

      <v-footer :footer="footer"></v-footer>
    </div>
</template>

<script>
    import Vue from 'vue';
    import top from '../components/top.vue';
    import search from '../components/search.vue';
    import breadcrumb from '../components/breadcrumb.vue';
    import subpageMenu from '../components/class/subpageMenu.vue';
    import liveification from '../components/live/liveification.vue';
    import courseItem from '../components/course/courseItem.vue';
    import liveSearchVolume from '../components/live/liveSearchVolume.vue';
    import footer from '../components/footer.vue';

    export default {
        data() {
            return {
                top: {},
                search: {},
                subpageMenu:{},
                liveification: {},
                liveSearchVolume:{},
                liveBroadcastClasss:'',
                classID: '', // 分类 ID
                page: 1,
                limit: 16,
                onorsome:'',
                courseType: 1,  // 直播课程类型1
                isFree: 1,  // 收费1、免费0  默认收费 1
                liveState: 0, // 直播类型0、1、-1   ID 默认（待直播 0）
                liveBroadcastDate: '',
                newAreaData:{
                  className: '全部'
                },
                liveBroadcastState:'',
                pageNumber:1,
                footer: {},
            };
        },
        mounted() {
            this.liveClass();
            this.liveBroadcast();
        },
        beforeDestroy() {

        },
        components: {
            'v-top': top,
            'v-search': search,
            'breadcrumb':breadcrumb,
            'v-subpageMenu': subpageMenu,
            'v-liveification': liveification,
            'v-liveSearchVolume': liveSearchVolume,
            'v-courseItem': courseItem,
            'v-footer': footer
        },
        methods: {
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
          //分页
          newsPageChange(pageNum){
            this.page = pageNum;
            this.liveBroadcast();
          },
          // 直播分类
          liveClass() {
            this.service.liveBroadcastClass(this.page, this.limit).then(result => {
              this.liveBroadcastClasss =  result.page.list;
              this.liveBroadcastClasss.unshift(this.newAreaData);
            }).catch(error => {
              this.$Loading.error();
            })
          },
          // 修改分类ID 刷新数据
          liveBroadcastClass(ID) {
            this.page = 1;
            this.pageNumber = 1;
            if(ID !== null){
              this.classID = ID;
            }else{
              this.classID = '';
            }
            this.liveBroadcast();
          },
          // 修改直播状态ID 刷新数据
          liveSearch(ID) {
            this.page = 1;
            this.pageNumber = 1;
            if(ID.indexOf('a')!=-1){
              ID = ID.replace('a','');
              this.liveState = ID;  // 待直播、正在直播、直播完毕 ID
            }else {
              ID = ID.replace('b','');
              this.isFree = ID;  // 收费、免费 ID
            }
            this.liveBroadcast();
          },
          // 直播专区
          liveBroadcast() {
            var _this = this;
            this.service.liveBroadcasts(this.courseType ,this.page, this.limit, this.classID, this.liveState, this.isFree).then(result => {
              this.liveBroadcastDate =  result.page.list;
              this.pageNumber = result.page.totalPage;

              _this.liveBroadcastDate.forEach(function (item,index) {
                _this.service.courseTypeGroup(item.courseId).then(result => {
                  _this.liveBroadcastState.push(result.status);
                }).catch(error => {
                  _this.$Loading.error();
                })
              })
            }).catch(error => {
              this.$Loading.error();
            })
          },
          // 分页 this.page
          newPages(newPages) {
            this.page = newPages;
            this.liveBroadcast();
          }

        }
    };

</script>

<style lang="less">
    .liveBroadcastList{
      #courseItem {
        li{
          float:left;
          margin-top: 30px;
          margin-right: 22px;
        }
        li:nth-child(4n){
          margin-right: 0;
        }
      }
    }
</style>
