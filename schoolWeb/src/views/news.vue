<template>
    <div id="class">
        <v-top :top="top"></v-top>
        <div class="clearfix container m-t-20 m-b-20">
            <i class="f-fl"><img src="../assets/image/logo.png" alt=""></i>
            <v-search :search="search" class="f-fr"></v-search>
        </div>

        <!--导航-->
        <v-subpageMenu :subpageMenu="subpageMenu" menuName="news" ></v-subpageMenu>

        <!--banner-->
        <div class="clearfix">
            <img src="../assets/image/news-banner.jpg" alt="" style="width: 100%;min-width: 1200px;max-height: 300px;">
        </div>

        <div style="display: none">
          <breadcrumb></breadcrumb>
        </div>
        <!--news-content-->
        <div class="newsbody clearfix container">
            <div class="f-fl newsbodyLeft">
                <!--导航-->
                <div class="NewTabBar">
                    <div class="clearfix" style="white-space: nowrap;">
                      <span class="newsTitles" v-for="(item,index) in newsNavListData" :key="index" :class="{'onnnnnnn':changeLi===index}"
                          @click="changeColor(item,index)">{{item.className}}</span>
                    </div>
                </div>
                <!--内容-->
                <div class="tabCont">
                  <div><v-newsDiv :newsData="newsGroup" v-on:refre="detailsCon" v-on:newPageRefer="newsGroupS" ></v-newsDiv></div>
                  <Page :total="pageNums*10" class="text-center p-t-40 p-b-40" @on-change="newsPageChange"></Page>
                </div>
            </div>
            <div class="f-fr newsbodyRight">
                <v-newsLeftDiv class="m-b-25" v-on:recommendationRefre="detailsCon" ></v-newsLeftDiv>
                <v-newsSmallBan :newsSmallBan="newsSmallBan" class="m-b-25"></v-newsSmallBan>
                <v-newsLeftInfo class="m-b-25" v-on:hotRefre="detailsCon" ></v-newsLeftInfo>
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
    import newsDiv from '../components/news/newsDiv.vue';
    import newsLeftDiv from '../components/news/newsLeftDiv.vue';
    import newsSmallBan from '../components/news/newsSmallBan.vue';
    import newsLeftInfo from '../components/news/newsLeftInfo.vue';
    import footer from '../components/footer.vue';

    export default {
        data() {
            return {
                top: {},
                search: {},
                subpageMenu: {},
                newsLeftDiv:{},
                newsSmallBan:{},
                newsLeftInfo:{},
                footer: {},
                page: 1,
                limit: 6,
                newsGroup:'',
                newsNavListData:'',
                classId: '',
                className:'',
                classId1: '',
                changeLi: 0,
                newsId:0,
                itemData: '',
                pageNums:1,
            }
        },
        mounted() {
          this.newsNavLists();
        },
        beforeDestroy() {

        },
        components: {
            'v-top': top,
            'v-search': search,
            'breadcrumb':breadcrumb,
            'v-subpageMenu': subpageMenu,
            'v-newsDiv': newsDiv,
            'v-newsLeftDiv': newsLeftDiv,
            'v-newsSmallBan': newsSmallBan,
            'v-newsLeftInfo': newsLeftInfo,
            'v-footer': footer
        },
        methods: {
          newsPageChange(newsPage){
            this.page = newsPage;
            this.newsGroupS();
          },
          //  新闻左侧分类导航
          newsNavLists(){
            this.service.newsnavList().then(result => {
              this.newsNavListData = result.list;
              this.classId = result.list[0].classId;
              this.newsGroupS();
            }).catch(error => {
              this.$Loading.error();
            })
          },
          // 新闻左侧导航点击事件
          changeColor(item,index){
            this.changeLi = index;
            this.classId = item.classId; //导航ID
            this.className = item.className; //导航名
            this.page = 1;
            this.pageNums = 1;
            this.newsGroupS();
          },
          //  新闻左侧列表
          newsGroupS() {
            this.newsAttribute= '';
            this.newsVisitNum= '';
            this.service.newsLeftGroup(this.page, this.limit, this.classId, this.newsAttribute, this.newsVisitNum).then(result => {
              this.newsGroup = result.page.list;
              this.pageNums = result.page.totalPage;
            }).catch(error => {
              this.$Loading.error();
            })
          },
          //  跳详情页
          detailsCon(itemData) {
            this.$router.push({ path: 'newsInfo', query: { newsId: itemData }});
          }

        }
    };

</script>

<style lang="less">
    .newsbody{
        padding-top: 30px;
        padding-bottom: 30px;
        background: #fff;
        .newsbodyLeft {
            width: 910px;
            background: #fff;
            height: inherit;
            border: 1px #ededed solid;
            padding: 0px !important;
            .ivu-col-span-12 {
                display: block;
                width: 100%;
            }
            .ivu-tabs {
                width: 100%;
                height: inherit;
                float: left;
                background: #fff;
            }
            .ivu-tabs.ivu-tabs-card>.ivu-tabs-bar .ivu-tabs-tab {
                width:28%;
                height: 52px !important;
                line-height: 37px;
                font-size: 16px;
                color: #333333;
                text-align: center;
                background: #fafafa !important;
                border-top: 3px #fafafa solid !important;
                margin-right: 0 !important;
                /*padding: 0;*/
                border-radius: 0px !important;
            }
            .ivu-tabs.ivu-tabs-card > .ivu-tabs-bar .ivu-tabs-tab-active{
                background: #ffffff !important;
                color: #ff8a0c !important;
                border-top: 3px solid #ff8a0c !important;
            }
            .ivu-tabs.ivu-tabs-card>.ivu-tabs-bar .ivu-tabs-nav-container {
                height: auto;
            }
            .ivu-tabs.ivu-tabs-card>.ivu-tabs-bar .ivu-tabs-tab {
                border: 0;
                border-right: 1px #ededed solid;
            }
            .ivu-tabs-nav-container {
                margin-bottom: 0;
            }

        }
        .newsbodyRight{
            width: 280px;
            background: #fff;
            height: inherit;
            margin-left: 10px;
        }
    }

    .NewTabBar{
      width: 908px;
      height: 50px;
      overflow-x: auto;
      background: #f5f5f5;
      border-bottom: 1px solid #dddddd;
      span.newsTitles{
        display: inline-block;
        text-align: center;
        line-height: 42px;
        border-top: 2px solid #f5f5f5;
        cursor: pointer;
        padding: 0 15px;
        font-size: 15px;
      }
      span.onnnnnnn{
        background: #ffffff;
        color: #ff8a0c;
        border-top: 3px solid #ff8a0c;
      }
    }

    ::-webkit-scrollbar {
      width: 2px;
      height: 5px
    }
    ::-webkit-scrollbar-button:vertical {
      display: none
    }
    ::-webkit-scrollbar-corner,
    ::-webkit-scrollbar-track {
      background-color: #fff
    }
    ::-webkit-scrollbar-thumb {
      border-radius: 5px;
      background-color: rgba(0, 0, 0, .3)
    }
    ::-webkit-scrollbar-thumb:vertical:hover {
      background-color: rgba(0, 0, 0, .35)
    }
    ::-webkit-scrollbar-thumb:vertical:active {
      background-color: rgba(0, 0, 0, .38)
    }
</style>
