<template>
    <div id="enrollList">
        <v-top :top="top"></v-top>
        <div class="clearfix container m-t-20 m-b-20">
            <i class="f-fl"><img src="../assets/image/logo.png" alt=""></i>
            <v-search :search="search" class="f-fr"></v-search>
        </div>

        <!--导航-->
        <v-subpageMenu :subpageMenu="subpageMenu"></v-subpageMenu>

        <!--面包屑-->
        <!--<Breadcrumb separator=">" class="container m-b-20 m-t-20">-->
            <!--<BreadcrumbItem href="/">首页</BreadcrumbItem>-->
            <!--<BreadcrumbItem href="/views/enrollList">报名吧</BreadcrumbItem>-->
        <!--</Breadcrumb>-->、
        <div style="padding: 10px 0;margin-top: 10px">
          <breadcrumb></breadcrumb>
        </div>
        <!--分类-->
        <!--<v-enrollclassification :listData="enrollclassification"></v-enrollclassification>-->
        <div class="classification container clearfix">
          <div class="main">
            <div class="f-fl">分类：</div>
            <Select style="width:200px" placeholder="全部" @on-change="provinceChange">
              <Option v-for="(item,index) in areaData" :key="index" :value="index" >{{item.className}}</Option>
            </Select>
            <Select style="width:200px" placeholder="全部" @on-change="provinceEndChange" v-model="proviceData">
              <Option v-for="(item,index) in areaEndData" :value="index" :key="index"  >{{ item.className}}</Option>
            </Select>
          </div>
        </div>

        <!--搜索热度-->
        <div class="container searchVolume clearfix m-t-10" style="background: #f5f5f5; width: 100%;">
          <Menu mode="horizontal" active-name="1"  class="f-fl" style="background: #f5f5f5; height: 45px; line-height: 45px;">
            <MenuItem name="1" v-for="(item,index) in TypeList" :key="index">
              <span @click="timeCourse(index,item)" style="width:100%;color: black" :class="{themeColor:position===index}">{{item}}</span>
            </MenuItem>
          </Menu>
          <div class="f-fr m-r-10">
            <RadioGroup v-model="freeItem">
                    <span  v-for="(item, index) in freeList" :key="index" @click="freeChange(item)">
                      <Radio class="f-fr" :label="item"  :value="item">
                      </Radio>
                    </span>
            </RadioGroup>
          </div>
        </div>
        <!--活动列表-->
        <div class="clearfix container enrollList">
          <v-enrollItem :courseData="enrollListData"  v-on:enrollRefre="enrollDetail"></v-enrollItem>
        </div>

        <!--分页-->
        <Page :total="pageNumber * 10" class="container text-center m-t-30 m-b-120" @on-change="newsPageChange"></Page>
        <v-footer :footer="footer"></v-footer>
    </div>
</template>

<script>
    import Vue from 'vue';
    import top from '../components/top.vue';
    import search from '../components/search.vue';
    import breadcrumb from '../components/breadcrumb.vue';
    import subpageMenu from '../components/class/subpageMenu.vue';
    import enrollSearchVolume from '../components/live/enrollSearchVolume.vue';
    import enrollItem from '../components/course/enrollItem.vue';
    import footer from '../components/footer.vue';

    export default {
        data() {
            return {
                top: {},
                search: {},
                subpageMenu:{},
                areaData: '',
                areaEndDataList:'',
                areaEndData: '',
                areaDataGroup:'',
                proviceData:'',
                activityType:'',
                footer: {},
                page:1,
                limit:8,
                parentClassId: 0,
                activityIsActual:null,
                activityPlace: null,
                enrollListData: '',
                newAreaData:{
                  className: '全部'
                },
                cityData:'',
                pageNumber: 1,
                position: 0,
                hot: '',
                isHot: '',
                activityPriceOpen:'',
                freeItem: '',
                TypeList:['最新','最热','推荐'],
                freeList:['免费','收费'],
            };
        },
        mounted() {
          this.enrollnavLists();
          this.enrollGroupS();
        },
        beforeDestroy() {

        },
        components: {
            'v-top': top,
            'v-search': search,
            'breadcrumb':breadcrumb,
            'v-subpageMenu': subpageMenu,
            'v-enrollSearchVolume': enrollSearchVolume,
            'v-enrollItem': enrollItem,
            'v-footer': footer
        },
        methods: {
          //  分页
          newsPageChange(pageNum){
            this.page = pageNum;
            this.enrollGroupS();
          },
          // 导航选择--第一级别
          provinceChange(index){
            this.page = 1;
            let areaEndDataArray = [];
            if(index === 0){
              this.areaEndData = '';
            }else{
              this.areaEndDataList = this.areaData[index].activityClassList;
              this.areaEndDataList.forEach(function (item,index) {
                areaEndDataArray.push(item);
              });
              this.areaEndData = areaEndDataArray;
            }
          },
          // 导航选择--第二级别
          provinceEndChange(index){
            this.page = 1;
              if(this.areaEndData !== '' || this.areaEndData  === undefined){
                this.activityType = this.areaEndData[index].classId;
              }else{
                this.activityType = '';
              }
              this.enrollGroupS();
          },
          // 分类导航
          enrollnavLists(){
            this.service.enrollActivity(this.parentClassId).then(result => {
              this.areaData = result.dataList;
              this.areaData.unshift(this.newAreaData);
            }).catch(error => {
              this.$Loading.error();
            })
          },
          // 收费，免费
          freeChange(item){
            this.freeItem = item;
            this.page = 1;
            if(this.freeItem === '收费'){
              this.activityPriceOpen = 1;
              this.enrollGroupS();
            }
            if(this.freeItem === '免费'){
              this.activityPriceOpen = 0;
              this.enrollGroupS();
            }
          },
          //   最新，最热，推荐
          timeCourse(index,item){
            this.position = index;
            this.page = 1;
            switch (this.position){
              case 0:
                this.hot = '';
                this.isHot = '';
                this.enrollGroupS();
                break;
              case 1:
                this.hot = 1;
                this.isHot ='';
                this.enrollGroupS();
                break;
              case 2:
                this.hot = '';
                this.isHot = 1;
                this.enrollGroupS();
                break;
            }
          },
          enrollGroupS() {
            console.log( this.activityPriceOpen);
            this.service.OfflineActivity(this.activityPlace, this.page, this.limit, this.activityIsActual, this.activityType, this.isHot, this.hot, this.activityPriceOpen).then(result => {
              this.enrollListData = result.page.list;
              this.pageNumber = result.page.totalPage;
            }).catch(error => {
              this.$Loading.error();
            })
          },
          //   详情页
          enrollDetail(newItem){
            this.$router.push({ path: 'enrollDetails', query: { activityId:newItem.activityId, activityPrice:newItem.activityPrice}});
          },
        }
    };

</script>

<style lang="less">
    /*分类*/
    .classification{
      height: 50px;
      line-height: 30px;
      padding: 10px 20px;
      box-sizing: border-box;
      border: 1px solid #ededed;
      .top{
        background: #ffffff;
        height: 43px;
        line-height: 43px;
        box-sizing: border-box;
        border-bottom: 1px solid #ededed;
      }
      .ivu-select-dropdown{
        z-index: 999;
      }
    }
    /*活动列表*/
    .enrollList{
        li{
            margin-top: 30px;
            float: left;
            margin-right: 22px;
            a{
                transition: all .4s ease;
            }
        }
        li:nth-child(4n){
            margin-right: 0;
        }
    }
    .enrollList li:hover a{
        transform: translateY(-8px);
        -webkit-transform: translateY(-8px);
        -moz-transform: translateY(-8px);
        box-shadow: 0 5px 20px 5px #e0e0e0;
        -webkit-box-shadow: 0 5px 20px 5px #e0e0e0;
        -moz-box-shadow: 0 5px 20px 5px #e0e0e0;
        transition: all .4s ease;
    }
    .enrollList .courseState{
      display: none;
    }
</style>
