<template>
    <div id="orderPurchase">
        <v-top :top="top"></v-top>
        <div class="clearfix container m-t-20 m-b-20">
            <i class="f-fl"><img src="../assets/image/logo.png" alt=""></i>
            <v-search :search="search" class="f-fr"></v-search>
        </div>

        <!--导航-->
        <v-subpageMenu :subpageMenu="subpageMenu" class="m-b-20"></v-subpageMenu>

        <div class="orderDiv clearfix container m-b-120">
            <Steps :current="0" class="clearfix m-t-30 m-b-20 text-center">
                <Step title="订单确认"></Step>
                <Step title="订单支付"></Step>
                <Step title="订单完成"></Step>
            </Steps>
            <div class="processDiv clearfix m-t-30 m-b-20">
                <div class="processOne clearfix m-t-20 m-b-20">
                    <div class="purchaseImg f-fl">
                      <img :src="courseDetails.photo" v-if="onorsome == 1 || onorsome == 0" alt="">
                      <img :src="courseDetails.activityPhoto" v-if="onorsome == undefined" alt="">
                    </div>
                    <div class="purchaseName f-fl p-l-50 p-r-50">
                      <p class="purCourseName f-fl" v-if="onorsome == 0 && activityId == undefined">{{courseDetails.courseName}}</p>
                      <p class="purCourseName f-fl" v-if="onorsome == 1 && activityId == undefined">{{courseDetails.seriesCourseName}}</p>
                      <p class="purCourseName f-fl" v-if="onorsome == undefined">{{courseDetails.activityTitle}}</p>
                      <p class="purCourseMoney f-fr" v-if="onorsome == 1 || onorsome == 0"><Icon type="social-yen" class="m-r-5"></Icon><span>{{courseDetails.price | currency}}</span></p>
                      <p class="purCourseMoney f-fr" v-if="onorsome == undefined"><Icon type="social-yen" class="m-r-5"></Icon><span>{{courseDetails.activityPrice | currency}}</span></p>
                    </div>
                </div>
                <!--<div class="processTwo clearfix m-t-20 m-b-20 p-l-50 p-r-50">-->
                    <!--<div class="purCouponLeft f-fl"><img src="../assets/image/curse-order-icon.png" class="m-r-10 m-t-5"/>优惠券<span class="m-l-10">(没有使用优惠券)</span></div>-->
                    <!--<div class="purCouponCenter f-fl" style="margin-left: 100px"><button @click='useCoupon' v-if='useCouponBt'>使用优惠券</button></div>-->
                    <!--<div class="purCouponCenter f-fl" v-if='showCoupon'>-->
                        <!--<input class="f-fl m-r-15" v-model="value" placeholder="请输入优惠券" style="width: 100px"></input>-->
                        <!--<button class="f-fl m-r-15">使用</button>-->
                        <!--<button class="f-fl cancelBt" @click='cancelCoupon'>取消</button>-->
                    <!--</div>-->
                    <!--<div class="purCouponRight f-fr m-r-15">-->
                        <!--抵扣：<span><Icon type="social-yen" class="m-r-5"></Icon><span>0.00</span></span>-->
                    <!--</div>-->
                <!--</div>-->
                <div class="allMoney clearfix f-fl m-t-20 m-b-20" v-if="onorsome == 1 || onorsome == 0">应付金额：<span>{{courseDetails.price | currency}}元</span></div>
                <div class="allMoney clearfix f-fl m-t-20 m-b-20" v-if="onorsome == undefined">应付金额：<span>{{courseDetails.activityPrice | currency}}元</span></div>
              <div class="surePurchase clearfix f-fr m-t-20 m-b-20">
                    <button class="cancelBt m-r-15" @click="cancel">取消</button>
                    <button @click="payMoneys">确认支付</button>
                    <!--<button @click="test">dianjia</button>-->
                </div>
            </div>
        </div>
      <div style="border: 2px solid red;display: none">
        <form method="post" id="myForm" ref="myForm" target="_blank">
          <input type="text" name="data" id="sign" ref="sign">
        </form>
      </div>

      <div class="container clearfix" v-show="moneyMask">
        <div class="applyDiv clearfix">
          <i @click='closeMask'></i>
          <div class="applyDivTop clearfix">
            <Button type="primary" size="large"   @click="goLive" style="background: #dab866;border-color: #dab866;margin-right: 15px;">支付成功！</Button>
            <Button type="primary" size="large"   @click="goParent" style="background: #dab866;border-color: #dab866;">支付失败，查询帮助</Button>
          </div>
        </div>
      </div>
        <!--<div class="model" style="position: fixed;left: 0;top: 0;width: 100%;height: 100%;background: rgba(0,0,0,.6);z-index: 999;" v-show="moneyMask">-->
          <!--<div style="margin: 100px auto;width: 400px;height: 300px;text-align: center;background: #ffffff">-->
            <!--<p style="width: 100%;height: 30px"><span class="f-fr" style="padding: 5px" @click="closeMask">关闭</span></p>-->
            <!--<div style="width: 100%;margin-top: 50px">-->
              <!--<Button type="primary" size="large"   @click="goLive" style="background: #dab866;border-color: #dab866;margin-right: 15px;">支付成功！</Button>-->
              <!--<Button type="primary" size="large"   @click="goParent" style="background: #dab866;border-color: #dab866;">支付失败，查询帮助</Button>-->
            <!--</div>-->
          <!--</div>-->
        <!--</div>-->
        <v-footer :footer="footer"></v-footer>
    </div>
</template>

<script>
    import Vue from 'vue';
    import top from '../components/top.vue';
    import search from '../components/search.vue';
    import subpageMenu from '../components/class/subpageMenu.vue';
    import footer from '../components/footer.vue';
    let sign ='';
    export default {
        data() {
            return {
              moneyMask:false,
              courseId:0,
              onorsome:0,
              userId:0,
              seriesCourseId:0,
              courseDetails:'',
              activityId:'',
              top: {},
              search: {},
              subpageMenu:{},
              footer: {},
              value:'',
              showCoupon:false,
              useCouponBt:true,
              source:'pc',
              payUrl:'',
              sign:'hhhhhhhh',
              newSign:'',
              iframeState:false,
              iframes:'',
              modal1: true,
              userId: 0,
              purchaseNum: 0
            };
        },
        mounted() {
          if(window.localStorage.userInfo)
          {
            this.userInfo = JSON.parse(window.localStorage.userInfo);
            this.userId = JSON.parse(window.localStorage.userInfo).userId;
          }
          this.courseId = this.$route.query.courseId;
          this.seriesCourseId = this.$route.query.seriesCourseId;
          this.activityId = this.$route.query.activityId;
          this.onorsome = this.$route.query.onorsome;
          this.roomNo = this.$route.query.roomNo;
          this.vhallID = this.$route.query.vhallID;
          this.vhallAccount = this.$route.query.vhallAccount;
          this.userId = this.$route.query.userId;
          this.purchaseNum= this.$route.query.purchaseNum;
          this.courseDetailsLists();
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
        beforeDestroy() {

        },
        components: {
            'v-top': top,
            'v-search': search,
            'v-subpageMenu': subpageMenu,
            'v-footer': footer
        },
        methods: {
          ReturnLogon() {
            this.iframeState = false;
            location.reload();
          },
          closeMask(){
            this.moneyMask = !this.moneyMask;
          },
          payMoneys(){
            if( this.courseId != undefined && this.courseId != '' ){
              this.service.payMoney(this.courseId,this.userId,this.source).then(result => {
                if(result.code === 0){
                  this.$refs.sign.value = result.orderInfo.sign;
                  this.$refs.myForm.action = result.orderInfo.url;

                  this.moneyMask = true;
                  if(this.$refs.sign.value){
                    this.$refs.myForm.submit();
                  }
                }
//                if(result.code === 0){
//                  this.payUrl = result.orderInfo.url;
//                  this.sign = result.orderInfo.sign;
//                  this.moneyMask = true;
//                  var myurl='/paymoney?sign='+this.sign;
//                  window.open(encodeURI(myurl));
//                }
              }).catch(error => {
                if(error === 'token失效，请重新登录'){
                  this.$Message.info({
                    content: '当前登陆状态已过期,请重新登陆',
                    duration: 5
                  });
                }else{
                  this.$Loading.error();
                }
              })
            }else if( this.seriesCourseId != undefined && this.seriesCourseId != '' ){
              this.service.payMoneySeries(this.seriesCourseId,this.userId,this.source).then(result => {
                if(result.code === 0){
                  this.$refs.sign.value = result.orderInfo.sign;
                  this.$refs.myForm.action = result.orderInfo.url;

                  this.moneyMask = true;
                  if(this.$refs.sign.value){
                    this.$refs.myForm.submit();
                  }
                }
              }).catch(error => {
                if(error === 'token失效，请重新登录'){
                  this.$Message.info({
                    content: '当前登陆状态已过期,请重新登陆',
                    duration: 5
                  });
                }else{
                  this.$Loading.error();
                }
              })
            }else if( this.activityId != undefined && this.activityId != '' ){
              this.service.payMoneyEnroll(this.activityId,this.purchaseNum,this.userId,this.source).then(result => {
                if(result.code === 0){
                  this.$refs.sign.value = result.orderInfo.sign;
                  this.$refs.myForm.action = result.orderInfo.url;

                  this.moneyMask = true;
                  if(this.$refs.sign.value){
                    this.$refs.myForm.submit();
                  }
                }
              }).catch(error => {
                if(error === 'token失效，请重新登录'){
                  this.$Message.info({
                    content: '当前登陆状态已过期,请重新登陆',
                    duration: 5
                  });
                }else{
                  this.$Loading.error();
                }
              })
            }else{
              this.$Message.error({
                content: error,
                duration: 5
              });
            }

          },
          goLive(){
//            let myurl="http://room.goboosoft.com"+"?"+"courseId="+this.courseId+"&onorsome="+this.onorsome + "&roomNo=" + this.roomNo + "&vhallID=" + this.vhallID + "&vhallAccount=" + this.vhallAccount+'&userId='+this.userId;

//            let myurl="file:///E:/workspace/VUE/room/index.html"+"?"+"courseId="+this.courseId+"&onorsome="+this.onorsome + "&roomNo=" + this.roomNo + "&vhallID=" + this.vhallID + "&vhallAccount=" + this.vhallAccount+'&userId='+this.userId;
//            window.location.assign(encodeURI(myurl));
//              this.$router.push({ path: 'freeCourse', query: {courseId: this.courseId, onorsome:this.onorsome}});
            this.$router.go(-1);
          },
          goParent(){
            this.moneyMask = false;
          },
          useCoupon: function () {
            this.showCoupon = true;
            this.useCouponBt = false
          },
          cancelCoupon: function () {
            this.showCoupon = false;
            this.useCouponBt = true
          },
          cancel(){
            this.$router.go(-1);
          },
          courseDetailsLists(){
            if(this.courseId === undefined && this.activityId === undefined){
              //  系列课
              this.service.courseInfo(this.seriesCourseId,this.onorsome).then(result => {
                this.courseDetails = result.course;
              }).catch(error => {
                this.$Message.error({
                  content: error,
                  duration: 5
                });
              })
            }else if(this.seriesCourseId === undefined && this.activityId === undefined){
              //  普通课
              this.service.courseInfo(this.courseId,this.onorsome).then(result => {
                this.courseDetails = result.course;
              }).catch(error => {
                this.$Message.error({
                  content: error,
                  duration: 5
                });
              })
            }else if(this.courseId === undefined && this.seriesCourseId === undefined){
              //  活动
              this.service.OfflineActivityDetails(this.activityId).then(result => {
                this.courseDetails = result.activityEntity;
              }).catch(error => {
                this.$Message.error({
                  content: error,
                  duration: 5
                });
              })
            }

          },
          // 确认支付页面跳转
          confirmPayment(){
            if(this.onorsome == 0){
              this.$router.push({ path: 'orderPurchaseTwo', query: {courseId: this.courseId, onorsome:this.onorsome}});
            }else if(this.onorsome == 1){
              this.$router.push({ path: 'orderPurchaseTwo', query: {seriesCourseId: this.seriesCourseId, onorsome:this.onorsome}});
            }
          },
        }
    };

</script>

<style lang="less">
    #orderPurchase{
        .orderDiv{
            margin-top: 60px;
            .ivu-steps {
                .ivu-steps-head-inner{
                    display: block;
                    width: 26px;
                    height: 26px;
                    line-height: 24px;
                    margin-right: 8px;
                    text-align: center;
                    background-color: #999999;
                    border: 1px solid #999999;
                    border-radius: 50%;
                    font-size: 18px;
                    color: #ffffff !important;
                    transition: background-color .2s ease-in-out;
                }
                .ivu-steps-tail {
                    left: 172px;
                }
                .ivu-steps-title {
                    display: inline-block;
                    margin-bottom: 14px;
                    margin-top: 36px;
                    margin-left: -47px;
                    padding-right: 10px;
                    font-size: 14px;
                    font-weight: 700;
                    color: #666;
                    background: #fff;
                }
            }
            .ivu-steps-item.ivu-steps-status-process .ivu-steps-head-inner {
                width: 32px;
                height: 32px;
                line-height: 26px;
                font-weight: bold;
                margin-top: -3px;
                border: 4px #ff8a0c solid !important;
                background-color: #ffffff !important;
                span {
                    color: #ff8a0c !important;
                }
            }
            .ivu-steps-item.ivu-steps-status-finish .ivu-steps-head-inner span{
                color: #ffffff !important;
            }
            .ivu-steps-item.ivu-steps-status-finish .ivu-steps-tail>i:after{
                background: #e9eaec !important;
            }
            .processDiv{
                width:90%;
                margin-left: 5%;
                .processOne{
                    width:100%;
                    height: 150px;
                    .purchaseImg{
                        width: 268px;
                        height: 150px;
                        border: 1px #ebebeb solid;
                        background-image: url('../assets/image/imgbg.jpg');
                        background-repeat: no-repeat;
                        background-size: 100% 100%;
                      img{
                        width: 100%;
                        height: 100%;
                      }
                    }
                    .purchaseName{
                        width: 812px;
                        height: 150px;
                        border: 1px #ebebeb solid;
                        background-color: #f6f6f6;
                        text-align: center;
                        line-height: 150px;
                        .purCourseName{
                            color: #333333;
                            font-size: 16px;
                        }
                        .purCourseMoney{
                            color: #333333;
                            font-size: 26px;
                        }
                    }
                }
                .processTwo{
                    background-color: #ffffff;
                    border: 1px #ebebeb solid;
                    text-align: center;
                    width:100%;
                    height: 150px;
                    .purCouponLeft{
                        color:#333333;
                        font-size: 16px;
                        line-height: 150px;
                        span{
                            color:#999999;
                            font-size: 12px;
                        }
                    }
                    .purCouponCenter{
                        color:#2a2a2a;
                        font-size: 14px;
                        padding:60px 0px 60px 0px;
                        span{
                            color:#999999;
                            font-size: 12px;
                        }
                        input{
                            width: 160px !important;
                            height: 36px;
                            border: 1px #dddddd solid;
                            text-indent: 10px;
                            color: #999999;
                            font-size: 12px;
                        }
                        button{
                            padding:6px 20px;
                            height: 36px;
                            background-color: #ff8a0c;
                            border: 1px #ff8a0c solid;
                            color:#ffffff;
                            cursor: pointer;
                        }
                        .cancelBt{
                            background-color: #ffffff;
                            border: 1px #ebebeb solid;
                            color:#2a2a2a;
                            cursor: pointer;
                        }
                    }
                    .purCouponRight {
                        line-height: 150px;
                        color:#666666;
                        font-size: 12px;
                        span{
                            color: #333333;
                            font-size: 22px;
                        }

                    }
                }
                .allMoney{
                    width: 100%;
                    color: #333333;
                    font-size:14px;
                    text-align: right;
                    span{
                        color: #ff8a0c;
                        font-size: 22px;
                    }
                }
                .surePurchase{
                    width: 100%;
                    text-align: right;
                    button{
                        padding:6px 20px;
                        height: 36px;
                        background-color: #ff8a0c;
                        border: 1px #ff8a0c solid;
                        color:#ffffff;
                        cursor: pointer;
                        font-size: 14px;
                    }
                    .cancelBt{
                        background-color: #ffffff;
                        border: 1px #ebebeb solid;
                        color:#2a2a2a;
                        cursor: pointer;
                    }
                }

            }
        }
    }
    .applyDiv{
      width: 480px;
      height: 250px;
      padding: 30px 25px;
      box-sizing: border-box;
      background: #f3f5f7;
      border:2px #ff982a solid;
      position: absolute;
      left: 50%;
      right: 50%;
      top: 40%;
      margin-left: -300px;
      .applyDivTop{
        height: 110px;
        width: 100%;
        margin-top: 60px;
        text-align: center;
        button{
          width: 150px;
          height: 38px;
          text-align: center;
          border-radius: 5px;
          background: #ff8a0c;
          color: #ffffff;
          font-size: 14px;
          border: none;
          outline: none;
          cursor:pointer;
          margin: 0px 10px;
        }
      }
      i{
        position: absolute;
        top: 0;
        right: 0;
        width: 50px;
        height: 50px;
        background-image: url(../assets/image/tishi-del.png);
        background-repeat: no-repeat;
        background-size: 100%;
        border: none;
        outline: none;
        cursor: pointer;
      }
    }

</style>
