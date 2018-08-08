<!-- 公用层 -->
<template>
  <div>
    <div id="courseItem">
      <ul class="courseItemUl clearfix">
        <li class="courseItemLi clearfix" v-for="(item,index) in courseData.list" :key="index" @click="freeCourse(item)">
          <div class="courseTop">
            <img :src="item.photo" alt="">
          </div>
          <div class="courseBottom">
            <div class="top">
              <span class="courseTitle">{{item.courseName}}</span>
              <span class="courseState"
                    :style="{ background: item.type == '7' ? '#ff8a0c' : item.type == '8' ? '#55a7d9' : item.type == '9' ? '#2ed068' : 'transparent' }"
                    v-text="item.typeStr"
                    v-if="item.type != null"></span>
            </div>
            <div class="clearfix ">
              <span class="courseTime f-fl">{{item.createTime}}</span>
              <label class="f-fr price"  v-if="item.price != 0 "><span  style="color: #ff8a0c;">￥{{item.price | currency}}</span></label>
              <label class="f-fr price"  v-if="item.price == 0 "  style="color: #ff8a0c;">免费</label>
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
            newsPageChange(pageNumber){
              this.$emit('pagesRefer', pageNumber);
            },
            freeCourse(item) {
              this.$emit('refre' ,item);
            }
        }
    };
</script>
<style lang="less">
    .courseItemUl li {
        float: left;
        margin-top: 30px;
        margin-right: 21px;
        width: 282px;
        height: 249px;
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
            background-image: url('../../assets/image/imgbg.jpg');
            background-repeat: no-repeat;
            background-size: 100% 100%;
            img{
                width: 100%;
                height: 100%;
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

    .courseItemUl li:nth-child(4n){
      margin-right: 0;
    }
    .courseItemUl li:hover {
      transform: translateY(-8px);
      -webkit-transform: translateY(-8px);
      -moz-transform: translateY(-8px);
      box-shadow: 0 5px 20px 5px #e0e0e0;
      -webkit-box-shadow: 0 5px 20px 5px #e0e0e0;
      -moz-box-shadow: 0 5px 20px 5px #e0e0e0;
      -webkit-transition: all .4s ease;
      transition: all .4s ease;
    }
</style>
