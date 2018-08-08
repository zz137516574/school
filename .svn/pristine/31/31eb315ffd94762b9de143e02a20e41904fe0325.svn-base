<template>
    <div id="orderPurchaseTwo">
        <v-top :top="top"></v-top>
        <div class="clearfix container m-t-20 m-b-20">
            <i class="f-fl"><img src="../assets/image/logo.png" alt=""></i>
            <v-search :search="search" class="f-fr"></v-search>
        </div>

        <!--导航-->
        <v-subpageMenu :subpageMenu="subpageMenu" class="m-b-20"></v-subpageMenu>

        <div class="orderDiv clearfix container m-b-120">
            <Steps :current="1" class="clearfix m-t-30 m-b-20 text-center">
                <Step title="订单确认"></Step>
                <Step title="订单支付"></Step>
                <Step title="订单完成"></Step>
            </Steps>
            <div class="processDiv clearfix m-t-30 m-b-20">
                <div class="processRemind clearfix m-t-20 m-b-20">
                    订单已提交，请在48小时内完成支付！逾期订单将被取消。
                </div>
                <div class="processOne clearfix m-t-20">
                    <div class="purchaseImg f-fl"><img :src="courseDetails.photo" alt=""></div>
                    <div class="purchaseName f-fl p-l-50 p-r-50">
                      <p class="purCourseName p-t-30" v-if="onorsome == 0">订单名称:{{courseDetails.courseName}}</p>
                        <p class="purCourseName p-t-30" v-if="onorsome == 1">订单名称:{{courseDetails.seriesCourseName}}</p>
                        <p class="purCourseNum p-t-10">订单号：123456789123456789</p>
                        <p class="purCourseMoney p-t-10">订单价格：<Icon type="social-yen" color="#ff8a0c !important" class="m-r-5"></Icon><span>{{courseDetails.price}}</span></p>
                    </div>
                </div>
                <div class="processTwo clearfix m-b-20 p-l-50 p-r-50">
                    <ul class="clearfix f-fl">
                        <RadioGroup v-model="vertical">
                            <li>
                                <Radio label="redIntegral">红积分支付</Radio><span class="processRecommend">推荐</span><span class="accountBalance">（账户余额：10000红积分）</span>
                            </li>
                            <li>
                                <Radio label="advanceCharge">预付款支付</Radio><span class="processRecharge">充值</span>
                            </li>
                            <li>
                                <Radio label="agriculturalBank"><img src="../assets/image/order-agricultural.png"/>中国农业银行</Radio><span class="bankCard p-l-50">**0719</span><span class="bankCardType p-l-15">储蓄卡&nbsp;|&nbsp;快捷</span>
                            </li>
                            <li>
                                <Radio label="industrialBank"><img src="../assets/image/order-industrial.png"/>中国工商银行</Radio><span class="bankCard p-l-50">**0719</span><span class="bankCardType p-l-15">储蓄卡&nbsp;|&nbsp;快捷</span>
                            </li>
                            <li>
                                <Radio label="merchantsBank"><img src="../assets/image/order-merchants.png"/>中国招商银行</Radio><span class="bankCard p-l-50">**0719</span><span class="bankCardType p-l-15">储蓄卡&nbsp;|&nbsp;快捷</span>
                            </li>
                        </RadioGroup>
                    </ul>
                    <div class="addApply f-fl clearfix m-t-15 m-b-30">
                        <p class="addApplyP">添加快捷/网银付款</p>
                    </div>
                    <div class="securitySetting clearfix f-fl m-t-15 m-t-15">
                        <Icon type="checkmark-circled" color="#26bc00 !important" class="m-r-10"></Icon>安全设置检测成功！无需短信校验。
                    </div>
                    <div class="paymentPassword clearfix f-fl m-t-15 m-t-15">
                        支付密码：<br/>
                        <Input v-model="value1" placeholder="请输入支付密码" style="width: 200px !important;height: 30px !important" class=" f-fl m-t-10 m-b-10"></Input>
                        <span class="forgetPassword f-fl p-l-5">忘记密码？</span>
                    </div>
                    <div class="surePurchase clearfix f-fl m-t-20 m-b-20">
                        <button @click="ConfirmTheTayment">确认付款</button>
                    </div>
                </div>

            </div>
        </div>

        <v-footer :footer="footer"></v-footer>
    </div>
</template>

<script>
    import Vue from 'vue';
    import top from '../components/top.vue';
    import search from '../components/search.vue';
    import subpageMenu from '../components/class/subpageMenu.vue';
    import footer from '../components/footer.vue';

    export default {
        data() {
            return {
                courseId:0,
                onorsome:0,
                seriesCourseId:0,
                courseDetails:'',
                top: {},
                search: {},
                subpageMenu:{},
                footer: {},
                value:'',
                showCoupon:false,
                useCouponBt:true,
                single: false,
                vertical: 'redIntegral',
                value1:'',
            };
        },
        mounted() {
          this.courseId = this.$route.query.courseId;
          this.seriesCourseId = this.$route.query.seriesCourseId;
          this.onorsome = this.$route.query.onorsome;
          this.courseDetailsLists();
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
            useCoupon: function () {
                this.showCoupon = true;
                this.useCouponBt = false
            },
            cancelCoupon: function () {
                this.showCoupon = false;
                this.useCouponBt = true
            },
            //课程目录
            courseDetailsLists(){
              if(this.courseId === undefined){
                this.service.courseInfo(this.seriesCourseId,this.onorsome,this.userId).then(result => {
                  this.courseDetails = result.course;
                  this.price = result.course.price;
                }).catch(error => {
                  this.$Loading.error();
                })
              }else if(this.seriesCourseId === undefined){
                this.service.courseInfo(this.courseId,this.onorsome).then(result => {
                  this.courseDetails = result.course;
                  this.price = result.course.price;
                }).catch(error => {
                  this.$Loading.error();
                })
              }

            },
            ConfirmTheTayment(){
              if( this.onorsome == 0){
                this.$router.push({ path: 'orderPurchaseThree', query: {courseId: this.courseId, onorsome:this.onorsome}});
              }else if( this.onorsome == 1){
                this.$router.push({ path: 'orderPurchaseThree', query: {seriesCourseId: this.seriesCourseId, onorsome:this.onorsome}});
              }
            }
        }
    };

</script>

<style lang="less">
    #orderPurchaseTwo{
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
                .processRemind{
                    width:100%;
                    height: 50px;
                    background-color: #ffe0bf;
                    border:1px #ff4d00 solid;
                    text-align: left;
                    padding-left: 10px;
                    line-height: 50px;
                    color: #ff8a0c;
                    font-size: 14px;
                }
                .processOne{
                    width:100%;
                    height: 150px;
                    .purchaseImg{
                        width: 268px;
                        height: 150px;
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
                        text-align: left;
                        .purCourseName,.purCourseNum,.purCourseMoney{
                            color: #333333;
                            font-size: 16px;
                        }
                        .purCourseMoney{
                            span{
                                color: #ff8a0c;
                            }
                        }
                    }
                }
                .processTwo{
                    background-color: #ffffff;
                    border: 1px #ebebeb solid;
                    text-align: center;
                    width:100%;
                    height: inherit;
                    padding:20px 0px 30px 0px;
                    ul{
                        width:90%;
                        padding-left: 10%;
                        .ivu-radio-group{
                            width:100%;
                        }
                        li{
                            border-bottom: 1px #ebebeb solid;
                            padding: 20px 30px 20px 30px;
                            text-align: left;
                            line-height: inherit;
                            img{
                               margin-right: 5px;
                            }
                            .ivu-radio-wrapper{
                                color: #333333;
                                font-size: 16px;
                                padding-right: 10px;
                                .ivu-radio-inner {
                                    background-color: #d8d8d8;
                                    border-color: #aaaaaa;
                                }
                                .ivu-radio-inner:after{
                                    background-color: #666666;
                                }
                                .ivu-radio-checked .ivu-radio-inner{
                                    background-color: #d8d8d8;
                                    border-color: #aaaaaa;
                                }
                                .ivu-radio{
                                    margin-right: 20px;
                                }
                            }
                            .processRecommend,.processRecharge{
                                background-color: #29ab91;
                                font-size: 12px;
                                color: #ffffff;
                                padding: 2px 5px;
                                margin-top: 1px;
                            }
                            .processRecharge{
                                background-color: #ff8a0c;
                            }
                            .accountBalance{
                                font-size: 12px;
                                color: #999999;
                                padding-left: 5px;
                            }
                            .bankCard,.bankCardType{
                                font-size: 12px;
                                color: #333333;
                                padding-top: 5px;
                            }
                        }
                    }
                    .addApply{
                        width:90%;
                        padding-left: 10%;
                        .addApplyP{
                            width: 200px;
                            border: 1px #ebebeb dashed;
                            font-size: 12px;
                            color: #00aaee;
                            cursor: pointer;
                            padding: 6px 18px;
                            background-color: #ffffff;
                        }
                        .addApplyP:hover {
                            border: 1px #ff8a0c solid;
                            background-color: #ff8a0c;
                            color: #ffffff;
                        }
                    }
                    .securitySetting{
                        width:90%;
                        padding-left: 10%;
                        font-size: 12px;
                        color: #000000;
                        text-align: left;
                    }
                    .paymentPassword{
                        width:90%;
                        padding-left: 10%;
                        font-size: 16px;
                        color: #000000;
                        text-align: left;
                        .forgetPassword{
                            font-size: 12px;
                            color: #00aaee;
                            padding-top: 22px;
                        }
                    }
                    .surePurchase{
                        width:90%;
                        padding-left: 10%;
                        text-align: left;
                        button{
                            padding:6px 20px;
                            height: 36px;
                            background-color: #ff8a0c;
                            border: 1px #ff8a0c solid;
                            color:#ffffff;
                            cursor: pointer;
                            font-size: 14px;
                        }
                    }
                }
            }
        }
    }

</style>
