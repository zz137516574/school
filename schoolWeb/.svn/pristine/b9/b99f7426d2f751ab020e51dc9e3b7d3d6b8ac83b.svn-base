<template>
    <div id="product">
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
            <BreadcrumbItem href="/views/product">直播专区</BreadcrumbItem>
            <BreadcrumbItem href="/views/product">访谈直播</BreadcrumbItem>
        </Breadcrumb>
        <v-video :video="video"></v-video>
        <div class="interviewCon clearfix">
            <div class="f-fl icLeft">
                <div class="icLeft-cell">
                    <div class="icellTop">
                        <div class="icllTop-con">
                            <span class="icllTop-logo"></span>
                            <span class="icllTop-text">访谈简介</span>
                        </div>
                    </div>
                    <div class="icellContent">
                        2017年7月4日-8月1日，数据高尔夫将整个培训设计成一种决策情景，根据电商企业数据化场景进行案例设计，完成案例给出的决策任务，老师带领学员实战分析。深入剖析数据决策工具，现场模拟演示实战技能。 2017年7月4日-8月1日，数据高尔夫将整个培训设计成一种决策情景，根据电商企业数据化场景进行案例设计，完成案例给出的决策任务，老师带领学员实战分析。深入剖析数据决策工具，现场模拟演示实战技能。 2017年7月4日-8月1日，数据高尔夫将整个培训设计成一种决策情景，根据电商企业数据化场景进行案例设计，完成案例给出的决策任务，老师带领学员实战分析。深入剖析数据决策工具，现场模拟演示实战技能。
                    </div>
                </div>
            </div>
            <div class="f-fr">
                <v-sidebarList :sidebarList="sidebarList"></v-sidebarList>
            </div>
        </div>

        <v-footer :footer="footer"></v-footer>
    </div>
</template>

<script>
    import Vue from 'vue';
    import top from '../components/top.vue';
    import search from '../components/search.vue';
    import video from '../components/interview/video.vue';
    import sidebarList from '../components/interview/sidebarList.vue';
    import subpageMenu from '../components/class/subpageMenu.vue';
    import footer from '../components/footer.vue';

    export default {
        data() {
            return {
                top: {},
                search: {},
                video:{},
                sidebarList:{},
                subpageMenu:{},
                footer: {},
            };
        },
        mounted() {

        },
        beforeDestroy() {

        },
        components: {
            'v-top': top,
            'v-search': search,
            'v-video':video,
            'v-sidebarList':sidebarList,
            'v-subpageMenu': subpageMenu,
            'v-footer': footer
        },
        methods: {

        }
    };
</script>

<style lang="less">
    .interviewCon {
        width: 1200px;
        margin: 25px auto 50px;
        .icLeft {
            width: 890px;
            height: 390px;
            border:1px solid #ececec;
            border-top:none;
            .icLeft-cell {
                /*padding-top: 14px;*/
                .icellTop {
                    width: 100%;
                    height: 35px;
                    line-height: 35px;
                    border-bottom: 1px solid #ececec;
                    border-top: 1px solid #ececec;
                    .icllTop-con {
                        padding: 0 14px;
                        .icllTop-logo {
                            display: inline-block;
                            vertical-align: middle;
                            width: 3px;
                            height: 21px;
                            background: #ff8a0c;
                        }
                        .icllTop-text {
                            display: inline-block;
                            vertical-align: middle;
                            padding-left: 14px;
                            font-size: 18px;
                            color: #333333;
                        }

                    }
                }
                .icellContent {
                    font-size: 12px;
                    line-height: 30px;
                    color: #767676;
                    text-indent:2rem;
                    padding:17px 0px 0px 12px;
                }
            }
        }
    }
</style>