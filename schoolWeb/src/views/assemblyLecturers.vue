<template>
    <div id="class">
        <v-top :top="top"></v-top>
        <div class="clearfix container m-t-20 m-b-20">
            <i class="f-fl"><img src="../assets/image/logo.png" alt=""></i>
            <v-search :search="search" class="f-fr"></v-search>
        </div>

        <!--导航-->
        <v-subpageMenu :subpageMenu="subpageMenu"></v-subpageMenu>

        <!--banner-->
        <div class="clearfix">
            <img src="../assets/image/lecturer-banner.jpg" alt="" width="100%">
        </div>

        <div style="display: none;">
          <breadcrumb></breadcrumb>
        </div>
        <!--标题-->
        <div class="container recruitmentTitle">
            <div class="clearfix">
                <i class="f-fl"></i>
                <p class="header f-fl">热门讲师</p>
                <i class="f-fl"></i>
            </div>
            <p>金牌讲师，保证教学质量与学习效果</p>
        </div>

        <!--分类-->
        <v-classification :listData="lecturersItem" v-on:courseTypeRefer="lecturersTypeChange"></v-classification>

        <div class=" live-ul clearfix container m-t-25 m-b-25">
          <v-yunCommonDiv :yunCommonDiv="yunCollegeTeach" v-on:refre="lecturersInfo"></v-yunCommonDiv>
        </div>

        <Page :total="pageNumber*10" @on-change="yunPageChange" class="container text-center m-t-15 m-b-120"></Page>

        <v-footer :footer="footer"></v-footer>
    </div>
</template>

<script>
    import Vue from 'vue';
    import top from '../components/top.vue';
    import search from '../components/search.vue';
    import breadcrumb from '../components/breadcrumb.vue';
    import subpageMenu from '../components/class/subpageMenu.vue';
    import classification from '../components/lecturer/lecturerfication.vue';
    import yunCommonDiv from '../components/yunlianCollege/yunCommonDivs.vue';
    import footer from '../components/footer.vue';

    export default {
        data() {
            return {
                top: {},
                search: {},
                subpageMenu:{},
                yunCommonDiv: {},
                footer: {},
                newAreaData:{
                  codeValue: '全部'
                },
                lecturersItem:'',
                yunCollegeTeach:'',
                pageNumber:1,
                page:1,
                limit:12,
                usertype:1,
                teacherlevel:'',
                recordType:3
            }
        },
        mounted() {
          this.lecturersNavLists();
          this.lecturersTeachers();
        },
        beforeDestroy() {

        },
        components: {
            'v-top': top,
            'v-search': search,
            'breadcrumb':breadcrumb,
            'v-subpageMenu': subpageMenu,
            'v-classification': classification,
            'v-yunCommonDiv': yunCommonDiv,
            'v-footer': footer
        },
        methods: {
            yunPageChange(pageNum){
              this.page = pageNum;
              this.lecturersTeachers();
            },
            //分类导航
            lecturersNavLists(){
              this.service.lecNavList().then(result => {
                this.lecturersItem = result.list;
                this.lecturersItem.unshift(this.newAreaData);
              }).catch(error => {
                this.$Loading.error();
              })
            },
            lecturersTypeChange(itemId){
              this.page = 1;
              this.pageNumber = 1;
              this.teacherlevel = itemId;
              this.lecturersTeachers();
            },
            lecturersTeachers(){
              this.service.lecturers(this.page,this.limit,this.usertype,this.teacherlevel,this.recordType).then(result => {
                this.yunCollegeTeach = result.page.list;
                this.pageNumber = result.page.totalPage;
              }).catch(error => {
                this.$Loading.error();
              })
            },
            lecturersInfo(itemId) {
              this.$router.push({ path: 'assLecturersInfo', query: { lecturersId: itemId }});
            }
        }
    }
</script>

<style lang="less">
    .yun-main-title{
        color: #333333;
        font-size: 30px;
        font-weight: 700;
        text-align: center;
        .yun-main-title-1{
            font-size: 16px;
            padding-top: 10px;
        }
    }
</style>
