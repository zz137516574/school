<template>
    <div id="productDetails">
        <v-top :top="top"></v-top>
        <div class="clearfix container m-t-20 m-b-20">
            <i class="f-fl"><img src="../assets/image/logo.png" alt=""></i>
            <v-search :search="search" class="f-fr"></v-search>
        </div>

        <!--导航-->
        <v-subpageMenu :subpageMenu="subpageMenu" class="m-b-20"></v-subpageMenu>

        <div style="display: none">
          <breadcrumb></breadcrumb>
        </div>

        <!--描述-->
        <div class="prod-desc">
          <img :src="productContent.photo" alt="">
          <div class="container prod-desc-div">
                <div class="name">
                  {{productContent.coupletTitle}}
                  <p class="time m-t-20">{{productContent.addTime}}</p>
                </div>
                <p class="cont m-t-20">{{productContent.coupletTitleChild}}</p>
            </div>
        </div>

        <!--内容-->
        <div class="concept container"  v-html="newsCont"></div>

        <v-footer :footer="footer"></v-footer>
    </div>
</template>

<script>
    import Vue from 'vue';
    import top from '../components/top.vue';
    import search from '../components/search.vue';
    import breadcrumb from '../components/breadcrumb.vue';
    import subpageMenu from '../components/class/subpageMenu.vue';
    import footer from '../components/footer.vue';

    export default {
        data() {
            return {
                top: {},
                search: {},
                subpageMenu:{},
                footer: {},
                productContent:'',
                coupletId:1,
                newsCont:'',
                productDetailsVideo:undefined,
            };
        },
        mounted() {
          this.coupletId = this.$route.query.coupletId;
          this.productDetils();
        },
        beforeDestroy() {

        },
        components: {
            'v-top': top,
            'v-search': search,
            'breadcrumb':breadcrumb,
            'v-subpageMenu': subpageMenu,
            'v-footer': footer
        },
        methods: {
          productDetils(){
            this.service.productInfo(this.coupletId).then(result => {
              this.exchange(result.cloudCouplet.content);
              this.productContent = result.cloudCouplet;
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
    .prod-desc{
        margin-top: -20px;
        width: 100%;
        height: 300px;
        img{
          width: 100%;
          height: 100%;
        }
        .prod-desc-div{
          position: relative;
          z-index: 10;
          margin-top: -290px;
          padding: 60px 35px;
          color: #ffffff;
            .name{
              text-indent: 28px;
              font-size: 22px;
              height: 72px;
              overflow: hidden;
            }
            .time{
              font-size: 14px;
              overflow: hidden;
            }
            p{
              width: 605px;
              font-size: 14px;
              line-height: 28px;
              text-indent: 28px;
              height: 50px;
              overflow: hidden;
            }
        }
    }
    .concept{
        margin-top: 80px!important;
        margin-bottom: 100px!important;
        padding:40px;
        font-size: 14px;
        color: #55555a;
        overflow: hidden;
        text-align: center;
    }
</style>
