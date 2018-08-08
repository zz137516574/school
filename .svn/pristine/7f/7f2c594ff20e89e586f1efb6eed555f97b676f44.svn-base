<template>
    <div id="orderPurchaseThree">
        <v-top :top="top"></v-top>
        <div class="clearfix container m-t-20 m-b-20">
            <i class="f-fl"><img src="../assets/image/logo.png" alt=""></i>
            <v-search :search="search" class="f-fr"></v-search>
        </div>

        <!--导航-->
        <v-subpageMenu :subpageMenu="subpageMenu" class="m-b-20"></v-subpageMenu>

        <div class="orderDiv clearfix container m-b-120">
            <Steps :current="2" class="clearfix m-t-30 m-b-20 text-center">
                <Step title="订单确认"></Step>
                <Step title="订单支付"></Step>
                <Step title="订单完成"></Step>
            </Steps>
            <div class="processDiv clearfix m-t-30 m-b-20">
                <p class="successPayment"><Icon type="checkmark-circled" color="#ff8a0c !important" width="20px !important" class="m-r-10"></Icon>支付成功！</p>
                <p>恭喜你成功购买本班级，现在开始您的学习之旅吧！</p>
                <button @click="backDetails">返回查看课程</button>
            </div>
            <div class="moreSuggestions clearfix m-t-15 m-b-20">
                <p>对购物流程满意吗？留下您的意见和建议?<a href=""><span>帮我们改进购物流程>></span></a></p>
            </div>
            <!--<div div class="recommendMore">-->
                <!--<Tabs value="name1" class="f-fl" >-->
                    <!--<TabPane label="推荐班级" name="name1">-->
                        <!--<ul>-->
                            <!--<li><v-commonDiv :commonDiv="commonDiv"></v-commonDiv></li>-->
                            <!--<li><v-commonDiv :commonDiv="commonDiv"></v-commonDiv></li>-->
                            <!--<li><v-commonDiv :commonDiv="commonDiv"></v-commonDiv></li>-->
                            <!--<li><v-commonDiv :commonDiv="commonDiv"></v-commonDiv></li>-->
                            <!--<li><v-commonDiv :commonDiv="commonDiv"></v-commonDiv></li>-->
                            <!--<li><v-commonDiv :commonDiv="commonDiv"></v-commonDiv></li>-->
                            <!--<li><v-commonDiv :commonDiv="commonDiv"></v-commonDiv></li>-->
                            <!--<li><v-commonDiv :commonDiv="commonDiv"></v-commonDiv></li>-->
                        <!--</ul>-->
                    <!--</TabPane>-->
                    <!--<TabPane label="推荐课程" name="name2" class="yun-shizi">-->
                        <!--<ul>-->
                            <!--<li><v-commonDiv :commonDiv="commonDiv"></v-commonDiv></li>-->
                            <!--<li><v-commonDiv :commonDiv="commonDiv"></v-commonDiv></li>-->
                            <!--<li><v-commonDiv :commonDiv="commonDiv"></v-commonDiv></li>-->
                            <!--<li><v-commonDiv :commonDiv="commonDiv"></v-commonDiv></li>-->
                            <!--<li><v-commonDiv :commonDiv="commonDiv"></v-commonDiv></li>-->
                            <!--<li><v-commonDiv :commonDiv="commonDiv"></v-commonDiv></li>-->
                            <!--<li><v-commonDiv :commonDiv="commonDiv"></v-commonDiv></li>-->
                            <!--<li><v-commonDiv :commonDiv="commonDiv"></v-commonDiv></li>-->
                        <!--</ul>-->
                    <!--</TabPane>-->
                <!--</Tabs>-->
            <!--</div>-->
        </div>

        <v-footer :footer="footer"></v-footer>
    </div>
</template>

<script>
    import Vue from 'vue';
    import top from '../components/top.vue';
    import search from '../components/search.vue';
    import subpageMenu from '../components/class/subpageMenu.vue';
    import commonDiv from '../components/index/commonDiv.vue';
    import footer from '../components/footer.vue';

    export default {
        data() {
            return {
                top: {},
                search: {},
                subpageMenu:{},
                commonDiv:{},
                footer: {},
                value:'',
                showCoupon:false,
                useCouponBt:true,
                single: false,
                vertical: 'redIntegral',
                value1:'',
                courseId:0,
                seriesCourseId:0,
                onorsome:0,
                classLis: [
                    {
                        "src": "./assets/image/class1.jpg",
                        "name": "云联商城店铺装修基础班",
                        "course": "11",
                        "person": "12",
                        "message": "33",
                        "price": "666"
                    },
                    {
                        "src": "./assets/image/class2.jpg",
                        "name": "云联商城店铺装修基础班",
                        "course": "11",
                        "person": "12",
                        "message": "33",
                        "price": "免费"
                    },
                    {
                        "src": "./static/image/class3.jpg",
                        "name": "云联商城店铺装修基础班",
                        "course": "11",
                        "person": "12",
                        "message": "33",
                        "price": "免费"
                    },
                    {
                        "src": "./assets/image/class4.jpg",
                        "name": "云联商城店铺装修基础班",
                        "course": "11",
                        "person": "12",
                        "message": "33",
                        "price": "666"
                    },

                    {
                        "src": "./assets/image/class1.jpg",
                        "name": "云联商城店铺装修基础班",
                        "course": "11",
                        "person": "12",
                        "message": "33",
                        "price": "666"
                    },
                    {
                        "src": "./assets/image/class2.jpg",
                        "name": "云联商城店铺装修基础班",
                        "course": "11",
                        "person": "12",
                        "message": "33",
                        "price": "免费"
                    },
                    {
                        "src": "./static/image/class3.jpg",
                        "name": "云联商城店铺装修基础班",
                        "course": "11",
                        "person": "12",
                        "message": "33",
                        "price": "免费"
                    },
                    {
                        "src": "./assets/image/class4.jpg",
                        "name": "云联商城店铺装修基础班",
                        "course": "11",
                        "person": "12",
                        "message": "33",
                        "price": "666"
                    }

                ]
            };
        },
        mounted() {
          this.courseId = this.$route.query.courseId;
          this.seriesCourseId = this.$route.query.seriesCourseId;
          this.onorsome = this.$route.query.onorsome;
        },
        beforeDestroy() {

        },
        components: {
            'v-top': top,
            'v-search': search,
            'v-subpageMenu': subpageMenu,
            'v-commonDiv': commonDiv,
            'v-footer': footer
        },
        methods: {
//            useCoupon: function () {
//                this.showCoupon = true;
//                this.useCouponBt = false
//            },
//            cancelCoupon: function () {
//                this.showCoupon = false;
//                this.useCouponBt = true
//            },
//            freeClass(){
//                this.$router.push('freeClass');
//            },
            backDetails(){
              if( this.onorsome == 0){
                let myurl="../../test.html"+"?"+"courseId="+this.courseId+"&onorsome="+this.onorsome;
                window.location.assign(encodeURI(myurl));
//                this.$router.push({ path: 'livePage', query: {courseId: this.courseId, onorsome:this.onorsome}});
              }else if( this.onorsome == 1){
                let myurl="../../test.html"+"?"+"courseId="+this.courseId+"&onorsome="+this.onorsome;
                window.location.assign(encodeURI(myurl));
//                this.$router.push({ path: 'livePage', query: {seriesCourseId: this.seriesCourseId, onorsome:this.onorsome}});
              }
            }
        }
    };

</script>

<style lang="less">
    #orderPurchaseThree{
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
            .ivu-steps-item.ivu-steps-status-finish .ivu-steps-tail>i:after{
                display: none;
            }
            .processDiv{
              background-color: #ffffff;
              border: 1px #ebebeb solid;
              text-align: center;
              width:90%;
              margin-left: 5%;
              height: inherit;
              padding: 100px 100px;
              font-size: 14px;
              color: #333333;
              .successPayment{
                  font-size: 18px;
                  padding-bottom: 10px;
              }
              button{
                padding: 8px 15px;
                border: none;
                outline: none;
                background: #ff8a0c;
                color: #ffffff;
                margin-top: 30px;
                border-radius: 5px;
                cursor: pointer;
              }
            }
            .moreSuggestions{
                width:90%;
                margin-left: 5%;
                height: inherit;
                font-size: 14px;
                color: #333333;
                span{
                    color: #00aaee;
                }
            }
            .recommendMore{
                width:90%;
                margin-left: 5%;
                .ivu-tabs{
                    width: 100%;
                    height: inherit;
                    float: right;
                    background: #ffffff;
                    .ivu-tabs-ink-bar {
                        background-color: #ff8a0c;
                    }
                    .ivu-tabs-nav .ivu-tabs-tab-active {
                        color: #ff8a0c;
                    }
                    .ivu-tabs-nav .ivu-tabs-tab:hover {
                        color: #ff8a0c;
                    }
                }
                ul{
                    li{
                        float: left;
                        margin: 14px 0px;
                        margin-right: 13px;
                        .common-div {
                            width: 260px!important;
                            .common-bottom p button{
                                margin-left: 18px;
                            }
                        }
                    }
                    li:nth-child(4n){
                        margin-right: 0;
                    }
                }

            }
        }
    }

</style>
