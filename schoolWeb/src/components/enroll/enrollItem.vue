<!-- 公用层 -->
<template>
  <div>
    <ul class="clearfix container enrollList">
        <li v-for="(item,index) in enrollIData" :key="index" @click="enrollItems(item)">
            <a class="enrollItem">
                <div class="enrollTop">
                    <!--<img src="../../assets/image/class1.jpg" alt="">-->
                    <img :src="item.imgurl" alt="">
                </div>
                <div class="enrollBottom">
                    <div class="top">
                        <span class="cenrollTitle">{{item.name}}</span>
                    </div>
                    <div class="clearfix">
                        <span class="enrollTime f-fl">{{item.time}}</span>
                        <span class="f-fr price">{{item.type}}</span>
                    </div>
                </div>
            </a>
        </li>
    </ul>
  </div>

</template>

<script>
    export default {
        props: {
          enrollIData: {
              type: Array,
              required: true
            }
        },
        data() {
            return {};
        },
        mounted() {

        },
        beforeDestroy() {

        },
        methods: {
            enrollItems(itemId){
              this.$emit('refre',itemId);
            }
        }
    };
</script>
<style lang="less">
  /*活动列表*/
  .enrollList{
    li{
      margin-top: 30px;
      float: left;
      margin-right: 22px;
      a{
        transition: all .4s ease;
      }
    }
    li:nth-child(4n){
      margin-right: 0;
    }
  }
  .enrollList li:hover a{
    transform: translateY(-8px);
    -webkit-transform: translateY(-8px);
    -moz-transform: translateY(-8px);
    box-shadow: 0 5px 20px 5px #e0e0e0;
    -webkit-box-shadow: 0 5px 20px 5px #e0e0e0;
    -moz-box-shadow: 0 5px 20px 5px #e0e0e0;
    transition: all .4s ease;
  }
    .enrollItem {
        display: block;
        padding: 12px;
        width: 283px;
        height: 249px;
        border: 1px #ededed solid;
        background-color: #ffffff;
        box-sizing: border-box;
        cursor: pointer;
        .enrollTop{
            width: 259px;
            height: 162px;
            overflow: hidden;
            cursor: pointer;
            img{
                width: 100%;
                height: 100%;
            }
        }
        .enrollBottom{
            width: 100%;
            height: 75px;
            padding: 12px 0;
            box-sizing: border-box;
            .top{
                margin-bottom: 10px;
                font-size: 14px;
                color: #333333;
                background: #ffffff;
            }
            .enrollTime{
                font-size: 12px;
                color: #666666;
            }
            .price{
                margin-top: -3px;
                font-size: 18px;
                color: #ff8a0c;
            }
        }
    }
</style>
