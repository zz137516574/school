<!-- 账户中心 / 我的订单 -->
<template>
  <div class="myAccount clearfix m-l-30">
    <!-- title -->
    <div class="title clearfix">
      <span class="tit">我的订单</span>
    </div>

    <!-- List -->
    <div class="account-tab clearfix">
      <Tabs class="m-t-30" @on-click="orderItemStatus">
        <TabPane style="padding: 10px 20px;" v-for="(item,index) in orderStatus" :key="index" :label = item>
          <!-- 记录 -->
          <div class="record">
            <!--<div class="record-tit clearfix">-->
              <!--<Select v-model="model1" style="width:120px;margin-top: 8px;">-->
                <!--<Option v-for="item in dateList" :value="item.value" :key="item.value">{{ item.label }}</Option>-->
              <!--</Select>-->
              <!--<Select v-model="model2" class="m-l-10" style="width:120px;margin-top: 8px;">-->
                <!--<Option v-for="item in paymentList" :value="item.value" :key="item.value">{{ item.label }}</Option>-->
              <!--</Select>-->
            <!--</div>-->

            <!--<Table class="m-t-20" border :columns="columns7" :data="data6"></Table>-->
            <table class="orderTable" border>
              <thead>
                <tr>
                  <th>订单编号</th>
                  <th>订单名称</th>
                  <!--<th>类型</th>-->
                  <th>状态</th>
                  <th>实付（元）</th>
                  <!--<th>支付方式</th>-->
                  <!--<th style="width: 280px">操作</th>-->
                  <th style="width: 200px">创建时间</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item,index) in myOrderItem" :key="index">
                  <td>{{item.orderNo}}</td>
                  <td>{{item.courseName}}</td>
                  <!--<th></th>-->
                  <td>
                    <span v-if="item.status == 0">未支付</span>
                    <span v-if="item.status == 1">已支付</span>
                    <span v-if="item.status == 2">退款中</span>
                    <span v-if="item.status == 3">已退款</span>
                    <span v-if="item.status == 4">已关闭</span>
                  </td>
                  <td>{{item.price | currency}}</td>
                  <td style="width: 200px">{{item.addTime}}</td>
                  <!--<td></td>-->
                  <!--<td style="width: 280px">-->
                    <!--<button v-if = "item.status == 0">去支付</button>-->
                    <!--<button v-if = "item.status == 0"  @click="confirmCancel(item)">取消订单</button>-->
                  <!--</td>-->
                </tr>
              </tbody>
            </table>
          </div>
        </TabPane>
      </Tabs>
      <Page :total="pageNumber * 10" class="text-center" style="padding: 50px 0 100px;" @on-change="newsPageChange"></Page>
    </div>
  </div>
</template>

<script>
  export default {
    props: {},
    data() {
      return {
        msg:'',
        personInfo:'',
        userId:'',
        page:1,
        limit:10,
        status:'',
        pageNumber:1,
        myOrderItem:'',
        orderId:0,
        myOrderList:[],
        orderStatus:['全部订单','未支付','已支付'],
        typetList:['去支付','取消订单'],
        dateList: [
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
        paymentList: [
          {
            value: '支付方式',
            label: '支付方式'
          },
          {
            value: '积分',
            label: '积分'
          }
        ],
        selectTest: [
          '详情',
          '去支付',
          '取消订单'
        ],
        model1: '全部记录',
        model2: '支付方式',
      };
    },
    mounted() {
      if(window.localStorage.msg)
      {
        this.msg = JSON.parse(window.localStorage.msg);
      }
      if(window.localStorage.userInfo)
      {
        this.userInfo = JSON.parse(window.localStorage.userInfo);
        this.userId = JSON.parse(window.localStorage.userInfo).userId;
      }

      this.myOrderDatas();
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
      confirmCancel (item) {
        this.$Modal.confirm({
          title: '订单',
          content: '<p>您确定要取消此订单吗？</p>',
          onOk: () => {
            this.deleteOrderDatas(item);
          },
          onCancel: () => {
            this.$Message.info('取消操作');
          }
        });
      },
      deleteOrderDatas(item){
        this.orderId = item.orderId;
        this.status = 4;
        this.service.deleteOrderData(this.orderId,this.status).then(result => {
          if(result.code == 0){
            this.$Message.info('订单已取消');
            item.status = 4;
          }
        }).catch(error => {
          this.$Message.error({
            content: error,
            duration: 5
          });
        })
      },
      orderItemStatus(name){
        switch(name)
        {
          case 0:
            this.status = '';
            this.myOrderDatas();
            break;
          case 1:
            this.status = 0;
            this.myOrderDatas();
            break;
          case 2:
            this.status = 1;
            this.myOrderDatas();
            break;
          case 3:
            this.status = 2;
            this.myOrderDatas();
            break;
          case 4:
            this.status = 3;
            this.myOrderDatas();
            break;
          case 5:
            this.status = 4;
            this.myOrderDatas();
            break;
        }
      },
      newsPageChange(pageNum){
        this.page = pageNum;
        this.myOrderDatas();
      },
      myOrderDatas(){
        this.service.myOrderData(this.page, this.limit, this.userId, this.status).then(result => {
          this.myOrderItem = result.page.list;
          this.pageNumber = result.page.totalPage;
        }).catch(error => {
          this.$Message.error({
            content: error,
            duration: 5
          });
        })
      }
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
      .orderTable{
        width: 100%;
        border-collapse: collapse;
        border: 1px solid #e9e9e9;
        /*border-color: #fefefe;*/
        th{
          padding: 0px 20px;
          height: 40px;
          line-height: 40px;
          text-align: center;
        }
        td{
          text-align: center;
          padding: 10px 15px;
          button{
            padding: 8px 10px;
            text-align: center;
            margin: 0px 5px;
            border-radius: 4px;
            font-size: 13px;
            border:1px solid lightgrey;
          }
        }
      }
    }
  }
</style>
