<template>
    <div id="mainIndex">
        <div id="homepages">
          <v-top></v-top>
          <div class="clearfix container m-t-20 m-b-20">
            <i class="f-fl"><img src="../assets/image/logo.png" alt=""></i>
            <v-search :search="search" class="f-fr"></v-search>
          </div>
          <!--导航栏-->
          <div class="container m-t-10">
            <v-menu :menu="menu" class="menu"></v-menu>
          </div>
          <!--banner-->
          <v-banner :banner="banner" :listData="advertisement" style="position: relative;"></v-banner>
          <!--分类-->
          <div class="container" style="position: relative;left: -17px;top: -300px;">
            <div class="classification" style="left: 17px;">
              <v-classification :classification="classification"></v-classification>
              <v-person></v-person>
            </div>
          </div>
          <div style="display: none">
            <breadcrumb></breadcrumb>
          </div>
          <!--直播公开课-->
          <div class="liveBroadcastOpenClass container clearfix p-t-50">
            <div class="container p-t-50">
              <p class="zhibo-title">直播公开课</p>
              <p class="zhibo-title-1 p-t-5">海量优质课程全面覆盖需求</p>
            </div>
            <v-time :time="time" v-on:timeRefre="liveBroadcast" class="container p-t-30 clearfix"></v-time>
            <div class="container clearfix liveBroadClassContent">
              <v-courseItem :courseData="liveBroadcastDate" :courseStatusData="courseLiveItemStatus" v-on:refre="liveDetail"></v-courseItem>
            </div>
          </div>

          <!--精品课程-->
          <div class="jingpinDiv clearfix">
            <div class="container p-t-50">
              <p class="zhibo-title">精品课程</p>
              <p class="zhibo-title-1 p-t-5">海量优质课程全面覆盖需求</p>
            </div>
            <div class="container p-t-10 clearfix jingpinCourse">
              <v-commonDiv :courseData="dataSource" :courseStatusData="courseExcellentItemStatus" v-on:refre="excellentCourseDetails"></v-commonDiv>
            </div>
            <div class="more-button container clearfix" @click="courseCommon">更多普通课&nbsp;></div>
          </div>

          <!--系列课推荐-->
          <div class="ClassRecomDiv clearfix">
            <div class="container p-t-50">
              <p class="zhibo-title">系列课推荐</p>
              <p class="zhibo-title-1 p-t-5">系列课化学习体系，给你更多的课程相关服务。</p>
            </div>
            <div class="container p-t-10 clearfix ClassRecommend">
              <v-coursedivItem :courseData="seriesCourseData" :courseStatusData="courseSeriesItemStatus" v-on:courseDetailsRefre="seriesCourseDetails" v-on:coursePageRefer="seriesAreas"></v-coursedivItem>
              <!--<v-commonSeriesDiv :courseData="seriesCourseData" v-on:seriesRefre="seriesCourseDetails" v-on:seriesPageRefer="seriesAreas" ></v-commonSeriesDiv>-->
            </div>
            <div class="more-button container"  @click="courseSeries" >更多系列课&nbsp;></div>
          </div>

          <!--云联商学院-->
          <div class="shangxueyuan clearfix">
            <div class="container p-t-50">
              <p class="zhibo-title">云联商学院</p>
              <p class="zhibo-title-1 p-t-5">全国云联惠讲师大集结，赶快加入我们</p>
            </div>
            <div class=" p-t-50">
              <v-businessSchool :businessList="businessData" v-on:businessRefre="yunCollegeInfo"></v-businessSchool>
            </div>
            <div class="shangxueyuanmoreDiv">
              <div class="more-button container" style="background-color: #e4ac71;border:1px #ffffff solid;color: #ffffff;margin-top: 0px;" @click="yunCollege">更多商学院&nbsp;></div>
            </div>
          </div>

          <!--线下活动-->
          <div class="indexActivity clearfix">
            <div class="container p-t-50">
              <p class="zhibo-title">活动报名吧</p>
              <p class="zhibo-title-1 p-t-5">海量活动，精准发现感兴趣的活动，一键报名参与。</p>
              <!--分类-->
              <v-lecturerArea v-on:province="provinces" class="f-fr" style="width:265px;position: relative;margin-right: 0;margin-top: -48px;"></v-lecturerArea>
            </div>
            <v-commonDivLong :commonDivData="OfflineData" class="container p-t-50" v-on:enrollRefre="enrollDetail"></v-commonDivLong>
          </div>

          <!--云惠信通讯APP-->
          <div class="indexApp-div clearfix">
            <div class="container p-t-30">
              <p class="zhibo-title" style="color: #ffffff;">云惠信通讯APP</p>
              <p class="zhibo-title-1 p-t-5" style="color: #ffffff;">云联惠官网第一个通讯APP，让您的沟通更简单！</p>
            </div>
            <div class="container text-center indexApp-divBlock" style="margin: 20px auto 0;">
              <a><img src="../assets/image/app-1.png"/></a>
              <a><img src="../assets/image/app-2.png"/></a>
              <a><img src="../assets/image/app-3.png"/></a>
            </div>
            <div class="indexAppBtnBlocks clearfix">
              <div class="more-button f-fl" style="background-color: #ff5f57;border:1px #ff5f57 solid;color: #ffffff;margin: 0 50px 0 0;">安卓APP下载</div>
              <div class="more-button f-fl" style="background-color: #ff5f57;border:1px #ff5f57 solid;color: #ffffff;margin: 0;">苹果APP下载</div>
            </div>
          </div>

          <!--新闻资讯-->
          <div class="indexNews clearfix">
            <div class="container p-t-50">
              <p class="zhibo-title">新闻资讯</p>
              <p class="zhibo-title-1 p-t-5">一点资讯，满足你对资讯的一切要求。</p>
              <div class="container clearfix indexNewsBlock">
                <!--导航-->
                <div class="indexNewsTabBar clearfix">
                    <div class="indexNewsNavDiv" v-for="(item, index) in newsCommonDataList" :key="index" :class="{'active':changeFlag === index}" @click="newsIndexNavLists(item,index)">{{item.className}}</div>
                </div>
                <!--内容-->
                <div class="IndexNewsTabCont">
                  <div><v-commonDivShort :newsCommonData="newsCommonContData" v-on:refre="detailsCon"></v-commonDivShort></div>
                </div>
              </div>
              <div class="more-button container clearfix " @click="news">更多资讯&nbsp;></div>
            </div>
          </div>

          <v-footer :footer="footer"></v-footer>
        </div>
    </div>
</template>
<script>
    import top from '../components/top.vue';
    import search from '../components/search.vue';
    import breadcrumb from '../components/breadcrumb.vue';
    import banner from '../components/index/banner.vue';
    import menu from '../components/menu.vue';
    import classification from '../components/index/classification.vue';
    import person from '../components/index/person.vue';
    import time from '../components/index/timeLine.vue';
    import commonDiv from '../components/course/courseItem.vue';
    import commonSeriesDiv from '../components/index/commonSeriesDiv.vue';
    import coursedivItem from '../components/course/coursedivItem.vue';
    import commonDivShort from '../components/index/commonDivShort.vue';
    import commonDivLong from '../components/index/commonDivLong.vue';
    import courseItem from '../components/course/courseItem.vue';
    import businessSchool from '../components/index/businessSchool.vue';
    import footer from '../components/footer.vue';
    import lecturerArea from '../components/lecturer/lecturerArea.vue';

    export default {
        data() {
            return {
                onorsome: 0,
                top: {},
                search:{},
                banner:{},
                menu:{},
                classification:{},
                person:'',
                person1:'',
                time:{},
                commonDiv:{},
                commonDivShort:{},
                commonDivLong:{},
                businessSchool:{},
                footer: {},
                value1: [],
                page: 1,
                limit: 8,
                quality: 1,
                ishot: 1,
                typeDate:31,
                dataSource:'',
                seriesCourseData:'',
                advertisement:'',
                newsCommonContData:'',
                newsCommonDataList:'',
                OfflineData:'',
                businessData:'',
                regions: '',
                livePage: 1,
                liveLimit: 4,
                liveCourseType: 1,  // 直播课程类型
                liveBroadcastDate: '',  // 直播课程
                classId: 0,
                className:'',
                changeFlag: 0,
                activityIsActual:null,
                seriesListData:{
                  type1:0,
                  data1:0
                },
                value3: 0,
                setting: {
                    autoplay: false,
                    autoplaySpeed: 2000,
                    dots: 'outside',
                    radiusDot: false,
                    trigger: 'hover',
                    arrow: 'never'
                },
                classId1: '',
                newsId:0,
                itemData: '',
                callData:0,
                timeData:{ lastTime:'', nextTime:''},
                startTime:'',
                endTime:'',
                activityPlace: null,
                auditStatus: '',
                courseType:0,
                courseSeriesItemStatus:'',
                courseLiveItemStatus:'',
                courseExcellentItemStatus:''
            };
        },
        mounted() {
            this.excellents();
//            this.seriesCourses();
            this.newsIndexNavList();
            this.newsIndexGroupS();
            this.OfflineActivitys();
            this.advertisements();
            this.liveBroadcast(this.timeData);
            this.businessContent();
            this.seriesAreas();
        },
        beforeDestroy() {

        },
        components: {
            'v-top': top,
            'v-search': search,
            'breadcrumb':breadcrumb,
            'v-banner': banner,
            'v-menu': menu,
            'v-classification': classification,
            'v-person': person,
            'v-time': time,
            'v-commonDiv': commonDiv,
            'v-coursedivItem':coursedivItem,
            'v-commonSeriesDiv': commonSeriesDiv,
            'v-courseItem': courseItem,
            'v-commonDivShort': commonDivShort,
            'v-commonDivLong': commonDivLong,
            'v-businessSchool': businessSchool,
            'v-footer': footer,
            'v-lecturerArea': lecturerArea,
        },
        created() {
//          this.refreshCode();
        },
        methods: {
            classes(){
                this.$router.push('class');
            },
            courseCommon(){
                this.$router.push({ path: 'course', query: { onorsome:0}});
            },
            courseSeries(){
              this.$router.push({ path: 'course', query: { onorsome:1}});
            },
            yunCollege(){
                this.$router.push('yunCollege');
            },
            news(){
                this.$router.push('news');
            },
            // 精品课程
            excellents() {
              this.auditStatus = 19;
              var _this = this;
              this.service.excellent(this.page, this.limit, this.quality,this.auditStatus,this.courseType,).then(result => {
                this.dataSource = result.page.list;
                this.dataSource.forEach(function (item,index) {
                  _this.service.courseTypeGroup(item.courseId).then(result => {
                    _this.courseExcellentItemStatus.push(result.status);
                  }).catch(error => {
                    _this.$Loading.error();
                  })
                })
              }).catch(error => {
                this.$Loading.error();
              })
            },
            // 系列课
            seriesAreas(){
              this.limit = 8;
              this.onorsome = 1;
              var _this = this;
              this.service.courseArea(this.page, this.limit,'',this.ishot,'','', this.onorsome,0).then(result => {
                this.seriesCourseData = result.page.list;
                this.seriesCourseData.forEach(function (item,index) {
                  _this.service.courseTypeGroup(item.courseId).then(result => {
                    _this.courseSeriesItemStatus.push(result.status);
                  }).catch(error => {
                    _this.$Loading.error();
                  })
                })
              }).catch(error => {
                this.$Loading.error();
              })
            },
            //  精品课程跳详情页
            excellentCourseDetails(newItem){
              this.onorsome = 0;
              this.$router.push({ path: 'freeCourse', query: {onorsome:this.onorsome, courseId:newItem.courseId, price:newItem.price}});
            },
            //   系列课
            seriesCourseDetails(newItem){
              this.onorsome = 1;
              this.$router.push({ path: 'freeSeriesCourse', query: {onorsome:this.onorsome, seriesCourseId:newItem.seriesCourseId, price:newItem.price}});
            },
//              this.$router.push({ path: 'freeCourse', query: { newsID: itemId}});
//            },
            // banner
            advertisements() {
              this.service.adver(this.typeDate, this.limit, this.page).then(result => {
                this.advertisement =  result.page.list;
              }).catch(error => {
                this.$Loading.error();
              })
            },
            // 新闻资讯导航
            newsIndexNavList(){
              this.limit=4;
              this.service.IndexNewsnavList(this.page,this.limit).then(result => {
                this.newsCommonDataList = result.page.list;
                this.classId = result.page.list[0].classId;
                this.newsIndexGroupS();
              }).catch(error => {
                this.$Loading.error();
              })
            },
            // 修改新闻资讯导航ID 刷新数据
            newsIndexNavLists(item,index) {
              this.changeFlag = index;
              this.classId = item.classId;
              this.className = item.className;
              this.newsIndexGroupS();
            },
            //  新闻资讯列表
            newsIndexGroupS(classId1,newslimit1) {
              this.limit= newslimit1;
            },
            newsIndexGroupS() {
              this.limit= 4;
              this.service.newsLeftGroup(this.page, this.limit, this.classId).then(result => {
                this.newsCommonContData = result.page.list;
              }).catch(error => {
                this.$Loading.error();
              })
            },
            //  新闻资讯跳详情页
            detailsCon(itemData) {
              this.$router.push({ path: 'newsInfo', query: { newsId: itemData}});
            },
            // 地区选择
            provinces(chooseId) {
              this.activityPlace = chooseId;
              this.OfflineActivitys();
            },
            // 线下活动
            OfflineActivitys(){
              this.limit = 4;
              this.service.OfflineActivity(this.activityPlace, this.page, this.limit, this.activityIsActual).then(result => {
                this.OfflineData = result.page.list;
              }).catch(error => {
                this.$Loading.error();
              })
            },
            // 报名吧详情页
            enrollDetail(enrollItem){
              this.$router.push({ path: 'enrollDetails', query: { activityId:enrollItem.activityId, activityPrice:enrollItem.activityPrice}});
            },
            // 直播专区 List
            liveBroadcast(newData) {
              if(newData){
                this.startTime = newData.lastTime;
                this.endTime = newData.nextTime;
              }
              this.onorsome = 0;
              var _this = this;
              this.service.liveBroadcastData(this.liveCourseType ,this.livePage, this.liveLimit,this.onorsome,this.startTime,this.endTime).then(result => {
                this.liveBroadcastDate =  result.page.list;
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
            },
            // 跳转详情
            liveDetail(item) {
              if(item.onorsome === 0){  //普通课程
                this.onorsome = 0;
                this.$router.push({ path: 'DirectCourseDetails', query: { onorsome:this.onorsome, courseId:item.courseId, price:item.price}});
              }
              if(item.onorsome === 1){ //系列课程
                this.onorsome = 1;
                this.$router.push({ path: 'DirectCourseDetailsSeries', query: { onorsome:this.onorsome, seriesCourseId:item.seriesCourseId, price:item.price}});
              }
            },
            //云联商学院
            businessContent(){
              this.limit = 10;
              this.service.businessSchools(this.page, this.limit,this.auditStatus).then(result => {
                this.businessData = result.page.list;
              }).catch(error => {
                this.$Loading.error();
              })
            },
            //云联商学院跳转详情页
            yunCollegeInfo(itemId) {
              this.$router.push({ path: 'yunCollegeInfo', query: { newsID: itemId }});
            },
            newsIndexD(newItemId){
              this.$router.push({ path: 'newsInfo', query: { newsId: newItemId}});
            },
        }
    };
</script>

<style lang="less">
    #mainIndex{
      width: 100%;
      height: 100%;
        .classification{
            position: absolute;
            z-index: 10;
            width: 1200px;
            left: 0;
            top: 0;
            border: none;
            padding: 0;
        }
        .zhibo-title{
            color: #ff8a0c;
            font-size: 30px;
            text-align: center;
            font-weight: 700;
        }
        .zhibo-title-1{
            color: #5a5a5a;
            font-size: 14px;
            text-align: center;
        }
        /*普通课*/
        .jingpinDiv{
            width:100%;
            min-width: 1200px;
            height: 100%;
            min-height: 550px;
            background-image: url("../assets/image/jingpinkecheng.png");
            background-size: 100% 100%;
            margin-top: 75px;
            background-repeat: no-repeat;
        }
        /*系列课*/
        .ClassRecomDiv{
            width: 100%;
            min-width: 1200px;
            height: 800px;
            .ClassRecommend{
                ul{
                    li{
                        float:left;
                        margin-top: 30px;
                        margin-right: 22px;
                        .lijibaoming{
                            display: none !important;
                        }
                        .dollor{
                            display: block !important;
                        }
                    }
                    li:nth-child(4n){
                        margin-right: 0;
                    }
                }
            }
        }
        /*商学院*/
        .shangxueyuan{
            width: 100%;
            min-width: 1200px;
            .shangxueyuanmoreDiv{
                width:100% !important;
                min-width: 1200px;
                height: 140px;
                float: left;
                background-color: #e4ac71;
                margin-top: -1px;
                padding-top: 48px;
            }
            .more-button{
              background-color: #e4ac71;
            }
            .more-button:hover{
              background-color: #ff8a0c;
            }
        }
        /*线下活动*/
        .indexActivity{
            .activityUl{
                ul{
                    li{
                        float:left;
                        margin-top: 10px;
                        margin-right: 20px;
                    }
                    li:nth-child(2n){
                        margin-right: 0;
                    }
                }
            }
            .ivu-input-wrapper {
                width: 100% !important;
            }
        }
        /*云惠信通讯APP*/
        .indexApp-div{
            width:100%;
            min-width: 1200px;
            height: 430px;
            background-image: url("../assets/image/app-bk.jpg");
            background-size: 100% 100%;
            margin-top: 75px;
            .indexApp-divBlock{
                a{
                    img{
                      width: 165px;
                      height: 190px;
                      margin: 15px 30px;
                    }
                }
            }
            .indexAppBtnBlocks{
              margin: 20px auto 0;
              width: 335px;
            }
        }
        /*新闻资讯*/
        .indexNews{
            .indexNewsBlock{
                .indexNewsTabBar{
                    margin: 40px auto;
                    width: 730px;
                    .indexNewsNavDiv{
                        float: left;
                        width: 140px;
                        height: 43px;
                        line-height: 43px;
                        font-size: 14px;
                        overflow: hidden;
                        text-align: center;
                        margin-right: 50px;
                        box-sizing: border-box;
                        cursor: pointer;
                        text-decoration: none;
                        position: relative;
                        background: #ffffff;
                        border: 1px #ededed solid;
                        border-radius: 4px;
                        color: #5a5a5a;
                    }
                    .indexNewsNavDiv:last-child{
                      margin-right: 0;
                    }
                }
                ul{
                    li{
                        float:left;
                        margin-top: 10px;
                        margin-right: 20px;
                    }
                    li:nth-child(2n){
                        margin-right: 0;
                    }
                }
            }
        }
        .active{
          color: #ffffff!important;
          background: #ff8a0c!important;
          border: 1px #ff8a0c solid!important;
        }

    }
    /*.ivu-modal-content {*/
      /*height: 100vh !important;*/
    /*}*/
    /*.ivu-modal-body {*/
      /*height: 100vh !important;*/
    /*}*/
    /*.ivu-modal-footer{*/
      /*position: absolute;*/
      /*top: 60px;*/
      /*right: 75px;*/
      /*z-index: 1000;*/
      /*border: none;*/
    /*}*/
</style>
