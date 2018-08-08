<template>
    <div id="lecturerRecruitmentList">
        <v-top :top="top"></v-top>
        <div class="clearfix container m-t-20 m-b-20">
            <i class="f-fl"><img src="../assets/image/logo.png" alt=""></i>
            <v-search :search="search" class="f-fr"></v-search>
        </div>

        <!--导航-->
        <v-subpageMenu :subpageMenu="subpageMenu" class="m-b-20"></v-subpageMenu>

        <!--面包屑-->
        <!--<Breadcrumb separator=">" class="container m-b-20 p-l-15">-->
            <!--<BreadcrumbItem href="/">首页</BreadcrumbItem>-->
            <!--<BreadcrumbItem href="/views/lecturerRecruitmentList">讲师招募列表</BreadcrumbItem>-->
        <!--</Breadcrumb>-->
        <breadcrumb></breadcrumb>

        <!--地区选择-->
        <div class="clearfix container area m-t-25">
            <v-lecturerArea v-on:province="provinces"></v-lecturerArea>
        </div>

        <!--讲师招募列表-->
        <div class="clearfix container lecturerItem">
            <v-lecturer :lecturerItem="lecturer" v-on:refre="lecDetails" v-on:lecturerPageRefer="lecturerAreas" ></v-lecturer>
        </div>
       <Page :total="pageNumber*10" @on-change="lecturerPageChange" class="container text-center m-t-15 m-b-120"></Page>


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
    import lecturerArea from '../components/lecturer/lecturerArea.vue';
    import footer from '../components/footer.vue';

    export default {
      data() {
        return {
          top: {},
          search: {},
          subpageMenu: {},
          page: 1,
          limit: 12,
          pageNumber:1,
          parentId: '',
          lecturer: {},
          provinceChooseData:'',
          footer: {}
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
        'v-lecturerArea': lecturerArea,
        'v-footer': footer
      },
      methods: {
        lecDetails(lecId) {
          this.$router.push({path: 'lecturerRecruitmentDetails', query: {lecId: lecId}});
        },
        //分页
        lecturerPageChange(pageNum){
          this.page = pageNum;
          this.lecturerAreas();
        },
        // 地区选择
        provinces(chooseId) {
          this.parentId = chooseId;
          this.page = 1;
          this.lecturerAreas();
        },
        lecturerAreas(){
          this.service.lecturerRecruitment(this.page, this.limit,this.parentId).then(result => {
            this.lecturer = result.page.list;
            this.pageNumber = result.page.totalPage;
          }).catch(error => {
            this.$Loading.error();
          })
        }
      }
    }

</script>

<style lang="less">
    /*地区*/
    .area{
        width: auto;
        height: 80px;
        padding: 8px 8px;
        border:1px #ededed solid;
    }
</style>
