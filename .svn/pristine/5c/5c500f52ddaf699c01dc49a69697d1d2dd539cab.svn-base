<!-- 搜索 -->
<template>
    <div class="search">
        <div class="clearfix">
            <Input size="large" icon="ios-search-strong" placeholder="请输入要搜索的课程" class="" v-model="courseName" @on-enter="searchIndexs"></Input>
            <Button type="primary" @click="searchIndexs">搜索</Button>
        </div>
        <!--<div class="lately">-->
            <!--<a href="#">开店流程</a>-->
            <!--<a href="#" class="text-orange">商业模式</a>-->
            <!--<a href="#">代理机制</a>-->
            <!--<a href="#">联盟商家</a>-->
            <!--<a href="#">店铺装修</a>-->
            <!--<a href="#" class="text-orange">APP下载</a>-->
        <!--</div>-->
    </div>
</template>
<script>
    export default {
        props: {
            search: {
            }
        },
        data() {
            return {
              courseName:''
            };
        },
        mounted() {

        },
        beforeDestroy() {

        },
        methods: {
//          //首页搜索
          searchIndexs() {
            if(this.$route.name === 'courseSearch'){
              this.$router.replace({ path: '#', query: { courseName:this.courseName}});
              this.$emit('courseUrl');
            }else{
              this.$router.replace({ path: 'courseSearch', query: { courseName:this.courseName}});
            }
          }
        }
    };
</script>
<style lang="less">
    .search {
        width: 500px;
        .ivu-input-wrapper{
            width: 412px !important;
            float: left;
            height: 33px;
            .ivu-input-large {
                border-radius: 0;
                box-sizing: border-box;
                height: 35px!important;
                padding: 6px 10px 6px 30px !important;
            }
            .ivu-input-icon {
                right: auto;
                color: #dbdbdb;
            }
        }
        button {
            float: right;
            width: 85px;
            height: 35px;
            border-radius: 0;
            font-size: 15px;
            padding: 5px 15px !important;
            background-color: #ff8a0c;
            border-color: #ff8a0c;
        }
        button:hover {
            background-color: #ff982a;
            border-color: #ff982a;
        }
    }
    .lately {
        padding-top: 5px;
        a,a:hover {
            margin-right:10px;
            color: #949494;
        }
        .text-orange,.text-orange:hover {
            color: #ff8a0c;
        }
    }
    .clearfix::after{
        content: '';
        height: 0;
        clear: both;
        display: block;
        visibility: hidden;
    }
</style>
