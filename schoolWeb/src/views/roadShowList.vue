<template>
    <div id="class">
        <v-top :top="top"></v-top>
        <div class="clearfix container m-t-20 m-b-20">
            <i class="f-fl"><img src="../assets/image/logo.png" alt=""></i>
            <v-search :search="search" class="f-fr"></v-search>
        </div>

        <!--导航-->
        <v-subpageMenu :subpageMenu="subpageMenu" class="m-b-20"></v-subpageMenu>

        <!--面包屑-->
        <Breadcrumb separator=">" class="container m-b-20 p-l-15">
            <BreadcrumbItem href="/">访谈专栏列表</BreadcrumbItem>
            <!--<BreadcrumbItem href="/views/class">班级列表</BreadcrumbItem>-->
        </Breadcrumb>

        <!--分类-->
        <v-classInterview :classInterview="classInterview"></v-classInterview>

        <!--搜索热度-->
        <v-searchVolume :searchVolume="searchVolume" class="m-t-10"></v-searchVolume>

        <!--访谈列表-->
        <div class="jingpinDiv container">
            <div class="ftList">
                <ul class="clearfix">
                    <li @click="roadShowVideo">
                        <v-listDiv :listDiv="listDiv"></v-listDiv>
                    </li>
                    <li @click="roadShowVideo">
                        <v-listDiv :listDiv="listDiv"></v-listDiv>
                    </li>
                    <li @click="roadShowVideo">
                        <v-listDiv :listDiv="listDiv"></v-listDiv>
                    </li>
                    <li @click="roadShowVideo">
                        <v-listDiv :listDiv="listDiv"></v-listDiv>
                    </li>
                    <li @click="roadShowVideo">
                        <v-listDiv :listDiv="listDiv"></v-listDiv>
                    </li>
                    <li @click="roadShowVideo">
                        <v-listDiv :listDiv="listDiv"></v-listDiv>
                    </li>
                    <li @click="roadShowVideo">
                        <v-listDiv :listDiv="listDiv"></v-listDiv>
                    </li>
                    <li @click="roadShowVideo">
                        <v-listDiv :listDiv="listDiv"></v-listDiv>
                    </li>
                    <li @click="roadShowVideo">
                        <v-listDiv :listDiv="listDiv"></v-listDiv>
                    </li>
                    <li @click="roadShowVideo">
                        <v-listDiv :listDiv="listDiv"></v-listDiv>
                    </li>
                    <li @click="roadShowVideo">
                        <v-listDiv :listDiv="listDiv"></v-listDiv>
                    </li>
                    <li @click="roadShowVideo">
                        <v-listDiv :listDiv="listDiv"></v-listDiv>
                    </li>
                    <li @click="roadShowVideo">
                        <v-listDiv :listDiv="listDiv"></v-listDiv>
                    </li>
                    <li @click="roadShowVideo">
                        <v-listDiv :listDiv="listDiv"></v-listDiv>
                    </li>
                    <li @click="roadShowVideo">
                        <v-listDiv :listDiv="listDiv"></v-listDiv>
                    </li>
                    <li @click="roadShowVideo">
                        <v-listDiv :listDiv="listDiv"></v-listDiv>
                    </li>
                </ul>
            </div>
        </div>
        <!--分页-->
        <Page :total="100" class="container text-center m-t-20 m-b-120"></Page>
        <v-footer :footer="footer"></v-footer>
    </div>
</template>

<script>
    import Vue from 'vue';
    import top from '../components/top.vue';
    import search from '../components/search.vue';
    import subpageMenu from '../components/class/subpageMenu.vue';
    import classInterview from '../components/class/classInterview.vue';
    import searchVolume from '../components/class/searchVolume.vue';
    import footer from '../components/footer.vue';
    import listDiv from '../components/interview/listDiv.vue';

    export default {
        data() {
            return {
                top: {},
                search: {},
                subpageMenu:{},
                classInterview: {},
                searchVolume:{},
                footer: {},
                listDiv:{},
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
            'v-classInterview': classInterview,
            'v-searchVolume': searchVolume,
            'v-footer': footer,
            'v-listDiv':listDiv
        },
        methods: {
            roadShowVideo(){
                this.$router.push('roadShowVideo');
            },
        }
    };

</script>

<style lang="less">
    .jingpinDiv{
        margin-bottom: 100px!important;
        li{
            float: left;
            margin-right: 22px;
            margin-top: 25px;
        }
        li:nth-child(4n){
            margin-right: 0;
        }
        .lijibaoming{
            display: none;
        }
        .dollor{
            display: none;
        }
    }


</style>