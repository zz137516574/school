<!-- 公用层 -->
<template>
<div>
  <div id="courseItem">
    <ul class="courseItemUl clearfix">
      <li class="courseItemLi clearfix" v-for="(item,index) in courseData" :key="index" @click="invitation(item)">
        <div class="courseTop">
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
          <div class="imgMask">
            <button>邀请加入</button>
          </div>
        </div>
        <div class="courseBottom">
          <div class="top">
            <span class="courseTitle">{{item.courseName}}</span>
            <!--<span class="courseState" v-if="item.typeStr == '视频直播'|| item.typeStr == '视频互动直播'" style="background: #55a7d9">{{item.typeStr}}</span>-->
            <!--<span class="courseState" v-if="item.typeStr == '音频直播'|| item.typeStr == '音频互动直播'" style="background: #ff8a0c">{{item.typeStr}}</span>-->
            <span class="courseState"
                  :style="{ background: item.type == '7' ? '#ff8a0c' : item.type == '8' ? '#55a7d9' : item.type == '9' ? '#2ed068' : 'transparent' }"
                  v-if="item.typeStr != null">{{item.typeStr}}</span>
          </div>
          <div class="clearfix " style="margin-bottom: 4px">
            <span class="courseTime f-fl" v-if="item.studentCount === 0 || item.studentCount === null">暂无人已报名</span>
            <span class="courseTime f-fl" v-else>{{item.studentCount}}{{item.studentCount}}人已报名</span>
            <!--<span class="f-fr price" v-if="item.hasOwnProperty('price')">{{item.price}}</span>-->
            <span class="f-fr">{{item.schoolName}}</span>
          </div>
          <div class="clearfix">
            <span class="price"  v-if="item.price != 0 "><span  style="color: #ff8a0c;">￥{{item.price | currency}}</span></span>
            <span class="price"  v-if="item.price == 0 "  style="color: #ff8a0c;">免费</span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</div>
</template>

<script>
    export default {
        props: {
          courseData: {
              required: true
            },
          courseStatusData:{
            required: true
          },
        },
        data() {
            return {
              courseParentData:{ type1:1, data1:0 },
              totalPage: 0
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
          freeCourse(item) {
              this.$emit('courseDetailsRefre', item);
            },
          invitation(item){
            this.$emit('courseDetailsRefre', item);
          }
        }
    };
</script>
<style lang="less">
    li.courseItemLi{
        float: left;
        margin-right: 21px;
        width: 282px;
        height: 269px;
        border: 1px #ededed solid;
        background-color: #ffffff;
        cursor: pointer;
        -webkit-transition: all .4s ease;
        transition: all .4s ease;
        .courseTop{
            width: 100%;
            height: 172px;
            overflow: hidden;
            cursor: pointer;
            position: relative;
            img{
                position: absolute;
                z-index: 99;
                width: 100%;
                height: 100%;
                background-image: url('../../assets/image/imgbg.jpg');
                background-repeat: no-repeat;
                background-size: 100% 100%;
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
            .imgMask{
              position: absolute;
              width: 100%;
              height: 100%;
              z-index: 101;
              text-align: center;
              background: rgba(0,0,0,0.4);
              display: none;
              button{
                border: none;
                letter-spacing: 1px;
                padding: 8px 15px;
                border-radius: 5px;
                font-size: 15px;
                background: #ff8a0c !important;
                color: #fff !important;
                margin-top: 70px;
              }
            }
        }
        .courseBottom{
            width: 100%;
            height: 75px;
            padding: 10px 10px;
            box-sizing: border-box;
            .top{
                margin-bottom: 12px;
                font-size: 14px;
                color: #2a2a2a;
                background: #ffffff;
                .courseState{
                    margin-left: 10px;
                    font-size: 12px;
                    border-radius: 3px;
                    padding: 5px 8px;
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

    li.courseItemLi:nth-child(4n){
      margin-right: 0;
    }
    li.courseItemLi:hover {
      .imgMask{
        display: block;
      }
    }
</style>
