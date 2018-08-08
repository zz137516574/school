<template>
  <div id="course">
    <v-top :top="top"></v-top>
    <div class="clearfix container m-t-20 m-b-20">
      <i class="f-fl"><img src="../assets/image/logo.png" alt=""></i>
      <v-search :search="search" class="f-fr"></v-search>
    </div>

    <!--导航-->
    <v-subpageMenu :subpageMenu="subpageMenu" menuName="class" class="m-b-20"></v-subpageMenu>

    <!--面包屑-->
    <Breadcrumb separator=">" class="container m-b-20 p-l-15">
      <BreadcrumbItem href="/">首页</BreadcrumbItem>
      <BreadcrumbItem href="/views/course">所有系列课</BreadcrumbItem>
    </Breadcrumb>

    <!--分类-->
    <v-classification :listData="courseListItem" v-on:courseTypeRefer="seriesAreas"></v-classification>

    <!--搜索热度-->
    <div class="container searchVolume clearfix m-t-10" style="background: #f5f5f5; width: 100%;">
      <Menu mode="horizontal" active-name="1"  class="f-fl" style="background: #f5f5f5; height: 45px; line-height: 45px;">
        <MenuItem name="1" v-for="(item,index) in courseTypeList" :key="index">
          <span @click="timeCourse(index,item)" style="width:100%;color: black" :class="{themeColor:position===index}">{{item}}</span>
        </MenuItem>
      </Menu>
    </div>

    <!--课程列表-->
    <div class="clearfix container classItem m-t-30">
      <v-commonSeriesDiv :seriesData="seriesCourseData" v-on:seriesRefre="excellentCourseDetails" v-on:seriesPageRefer="seriesAreas" ></v-commonSeriesDiv>
    </div>
    <Page :total="pageNumber*10" @on-change="seriesPageChange" class="container text-center m-t-15 m-b-120"></Page>

    <!--分页-->
    <v-footer :footer="footer"></v-footer>
  </div>
</template>

<script>
  import Vue from 'vue';
  import top from '../components/top.vue';
  import search from '../components/search.vue';
  import subpageMenu from '../components/class/subpageMenu.vue';
  import classification from '../components/class/classification.vue';
  import commonSeriesDiv from '../components/index/commonSeriesDiv.vue';
  import footer from '../components/footer.vue';

  export default {
    data() {
      return {
        courseTypeList:['最新','最热'],
        isFree:'',
        top: {},
        search: {},
        subpageMenu:{},
        classification: {},
        commonSeriesDiv:{},
        seriesCourseData:'',
        page: 1,
        limit: 8,
        ishot: '',
        pageNumber:1,
        position: 0,
        courseType: '',
        seriesListData:{
          type1:0,
          data1:0
        },
        seriesId: '',
        courseListItem:'',
        example1:'',
        footer: {}
      };
    },
    mounted() {
      this.coursenavLists();
      this.seriesAreas(this.seriesListData);
    },
    beforeDestroy() {

    },
    components: {
      'v-top': top,
      'v-search': search,
      'v-subpageMenu': subpageMenu,
      'v-classification': classification,
      'v-commonSeriesDiv': commonSeriesDiv,
      'v-footer': footer
    },
    methods: {
      //进入详情页面
      excellentCourseDetails(newItem){
        this.$router.push({ path: 'freeCourse', query: { newsID: newItem }});
      },
      //分类导航
      coursenavLists(){
        this.service.coursenavList().then(result => {
          this.courseListItem = result.list;
        }).catch(error => {
          this.$Loading.error();
        })
      },
      //课程列表
      timeCourse(index,item){
        this.position = index;
        if(item == '最热'){
          this.ishot = 1;
          this.seriesAreas(this.seriesListData);
        }else{
          this.ishot = '';
          this.seriesAreas(this.seriesListData);
        }
      },
      seriesPageChange(pageNum){
        this.page = pageNum;
        this.seriesAreas();
      },
      //系列课内容
      seriesAreas(itemData){
        let acceptData = itemData.type1;
        switch (acceptData)
        {
          case 0:
            console.log("我已全部加载完成");
            break;
          case -1:
            this.seriesId = itemData.data1;
            break;
          case 1:
            this.page = itemData.data1;
            break;
        }
        this.limit = 12;
        console.log('页码'+this.page+'=============='+'数目限制'+this.limit+'==============='+'分类ID'+this.seriesId+'==============='+'最热'+this.ishot+'================='+'直播'+this.courseType);
        this.service.seriesCourse(this.page, this.limit, this.ishot).then(result => {
          this.seriesCourseData = result.page.list;
//          console.log('系列课：'+ this.seriesCourseData);
//          console.log(this.limit);
//          console.log(this.ishot);
        }).catch(error => {
          this.$Loading.error();
        })
      }
    }
  };

</script>

<style lang="less">

</style>
