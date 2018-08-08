<!-- 公用层 -->
<template>
<div class="clearfix">
  <div class="activitylong-div clearfix f-fl" v-for="(item,index) in commonDivData" :key="index">
      <div class="activitylong-div-left f-fl">
        <img :src="item.activityPhoto" alt="">
      </div>
      <div class="activitylong-div-right f-fl">
        <p class="activitylong-title">{{item.activityTitle}}</p>
        <div class="activitylong-info">
          <p class="activitylong-block">{{item.activityAddtime}}</p>
          <p class="activitylong-block">地点：{{item.areaName}}</p>
          <p class="activitylong-block">简介：{{item.activityIntroduce}}</p>
        </div>
        <div class="activitylong-btnBlock clearfix">
          <p class="activitylong-money f-fl" v-if="item.activityPrice != 0 ">￥{{item.activityPrice | currency}}</p>
          <p class="activitylong-money f-fl" v-if="item.activityPrice == 0 ">免费</p>
          <p class="activitylong-button f-fr" @click="enrollDetailsGroup(item)">我要报名</p>
        </div>
      </div>
    </div>
</div>
</template>

<script>
    export default {
      props: {
        commonDivData: {
          required: true
        }
      },
      data() {
        return {

        };
      },
        mounted() {

        },
        beforeDestroy() {

        },
        filters:{      //数据过滤器
        currency:function(x){
          try {
            let f_x1 = parseFloat(x);
            if (isNaN(f_x1)) {
              return x;
            }
            let f_x = Math.round(x * 100) / 100;
            let s_x = f_x.toString();
            let pos_decimal = s_x.indexOf('.');
            if (pos_decimal < 0) {
              pos_decimal = s_x.length;
              s_x += '.';
            }
            while (s_x.length <= pos_decimal + 2) {
              s_x += '0';
            }
            return s_x;
          } catch (e) {
            return '0.00';
          }
        }
      },
        methods: {
            enrollDetailsGroup(item){
                this.$emit('enrollRefre', item);
            }
        }
    };
</script>

<style lang="less">
    .activitylong-div {
        width: 590px !important;
        height: 195px !important;
        background-color: #ffffff;
        border:1px #ededed solid;
        margin-right: 20px;
        margin-bottom: 20px;
        .activitylong-div-left{
            width: 230px !important;
            height: 177px !important;
            margin: 8px;
            box-sizing: border-box;
            background-image: url('../../assets/image/imgbg.jpg');
            background-repeat: no-repeat;
            background-size: 100% 100%;
            display: block;
            img{
              width: 100%;
              height: 100%;
            }
        }
        .activitylong-div-right{
            width: 340px !important;
            height: 206px !important;
            padding: 8px;
            .activitylong-title{
                color: #2a2a2a;
                font-size: 16px;
                padding-top: 20px;
            }
            .activitylong-info{
                color: #959595;
                font-size: 12px;
                padding-top: 10px;
                .activitylong-block{
                  padding-bottom: 5px;
                }
            }
            .activitylong-btnBlock{
              padding-top: 10px;
              .activitylong-money{
                color: #ff8a0c;
                font-size: 18px;
              }
              .activitylong-button{
                width: 86px !important;
                height: 30px !important;
                background-color: #ffffff;
                border:1px #c1c1c1 solid;
                font-size: 12px;
                color: #717171;
                border-radius: 5px;
                text-align: center;
                line-height: 30px;
                cursor: pointer;
              }
            }
        }
    }
    .activitylong-div:nth-child(2n){
      margin-right: 0;
    }
    .activitylong-div:hover {
        border: 1px #ff8a0c solid;
        transform: translateY(-8px);
        -webkit-transform: translateY(-8px);
        -moz-transform: translateY(-8px);
        box-shadow: 0 5px 20px 5px #e0e0e0;
        -webkit-box-shadow: 0 5px 20px 5px #e0e0e0;
        -moz-box-shadow: 0 5px 20px 5px #e0e0e0;
        transition: all .4s ease;
        .activitylong-button{
          background-color: #ff8a0c!important;
          border:1px #ff8a0c solid!important;
          color: #ffffff!important;
        }
    }
</style>
