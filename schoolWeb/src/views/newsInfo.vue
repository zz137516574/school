<template>
    <div id="class">
        <v-top :top="top"></v-top>
        <div class="clearfix container m-t-20 m-b-20">
            <i class="f-fl"><img src="../assets/image/logo.png" alt=""></i>
            <v-search :search="search" class="f-fr"></v-search>
        </div>

        <!--导航-->
        <v-subpageMenu :subpageMenu="subpageMenu"></v-subpageMenu>

        <!--news-content-->
        <div class="newsbody clearfix container">
            <div class="f-fl newsbodyLeft">
                <div class="newsPosition p-b-15 p-l-10 p-r-10">
                    <breadcrumb></breadcrumb>
                    <!--<p class="f-fl"><span>新闻中心&nbsp;&nbsp;>&nbsp;&nbsp;</span><span>最新资讯&nbsp;&nbsp;>&nbsp;&nbsp;</span><span class="nowPosition">正文</span></p>-->
                    <!--<p class="f-fr"><img src="../assets/image/news-look.png"/><span class="newsLookNum">{{newDetailInfo.newsVisitNum}}</span></p>-->
                </div>
                <div class="p-t-15 p-b-15 p-l-10 p-r-10">
                    <p class="newsNowTitle p-t-15 p-b-10">{{newDetailInfo.newsTitle}}</p>
                    <p class="newsNowTime p-t-15 p-b-15"><span class="p-r-10">作者:</span><span class="p-r-10">{{newDetailInfo.newsAdduser}}</span><span class="p-r-10">{{newDetailInfo.newsAddtime}}</span></p>
                    <div class="newsInfoCont" id="newsC" v-html="newsCont"></div>
                </div>
            </div>
            <div class="f-fr newsbodyRight">
              <v-newsLeftDiv class="m-b-25"  v-on:recommendationRefre="NewsdetailsPages"></v-newsLeftDiv>
              <v-newsSmallBan :newsSmallBan="newsSmallBan" class="m-b-25"></v-newsSmallBan>
              <v-newsLeftInfo class="m-b-25" v-on:hotRefre="NewsdetailsPages"></v-newsLeftInfo>
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
                newsId: 0,
                newsSerch:'',
                newDetailInfo:{},
                top: {},
                search: {},
                subpageMenu: {},
                newsDiv: {},
                newsLeftDiv:{},
                newsSmallBan:{},
                newsLeftInfo:'',
                newsCont:'',
                footer: {},
            }
        },
        mounted() {
          this.newsId = this.$route.query.newsId;
          this.NewsdetailsPages(this.newsId);
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
        methods:{
//      获取详情左边数据
          NewsdetailsPages(itemData) {
            this.newsId = itemData;
            this.service.NewsdetailsPage(this.newsId).then(result => {
              this.exchange(result.sysNews.newsContent);
              this.newDetailInfo = result.sysNews;
            }).catch(error => {
              this.$Loading.error();
            })
          },
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
              this.newsCont=bbq;
            }
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
            padding: 10px 10px;
            overflow: hidden;
            .newsPosition{
                font-size: 16px;
                color: #333333;
                height: 50px;
                border-bottom: 1px #ededed solid;
                span{
                    cursor: pointer;
                }
                .nowPosition{
                    color: #ff8a0c;
                }
                .newsLookNum{
                    font-size: 12px;
                    color: #999999;
                    padding-left: 6px;
                }
            }
            .newsNowTitle{
                font-size: 25px;
                color: #383d41;
            }
            .newsNowTime{
                font-size: 12px;
                color: #999999;
            }
            .newsInfoCont{
              line-height: 28px;
              font-size: 14px;
              img{
                width: 500px;
                margin: 0 auto;
              }
            }
        }
        .newsbodyRight{
            width: 270px;
            background: #fff;
            height: inherit;
            margin-left: 20px;
        }
    }
</style>
