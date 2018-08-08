<!-- 账户中心 / 我的卡包 -->
<template>
  <div class="myAccount clearfix m-l-30">
    <!-- title -->
    <div class="title clearfix">
      <span class="tit">我的卡包</span>
    </div>

    <!-- List -->
    <div class="account-tab clearfix">
      <Tabs class="m-t-30">
        <TabPane label="优惠券" style="padding: 10px 20px;">

          <div>
            <Button type="success">全部</Button>
            <Button>未使用</Button>
            <Button>已使用</Button>
            <Button>已过期</Button>
          </div>

          <!-- 卡包 -->
          <div class="m-t-20" style="border: 1px #e5e5e5 solid; width: auto; min-height: 100px; -webkit-border-radius: 3px;-moz-border-radius: 3px;border-radius: 3px;">
            <div class="m-t-30 text-center">没有搜索到符合条件的优惠券</div>
          </div>


        </TabPane>

        <TabPane label="打折券" style="padding: 10px 20px;">
          <div>
            <Button type="success">全部</Button>
            <Button>未使用</Button>
            <Button>已使用</Button>
            <Button>已过期</Button>
          </div>

          <!-- 卡包 -->
          <div class="m-t-20" style="border: 1px #e5e5e5 solid; width: auto; min-height: 100px; -webkit-border-radius: 3px;-moz-border-radius: 3px;border-radius: 3px;">
            <div class="m-t-30 text-center">没有搜索到符合条件的打折券</div>
          </div>
        </TabPane>

        <TabPane label="代金券" style="padding: 10px 20px;">
          <div>
            <Button type="success">全部</Button>
            <Button>未使用</Button>
            <Button>已使用</Button>
            <Button>已过期</Button>
          </div>

          <!-- 代金券 -->
          <div class="m-t-20" style="border: 1px #e5e5e5 solid; width: auto; min-height: 100px; -webkit-border-radius: 3px;-moz-border-radius: 3px;border-radius: 3px;">
            <div class="m-t-30 text-center">没有搜索到符合条件的代金券</div>
          </div>
        </TabPane>

      </Tabs>
    </div>

  </div>
</template>

<script>
  export default {
    props: {},
    data() {
      return {
        cityList: [
          {
            value: '全部记录',
            label: '全部记录'
          },
          {
            value: '最近一周',
            label: '最近一周'
          },
          {
            value: '最近两周',
            label: '最近两周'
          },
          {
            value: '最近一个月',
            label: '最近一个月'
          },
          {
            value: '最近两个月',
            label: '最近两个月'
          },
          {
            value: '最近三个月',
            label: '最近三个月'
          }
        ],
        model1: '全部记录'
      };
    },
    mounted() {

    },
    beforeDestroy() {

    },
    methods: {

    }
  };
</script>

<style lang="less">
  .myAccount {
    width: 945px;
    height: auto;
    border: 1px #ededed solid;
    padding-bottom: 40px;
    .title {
      width:auto;
      height: 50px;
      line-height: 50px;
      font-size: 16px;
      color: #3e3e3e;
      border-bottom: 1px #ededed solid;
      .tit {
        padding: 15px;
        border-bottom: 2px #ff8a0c solid;
      }
    }
    .account-tab {
      border: 0px #ccc solid;
      width: auto;
      .ivu-tabs {
        width: auto;
        min-height: 600px;
        padding-bottom: 30px;
        float: none;
        background: none;
      }
      .ivu-tabs-ink-bar {
        height: 36px;
        background: none;
        border-top: 2px #ff8a0c solid;
        border-right: 1px #e4e4e4 solid;
        border-left: 1px #e4e4e4 solid;
        border-bottom: 1px #ffffff solid;
        bottom: auto;
      }
      .ivu-tabs-nav .ivu-tabs-tab-active {
        color: #3e3e3e;
      }
      .ivu-tabs-nav .ivu-tabs-tab {
        font-size: 14px;
      }

      .ivu-input-wrapper{
        width: 252px !important;
        float: left;
        height: 33px;
        .ivu-input-large {
          border-radius: 0;
          box-sizing: border-box;
          height: 35px!important;
          padding: 6px 10px 6px 10px !important;
        }
        .ivu-input-icon {
          right: auto;
          color: #dbdbdb;
        }
      }
      .ivu-btn {
        border-radius: 0;
        padding: 6px 15px;
        font-size: 14px;
      }
    }
    /*  记录 */
    .record {
      .record-tit {
        width: auto;
        height: 50px;
        padding: 0 10px;
        font-size: 14px;
        border: 1px #f2f2f2 solid;
        background-color: #fafafa;
        border-radius: 3px;
        .currency {
          line-height: 48px
        }
      }
    }
  }
</style>
