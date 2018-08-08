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
        <Breadcrumb separator=">" class="container m-b-20 p-l-15">
            <BreadcrumbItem href="/">首页</BreadcrumbItem>
            <BreadcrumbItem href="/views/course">云联惠课程</BreadcrumbItem>
            <BreadcrumbItem href="/views/freeClass">云联惠基础班</BreadcrumbItem>
        </Breadcrumb>

        <!--大图，标题介绍-->
        <div class="container clearfix classHeaderMian">
            <i class="f-fl img"><img src="../assets/image/class5.jpg" alt=""></i>
            <div class="f-fl main">
                <p class="name">云联惠初级班教程</p>
                <div class="clearfix rates">
                    <Rate v-model="value" class="f-fl"></Rate>
                    <div class="f-fl num">（5个评论）</div>
                    <div class="f-fl collection">
                        <i class="ivu-icon ivu-icon-android-favorite"></i>
                        <span>收藏</span>
                    </div>
                    <div class="f-fl share">
                        <i class="ivu-icon ivu-icon-share"></i>
                        <span>分享</span>
                    </div>
                </div>
                <div class="price">
                    价格 <span>免费</span>
                </div>
                <div class="clearfix bottomMetas">
                    <button class="f-fr">免费加入</button>
                </div>
            </div>
        </div>

        <!--内容区域-->
        <div class="classbody container CourseLi clearfix">
            <Tabs value="name1" class="f-fl">
                <TabPane label="班级介绍" name="name1">
                    <div class="introduce">
                        <p class="name">班级介绍</p>
                        <div>
                            <p class="title">云联惠初级班</p>
                            <p>云联惠初级班，由云联惠网络商学院官方讲师倾情奉献，专为学习云联惠模式的你而准备，结合使用实战案例详细讲解，帮助想要快速并且深入了解云联惠的同学快速系统入门，在8节课的时间内帮助你理清云联惠企业文化，、商业模式、包括线上操作和使用等等，有想法独自创作，详细讲解，通俗易懂，让你理论操作相结合，让你真正深入了解云联惠。</p>
                            <p>讨论学习交流可以加Q群：156034890</p>
                        </div>
                        <div>
                            <p class="title">课程概述</p>
                            <p>本班级包含的课程有：云联惠企业文化、云联惠商业模式、云联惠线上实操、联盟商家、网店操作指南、云联惠五大系统、云联惠代理机制、云联惠返还机制。希望后期的路上助大家一臂之力！</p>
                        </div>
                        <div>
                            <p class="title">课程内容：</p>
                            <p>第一节：云联惠企业文化</p>
                            <p>第二节：云联惠商业模式</p>
                            <p>第三节：云联惠线上实操</p>
                            <p>第四节：联盟商家</p>
                            <p>第五节：网店操作指南</p>
                            <p>第六节：云联惠五大系统</p>
                            <p>第七节：云联惠代理机制</p>
                            <p>第八节：云联惠返还机制</p>
                            <p>更新时间：每月更新2次，每次更新2节课程</p>
                        </div>
                    </div>
                </TabPane>
                <TabPane label="课程列表" name="name2">
                    <ul class="CourseList">
                        <li>
                            <Collapse>
                                <Panel name="1">
                                    <span class="f-fl img"><img src="../assets/image/class7.png" alt=""></span>
                                    <div class="f-fl title">
                                        <p>云联惠企业文化</p>
                                        <Rate v-model="value" class="f-fl"></Rate>
                                    </div>
                                    <div class="f-fr originPrice">
                                        原价：￥<span>0.00</span>
                                    </div>
                                    <p slot="content" class="p-t-0 classcontent">
                                        <Radio>PS技术基础</Radio>
                                        <i class="ivu-icon ivu-icon-android-arrow-dropright-circle f-fr font-s20"></i>
                                    </p>
                                    <p slot="content" class="p-t-0 classcontent">
                                        <Radio>PS技术基础</Radio>
                                        <i class="ivu-icon ivu-icon-android-arrow-dropright-circle f-fr font-s20"></i>
                                    </p>
                                </Panel>
                                <Panel name="2">
                                    <span class="f-fl img"><img src="../assets/image/class7.png" alt=""></span>
                                    <div class="f-fl title">
                                        <p>云联惠商业模式</p>
                                        <Rate v-model="value" class="f-fl"></Rate>
                                    </div>
                                    <div class="f-fr originPrice">
                                        原价：￥<span>0.00</span>
                                    </div>
                                    <p slot="content" class="p-t-0 classcontent">
                                        <Radio>云联惠商业模式2</Radio>
                                        <i class="ivu-icon ivu-icon-android-arrow-dropright-circle f-fr font-s20"></i>
                                    </p>
                                </Panel>
                            </Collapse>
                        </li>
                    </ul>
                </TabPane>
                <TabPane label="班级评价" name="name3">
                    <ul class="assessUl">
                        <li class="clearfix">
                            <i class="avatarimg f-fl"><img src="../assets/image/avatar1.png" alt=""></i>
                            <div class="body f-fl">
                                <div>
                                    <span class="name">兰诗涵</span>
                                    <span class="time">2016-03-23  14:08</span>
                                </div>
                                <Rate v-model="value"></Rate>
                                <p>
                                    这门课程不错，老师讲的细致全面，这门课程不错，老师讲的细致全面。这门课程不错，老师讲的细致全面，这门课程不错，老师讲的细致全面。
                                </p>
                            </div>
                        </li>
                        <li class="clearfix">
                            <i class="avatarimg f-fl"><img src="../assets/image/avatar2.png" alt=""></i>
                            <div class="body f-fl">
                                <div>
                                    <span class="name">兰诗涵</span>
                                    <span class="time">2016-03-23  14:08</span>
                                </div>
                                <Rate v-model="value"></Rate>
                                <p>
                                    这门课程不错，老师讲的细致全面，这门课程不错，老师讲的细致全面。这门课程不错，老师讲的细致全面，这门课程不错，老师讲的细致全面。
                                </p>
                            </div>
                        </li>
                    </ul>
                </TabPane>
            </Tabs>
            <div class="f-fr">
                <!--班主任-->
                <v-headMaster :headMaster="headMaster"></v-headMaster>
                <!--最新学员-->
                <v-newStudent :newStudent="newStudent" class="m-t-20"></v-newStudent>
                <!--学员动态-->
                <v-studentDynamic :studentDynamic="studentDynamic" class="m-t-20"></v-studentDynamic>

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
    import classification from '../components/class/classification.vue';
    import searchVolume from '../components/class/searchVolume.vue';
    import headMaster from '../components/class/headMaster.vue';
    import newStudent from '../components/class/newStudent.vue';
    import studentDynamic from '../components/class/studentDynamic.vue';
    import footer from '../components/footer.vue';

    export default {
        data() {
            return {
                top: {},
                search: {},
                subpageMenu:{},
                classification: {},
                searchVolume: {},
                headMaster: {},
                newStudent: {},
                studentDynamic: {},
                footer: {},
                value: 3
            };
        },
        mounted() {

        },
        beforeDestroy() {

        },
        components: {
            'v-top': top,
            'v-search': search,
            'v-subpageMenu': subpageMenu,
            'v-classification': classification,
            'v-searchVolume': searchVolume,
            'v-headMaster': headMaster,
            'v-newStudent': newStudent,
            'v-studentDynamic': studentDynamic,
            'v-footer': footer
        },
        methods: {}
    };
</script>

<style lang="less">
    .classHeaderMian{
        background: #f7f7f7;
        padding: 15px;
        box-sizing: border-box;
        i.img{
            display: block;
            width: 520px;
            height: 350px;
            overflow: hidden;
            img{
                width: 100%;
                height: 100%;
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
                .collection{
                    padding-left: 25px;
                    font-size: 15px;
                    span{
                        color: #7d7d7d;
                        font-size: 12px;
                    }
                }
                .share{
                    padding-left: 25px;
                    font-size: 20px;
                    margin-top: -5px;
                    span{
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
                    margin-left: 20px;
                    font-size: 24px;
                    color: #343434;
                }
            }
        }
        /*加入按钮*/
        div.bottomMetas{
            padding-top: 70px;
            button{
                width: 127px;
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
    /*内容区域*/
    .CourseLi {
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
                    padding-left: 5px;
                    font-size: 16px;
                    color: #3c3c3c;
                    border-left: 5px solid #ff8a0c;
                }
                p{
                    padding-top: 20px;
                    font-size: 14px;
                    line-height: 20px;
                    color: #3c3c3c;
                }
            }
            /*课程*/
            .ivu-collapse{
                border: none;
                border-bottom: 1px solid #dddee1;
                .classcontent{
                    padding: 0 30px 0 20px;
                    height: 50px;
                    line-height: 50px;
                    i{
                        line-height: 50px;
                    }
                }
                .classcontent:hover{
                    background: #ffeee8;
                }
            }
            .ivu-collapse-content>.ivu-collapse-content-box,.ivu-collapse-content{
                padding: 0;
            }
            .ivu-collapse>.ivu-collapse-item>.ivu-collapse-header{
                height: 112px !important;
                padding: 15px 20px;
                background: #fff;
                span.img{
                    width: 135px;
                    height: 82px;
                    display: block;
                    overflow: hidden;
                    img{
                        width: 100%;
                        height: 100%;
                    }
                }
                .title{
                    padding-left: 20px;
                    font-size: 16px;
                    color: #3c3c3c;
                    .ivu-rate{
                        font-size: 15px;
                    }
                }
                .ivu-icon-arrow-right-b{
                    float: right;
                    /*line-height: 79px;*/
                    padding-left: 25px;
                }
                .originPrice{
                    line-height: 79px;
                    font-size: 16px;
                    color: #3c3c3c;
                }
            }
            .ivu-collapse>.ivu-collapse-item.ivu-collapse-item-active>.ivu-collapse-header>i {
                padding-left: 6px;
                margin-top: 10px;
                float: right;
                margin-left: 19px;
            }
            .ivu-collapse-item-active .ivu-collapse-header{
                background: #ffeee8!important;
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
        }
    }
</style>
