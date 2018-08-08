<!-- 公用层 -->
<template>
<div>
  <div class="clearfix yunCommonDiv">
    <div class="yunComDiv" v-for="(item,index) in yunCommonDiv.list" :key="index" @click="teacherInfo(item)">
      <div class="yunCommonTop">
        <div class="yunCommonHeader">
          <img  class="yunCommonDivimg" :src="item.head" alt="">
        </div>
        <img class="yunCommonDivimgs" src="../../assets/image/yun-common-renzhen.png" alt="">
        <div class="yunCommonMiddle">
          <p class="yunCommonName">{{item.nikename}}</p>
          <p class="yunCommonInfo"><span>{{item.schoolname}}</span>&nbsp;&nbsp;|&nbsp;&nbsp;<span>{{item.codevalue}}</span></p>
          <p class="yunCommonSome">关注&nbsp;&nbsp;<span class="yunCommonNum1">{{item.teacherFollow}}</span>&nbsp;&nbsp;|&nbsp;&nbsp;粉丝&nbsp;&nbsp;<span class="yunCommonNum2">{{item.teacherFans}}</span></p>
        </div>
      </div>
    </div>
  </div>
  <Page :total="yunCommonDiv.totalPage * 10" class="container text-center" style="padding: 50px 0 100px;" @on-change="newsPageChange"></Page>
</div>
</template>

<script>
    export default {
        props:{
          yunCommonDiv: {
            required: true
          }
        },
        data() {
            return {

            }
        },
        mounted() {

        },
        beforeDestroy() {

        },
        components: {

        },
        methods: {
          newsPageChange(pageNum){
            this.$emit('teaPageRefer', pageNum);
          },
          teacherInfo(itemId) {
            this.$emit('refre', itemId);
//            this.$router.push('assLecturersInfo');
          }
        }
    }

</script>


<style lang="less">
    .yunCommonDiv {
        .yunComDiv{
          float: left;
          width: 282px !important;
          border: 1px #f2f2f2 solid;
          background-color: #ffffff;
          margin: 0 20px 20px 0;
          position: relative;
        }
      .yunComDiv:nth-child(4n){
        margin-right: 0;
      }
        .yunCommonTop{
            width: 100% !important;
            height: 246px !important;
            background-color: #f2f2f2;
            padding-top: 30px;
            box-sizing: border-box;
            .yunCommonHeader{
                width: 110px !important;
                height: 110px !important;
                border: 2px #ffffff solid;
                border-radius: 50%;
                overflow: hidden;
                margin: 0 auto;
              .yunCommonDivimg{
                width: 100%;
                height: 100%;
                background-repeat: no-repeat;
                background-size: 100% 100%;
                background-image: url('../../assets/image/imgbg.jpg');
              }
            }
            .yunCommonDivimgs{
                position: absolute;
                right: 90px;
                top: 110px;
            }
        }
        .yunCommonMiddle{
            float: left;
            text-align: center;
            width: 100% !important;
            .yunCommonName{
                font-size: 16px;
                color: #333333;
                padding-top: 12px;
                cursor: pointer;
            }
            .yunCommonInfo,.yunCommonSome{
                font-size: 12px;
                color: #999999;
                padding-top: 10px;
                .yunCommonNum1,.yunCommonNum2{
                    color: #ff8a0c;
                }
            }
        }
    }
    .yunCommonDiv .yunComDiv:hover {
        box-shadow: 2px 2px 20px 0 #c2c2c2;
        -webkit-box-shadow: 2px 2px 20px 0 #c2c2c2;
        -moz-box-shadow: 2px 2px 20px 0 #c2c2c2;
        transition: all .3s ease;
        cursor: pointer;
      .yunCommonName{
        color: #ff8a0c;
      }
    }
</style>
