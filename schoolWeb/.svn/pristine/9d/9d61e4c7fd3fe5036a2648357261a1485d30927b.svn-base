<template>
    <div id="interIndex">
        <v-top :top="top"></v-top>
        <div class="clearfix container m-t-20 m-b-20">
            <i class="f-fl"><img src="../assets/image/logo.png" alt=""></i>
            <v-search :search="search" class="f-fr"></v-search>
        </div>

        <!--导航-->
        <v-subpageMenu :subpageMenu="subpageMenu"></v-subpageMenu>
        <!--banner图片-->
        <div class="bannerimg">
            <img src="../assets/image/ftBanner.jpg" alt="">
        </div>

        <!--标题-->
        <div class="container recruitmentTitle" style="margin-bottom:20px !important;margin-top:40px !important">
            <div class="clearfix">
                <i class="f-fl"></i>
                <p class="header f-fl">访谈倒计时</p>
                <i class="f-fl"></i>
            </div>
            <p>访谈直播，让我们一起开始直播吧</p>
        </div>
        <!--直播列表-->
        <div class="clearfix container enrollList intervieData">
          <v-courseItem :courseData="intervieData"  v-on:refre="intervieDetail"></v-courseItem>
        </div>

        <div class="container more-button-1" style="margin-top: 46px;margin-bottom: 46px;" @click="interview">更多&nbsp;&nbsp;></div>
        <v-footer :footer="footer"></v-footer>
    </div>
</template>

<script>
    import Vue from 'vue';
    import top from '../components/top.vue';
    import search from '../components/search.vue';
    import subpageMenu from '../components/class/subpageMenu.vue';
    import footer from '../components/footer.vue';
    import courseItem from '../components/course/courseItem.vue';

    export default {
        data() {
            return {
                top: {},
                search: {},
                subpageMenu:{},
                footer: {},
                intervieData: [
                  {
                    name:'云联商城店铺装修基础班',
                    imgUrl:'./src/assets/image/class1.jpg',
                    date:'9月9日 14:00',
                    state:'99.99'
                  },
                  {
                    name:'商业模式路演',
                    imgUrl:'./src/assets/image/class2.jpg',
                    date:'9月9日 14:00',
                    state:'100.00'
                  },
                  {
                    name:'云联商城店铺装修全面教程',
                    imgUrl:'./src/assets/image/class3.jpg',
                    date:'9月9日 14:00',
                    state:'125.00'
                  },
                  {
                    name:'云联商城店铺装修全面教程',
                    imgUrl:'./src/assets/image/class4.jpg',
                    date:'9月9日 14:00',
                    state:'100.00'
                  },
                  {
                    name:'云联商城店铺装修全面教程',
                    imgUrl:'./src/assets/image/class1.jpg',
                    date:'9月9日 14:00',
                    state:'88.00'
                  },
                  {
                    name:'云联商城店铺装修全面教程',
                    imgUrl:'./src/assets/image/class2.jpg',
                    date:'9月9日 14:00',
                    state:'100.00'
                  },
                  {
                    name:'云联商城店铺装修全面教程',
                    imgUrl:'./src/assets/image/class3.jpg',
                    date:'9月9日 14:00',
                    state:'66.66'
                  },
                  {
                    name:'云联商城店铺装修全面教程',
                    imgUrl:'./src/assets/image/class4.jpg',
                    date:'9月9日 14:00',
                    state:'100.00'
                  }
                ]
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
            'v-footer': footer,
            'v-courseItem': courseItem
        },
        methods: {
            interview(){
                this.$router.push('interview');
            },
            intervieDetail(){
              this.$router.push('interviewVideo');
            }
        }
    };

</script>
<style lang="less">
    .bannerimg{
        overflow: hidden;
        height: 350px;
        img{
            height: 100%;
        }
    }
    /*访谈列表*/
    .enrollList{
        li{
            margin-top: 30px;
            float: left;
            margin-right: 22px;
            a{
                transition: all .4s ease;
            }
        }
        li:nth-child(4n){
            margin-right: 0;
        }
    }
    .enrollList li:hover a{
        transform: translateY(-8px);
        -webkit-transform: translateY(-8px);
        -moz-transform: translateY(-8px);
        box-shadow: 0 5px 20px 5px #e0e0e0;
        -webkit-box-shadow: 0 5px 20px 5px #e0e0e0;
        -moz-box-shadow: 0 5px 20px 5px #e0e0e0;
        transition: all .4s ease;
    }

    .intervieData .courseState{
      display: none;
    }
</style>
