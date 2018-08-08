<template>
    <div id="class">
      <form action="https://testpay.yunlianhui.cn/checkStand/payment" method="post" id="myForm">
        <input type="text" name="data" v-model="this.sign" id="sign" hidden>
      </form>
    </div>
</template>

<script>
    export default {
        data() {
            return {
              url:'',
              sign:''
            }
        },
        created() {
          var url=location.href;
          var tmp1=url.split("?")[1];
          var tmp2=tmp1.split("&")[0];

          var courseId1 = tmp2.split("=")[1];
          var courseId = courseId1.replace(/%2F/g,'/').replace(/%20/g,'+').replace(/%3D/g,'=');
          courseId =  courseId.split('#/').join('');
          this.sign = courseId;
        },
        mounted() {
          document.getElementById("myForm").submit();
        },
        beforeDestroy() {

        },
        components: {

        },
        methods: {

        }
    };

</script>

<style lang="less">
    .newsbody{
        padding-top: 30px;
        padding-bottom: 30px;
        background: #fff;
        .newsbodyLeft {
            width: 910px;
            background: #fff;
            height: inherit;
            border: 1px #ededed solid;
            padding: 0px !important;
            .ivu-col-span-12 {
                display: block;
                width: 100%;
            }
            .ivu-tabs {
                width: 100%;
                height: inherit;
                float: left;
                background: #fff;
            }
            .ivu-tabs.ivu-tabs-card>.ivu-tabs-bar .ivu-tabs-tab {
                width:28%;
                height: 52px !important;
                line-height: 37px;
                font-size: 16px;
                color: #333333;
                text-align: center;
                background: #fafafa !important;
                border-top: 3px #fafafa solid !important;
                margin-right: 0 !important;
                /*padding: 0;*/
                border-radius: 0px !important;
            }
            .ivu-tabs.ivu-tabs-card > .ivu-tabs-bar .ivu-tabs-tab-active{
                background: #ffffff !important;
                color: #ff8a0c !important;
                border-top: 3px solid #ff8a0c !important;
            }
            .ivu-tabs.ivu-tabs-card>.ivu-tabs-bar .ivu-tabs-nav-container {
                height: auto;
            }
            .ivu-tabs.ivu-tabs-card>.ivu-tabs-bar .ivu-tabs-tab {
                border: 0;
                border-right: 1px #ededed solid;
            }
            .ivu-tabs-nav-container {
                margin-bottom: 0;
            }

        }
        .newsbodyRight{
            width: 280px;
            background: #fff;
            height: inherit;
            margin-left: 10px;
        }
    }

    .NewTabBar{
      width: 908px;
      height: 50px;
      overflow-x: auto;
      background: #f5f5f5;
      border-bottom: 1px solid #dddddd;
      span.newsTitles{
        display: inline-block;
        text-align: center;
        line-height: 42px;
        border-top: 2px solid #f5f5f5;
        cursor: pointer;
        padding: 0 15px;
        font-size: 15px;
      }
      span.onnnnnnn{
        background: #ffffff;
        color: #ff8a0c;
        border-top: 3px solid #ff8a0c;
      }
    }

    ::-webkit-scrollbar {
      width: 2px;
      height: 5px
    }
    ::-webkit-scrollbar-button:vertical {
      display: none
    }
    ::-webkit-scrollbar-corner,
    ::-webkit-scrollbar-track {
      background-color: #fff
    }
    ::-webkit-scrollbar-thumb {
      border-radius: 5px;
      background-color: rgba(0, 0, 0, .3)
    }
    ::-webkit-scrollbar-thumb:vertical:hover {
      background-color: rgba(0, 0, 0, .35)
    }
    ::-webkit-scrollbar-thumb:vertical:active {
      background-color: rgba(0, 0, 0, .38)
    }
</style>
