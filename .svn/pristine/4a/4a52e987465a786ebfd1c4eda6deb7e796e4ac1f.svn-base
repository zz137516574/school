<!-- 公用层 -->
<template>
    <ul class="productDiv clearfix">
      <li class="courseItemLi clearfix" v-for="(item,index) in productDiv" :key="index" @click="freeCourse(item)">
        <div class="productTop">
            <img :src="item.photo" v-if="item.hasOwnProperty('photo')" alt="">
        </div>
        <div class="productBottom">
            <p class="productTitle" v-if="item.hasOwnProperty('coupletTitle')">{{item.coupletTitle}}</p>
            <p class="productDesc" v-if="item.hasOwnProperty('coupletTitleChild')">{{item.coupletTitleChild}}</p>
        </div>
      </li>
    </ul>
</template>

<script>
    export default {
        props: {
            productDiv: {
              required: true
            },
        },
        data() {
            return {

            };
        },
        mounted() {

        },
        beforeDestroy() {

        },
        methods: {
          freeCourse(item) {
            this.$emit('productRefre', item);
          }
        }
    };

</script>

<style lang="less">
    .productDiv li{
        width: 283px !important;
        height: 249px !important;
        border: 1px #ededed solid;
        background-color: #ffffff;
        cursor: pointer;
        float: left;
        margin-right: 21px;
          .productTop{
            width: 100% !important;
            height: 172px !important;
            background-repeat: no-repeat;
            background-size: 100% 100%;
            background-image: url('../../assets/image/imgbg.jpg');
            img{
              width: 100%;
              height: 100%;
            }
          }
          .productBottom{
            padding: 8px 12px;
            box-sizing: border-box;
            width: 100% !important;
            height: 75px !important;
            .productTitle{
              height: 20px;
              font-size: 14px;
              color: #2a2a2a;
              cursor: pointer;
              overflow: hidden;
            }
            .productDesc{
              height: 34px;
              font-size: 12px;
              color: #706f6f;
              margin-top: 6px;
              overflow: hidden;
            }
          }
        }
    .productDiv li:nth-child(4n){
      margin-right: 0;
    }
    .productDiv li:hover {
      transform: translateY(-8px);
      -webkit-transform: translateY(-8px);
      -moz-transform: translateY(-8px);
      box-shadow: 0 5px 20px 5px #e0e0e0;
      -webkit-box-shadow: 0 5px 20px 5px #e0e0e0;
      -moz-box-shadow: 0 5px 20px 5px #e0e0e0;
      -webkit-transition: all .4s ease;
      transition: all .4s ease;
      .productTitle{
        color: #ff8a0c;
      }
    }
</style>
