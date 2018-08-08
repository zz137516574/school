<template>
    <div id="product">
        <v-top :top="top"></v-top>
        <div class="clearfix container m-t-20 m-b-20">
            <i class="f-fl"><img src="../assets/image/logo.png" alt=""></i>
            <v-search :search="search" class="f-fr"></v-search>
        </div>

        <!--导航-->
        <v-subpageMenu :subpageMenu="subpageMenu" menuName="product" class="m-b-20"></v-subpageMenu>

        <!--面包屑-->
        <!--<Breadcrumb separator=">" class="container m-b-20 p-l-15">-->
          <!--<BreadcrumbItem to="/index">首页</BreadcrumbItem>-->
          <!--<BreadcrumbItem>云联优品</BreadcrumbItem>-->
        <!--</Breadcrumb>-->
        <breadcrumb></breadcrumb>

        <!--搜索分类-->
        <div class="container searchVolume clearfix m-t-10 m-b-20">
           <div v-for="(item,index) in courseTypeList" :key="index" @click="timeCourse(item)"
                style="cursor: default;display: inline-block;height: 100%;padding: 0 15px;"
                v-bind:class="{'classthemeColor':position === item.codeValue}" >
             {{item.codeValue}}
           </div>
          <!--<Menu mode="horizontal" active-name="1"  class="f-fl" style="background: #f5f5f5; height: 45px; line-height: 45px;">-->
            <!--<MenuItem name="1" v-for="(item,index) in courseTypeList" :key="index">-->
              <!--<span @click="timeCourse(index,item)" style="width:100%;color: black" :class="{themeColor:position===index}">{{item.codeValue}}</span>-->
            <!--</MenuItem>-->
          <!--</Menu>-->
        </div>

        <!--产品列表-->
        <div class="clearfix container productList">
          <v-productDiv :productDiv="productData" v-on:productRefre="productDetails"></v-productDiv>
        </div>

        <!--分页-->
        <Page :total="pageNumber * 10" class="container text-center" style="padding: 50px 0 100px;" @on-change="newsPageChange"></Page>

        <v-footer :footer="footer"></v-footer>
    </div>
</template>

<script>
    import Vue from 'vue';
    import top from '../components/top.vue';
    import search from '../components/search.vue';
    import breadcrumb from '../components/breadcrumb.vue';
    import subpageMenu from '../components/class/subpageMenu.vue';
    import productDiv from '../components/product/productDiv.vue';
    import footer from '../components/footer.vue';

    export default {
        data() {
            return {
                top: {},
                search: {},
                subpageMenu:{},
                classification: {},
                productDiv: {},
                footer: {},
                newAreaData:[
                  {codeValue: '推荐'},
                  {codeValue: '全部'}
                ],
                courseTypeList:{},
                productData:'',
                position: '全部',
                pageNumber: 1,
                page: 1,
                limit: 16,
                isRecommed:'',
            };
        },
        mounted() {
          this.productClassifyData();
          this.productAreas();
        },
        beforeDestroy() {

        },
        components: {
            'v-top': top,
            'v-search': search,
            'breadcrumb':breadcrumb,
            'v-subpageMenu': subpageMenu,
            'v-productDiv': productDiv,
            'v-footer': footer
        },
        methods: {
          newsPageChange(pageNum){
            this.page = pageNum;
            this.productAreas();
          },
          // 分类请求
          productClassifyData(){
            this.service.productClassify().then(result => {
              this.courseTypeList = result.list;
              for(let i=0;i<2;i++){
                this.courseTypeList.unshift(this.newAreaData[i]);
              }
            }).catch(error => {
              this.$Message.error({
                content: error,
                duration: 5
              });
            })
          },
          // 分类点击事件
          timeCourse(position){
            this.position = position.codeValue;
            this.page = 1;
            this.pageNumber = 1;
            if(position.codeValue === '全部'){
              this.isRecommed = '';
              this.productAreas();
            }else if(position.codeValue === '推荐'){
              this.isRecommed = 1;
              this.productAreas();
            }else{
              this.isRecommed = position.id;
              this.productAreas();
            }
          },
          // 列表请求
          productAreas(){
            this.service.product(this.page, this.limit, this.isRecommed).then(result => {
              this.productData = result.page.list;
              this.pageNumber = result.page.totalPage;
            }).catch(error => {
              this.$Message.error({
                content: error,
                duration: 5
              });
            })
          },
          // 详情页
          productDetails(item){
            this.$router.push({ path: 'productDetails', query: { coupletId:item.coupletId }});
          }
        }
    };

</script>

<style lang="less">
  .classthemeColor{
    background: #ffffff;
    color: #ff8a0c!important;
  }
</style>
