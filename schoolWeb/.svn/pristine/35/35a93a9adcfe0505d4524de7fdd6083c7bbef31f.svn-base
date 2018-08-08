<!-- banner -->
<template>
    <div class="clearfix">
      <ul class="yun-div">
        <li v-for="(item,index) in yunList" :key="index" @click="newdata(item.schoolId)">
          <div class="yun-img">
            <img :src="item.photo" alt="">
          </div>
          <div class="yun-word">
            <p class="yun-title">{{item.schoolName}}</p>
            <div class="yun-info">
              <p>地址：{{item.regionName}}</p>
              <p>电话：{{item.phone}}</p>
              <p>联系邮箱：{{item.schoolEmail}}</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
</template>

<script>
  export default {
    props:{
      yunList: {
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
    components: {

    },
    methods: {
      newdata(itemId) {
        this.$emit('refre' ,itemId);
      }
    }
  };
</script>

<style lang="less">
  .yun-div{
    li{
      cursor: pointer;
      float: left;
      width: 284px !important;
      height: 298px !important;
      border: 1px #ededed solid;
      margin-bottom: 30px;
      margin-right: 21px;
    }
    li:nth-child(4n){
      margin-right: 0;
    }
    .yun-img{
      width: 260px !important;
      height: 164px !important;
      margin: 12px 12px;
      background-repeat: no-repeat;
      background-size: 100% 100%;
      background-image: url('../../assets/image/imgbg.jpg');
      img {
        width: 100%;
        height: 100%;
      }
    }
    .yun-word{
      width: 260px !important;
      margin: 12px 12px;
      overflow: hidden;
      .yun-title{
        color: #333333;
        font-size: 18px;
        font-weight: 600;
      }
      .yun-info{
        color: #666666;
        font-size: 14px;
        padding-top: 6px;
      }
    }
  }
  .yun-div li:hover{
    box-shadow: 2px 2px 20px 0 #c2c2c2;
    -webkit-box-shadow: 2px 2px 20px 0 #c2c2c2;
    -moz-box-shadow: 2px 2px 20px 0 #c2c2c2;
    transition: all .3s ease;
    .yun-title{
      color: #ff8a0c;
    }
  }
</style>
