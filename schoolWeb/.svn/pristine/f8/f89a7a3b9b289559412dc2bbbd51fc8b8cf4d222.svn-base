<template>
    <div id="course">
        <v-top :top="top"></v-top>
        <div class="clearfix container m-t-20 m-b-20">
            <i class="f-fl"><img src="../assets/image/logo.png" alt=""></i>
            <v-search :search="search" class="f-fr"></v-search>
        </div>

        <!--导航-->
        <v-subpageMenu :subpageMenu="subpageMenu"></v-subpageMenu>

        <!--面包屑-->
        <Breadcrumb separator=">" class="container m-b-20 m-t-20">
          <BreadcrumbItem to="/index">首页</BreadcrumbItem>
          <BreadcrumbItem to="/column">黄董专区</BreadcrumbItem>
          <BreadcrumbItem>黄董专区正文</BreadcrumbItem>
        </Breadcrumb>

        <!--内容区域-->
        <div class="columnWrap container">
            <div class="name">{{huangdongDetail.newsTitle}}</div>
            <div class="author">
                <span class="m-r-20">作者：{{huangdongDetail.newsAdduser}}</span>
                <span>{{huangdongDetail.newsAddtime}}</span>
            </div>
            <div class="columncont" v-html="newsCont"></div>
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
                top: {},
                search: {},
                subpageMenu:{},
                footer: {},
                huangdongDetail:{},
                newsCont:'',
            };
        },
        mounted() {
          this.newsId = this.$route.query.newsId;
          this.huangdongDetails();
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
          huangdongDetails() {
            this.service.huangDongInfo(this.newsId).then(result => {
              this.exchange(result.sysNews.newsContent);
              this.huangdongDetail = result.sysNews;
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
    .columnWrap{
        padding: 30px 15px;
        margin-bottom: 100px;
        border-top: 1px solid #efefef;
        text-align: center;
        overflow: hidden;
        .name{
            padding-bottom: 20px;
            font-size: 26px;
            color: #2a2a2a;
        }
        .author{
            padding-bottom: 30px;
            font-size: 12px;
            color: #494949;
        }
    }
</style>
