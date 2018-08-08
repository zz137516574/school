<!-- 公用层 -->
<template>
  <div class="clearfix businessSchool">
    <ul>
      <li v-for="(item,index) in businessList" :key="index" @click="newdata(item.schoolId)">
        <img :src="item.photo" alt="">
        <p>{{item.schoolName}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
    export default {
        props: {
          businessList: {
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
            this.$emit('businessRefre', itemId);
          }
        }
    };

</script>

<style lang="less">
  .businessSchool{
    ul{
      li {
        width: 20%;
        height:180px;
        float: left;
        cursor: pointer;
        background-repeat: no-repeat;
        background-size: 100% 100%;
        background-image: url('../../assets/image/imgbg.jpg');
        display: block;
        position: relative;
        img {
          width: 100% !important;
          height: 100% !important;
          position: absolute;
          top:0;
          left: 0;
          z-index: 99;
        }
        p{
          width: 100% !important;
          height: 46px;
          text-align: center;
          line-height: 46px;
          color: #ffffff;
          font-size: 16px;
          background: rgba(0,0,0,0.5);
          display: none;
          position: absolute;
          bottom: 0;
          left: 0;
          z-index: 100;
        }
      }
      li:hover {
        p{
          display: block;
        }
      }
    }
  }
</style>
