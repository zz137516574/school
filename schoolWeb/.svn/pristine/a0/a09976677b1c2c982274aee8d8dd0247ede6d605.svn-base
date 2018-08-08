<!-- 账户中心 / 我的帐户 -->
<template>
  <div class="myAccount clearfix m-l-30">
    <!-- title -->
    <div class="title clearfix">
      <span class="tit">我的帐户</span>
    </div>

    <!-- List -->
    <div class="account-tab clearfix">
      <Tabs class="m-t-30">
        <TabPane label="虚拟币账单（积分/券）" style="padding: 10px 20px;">
          <div class="clearfix">
            <Button type="success">账户余额</Button>
            <Tooltip class="f-fr" content="虚拟币说明1" placement="top-end">
              虚拟币说明
            </Tooltip>
          </div>
          <div class="clearfix" style="padding: 40px 0px; border-bottom: 1px #e5e5e5 solid;">
            <Avatar class="f-fl" shape="square" icon="person" size="large" />
            <div class="f-fl m-l-10" style="font-size: 25px; font-weight: bold; color: red; line-height: 40px;">
              0.00
            </div>
          </div>

          <div class="m-t-20">
            <Button type="success">全部记录</Button>
            <Button type="text">充值记录</Button>
            <Button type="text">消费记录</Button>
          </div>

          <!-- 记录 -->
          <div class="record">
            <div class="record-tit clearfix m-t-20">
              <Select v-model="model1" style="width:120px;margin-top: 8px;">
                <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
              </Select>
              <div class="currency f-fr">
                <span>收入：<span style="color:#19be6b;">0</span> 虚拟币</span>
                <span class="m-l-10">支出：<span style="color:#ed3f14;">0</span> 虚拟币</span>
              </div>
            </div>
            <table class="text-center m-t-30" style="width: 100%;">
              <tr>
                <td>暂无数据</td>
              </tr>
            </table>
          </div>


        </TabPane>

        <TabPane label="现金账单" style="padding: 10px 20px;">
          <!-- 记录 -->
          <div class="record">
            <div class="record-tit clearfix">
              <Select v-model="model1" style="width:120px;margin-top: 8px;">
                <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
              </Select>
              <div class="currency f-fr">
                <span>收入：<span style="color:#19be6b;">0</span> 虚拟币</span>
                <span class="m-l-10">支出：<span style="color:#ed3f14;">0</span> 虚拟币</span>
              </div>
            </div>
            <table class="text-center m-t-30" style="width: 100%;">
              <tr>
                <td>暂无数据</td>
              </tr>
            </table>
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
