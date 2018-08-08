<template>
    <div id="lecturer">
        <v-top :top="top"></v-top>
        <div class="clearfix container m-t-20 m-b-20">
            <i class="f-fl"><img src="../assets/image/logo.png" alt=""></i>
            <v-search :search="search" class="f-fr"></v-search>
        </div>

        <!--导航-->
        <v-subpageMenu :subpageMenu="subpageMenu" menuName="lecturerRecruitment"></v-subpageMenu>

        <div class="bannerimg">
            <img src="../assets/image/lecturer1.jpg" alt=""  style="width: 100%;min-width: 1200px;max-height: 300px;">
        </div>
        <div style="display: none">
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

        <!--讲师招募列表-->
        <div class="clearfix container lecturerItemList">
            <v-lecturer :lecturerItem="lecturer" v-on:refre="lecDetails" v-on:lecturerPageRefer="lecturerAreas"></v-lecturer>
        </div>

        <div class="more nextMore container">
            <button @click="lecturerRecruitmentList">更多>></button>
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
    import lecturer from '../components/lecturer/lecturerItem.vue';
    import footer from '../components/footer.vue';

    export default {
        data() {
            return {
                top: {},
                search: {},
                subpageMenu:{},
                page: 1,
                limit: 8,
                lecturer:{},
                footer: {},
            };
        },
        mounted() {
          this.lecturerAreas();
        },
        beforeDestroy() {

        },
        components: {
            'v-top': top,
            'v-search': search,
            'breadcrumb':breadcrumb,
            'v-subpageMenu': subpageMenu,
            'v-lecturer': lecturer,
            'v-footer': footer
        },
        methods: {
            lecDetails(lecId){
              this.$router.push({path:'lecturerRecruitmentDetails',query:{lecId:lecId}});
            },
            lecturerRecruitmentList(){
              this.$router.push('lecturerRecruitmentList');
            },
            lecturerAreas(){
              this.service.lecturerRecruitment(this.page, this.limit).then(result => {
                this.lecturer = result.page.list;
              }).catch(error => {
                this.$Loading.error();
              })
            }
        }
    };

</script>

<style lang="less">
    /*讲师招募列表*/
    .nextMore button{
      background-color: #ff8a0c;
      color: #ffffff;
    }
</style>
