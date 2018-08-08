<template>
  <div class="livePage">
    <div class="livePageHeader">
      <div class="livePageHeadleft" @click="goBackPage" style="cursor: pointer">《</div>
      <div class="livePageHeadcenter">
        课程：{{courseLiveData.courseName}}
      </div>
      <div class="livePageHeadright">
        <img src="../assets/image/yy1.png" alt="" />
      </div>
    </div>
    <div class="livePageWrap">
      <!----left-->
      <div class="livePageCenterLeft">
        <div class="person clearfix">
          <img :src="courseLiveData.teacherPhoto" alt="" />
          <div class="perinfo">
            <p class="name">{{courseLiveData.teacherName}}</p>
            <p>讲师级别：{{courseLiveData.adaptiveUser}}</p>
          </div>
        </div>
        <div class="kcjs">
          课程介绍：{{courseLiveData.profiles}}
        </div>
        <div class="zaixian">
          在线用户（0/300）
        </div>
      </div>
      <!---视频---->
      <div class="livePageCenterCenter pos-re">
        <!--<div class="inner" id="neplayer">-->
          <!--<video id="myVideo" class="video-js" x-webkit-airplay="allow" webkit-playsinline controls-->
                 <!--poster="//nos.netease.com/vod163/poster.png" preload="auto" data-setup="{}" autoplay style="width: 100%;height: 100%;">-->
          <!--</video>-->
        <!--</div>·-->
        <div class="player" style="height: 100%; margin: 0 296px 0 270px; background-color: #000000;">
          <video-player class="vjs-custom-skin" :options="playerOptions" style="width: 100%;height: 100%;">
          </video-player>
        </div>
      </div>
      <!-----right--->
      <div class="livePageCenterRight" style="    border-left: 1px solid #000000;">
        <Tabs value="笔记" class="mulubox">
          <TabPane label="笔记" name="笔记">
            <div class="note contTab2">
              <textarea placeholder="请输入笔记内容..." v-model="noteContent"></textarea>
              <button class="but" @click="noteSub">保存</button>
            </div>
          </TabPane>
          <TabPane label="问答" name="问答">
            <div class="interlocution contTab3">
              <textarea placeholder="请输入问题内容..." v-model="askContent"></textarea>
              <button class="but1" @click="askSub">发布</button>
            </div>
          </TabPane>
          <TabPane label="聊天" name="聊天">
            <div>
              <div class="zytlbox">
                <!--<p class="zytlinfo">大家可自由讨论！</p>-->
                <!--<ul>-->
                  <!--<li>-->
                    <!--<p class="nicheng">-->
                      <!--喜欢猫咪的你（14:30:25）-->
                    <!--</p>-->
                    <!--<p class="context">-->
                      <!--这个课程怎么样！<br />-->
                      <!--让我更加深刻的了解运会连！让我更加深刻的了解运会连！-->
                    <!--</p>-->
                  <!--</li>-->
                  <!--<li>-->
                    <!--<p class="nicheng">-->
                      <!--喜欢猫咪的你（14:30:25）-->
                    <!--</p>-->
                    <!--<p class="context">-->
                      <!--这个课程怎么样！<br />-->
                      <!--让我更加深刻的了解运会连！让我更加深刻的了解运会连！-->
                    <!--</p>-->
                  <!--</li>-->
                <!--</ul>-->
              <!--</div>-->
              <!--<div class="shuru">-->
                <!--<div class="srleft"></div>-->
                <!--<input type="text" class="concenter" placeholder="在此输入聊天文字"/>-->
                <!--<input type="submit" class="fsright" value="发送"/>-->
              </div>
            </div>
          </TabPane>
        </Tabs>
      </div>
    </div>
  </div>
</template>

<script>
  require('video.js/dist/video-js.css');
  require('vue-video-player/src/custom-theme.css');
  require('videojs-flash');
  export default {
      data() {
        return {
          ShowBlocText:"隐藏",
          isShowBlock:false,
          courseId:0,
          courseLiveData:{},
          courseCatalogues:[],
          userId: 4,
          myVideos: undefined,
          askContent:'',
          noteContent:'',
          playerOptions: {
            sources:[],
            techOrder: ['flash'],
            autoplay: true,
            controls: true,
            preload: 'auto',
            fluid: false,
            muted: false,
            width: '100%',
            height: '100%',
            language: 'en',
            poster: "../src/assets/image/imgbg.jpg",
//            notSupportedMessage: '此视频暂无法播放，请稍后再试', //允许覆盖Video.js无法播放媒体源时显示的默认信息。
//        controlBar: {
//          timeDivider: true,
//          durationDisplay: true,
//          remainingTimeDisplay: false,
//          fullscreenToggle: true  //全屏按钮
//        }
          }
        };
      },
      components: {
//        videoPlayer
      },
      mounted() {
        // 设置页面宽度
        let wH=document.documentElement.clientHeight;// 浏览器可见区域高度
        let obj=document.getElementsByClassName('livePageWrap')[0];//中间显示区域高度
        let zytlboxs=document.getElementsByClassName('zytlbox')[0];//左侧聊天区域
  //          let contTab1=document.getElementsByClassName('contTab1')[0];
        let contTab2=document.getElementsByClassName('contTab2')[0];
        let contTab3=document.getElementsByClassName('contTab3')[0];

        let zytlbox = wH-72-235-60;//左侧聊天区域
        let interContentH= wH-72; // 中间显示区域高度
  //          let contTabs1= wH-150;
        let contTabs2= wH-130;
        let contTabs3= wH-130;

        obj.style.height=interContentH+'px'; //中间显示区域高度
        zytlboxs.style.height=zytlbox+'px'; //左侧聊天区域高度
  //          contTab1.style.height=contTabs1+'px'; //课程目录
        contTab2.style.height=contTabs2+'px';
        contTab3.style.height=contTabs3+'px';

        this.courseId = this.$route.query.courseId;
        this.seriesCourseId = this.$route.query.seriesCourseId;
        this.onorsome = this.$route.query.onorsome;
        this.courseLive();
      },
      methods: {
        showReplyBlock:function(){
          this.isShowBlock = !this.isShowBlock;
          if(this.isShowBlock){
            this.ShowBlocText = "隐藏"
          }else{
            this.ShowBlocText = "显示"
          }
        },
        result(){
          let a= 0;
          if( a != 0){
            return 0;
          }
        },
        courseLive(){
          this.service.courseInfo(this.courseId,this.onorsome,this.userId).then(result => {
            this.courseLiveData = result.course;
            this.playerOptions.sources=  [{
              src :  result.course.liveUrl,
              type: 'rtmp/mp4',
            }];
//            this.playerOptions.sources[0].src = 'rtmp://v1236c783.live.126.net/live/27233ee6815f4047b4d6397ed80a5742';
            console.log(result.course.liveUrl);
          }).catch(error => {
            this.$Loading.error();
          })
        },
        goBackPage(){
          this.$router.go(-1);  //返回上一页
        },
        noteSub(){
          this.courseId = this.$route.query.courseId;
          if( this.noteContent === ''){
            return false;
          }else{
            this.service.noteContentData(this.courseId, this.userId, this.noteContent).then(result => {
              if(result.code === 0){
                this.$Message.success('笔记保存成功');
              }
            }).catch(error => {
              this.$Loading.error();
            })
          }
        },
        askSub(){
          this.courseId = this.$route.query.courseId;
          if( this.noteContent === ''){
            return false;
          }else{
            this.service.interReplay(this.courseId, this.userId, this.askContent).then(result => {
              if(result.code === 0){
                this.$Message.success('问题发布成功');
              }
            }).catch(error => {
              this.$Loading.error();
            })
          }
        }
      },
      destroyed() {
      },
};
</script>

<style lang="less">
  .vjs-custom-skin > .video-js{
    height: 100%;
  }
  .livePage{
    .livePageHeader {
      height: 72px;
      box-sizing: border-box;
      border-top: 5px solid #ff8a0c;
      border-bottom: solid 1px #000;
      padding: 2px 15px;
      background-color: #191f27;
      .livePageHeadleft {
        float: left;
        width: 80px;
        line-height: 70px;
        font-size: 30px;
        color: #787b80;
        border-right: solid 1px #2e343c;
        box-sizing: border-box;
        padding-left: 8px;
      }
      .livePageHeadcenter{
        float: left;
        margin: 0;
        font-weight: 700;
        line-height: 70px;
        font-size: 20px;
        color: #fff;
        box-sizing: border-box;
        padding-left: 10px;
      }
      .livePageHeadright {
        float: right;
        width: 260px;
        height: 70px;
        line-height: 70px;
        text-align: center;
        box-sizing: border-box;
        padding: 10px;
      }
      .livePageHeadright img {
        height: 100%;
      }
    }
    .livePageWrap{
      box-sizing: border-box;
      border-top: 5px solid #2e343c;
      .livePageCenterLeft {
        float: left;
        width: 270px;
        box-sizing: border-box;
        height: 100%;
        background-color: #191f27;
        position: relative;
        z-index: 30;
        .person {
          margin: 0 auto;
          width: 240px;
          box-sizing: border-box;
          padding: 25px 5px;
          border-bottom: solid 2px #2e343c;
          img {
            float: left;
            width: 60px;
            height: 60px;
            border-radius: 50%;
            background-repeat: no-repeat;
            background-size: 100% 100%;
            background-image: url('../assets/image/imgbg.jpg');
          }
          .perinfo {
            width: 163px;
            float: right;
            font-size: 12px;
            color: #d6d6d7;
            line-height: 26px;
            margin-top: 5px;
            margin-left: 5px;
          }
          .perinfo p {
            margin: 0;
          }
        }
        .name {
          font-size: 14px;
          color: #fff;
          line-height: 26px;
        }
        .kcjs {
          height: 90px;
          -webkit-box-sizing: border-box;
          box-sizing: border-box;
          padding: 15px;
          margin-bottom: 10px;
          color: #fff;
          font-size: 14px;
          line-height: 24px;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
        }
        .zaixian {
          padding-left: 15px;
          height: 36px;
          width: 100%;
          box-sizing: border-box;
          background-color: #2f353d;
          line-height: 36px;
          font-size: 14px;
          color: #82878c;
        }
        .zytlbox {
          padding-left: 15px;
          padding-right: 15px;
          height: 488px;
          overflow: auto;
          width: 100%;
          box-sizing: border-box;
          line-height: 36px;
          font-size: 12px;
          color: #82878c;
        }
        .zytlbox ul {
          overflow: hidden;
          height: auto;
          list-style: none;
          margin: 0;
          padding: 0;
        }
        .zytlbox li {
          width: 100%;
          list-style: none;
          margin: 0;
          padding: 0;
          margin-bottom: 10px;
        }
        .nicheng {
          line-height: 24px;
          margin-bottom: 0;
        }
        .context {
          line-height: 20px;
          margin: 0;
          color: #fff;
        }
        .shuru {
          width: 100%;
          height: 40px;
          background-color: #fff;
          box-sizing: border-box;
          padding: 8px 6px;
          position: relative;
          /*左侧表情*/
          .srleft {
            width: 28px;
            height: 24px;
            position: absolute;
            left: 10px;
            background: url("../assets/image/tubiao.png") no-repeat center;
          }
          /*input框*/
          .concenter {
            width: 160px;
            height: 24px;
            border: none;
            border-left: dashed 1px #82878C;
            position: absolute;
            left: 47px;
            padding-left: 5px;
            outline: none;
          }
          /*按钮*/
          .fsright {
            width: 50px;
            height: 24px;
            background-color: #ff4d00;
            color: #fff;
            border: none;
            position: absolute;
            right: 8px;
            outline: none;
          }
        }
      }
      .livePageCenterCenter {
        float: left;
        width: 100%;
        margin: 0 -296px 0 -270px;
        height: 100%;
        .inner {
          margin: 0 296px 0 270px;
          height: 100%;
          background-color: #C0C0C0;
          img{
            width: 100%;
            height: 100%;
          }
        }
      }
      .livePageCenterRight {
        float: right;
        width: 296px;
        height: 100%;
        position: relative;
        z-index: 30;
        /*导航*/
        .mulubox {
          box-sizing: border-box;
          border-top: solid 1px #191f27;
          .ivu-tabs-bar{
            background-color: #2f353d;
            .ivu-tabs-tab{
              font-size: 14px;
              color: #fff;
              text-align: center;
            }
          }
        }
        /* 目录*/
        .deatisbox {
          width: 100%;
          box-sizing: border-box;
          padding: 0 0 20px;
          .contTab1 {
            margin: 0;
            padding: 0;
            list-style: none;
            overflow: hidden;
            height: 100%;
            .fir {
              list-style: none;
              width: 100%;
              height: 73px;
              box-sizing: border-box;
              padding: 5px 10px;
              .deleft {
                float: left;
                width: 45px;
                height: 100%;
                font-size: 14px;
                font-weight: bold;
                color: #3F463F;
              }
              .decenter {
                padding-top: 10px;
                text-align: center;
                float: left;
                width: 3px;
                height: 73px;
                background: #cfcfcf;
                margin: 0 20px;
                position: relative;
                .LiveIcon{
                  position: absolute;
                  left: -6px;
                  top: 11px;
                  font-size: 18px;
                  color: #cfcfcf;
                }
              }
              .deright {
                float: left;
                width: 185px;
                height: 100%;
                font-size: 14px;
                .liveTitle{
                  width: 195px;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  height: 23px;
                  white-space: nowrap;
                  padding: 3px 0;
                }
              }
            }
            .fir:first-child{
              .LiveIcon{
                font-size: 30px;
                left: -11px;
                top: -5px;
              }
            }
            .fir:last-child{
              .decenter {
                height: 26px;
              }
            }
            .fir:hover,.liveActive{
              background-color: #FFE5CC;
              .LiveIcon {
                color: #ff8a0c;
              }
            }
          }
          .pad5{
            padding-top: 3px;
          }
          .font{
            font-size: 17px!important;
            font-weight: bold;
          }
          .font1{
            font-size: 16px!important;
          }
          .time{
            color: #CCCCCC;
            margin-top: 5px;
          }
          .video{
            color: #CCCCCC;
            font-size: 13px!important;
            margin-top: 5px;
            .liveVideocam{
              padding: 0 10px 0 5px;
              font-size: 18px;
              vertical-align: bottom;
            }
          }
        }
        /* note  笔记*/
        .note{
          width: 100%;
          box-sizing: border-box;
          padding: 0 15px;

        }
        textarea{
          margin-bottom: 15px;
          min-height: 150px;
          width: 100%;
          padding: 13px 11px;
          font-size: 14px;
          border:1px solid #cccccc;
          border-radius: 3px ;
        }
        .but{
          float: right;
          border: none;
          width: 68px;
          height: 30px;
          line-height: 30px;
          background-color: #FF4D00;
          color: #FFFFFF;
          border-radius: 3px ;

        }
        /* 问答 */
        .interlocution{
          width: 100%;
          box-sizing: border-box;
          padding: 0 15px;
        }
        .but1{
          float: right;
          border: none;
          width: 68px;
          height: 30px;
          line-height: 30px;
          background-color: #FF4D00;
          color: #FFFFFF;
          border-radius: 3px ;

        }
        /*comment 评论*/
        .comment{
          width: 100%;
          box-sizing: border-box;
          padding: 0 15px;
        }
        .comment-head{
          height: 210px;
          .comment-img{
            float: left;
            img{
              width: 40px;
              height: 40px;
              border-radius: 50%;
            }
            span{
              display: block;
              float: right;
              margin-left: 8px;
              margin-top: 5px;
              font-size: 13px;
              color: #BCBCBC;
            }
          }
          .but2{
            float: right;
            border: none;
            width: 85px;
            height: 30px;
            line-height: 30px;
            background-color: #FF4D00;
            color: #FFFFFF;
            border-radius: 3px;
          }
        }
        /*评论区域*/
        .comment-comment{
          width: 100%;
          .comment-whole{
            color: #FF5E26;
            height: 38px;
            line-height: 38px;
            border-bottom: 1px solid #FF5E26;
            width: 93px;
            margin-bottom: -1px;
            position: relative;
            z-index: 5;
            span{
              color: #959595;
            }
          }
          .comment-personal ul{
            list-style: none;
            margin: 0;
            padding: 0;
            li{
              padding-top: 20px;
              border-top:1px solid #DDDDDD ;
              width: 266px;
              height: 100%;
              clear: both;
              .comment-name{
                width: 40px;
                float: left;
                text-align: center;
              }
              .comment-conment{
                width: 220px;
                float: right;
                font-size: 12px;
                margin-left: 5px ;
                p{
                  line-height: 20px;
                }
                .h4{
                  color: #FF4D00;
                  margin-bottom: 4px;
                }
              }
              .comment-time{
                color: #A5A5A5;
              }
              .comment-zan{
                width: 100%;
                margin-bottom: 20px;
                span{
                  cursor: pointer;
                }
                .ReplySpan:hover,span:hover{
                  color: #ff8a0c;
                }
              }
              /*回复*/
              .replyBlock{
                width: 100%;
                padding: 10px;
                background-color: #F3F3F3;
                box-sizing: border-box;
                .namesssss{
                  color: #9D9D9D;
                  font-size: 12px;
                  padding-bottom: 5px;
                }
                .replytextarea{
                  width: 100%;
                  min-height: 50px!important;
                  font-size: 14px;
                  border: 1px solid #FF4D00;
                  background-color: #F3F3F3;
                  resize: none;
                }
                .btnnnnn{
                  width: 55px;
                  text-align: center;
                  background-color: #FF4D00;
                  color: #FFFFFF;
                  border: none;
                  float: right;
                  padding: 5px 0;
                  border-radius: 3px;
                }
              }
            }
          }
        }
        /*加载更多*/
        .solid{
          line-height: 40px;
          border-top: 1px solid #DDDDDD ;
          text-align: center;
          clear: both;
          color: #aaaaaa;
          cursor: pointer;
        }
      }
    }
    .contTab1,.contTab2,.contTab3,.contTab4 {
      overflow-y: auto;
      overflow-x: hidden;
    }
    .contTab1 {
      overflow-y: auto !important;
      overflow-x: hidden !important;
    }
  }
</style>
