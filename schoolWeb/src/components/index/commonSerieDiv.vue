<!-- 公用层 -->
<template>
  <div>
    <div class="clearfix">
      <div class="common-div f-fl"  v-for="(item,index) in seriesData.list" :key="index" @click="newdata(item)">
        <div class="common-top">
          <img :src="item.photo" alt="" v-if="item.hasOwnProperty('photo')">
          <div class="courseMask clearfix">
            <div class="maskLeft f-fl">

            </div>
            <div class="maskRight f-fr" style="font-size: 12px;color: #ffffff;">
              <span v-if="courseStatusData[index]==='1'" style="background:rgb(2,218,38)">直播中</span>
              <span v-if="courseStatusData[index]==='2'" style="background:rgb(254,139,10)">预约中</span>
              <span v-if="courseStatusData[index]==='3'" style="background:rgb(233,83,7)">已结束</span>
              <span v-if="courseStatusData[index]==='4'" style="background:rgb(254,139,10)">点播中</span>
              <span v-if="courseStatusData[index]==='5'" style="background:rgb(2,218,38)">回放中</span>
            </div>
          </div>
        </div>
        <div class="courseBottom">
          <div class="top">
            <span class="courseTitle">{{item.courseName}}</span>
            <span class="courseState"
                  :style="{ background: item.type === 7 ? '#ff8a0c' : item.type == '8' ? '#55a7d9' : item.type == '9' ? '#2ed068' : 'transparent' }"
                  v-text="item.typeStr"
                  v-if="item.typeStr != null"></span>
            <span v-else style="display: none"></span>
          </div>
          <div class="clearfix " style="margin-bottom:4px">
            <p>{{item.studentCount}}</p>
            <span class="courseTime f-fl" v-if="item.studentCount === 0 || item.studentCount === null || item.studentCount === undefined">暂无人已报名</span>
            <span class="courseTime f-fl" v-else>{{item.studentCount}}{{item.studentCount}}人已报名</span>
            <!--<span class="f-fr price" v-text="item.price == '0' ? '免费' : item.price "></span>-->
            <span class="f-fr">{{item.schoolName}}</span>
          </div>
          <div class="clearfix">
            <span class="price"  v-if="item.price != 0 "><span  style="color: #ff8a0c;">￥{{item.price | currency}}</span></span>
            <span class="price"  v-if="item.price == 0 "  style="color: #ff8a0c;">免费</span>
          </div>
        </div>
      </div>
    </div>
    <Page :total="seriesData.totalPage * 10" class="container text-center m-t-30" @on-change="newsPageChange"></Page> <!---->
  </div>
</template>

<script>
    export default {
      props: {
        seriesData: {
          required: true
        },
        courseStatusData:{
          required:true
        }
      },
        data() {
            return {

            };
        },
        mounted() {
          this.headteacher = this.userId;
        },
        beforeDestroy() {

        },
        components: {

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
            while (s_x.length <= pos_decimal + 1) {
              s_x += '0';
            }
            return s_x;
          } catch (e) {
            return '0.00';
          }
        }

      },
        methods: {
          newsPageChange(pageNumber){
            this.$emit('pageRefer', pageNumber);
          },
          newdata(itemId) {
            this.$emit('seriesRefre', itemId);
          }
        }
    };

</script>

<style lang="less">
    .common-div {
        width: 283px !important;
        height: 269px !important;
        border: 1px #ededed solid;
        background-color: #ffffff;
        margin-top: 30px;
        margin-right: 22px;
        cursor: pointer;
        .common-top{
            width: 100% !important;
            height: 172px !important;
            background-repeat: no-repeat;
            background-size: 100% 100%;
            background-image: url('../../assets/image/imgbg.jpg');
            position: relative;
          img{
            width: 100%;
            height: 100%;
          }
          .courseMask{
            position: absolute;
            width: 100%;
            height: 26px;
            line-height: 26px;
            bottom: 0;
            left: 0;
            z-index: 100;
            background: rgba(0,0,0,0.3);
            .maskRight{
              height:100%;
              span{
                height:100%;
                display: inline-block;
                padding: 0 8px;
              }
            }
          }
        }
      .courseBottom{
        width: 100%;
        height: 75px;
        padding: 10px 10px;
        box-sizing: border-box;
        .top{
          margin-bottom: 4px;
          font-size: 14px;
          color: #2a2a2a;
          background: #ffffff;
          .courseState{
            margin-left: 10px;
            padding: 3px 6px;
            font-size: 12px;
            border-radius: 3px;
            color: #ffffff;
            background: #55a7d9;
          }
        }
        .courseTime{
          font-size: 14px;
          color: #999999;
        }
        .price{
          margin-top: -3px;
          font-size: 18px;
          color: #ff8a0c;
        }
      }
    }
    .common-div:nth-child(4n){
      margin-right: 0;
    }
    .common-div:hover {
        transform: translateY(-8px);
        -webkit-transform: translateY(-8px);
        -moz-transform: translateY(-8px);
        box-shadow: 0 5px 20px 5px #e0e0e0;
        -webkit-box-shadow: 0 5px 20px 5px #e0e0e0;
        -moz-box-shadow: 0 5px 20px 5px #e0e0e0;
        transition: all .4s ease;
    }
</style>
