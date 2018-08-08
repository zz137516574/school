<template>
    <div id="Roadshow">
        <v-top :top="top"></v-top>
        <div class="clearfix container m-t-20 m-b-20">
            <i class="f-fl"><img src="../assets/image/logo.png" alt=""></i>
            <v-search :search="search" class="f-fr"></v-search>
        </div>

        <!--导航-->
        <v-subpageMenu :subpageMenu="subpageMenu"></v-subpageMenu>
        <!--banner图片-->
        <div class="bannerimg">
            <img src="../assets/image/roadBanner.jpg" alt="">
        </div>

        <!--标题-->
        <div class="container recruitmentTitle" style="margin-bottom:20px !important;margin-top:40px !important">
            <div class="clearfix">
                <i class="f-fl"></i>
                <p class="header f-fl">即将路演</p>
                <i class="f-fl"></i>
            </div>
            <p>路演直播，让我们一起开始直播吧</p>
        </div>
        <p class="container createCell clearfix">
            <span class="createRow f-fr">创建路演</span>
        </p>
        <!--直播时间栏-->
        <div class="container">
            <ul  class="timeLists">
                <li v-for="(item,index) in items" class="timeLi" v-bind:class="{'on':flag==index}" v-on:click='light(index)'>{{item.text}}</li>
            </ul>
        </div>
        <!--直播列表-->
        <ul class="clearfix container enrollList">
            <li @click="roadShowList">
                <v-listDiv :listDiv="listDiv"></v-listDiv>
            </li>
            <li @click="roadShowList">
                <v-listDiv :listDiv="listDiv"></v-listDiv>
            </li>
            <li @click="roadShowList">
                <v-listDiv :listDiv="listDiv"></v-listDiv>
            </li>
            <li @click="roadShowList">
                <v-listDiv :listDiv="listDiv"></v-listDiv>
            </li>
            <li @click="roadShowList">
                <v-listDiv :listDiv="listDiv"></v-listDiv>
            </li>
            <li @click="roadShowList">
                <v-listDiv :listDiv="listDiv"></v-listDiv>
            </li>
            <li @click="roadShowList">
                <v-listDiv :listDiv="listDiv"></v-listDiv>
            </li>
            <li @click="roadShowList">
                <v-listDiv :listDiv="listDiv"></v-listDiv>
            </li>
        </ul>

        <div class="container more-button-1" style="margin-top: 46px;margin-bottom: 46px;" @click="roadShowList">更多&nbsp;&nbsp;></div>
        <v-footer :footer="footer"></v-footer>
    </div>
</template>

<script>
    import Vue from 'vue';
    import top from '../components/top.vue';
    import search from '../components/search.vue';
    import subpageMenu from '../components/class/subpageMenu.vue';
    import listDiv from '../components/interview/listDiv.vue';
    import footer from '../components/footer.vue';

    export default {
        data() {
            return {
                top: {},
                search: {},
                subpageMenu:{},
                listDiv:{},
                footer: {},
                items:[
                    { text: '今天' },
                    { text: '19:00'},
                    { text: '21:00' },
                    { text: '22:00' },
                    { text: '明天' },
                    { text: '19:00' },
                    { text: '21:00'},
                    { text: '22:00' },
                    { text: '23:00' }
                ],
                flag:0,
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
            'v-listDiv': listDiv,
            'v-footer': footer
        },
        methods: {
            roadShowList(){
                this.$router.push('roadShowList');
            },
            light:function(index){
                this.flag=index;
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
    .createCell{
        width: 100%;
        .createRow{
            display: inline-block;
            width: 80px;
            height: 35px;
            line-height:35px;
            text-align: center;
            background-color: #fcad58;
            border-radius: 5px;
            color:white;
            margin-right:15px;
        }
    }
    .timeLists{
        width: 100%;
        margin-top:15px;
        background:#f2f2f2;
        .timeLi{
            width: 130px;
            padding:0px 25px ;
            text-align: center;
            height:50px;
            line-height:50px;
            display: inline-block !important;
            vertical-align: middle;
            border-right:1px solid #d6d6d6;
            font-size:15px;
        }
    }
    /*访谈列表*/
    .enrollList{
        li{
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
    /*更多按钮*/
    .more{
        margin-top: 60px!important;
        margin-bottom: 55px!important;
        text-align: center;
        button{
            width: 167px;
            height: 54px;
            line-height: 54px;
            text-align: center;
            background: #f8f8f8;
            font-size: 16px;
            color: #1e1e1e;
            border-radius: 5px;
            border: none;
            outline: none;
            cursor: pointer;
        }
    }
</style>