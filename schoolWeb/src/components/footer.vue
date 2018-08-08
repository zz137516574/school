<template>
  <div class="footer">
    <div class="footerTop container clearfix">
      <ul class="clearfix f-fl">
        <li>
          <div class="footerTitle">关于云联学堂</div>
          <div>
            <a href="#">云联学堂简介</a>
            <a href="#">云联学堂讲师介绍</a>
            <a href="#">必看课程</a>
          </div>
        </li>
        <li>
          <div class="footerTitle">商学院服务</div>
          <div>
            <a href="#">电商研修班</a>
            <a href="#">讲师集结令</a>
            <a href="#">企业电商总裁班</a>
            <a href="#">全国代理学习班</a>
          </div>
        </li>
        <li>
          <div class="footerTitle">在线服务</div>
          <div>
            <a href="#">在线商学院运营规范</a>
            <a href="#">代理商学院招募</a>
            <a href="#">在线代理商学院名单</a>
            <a href="#">优秀商学院内容发布</a>
          </div>
        </li>
        <li>
          <div class="footerTitle">帮助中心</div>
          <div>
            <a href="#">联系我们</a>
            <a href="#">投诉举报</a>
            <a href="#">电话：400-8601-999</a>
            <a href="#">QQ：4006632999</a>
          </div>
        </li>
      </ul>
      <div class="f-fl QRcode clearfix">
        <div class="f-fl" style="margin-right: 15px;">
          <i>
            <img src="../assets/image/appcode.png" alt="">
          </i>
          <p>云联QQ群</p>
        </div>
        <div class="f-fl">
          <i>
            <img src="../assets/image/gzh.jpg" alt="">
          </i>
          <p>云联微信公众号</p>
        </div>
      </div>
    </div>
    <!--线-->
    <i></i>
    <div class="copyright container clearfix">
      <p>Copyright&nbsp;&nbsp;©&nbsp;&nbsp;2017&nbsp;&nbsp;广东云联惠网络科技有限公司&nbsp;&nbsp;All&nbsp;&nbsp;Rights&nbsp;&nbsp;Reserved&nbsp;&nbsp;&nbsp;&nbsp;粤ICP备14014641号&nbsp;&nbsp;&nbsp;&nbsp;经营许可证编号：粤B2-20160716</p>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      footer: {}
    },
    data() {
      return {};
    },
    mounted() {

    },
    beforeDestroy() {

    },
    methods: {}
  };
</script>

<style  lang="less">
  @media screen and (max-width: 1201px) {
    .footer {width: 1200px !important;}
  }
  .footer{
    width: 100%;
    height: 358px;
    background: #444547;
    .footerTop{
      padding-top: 75px;
      padding-bottom: 50px;
      background: #444547;
      ul{
        padding-left:40px;
        li{
          padding: 0 50px;
          float: left;
          min-height: 154px;
          border-right:1px solid #353535;
          border-left:1px solid #5b5b5b;
          .footerTitle{
            margin-bottom: 25px;
            font-size: 16px;
            color: #aaaaaa;
          }
          a{
            display: block;
            font-size: 12px;
            color: #aaaaaa;
            padding-bottom: 10px;
          }
        }
        li:first-child{
          border-left:none;
        }
      }
      /*二维码*/
      .QRcode{
        border-left:1px solid #5b5b5b;
        padding-left: 50px;
        padding-bottom: 27px;
        i {
          display: block;
          padding: 5px;
          width: 98px;
          height: 98px;
          border: 1px solid #646464;
          overflow: hidden;
          img{
            width: 100%;
            height: 100%;
          }
        }
        p{
          padding-top: 10px;
          font-size: 12px;
          color: #aaaaaa;
          text-align: center;
        }
      }
    }
    /*线*/
    i{
      width: 100%;
      display: block;
      height: 2px;
      border-top:1px solid #353535;
      border-bottom:1px solid #5b5b5b;
    }
    /*版权*/
    .copyright{
      padding-top: 30px;
      font-size: 12px;
      color: #aaaaaa;
      text-align: center;
      background: #444547;
      height: 76px;
    }
  }
</style>
