<!-- HTML 关于我们 / 关于讲师 -->
<template>
    <div class="aboutLecturers">
        <div class="cont">
            <div class="content-top content-top-class">
                <p class="conp1">MAKE THE CLASS MORE EXCITING</p>
                <p class="conp2">让课堂更精彩</p>
                <p class="conp3">Here, the world is right in front of us</p>
            </div>

            <div class="container digitalCircles">
                <div class="bg">
                </div>
                <div class="canvas1">
                    <canvas id="canvas1" width='340' height='350'></canvas>
                    <div>
                        <span>2</span>
                        <label>诚信</label>
                        <img src="../../assets/image/two-icon.png"/>
                        <div>
                            <p>老师可以按照自己的教学思路，自由组合不同</p>
                            <p>教学手段，实现各种不同的教学方法，比如谈</p>
                            <p>话式、研讨式、活动式、竞赛式等等。即使是</p>
                            <p>同一份内容，也能教出不同的效果。</p>
                        </div>
                    </div>
                </div>
                <div class="canvas2">
                    <canvas id="canvas2" width='360' height='400'></canvas>
                    <div>
                        <span>3</span>
                        <label>共享</label>
                        <img src="../../assets/image/three-icon.png"/>
                        <div class="m-l-10">
                            <p>老师可以按照自己的教学思路，自由</p>
                            <p>组合不同教学手段，实现各种不同的</p>
                            <p>教学方法，比如谈话式、研讨式、活</p>
                            <p>动式、竞赛式等等。即使是同一份内</p>
                            <p>容，也能教出不同的效果。</p>
                        </div>

                    </div>
                </div>
                <div class="canvas3">
                    <canvas id="canvas3" width='420' height='375'></canvas>
                    <div>
                        <span>4</span>
                        <label>高校</label>
                        <img src="../../assets/image/four-icon.png"/>
                        <div>
                            <p>老师可以按照自己的教学思路，自由组合不同</p>
                            <p>教学手段，实现各种不同的教学方法，比如谈</p>
                            <p>话式、研讨式、活动式、竞赛式等等。即使是</p>
                            <p>同一份内容，也能教出不同的效果。</p>
                        </div>
                    </div>
                </div>
                <div class="canvas4">
                    <canvas id="canvas4" width='350' height='400'></canvas>
                    <div>
                        <span>5</span>
                        <label>专业</label>
                        <img src="../../assets/image/five-icon.png"/>
                        <div class="m-l-5">
                            <p>老师可以按照自己的教学思路，自由</p>
                            <p>组合不同教学手段，实现各种不同的</p>
                            <p>教学方法，比如谈话式、研讨式、活</p>
                            <p>动式、竞赛式等等。即使是同一份内</p>
                            <p>容，也能教出不同的效果。</p>
                        </div>
                    </div>
                </div>
                <div class="canvas5">
                    <canvas id="canvas5" width='350' height='350'></canvas>
                    <div>
                        <span>1</span>
                        <label>创新</label>
                        <img src="../../assets/image/one-icon.png"/>
                        <div>
                            <p>老师可以按照自己的教学思路，自由组合不同</p>
                            <p>教学手段，实现各种不同的教学方法，比如谈</p>
                            <p>话式、研讨式、活动式、竞赛式等等。即使是</p>
                            <p>同一份内容，也能教出不同的效果。</p>
                        </div>
                    </div>
                </div>
                <div class="zhongxin">
                    <img src="../../assets/image/shishi1.png">
                </div>
            </div>
        </div>

        <!-- 人气讲师 -->
        <div class="popular-lecturer clearfix">
            <!-- left 详情 -->
            <div class="lecturer-details f-fl">
                <div class="details clearfix f-fr">
                    <div class="f-fl" style="width: 235px; min-height: 300px; border: 0px #ccc solid;">
                        <label>{{ lecColInfo.username }}</label>
                        <p>云联惠认证讲师</p>
                        <p>主讲课程：商业模式</p>
                        <p>个人格言：追求永不止步！</p>
                        <span class="brief">
                          {{lecColInfo.profiles}}
                        </span>
                        <!--<Button type="warning">查看该讲师课程 &gt;</Button>-->
                    </div>
                  <div class="introductPic f-fr m-r-10">
                    <img :src="lecColInfo.head">
                  </div>
                </div>
            </div>
            <!-- right list -->
            <div class="lecturer-right f-fl">
                <div class="lecturer-list">
                    <div class="content-top" style="margin: 60px 0 45px 0;">
                        <p class="conp1">POPULAR LECTURER</p>
                        <p class="conp2">人气讲师</p>
                        <p class="conp3">Here, the world is right in front of us</p>
                    </div>
                    <div class="brief">
                        大咖云集，知识分享的开发者技术社区云联大爱生生不息
                    </div>
                  <!--讲师招募-->
                    <ul class="lecturer-ul clearfix">
                      <li v-if="!teacherListData">暂无人气讲师推荐。请稍后</li>
                      <li  class="portrait" v-bind:class="{'active':flag == index}" v-for="(item,index) in teacherListData" :key="index"  @click="teacherDetail(item,index)">
                        <span>{{item.username}}</span>
                        <div class="portrait">
                          <img :src="item.head">
                        </div>
                      </li>
                    </ul>
                </div>
            </div>
        </div>

        <!-- 专业之选 -->
        <div class="content-top content-top-class" style="margin-top: 45px;">
            <p class="conp1">MAJOR CHOICE</p>
            <p class="conp2">专业之选</p>
            <p class="conp3">Here, the world is right in front of us</p>
        </div>

        <div class="major-modular">
            <div class="major-details clearfix">
                <img class="f-fl" src="../../assets/image/major-img.jpg" >
                <div class="major-brief f-fr">
                    <span>从0到1一枚专业授课者的修行之路</span>
                    <p class="m-t-30">历经深度企业调研，针对传统企业发展现状及困境，深入挖掘转型痛点，联合电商资深人士倾力打造，帮助传统企业真正落地电商，实现企业的顺利转型升级！针对网商高端人士的管理研修班，学员云集淘宝和天猫平台年交易上千万、知名淘品牌或是类目排名前列的网商企业或品牌商家负责人。通过对阿里集团高级管理层、业内专家、成功网商以及知名培训师等优势资源的整合，以现场授课、圆桌会议、课题答辩、校友会、系列班等多元化学习模式，全力打造最具领导力网商！</p>
                </div>
                <span style="color: #dbdbdb; font-size: 16px; position: absolute; bottom: 0; right: 0; letter-spacing: 2px;">
                    >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
                </span>
            </div>
            <div class="major-list m-t-20">
                <ul class="clearfix">
                    <li>
                        <div class="op"></div>
                        <img class="f-fl" src="../../assets/image/major-img.jpg" >
                    </li>
                    <li>
                        <div class="op"></div>
                        <img class="f-fl" src="../../assets/image/major-img.jpg" >
                    </li>
                    <li>
                        <div class="op"></div>
                        <img class="f-fl" src="../../assets/image/major-img.jpg" >
                    </li>
                    <li>
                        <div class="op"></div>
                        <img class="f-fl" src="../../assets/image/major-img.jpg" >
                    </li>
                </ul>
                <p class="m-t-20">我们的经营理念：为客牟利，促进销售，培养行业领袖，传递财富，传承共赢，传播事业博爱。历经深度企业调研，针对传统企业发展现状及困境，深入挖掘转型痛点，联合电商资深人士倾力打造，帮助传统企业真正落地电商，实现企业的顺利转型升级！针对网商高端人士的管理研修班，学员云集淘宝和天猫平台年交易上千万、知名淘品牌或是类目排名前列的网商企业或品牌商家负责人。</p>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        props: {
            top: {}
        },
        data() {
            return {
              usertype:1,
              sidx:'attendCount',
              flag:0,
              order:'desc',
              page:1,
              limit:6,
              teacherListData:'',
              userId:0,
              lecColInfo:''
            };
        },
        mounted() {
            this.circles();
            this.aboutTeachers();
        },
        beforeDestroy() {

        },
        methods: {
            exchange (str) {
            let bbq = str;

            if(bbq!=undefined){
              bbq = bbq.replace(/&lt;/g, '<');
              bbq = bbq.replace(/&gt;/g, '>');
              bbq = bbq.replace(/&nbsp;/g,'  ');
              bbq = bbq.replace(/&amp;/g,'&');
              bbq = bbq.replace(/&quot;/g,'"');

              bbq=bbq.replace("</*[^<>]*>", '');
              bbq=bbq.replace(" ", '');
              bbq=bbq.replace("::", ':');
              bbq=bbq.replace(" ", '');
              bbq=bbq.replace("<>", '');
              bbq=bbq.replace("</>", '');
              return bbq;
            }
          },
            circles(){
                var ctx1 = document.getElementById('canvas1').getContext('2d');
                var ctx2 = document.getElementById('canvas2').getContext('2d');
                var ctx3 = document.getElementById('canvas3').getContext('2d');
                var ctx4 = document.getElementById('canvas4').getContext('2d');
                var ctx5 = document.getElementById('canvas5').getContext('2d');
                //扇形
                CanvasRenderingContext2D.prototype.sector = function (x, y, radius, sDeg, eDeg) {
// 初始保存
                    this.save();
// 位移到目标点
                    this.translate(x, y);
                    this.beginPath();
// 画出圆弧
                    this.arc(0,0,radius,sDeg, eDeg);
// 再次保存以备旋转
                    this.save();
// 旋转至起始角度
                    this.rotate(eDeg);
// 移动到终点，准备连接终点与圆心
                    this.moveTo(radius,0);
// 连接到圆心
                    this.lineTo(0,0);
// 还原
                    this.restore();
// 旋转至起点角度
                    this.rotate(sDeg);
// 从圆心连接到起点
                    this.lineTo(radius,0);
                    this.closePath();
// 还原到最初保存的状态
                    this.restore();
                    return this;
                }

                var deg = Math.PI/180;
                ctx1.sector(0,350,350,270*deg,342*deg);
                ctx1.fillStyle="#D74A96";
                ctx1.fill();
                ctx2.sector(0,110,350,342*deg,54*deg);
                ctx2.fillStyle="#563F91";
                ctx2.fill();
                ctx3.sector(210,20,350,54*deg,126*deg);
                ctx3.fillStyle="#00A1B4";
                ctx3.fill();
                ctx4.sector(350,110,350,126*deg,198*deg);
                ctx4.fillStyle="#E0E100";
                ctx4.fill();
                ctx5.sector(350,350,350,198*deg,270*deg);
                ctx5.fillStyle="#EE7400";
                ctx5.fill();
            },
            aboutTeachers(){
              this.service.aboutTeacher(this.usertype, this.sidx, this.order, this.page, this.limit).then(result => {
                this.teacherListData = result.page.list;
                if(result.page.list){
                  this.userId = result.page.list[0].userId;
                  this.service.lecInfo(this.userId).then(result => {
                    console.log(result);
                  this.lecColInfo = result.user;
                  }).catch(error => {
                    this.$Loading.error();
                  })
                }
              }).catch(error => {
                this.$Loading.error();
              });
            },
            teacherDetail(item,index){
              this.flag = index;
              this.userId = item.userId;
                this.service.lecInfo(this.userId).then(result => {
                  this.lecColInfo = result.user;
                }).catch(error => {
                  this.$Loading.error();
                })
            }
        }
    };



</script>

<style lang="less">
    .aboutLecturers {
        .cont {
            width: 1200px;
            margin: 60px auto 0 auto;
        }
        .major-modular {
            width: 1200px;
            min-height: 500px;
            margin: 65px auto 100px auto;
            .major-details {
                position: relative;
                img {
                    width: 525px;
                    height: 418px;
                    background-color: #eeeeee;
                }
                .major-brief {
                    width: 596px;
                    margin-top: 55px;
                    span {
                        color: #333333;
                        font-size: 18px;
                    }
                    p {
                        color: #666666;
                        font-size: 12px;
                        line-height: 22px;
                    }
                }
            }
            .major-list {
                width: auto;
                min-height: 183px;
                ul {
                    margin-left: -5px;
                    li {
                        width: 296px;
                        height: 183px;
                        background-color: #eeeeee;
                        margin-left: 5px;
                        float: left;
                        position: relative;
                        img {
                            width:100%;
                            height: 100%;
                        }
                        .op {
                            width: 100%;
                            height: 100%;
                            background: rgba(0,0,0,0.6);
                            position: absolute;
                            top: 0;
                            left: 0;
                            display: block;
                        }
                    }
                    li:hover {
                        .op {
                            display: none;
                        }
                    }
                }
                p {
                    color: #666666;
                    line-height: 22px;
                }
            }
        }
    }
    .conp2 {
        font-size: 25px;
        color: #ff8a0c;
    }

    /*part1*/
    .content-top {
        display: block;
    }
    .content-top p{
        padding: 2px 0;
        text-align: center;
        display: block;
    }
    .conp1{
        font-size: 14px;
        color: #999;
    }
    .conp2{
        font-size: 25px;
        color: #ff8a0c;
    }
    .conp3 {
        font-size: 8px;
        color: #dddddd;
    }
    .conp4{
        font-size: 14px;
        color: #333333;
        padding-top: 30px;
    }
    .fenxiao-top img{
        height: 560px;
        margin-top:30px;
        margin-left:23%;
    }
    .fenxiao-center{
        height:600px;
        background-color:#f3f5f7;
        display: block;
    }

    .bg{
        width:460px;
        height:460px;
        background-image:url("../../assets/image/shihsikan.png");
        background-size:100% 100%;
        margin:130px auto;
    }

    .canvas1{
        width:340px;
        height:350px;
        position:absolute;
        top: -124px;
        right: 257px;
        z-index:2;
    }
    .digitalCircles{
        width:1200px;
        height:600px;
        margin:0 auto;
        position:relative;
        canvas{
            display: none;
        }
    }
    .canvas1:hover #canvas1{
        display:block;
        z-index:9;
    }
    .canvas2:hover #canvas2{
        display:block;
    }
    .canvas3:hover #canvas3{
        display:block;
    }
    .canvas4:hover #canvas4{
        display:block;
    }
    .canvas5:hover #canvas5{
        display:block;
    }
    .canvas2{
        width:360px;
        height:400px;
        position:absolute;
        top: 117px;
        right: 243px;
        z-index:3;
    }
    .canvas3{
        width:420px;
        height:375px;
        position:absolute;
        top: 210px;
        left: 388px;
        z-index:4;
    }
    .canvas4{
        width:350px;
        height:400px;
        position:absolute;
        top: 118px;
        left: 257px;
        z-index:5;
    }
    .canvas5{
        width:350px;
        height:350px;
        position:absolute;
        top: -123px;
        left: 253px;
        z-index:6;
    }
    .zhongxin{
        width:245px;
        height:245px;
        border-radius:50%;
        position:absolute;
        top: 107px;
        left: 478px;
        overflow:hidden;
        z-index:10;
    }
    .zhongxin img{
        width:100%;
        height:100%;
    }
    /*--------------圆角 诚信------------*/
    .canvas1 span{
        position:absolute;
        top: 100px;
        left:150px;
        z-index:10;
        font-size: 28px;
        color: #ffffff;
    }
    .canvas1  label{
        position: absolute;
        top: 120px;
        left: 76px;
        z-index: 10;
        font-size: 22px;
        color: #ffffff;
        font-family: 宋体;
    }
    .canvas1 img{
        position:absolute;
        top: 80px;
        left:80px;
        z-index:10;
        height:35px;
    }
    .canvas1 p{
        position:relative;
        top: -190px;
        left:40px;
        z-index:10;
        color: #ffffff;
        font-size: 11px;
    }
    .canvas1 div{
        display: none;
    }
    /*--------------圆角 共享------------*/
    .canvas2 span{
        position:absolute;
        top: 120px;
        left:140px;
        z-index:10;
        font-size: 28px;
        color: #ffffff;
    }
    .canvas2 label{
        position: absolute;
        top: 136px;
        left: 200px;
        z-index: 10;
        font-size: 22px;
        color: #ffffff;
        font-family: 宋体;
    }
    .canvas2 img{
        position:absolute;
        top: 90px;
        left:204px;
        z-index:10;
        height:35px;
    }
    .canvas2 div div{
        position:absolute;
        top:176px;
        left:110px;
        z-index:10;
        color: #ffffff;
        font-size: 11px;
        line-height: 16px;
    }
    .canvas2 div{
        display: none;
    }
    /*--------------圆角 高校------------*/
    .canvas3 span{
        position:absolute;
        top: 150px;
        left:208px;
        z-index:10;
        font-size: 28px;
        color: #ffffff;
    }
    .canvas3 label{
        position: absolute;
        top: 190px;
        left: 194px;
        z-index: 10;
        font-size: 22px;
        color: #ffffff;
        font-family: 宋体;
    }
    .canvas3 img{
        position:absolute;
        top: 220px;
        left:198px;
        z-index:10;
        height:35px;
    }
    .canvas3 div div{
        position:absolute;
        top: 260px;
        left:100px;
        z-index:10;
        color: #ffffff;
        font-size: 11px;
        line-height: 16px;
    }
    .canvas3 div{
        display: none;
    }

    /*--------------圆角 专业------------*/
    .canvas4 span{
        position:absolute;
        top: 137px;
        left:200px;
        z-index:10;
        font-size: 28px;
        color: #fff;
    }
    .canvas4 label{
        position: absolute;
        top: 152px;
        left: 106px;
        z-index: 10;
        font-size: 22px;
        color: #fff;
        font-family: 宋体;
    }
    .canvas4 img{
        position:absolute;
        top: 110px;
        left:113px;
        z-index:10;
        height:35px;
    }
    .canvas4 div div{
        position:absolute;
        top: 190px;
        left:34px;
        z-index:10;
        color: #fff;
        line-height: 16px;
        font-size: 11px;
    }
    .canvas4 div{
        display: none;
    }

    /*--------------圆角 创新------------*/
    .canvas5 span{
        position:absolute;
        top: 105px;
        left:270px;
        z-index:10;
        font-size: 28px;
        color: #ffffff;
    }
    .canvas5 label{
        position: absolute;
        top: 120px;
        left: 186px;
        z-index: 10;
        font-size: 22px;
        color: #ffffff;
        font-family: 宋体;
    }
    .canvas5 img{
        position:absolute;
        top: 80px;
        left:190px;
        z-index:10;
        height:35px;
    }
    .canvas5 div div{
        position:absolute;
        top: 175px;
        left:84px;
        z-index:10;
        color: #ffffff;
        font-size: 11px;
        line-height: 16px;
    }
    .canvas5 div{
        display: none;
    }

    .canvas1:hover div{
        display:block;
        z-index:10;
    }
    .canvas2:hover div{
        display:block;
        z-index:10;
    }
    .canvas3:hover div{
        display:block;
        z-index:10;
    }
    .canvas4:hover div{
        display:block;
        z-index:10;
    }
    .canvas5:hover div{
        display:block;
        z-index:10;
    }
    .popular-lecturer {
        width: auto;
        height: 623px;
        background-color: #f6f7fb;
        overflow: hidden;
        margin-top: 90px;
        margin-bottom: 90px;
        .lecturer-details {
            width: 50%;
            height:623px;
            background: url("../../assets/image/lecturer-bg.jpg") no-repeat;
            background-size: 100% 100%;
            .details {
                border: 0px #ccc solid;
                width: 590px;
                height: 623px;
                font-size: 14px;
                label {
                    display: inline-block;
                    border-bottom: 4px #ff8a0c solid;
                    font-size: 22px;
                    color: #333333;
                    padding-bottom: 2px;
                    font-weight: 400;
                    margin: 60px 0 15px 0;
                }
                .brief {
                    display: inline-block;
                    margin: 15px 0;
                    color: #999999;
                }
              .introductPic{
                width: 340px;
                height: 622px;
                /*background-image: url('../../assets/image/imgbg.jpg');*/
                /*background-repeat: no-repeat;*/
                /*background-size: 100% 100%;*/
                img {
                  width: 100%;
                  height: 100%;
                }
              }
            }
        }
        .lecturer-right {
            width: 50%;
            height:623px;
            .lecturer-list {
                width: 620px;
                height: 623px;
                .brief {
                    width: 275px;
                    margin: 0 auto;
                    font-size: 16px;
                    color: #333333;
                    text-align: center;
                }
                .lecturer-ul {
                    margin: 95px 0 0 -5px;
                    .active {
                        border: 3px #ff8a0c solid;
                        span {
                            background-color: #ff8a0c;
                            color: white;
                        }
                    }
                    li {
                        width: 160px;
                        height: 113px;
                        border: 3px #dbdbdb solid;
                        float: left;
                        margin-left: 45px;
                        position: relative;
                        background-color: white;
                        margin-bottom: 10px;
                        text-align: center;
                        cursor: pointer;
                        span {
                            display: inline-block;
                            min-width: 60px;
                            height: 60px;
                            line-height: 60px;
                            background-color: #dbdbdb;
                            color: #666666;
                            font-size: 13px;
                            border-radius: 50%;
                            position: absolute;
                            /*padding: 0 8px;*/
                            top: 23px;
                            left: -30px;
                            overflow: hidden;
                        }
                        .portrait {
                            width: 154px;
                            height: 107px;
                            background-image: url('../../assets/image/imgbg.jpg');
                            background-repeat: no-repeat;
                            background-size: 100% 100%;
                            overflow: hidden;
                            img {
                                width: 100%;
                            }
                        }

                    }
                    li:hover {
                        border: 3px #ff8a0c solid;
                        span {
                            background-color: #ff8a0c;
                            color: white;
                        }
                    }
                }
            }
        }
    }


</style>
