<template>
    <div class="freeClass">
        <v-top :top="top"></v-top>
        <div class="clearfix container m-t-20 m-b-20">
            <i class="f-fl"><img src="../assets/image/logo.png" alt=""></i>
            <v-search :search="search" class="f-fr"></v-search>
        </div>
        <!--导航-->
        <v-subpageMenu :subpageMenu="subpageMenu" class="m-b-20"></v-subpageMenu>

        <!--面包屑-->
        <!--<Breadcrumb separator=">" class="container m-b-20 p-l-15">-->
            <!--<BreadcrumbItem href="/">首页</BreadcrumbItem>-->
            <!--<BreadcrumbItem href="/views/course">云联惠课程</BreadcrumbItem>-->
            <!--<BreadcrumbItem href="/views/freeCourse">云联惠企业文化课程</BreadcrumbItem>-->
        <!--</Breadcrumb>-->
        <breadcrumb></breadcrumb>

        <!--大图，标题介绍-->
        <div class="container clearfix classHeaderMian">
            <i class="f-fl img">
              <img :src="courseDetailsData.photo" alt="" class="bagImg">
              <!--<div class="imgMask">-->
                <!--<div class="maskText">-->
                  <!--<img src="../assets/image/shikan.png" alt="">-->
                <!--</div>-->
              <!--</div>-->
            </i>
            <div class="f-fl main">
                <div class="name clearfix" style="position: relative">
                  <div style="display: inline-block">
                    {{courseDetailsData.courseName}}
                  </div>
                  <div style="width: 80px;height: 70px;position: absolute;display: inline-block;top: 0;right: 0" v-show="!liveBtn">
                    <img src="../assets/image/yinzhang2.png" alt="" style="width: 100%;height: 100%;">
                  </div>
                </div>
                <!--<div class="clearfix rates">-->
                    <!--<Rate v-model="rateValue" class="f-fl"></Rate>-->
                    <!--<div class="f-fl num">(<span>{{courseDetailsData.courseCommentNum}}</span>个评论）</div>-->
                  <div class="collection" style="display: inline-block" @click="collectEvent">
                    <!--没有收藏-->
                    <div style="display: inline-block">
                      <i class="ivu-icon ivu-icon-android-favorite f-fl" style="font-size: 17px;padding-top:3px" v-if="collectName==='收藏'"></i>
                      <i class="ivu-icon ivu-icon-android-favorite f-fl" style="font-size: 17px;padding-top:3px;color: red" v-if="collectName==='已收藏'"></i>

                      <span class="f-fl colletionBtn m-l-5" style="font-size: 17px;display: inline-block;vertical-align: middle ">{{collectName}}</span>
                    </div>
                  </div>
                    <!--<div class="f-fl share">-->
                        <!--<i class="ivu-icon ivu-icon-share f-fl" style="font-size: 20px;margin-top: -2px;"></i>-->
                        <!--<span class="f-fl">分享</span>-->
                    <!--</div>-->
                    <!--<div class="f-fl complaint">-->
                        <!--<i class="ivu-icon ivu-icon-ios-information f-fl" style="font-size: 18px;"></i>-->
                        <!--<span class="f-fl">投诉</span>-->
                    <!--</div>-->
                <!--</div>-->
                <div class="price">
                  <span v-if="price != 0 " style="margin-left: 0;">价格:<span  style="color: #ff8a0c;">￥{{courseDetailsData.price | currency}}</span></span>
                  <span v-if="price  == 0 " style="margin-left: 0;">价格: <span  style="color: #ff8a0c;">免费</span></span>
                </div>
                <div class="clearfix bottomMetas">
                    <!--<button class="f-fr m-l-10" @click="invitationJoin">邀请加入</button>-->
                    <button class="f-fr" @click="addLearn" v-show="liveBtn">加入学习</button>
                    <button class="f-fr" @click="comeLive"  v-show="!liveBtn" style="background:#4eb914;">进入直播</button>
                </div>
            </div>
            <!--<div class="update">更新中</div>-->
        </div>

        <!--内容区域-->
        <div class="classbody container clearfix">
            <Tabs value="name1" style="float: left!important;">
                <TabPane label="课程介绍" name="name1">
                    <div class="introduce">
                        <div class="name">课程介绍</div>
                        <div class="m-t-15">
                           <p>
                             {{courseDetailsData.profiles}}
                           </p>
                        </div>
                        <!--<div class="name m-t-30">课程目标</div>-->
                        <!--<div class="m-t-15">-->
                            <!--<p>{{courseDetailsData.courseTarget}}</p>-->
                        <!--</div>-->
                        <!--<div class="name m-t-30">适应人群</div>-->
                        <!--<div class="m-t-15">-->
                            <!--<p>{{courseDetailsData.adaptiveUser}}</p>-->
                        <!--</div>-->
                    </div>
                </TabPane>
                <TabPane label="课程目录" name="name2" v-if = "this.onorsome === 1">
                    <ul class="CourseList">
                        <li v-for="(item,index) in courseCatalogues" :key="index">
                            <Collapse>
                                <Panel name="1">
                                    <div class="title">
                                        <p>{{item.courseName}}</p>
                                    </div>
                                    <div slot="content" class="p-t-0 clearfix coursecontent">
                                        <Radio class="f-fl">{{item.courseName}}</Radio>
                                        <i class="ivu-icon ivu-icon-android-arrow-dropright-circle f-fr font-s20"></i>
                                        <div class="time f-fr">{{item.createTime}}</div>
                                    </div>
                                </Panel>
                            </Collapse>
                        </li>
                    </ul>
                </TabPane>
                <!--<TabPane label="学员评价" name="name3">-->
                    <!--<ul class="assessUl">-->
                        <!--<li class="clearfix" v-for="(item,index) in studentEvaluation" :key="index">-->
                            <!--<i class="avatarimg f-fl"><img :src="item.photo" alt=""></i>-->
                            <!--<div class="body f-fl">-->
                                <!--<div>-->
                                    <!--<span class="name">{{item.userName}}</span>-->
                                    <!--<span class="time">{{item.addTime}}</span>-->
                                <!--</div>-->
                                <!--<Rate v-model="item.commentIndex"></Rate>-->
                                <!--<p>-->
                                  <!--{{item.comments}}-->
                                <!--</p>-->
                            <!--</div>-->
                        <!--</li>-->
                    <!--</ul>-->
                <!--</TabPane>-->
                <!--<TabPane label="学员笔记" name="name4">-->
                    <!--<div class="notes">-->
                        <!--<ul class="notesUl">-->
                            <!--<li class="clearfix" v-for="(item,index) in studentNotes" :key="index">-->
                                <!--<i class="avatarimg f-fl"><img src="../assets/image/avatar1.png" alt=""></i>-->
                                <!--<div class="body f-fl">-->
                                    <!--<div>-->
                                        <!--<span class="name">兰诗涵</span>-->
                                        <!--<span class="f-fr">课时5</span>-->
                                    <!--</div>-->
                                    <!--<p class="desc">-->
                                        <!--重点知识记录，回来记得反复看。重点知识记录，回来记得反复看。-->
                                    <!--</p>-->
                                    <!--<p class="bottom clearfix">-->
                                        <!--<span class="time f-fl">2015-11-09  14:20:59</span>-->
                                        <!--<span class="f-fl">源自：判断推理精讲班 </span>-->
                                        <!--<span class="f-fl">章节：面试课程精讲</span>-->
                                        <!--<span class="f-fr">-->
                                            <!--<i class="ivu-icon ivu-icon-thumbsup"></i>-->
                                            <!--<span>137</span>-->
                                        <!--</span>-->
                                    <!--</p>-->
                                <!--</div>-->
                            <!--</li>-->
                        <!--</ul>-->
                    <!--</div>-->
                <!--</TabPane>-->
            </Tabs>
            <div style="float: left!important;margin-left: 13px;">
                <!--签到-->
                <!--<div class="Sign">-->
                    <!--<p>已连续签到<span>10</span>天</p>-->
                    <!--<button>签到</button>-->
                <!--</div>-->
                <!--班主任-->
                <v-headMaster :headMaster="teacherDetails"></v-headMaster>
                <!--最新学员-->
                <v-newStudent :newStudent="studentList" class="m-t-20"></v-newStudent>
                <!--学员动态-->
                <!--<v-studentDynamic :studentDynamic="studentList" class="m-t-20"></v-studentDynamic>-->
            </div>
        </div>

        <v-footer :footer="footer"></v-footer>

    </div>
</template>
<script>
    import Vue from 'vue';
    import top from '../components/top.vue';
    import search from '../components/search.vue';
    import breadcrumb from '../components/breadcrumb.vue';
    import subpageMenu from '../components/class/subpageMenu.vue';
    import classification from '../components/class/classification.vue';
    import searchVolume from '../components/class/searchVolume.vue';
    import headMaster from '../components/class/headMaster.vue';
    import newStudent from '../components/class/newStudent.vue';
    import studentDynamic from '../components/class/studentDynamic.vue';
    import footer from '../components/footer.vue';
    var faker = require("faker");
    export default {
        data() {
            return {
                type:1,
                recordType:1,
                collectName:'收藏',
                courseId: 0,
                onorsome:0,
                price:0,
                courseDetailsData:'',
                teacherDetails:{},
                studentList:[],
                courseCatalogues:[],
                studentEvaluation:[],
                studentNotes:[],
                top: {},
                search: {},
                subpageMenu:{},
                classification: {},
                searchVolume: {},
                headMaster: {},
                newStudent: {},
                studentDynamic: {},
                footer: {},
                rateValue: 0,
                xiaoxiao:'爱你',
                cityList: [
                    {
                        value: '最新笔记',
                        label: '最新笔记'
                    },
                    {
                        value: '热门笔记',
                        label: '热门笔记'
                    }
                ],
                model1: '',
                userId: 0,
                msg: '',
                oldInfo:'',
                personInfo:'',
                roomNo: '',
                userId:'',
                liveBtn:true,
                isBuy:'',
                memberId: '',
                test6:true
            };
        },
        created(){
        },
        mounted() {
          if(window.localStorage.msg)
          {
            this.msg = JSON.parse(window.localStorage.msg);
          }
          // 获取用户信息
          if(window.localStorage.userInfo)
          {
            this.userInfo = JSON.parse(window.localStorage.userInfo);
            this.userId = JSON.parse(window.localStorage.userInfo).userId;
          }
          // 获取用户绑定后的信息
          if(window.localStorage.memberInfo){
            this.memberInfo = JSON.parse(window.localStorage.memberInfo);
            this.memberId = JSON.parse(window.localStorage.memberInfo).memberId;
          }
          this.courseId = this.$route.query.courseId;
          this.onorsome = this.$route.query.onorsome;
          this.price = this.$route.query.price;
          this.courseDetailsLists();
        },
        beforeDestroy() {

        },
        components: {
            'v-top': top,
            'v-search': search,
            'breadcrumb':breadcrumb,
            'v-subpageMenu': subpageMenu,
            'v-classification': classification,
            'v-searchVolume': searchVolume,
            'v-headMaster': headMaster,
            'v-newStudent': newStudent,
            'v-studentDynamic': studentDynamic,
            'v-footer': footer
        },
        filters:{      //数据过滤器
        currency:function(x){
          try {
            let f_x1 = parseFloat(x);
            if (isNaN(f_x1)) {
              return x;
            }
            let f_x = Math.round(x * 100) / 100;
            let s_x = f_x.toString();
            let pos_decimal = s_x.indexOf('.');
            if (pos_decimal < 0) {
              pos_decimal = s_x.length;
              s_x += '.';
            }
            while (s_x.length <= pos_decimal + 1) {
              s_x += '0';
            }
            return s_x;
          } catch (e) {
            return '0.00';
          }
        }
      },
        methods: {
//          获取课程详情页面
          courseDetailsLists(){
            this.service.courseInfo(this.courseId,this.onorsome,this.userId).then(result => {
              this.courseDetailsData = result.course;
              this.vhallID = result.course.teacher.vhallUserId;
              this.vhallAccount = result.course.teacher.vhallUserAccount;

              this.roomNo = result.course.roomNo;


//              课程评价等级
              this.rateValue = result.course.courseIndex;
//              讲师信息
              this.teacherDetails = result.course.teacher;
//              最新学员
              this.studentList = result.course.studentList;
//              课程目录
              this.courseCatalogues = result.course.courseEntityList;
//              学员评价
              this.studentEvaluation = result.course.courseCommentList;
//              学员笔记
              this.studentNotes = result.course.courseNotesEntityList;
              console.log();
              if(result.course.queryIsMark  !== null){
                this.collectName = '已收藏';
              }else{
                this.collectName = '收藏';
              }
              this.isBuy = result.course.isBuy;
              if(this.isBuy === 1){
               this.liveBtn = false;
              }else{
                this.liveBtn = true;
              }
            }).catch(error => {
              this.$Loading.error();
            })
          },
          //  加入学习
          addLearn(){
              if(this.msg === '登陆成功！'){
                if(window.localStorage.memberInfo != null && window.localStorage.memberInfo != undefined){
                  if(this.price != 0 && this.isBuy !== 1){
                    this.$router.push({ path: 'orderPurchase', query: {courseId: this.courseId, onorsome:this.onorsome,roomNo: this.roomNo, vhallID:this.vhallID, vhallAccount:this.vhallAccount,userId:this.userId}});
                  }else{
                    let myurl="../../room/index.html"+"?"+"courseId="+this.courseId+"&onorsome="+this.onorsome + "&roomNo=" + this.roomNo + "&vhallID=" + this.vhallID + "&vhallAccount=" + this.vhallAccount+'&userId='+this.userId;
                    window.location.assign(encodeURI(myurl));
                  }
                }else{
                  this.$Message.error({
                    content: '请先绑定云联惠授权！ ',
                    duration: 5
                  });
                }
              }else{
                this.$Message.error({
                  content: '请登录成功后进行操作! ',
                  duration: 5
                });
                this.$router.push({path: 'login'});
              }

          },
//          进入直播页面
          comeLive(){
            let myurl="../../room/index.html"+"?"+"courseId="+this.courseId+"&onorsome="+this.onorsome + "&roomNo=" + this.roomNo + "&vhallID=" + this.vhallID + "&vhallAccount=" + this.vhallAccount+'&userId='+this.userId;
            window.location.assign(encodeURI(myurl));
          },
          // 判断用户类型回调函数
          checkAdult(itemData) {
            return itemData.text !=='讲师专区';
          },
          collectEvent(){
            console.log(this.collectName);
            if( this.collectName === '收藏' && this.test6){
              this.service.collegeCourseNotice(this.type, this.courseId, this.recordType, this.userId).then(result => {
                this.test6 = true;
                if(result.code === 0 ){
                  this.collectName = '已收藏';
                  this.$Message.success('恭喜你，成功收藏该课程！');
                }
              }).catch(error => {
                this.test6 = true;
                this.$Message.error({
                  content: error,
                  duration: 10
                });
              })
              this.test6 = false;
            }else if( this.collectName ==='已收藏' && this.test6){
              console.log(this.type+'===='+this.courseId+'===='+this.recordType+'===='+this.userId);
              this.service.collegeCourseDelete(this.type, this.courseId, this.recordType, this.userId).then(result => {
                this.test6 = true;
                if(result.code === 0 ){
                  this.collectName = '收藏';
                  this.$Message.success('您已取消收藏该课程！');
                }
              }).catch(error => {
                this.test6 = true;
                this.$Message.error({
                  content: error,
                  duration: 10
                });
              })
              this.test6 = false;
            }
          }
        },
        watch: {
          $route(to, from) {
            console.log(to.name);
            console.log(from.name);
          }
        }
    };
</script>

<style lang="less">
    .classHeaderMian{
        position: relative;
        background: #f7f7f7;
        padding: 15px;
        box-sizing: border-box;
        i.img{
            display: block;
            width: 520px;
            height: 350px;
            overflow: hidden;
            background-image: url('../assets/image/imgbg.jpg');
            background-repeat: no-repeat;
            background-size: 100% 100%;
            position: relative;
            img.bagImg{
                width: 100%;
                height: 100%;
            }
          .imgMask{
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            background: rgba(0,0,0,0.7);
            text-align: center;
            .maskText{
              padding-top: 130px;
              img{
                width: 50px;
              }
            }
          }
        }
        div.main{
            width: 650px;
            box-sizing: border-box;
            padding-left: 50px;
            padding-top: 60px;
            padding-right: 50px;
            .name{
                font-size: 24px;
                color: #343434;
                padding-bottom: 20px;
            }
            .ivu-rate{
                font-size: 15px;
            }
            .rates{
                .num{
                    font-size: 12px;
                    color: #7d7d7d;
                }
                .collection,.complaint,.share{
                    padding-left: 25px;
                    font-size: 15px;
                    span{
                        margin-left: 5px;
                        color: #7d7d7d;
                        font-size: 12px;
                    }
                }
            }
            .price{
                margin-top: 50px;
                color: #7d7d7d;
                font-size: 14px;
                span{
                    font-size: 24px;
                    color: #343434;
                }
            }
            /*加入按钮*/
            div.bottomMetas{
                padding-top: 70px;
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
        }
        /*更新中*/
        .update{
            position: absolute;
            right: 65px;
            top: 0;
            background: url("../assets/image/icon-up.png") no-repeat;
            width: 61px;
            height: 52px;
            text-align: center;
            line-height: 50px;
            font-size: 16px;
            color: #fff;
        }
    }
    /*内容区域*/
    .classbody{
        padding-top: 30px;
        padding-bottom: 30px;
        background: #ffffff;
        .ivu-tabs{
            width: 910px;
            background: #ffffff;
            height: inherit;
            .ivu-tabs-ink-bar{
                background-color: #ff8a0c;
            }
            .ivu-tabs-nav .ivu-tabs-tab{
                font-size: 18px;
                color: #3c3c3c;
            }
            .ivu-tabs-nav .ivu-tabs-tab-active,.ivu-tabs-nav .ivu-tabs-tab:hover{
                color: #ff8a0c;
            }
        }
        .ivu-tabs-tabpane{
            border: 1px solid #ededed;
            box-sizing: border-box;
            border-top: 0;
            /*介绍*/
            .introduce{
                padding: 25px 15px;
                .name{
                    padding-top: 0;
                    padding-left: 7px;
                    font-size: 16px;
                    color: #3c3c3c;
                    border-left: 5px solid #ff8a0c;
                }
                p{
                    font-size: 14px;
                    padding-bottom: 10px;
                    color: #3c3c3c;
                    text-indent: 14px;
                }
            }
            /*课程*/
            .CourseList{
                .ivu-collapse{
                    border: none;
                    border-bottom: 1px solid #dddee1;
                    .coursecontent{
                        padding: 0 15px 0 20px;
                        height: 50px;
                        line-height: 50px;
                    }
                    .coursecontent:hover{
                        background: #ffeee8;
                    }
                }
                .ivu-collapse-content>.ivu-collapse-content-box,.ivu-collapse-content{
                    padding: 0;
                }
                .ivu-collapse>.ivu-collapse-item>.ivu-collapse-header{
                    height: 57px;
                    line-height: 29px;
                    padding: 15px 20px;
                    box-sizing: border-box;
                    background: #f8f8f8;
                }
                .ivu-icon-arrow-right-b{
                    float: right;
                    margin-top: 10px;
                }
                .time{
                    margin-right: 15px;
                    font-size: 14px;
                    color: #a6a6a6;
                }
                .ivu-icon-android-arrow-dropright-circle{
                    font-size: 16px;
                    line-height: 50px;
                }
            }
            /*评价*/
            .assessUl{
                li{
                    border-bottom: 1px solid #e5e5e5;
                    padding: 25px 15px;
                    i.avatarimg{
                        width: 52px;
                        height: 52px;
                        border-radius: 50%;
                        display: block;
                        overflow: hidden;
                        img{
                            width: 100%;
                            height: 100%;
                            border-radius: 50%;
                        }
                    }
                    .body{
                        width: 94%;
                        padding-left: 20px;
                        font-size: 12px;
                        .name{
                            color: #3c3c3c;
                        }
                        .time{
                            color: #7d7d7d;
                            padding-left: 20px;
                        }
                        .ivu-rate{
                            font-size: 15px;
                            padding-top: 5px;
                        }
                        p{
                            padding-top: 15px;
                            font-size: 14px;
                            color: #3c3c3c;
                        }
                    }
                }
            }
            /*笔记*/
            .notes{
                .top{
                    padding: 5px 20px;
                    height: 40px;
                    line-height: 30px;
                    box-sizing: border-box;
                    .ivu-select-selection{
                        height: 22px;
                        .ivu-select-placeholder{
                            height: 22px;
                            line-height: 22px;
                        }
                    }
                    .ivu-input-group{
                        margin-top: 2px;
                        width: 200px!important;
                        height: 22px!important;
                        input{
                            height: 23px!important;
                            border-right: none;
                            outline: none;
                        }
                        .ivu-input-group-append{
                            border-left: none;
                            height: 23px;
                        }
                        button{
                            background: #ffffff;
                            height: 21px;
                            line-height: 21px;
                            padding: 0 10px;
                            border-radius: inherit;
                            border: none;
                            margin-top: -5px;
                        }
                    }
                }
                .notesUl{
                    li{
                        padding: 15px;
                        border-bottom:1px solid #e5e5e5;
                        i.avatarimg{
                            width: 50px;
                            height: 50px;
                            display: block;
                            overflow: hidden;
                            img{
                                width: 100%;
                                height: 100%;
                            }
                        }
                        .body{
                            width: 94%;
                            box-sizing: border-box;
                            padding-left: 15px;
                            font-size: 12px;
                            .name{
                                color: #7d7d7d;
                            }
                            .desc{
                                margin-top: 15px;
                                font-size: 14px;
                                color: #3c3c3c;
                            }
                            .bottom{
                                margin-top: 35px;
                                color: #aaaaaa;
                                span{
                                    margin-right: 10px;
                                }
                                span.f-fr{
                                    font-size: 16px;
                                    margin-right: 0;
                                    span{
                                        margin-right: 0;
                                        font-size: 12px;
                                    }
                                }
                            }
                        }

                    }
                }
            }
        }
        /*签到*/
        .Sign{
            margin-top: 40px;
            padding: 25px 0;
            width: 276px;
            height: 112px;
            border: 1px solid #dfdfdf;
            text-align: center;
            p{
                font-size: 14px;
                color: #3c3c3c;
                span{
                    padding: 0 5px;
                    color: #ff8a0c;
                }
            }
            button{
                margin-top: 15px;
                width: 101px;
                height: 30px;
                line-height: 30px;
                font-size: 14px;
                border: none;
                border-radius: 5px;
                outline: none;
                color: #ffffff;
                background: #ff8a0c;
                cursor: pointer;
            }
        }
    }

</style>
