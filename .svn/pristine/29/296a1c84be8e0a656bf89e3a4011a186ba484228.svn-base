<template>
  <div>
    <v-top :top="top"></v-top>
    <div class="clearfix container m-t-20 m-b-20">
      <i class="f-fl"><img src="../assets/image/logo.png" alt=""></i>
      <v-search :search="search" class="f-fr"></v-search>
    </div>

    <!--导航-->
    <v-subpageMenu :subpageMenu="subpageMenu" class="m-b-20"></v-subpageMenu>

    <!--授权-->
    <div class="systemBinding container">

      <div class="clearfix systemBinding-main systemBinding-equal" v-if="this.msg != '登陆成功！'|| this.msg === undefined || this.msg ===''" >
        <i class="f-fl systemBinding-i"><img src="../assets/image/equal-authorized.png" alt=""></i>
        <div class="f-fl systemBinding-cont">
          <div class="systemBinding-title">尚未绑定云联惠账号！</div>
          <div class="systemBinding-body">您尚未绑定云联惠账号，请尽快绑定，以免影响您的学习！</div>
        </div>
        <button class="systemBinding-button" @click="login">立即绑定</button>
      </div>

      <div class="clearfix systemBinding-main" v-if="this.msg === '登陆成功！'">
        <i class="f-fl systemBinding-i"><img src="../assets/image/already-authorized.png" alt=""></i>
        <div class="f-fl systemBinding-cont">
          <div class="systemBinding-title">成功绑定！</div>
          <div class="systemBinding-body">恭喜，您已成功绑定云联惠账号，现在开始您的学习之旅吧！</div>
        </div>
      </div>

    </div>

    <!--推荐普通课/系列课-->
    <Tabs value="name1" class="systemBinding-TabCont container">
      <TabPane label="精品课程" name="name1">
        <div><v-commonDiv :listData="dataSource" v-on:excellentRefre="excellentCourseDetails"></v-commonDiv></div>
      </TabPane>
      <TabPane label="推荐系列课" name="name2">
        <v-commonSeriesDiv :seriesData="seriesCourseData" v-on:seriesRefre="seriesCourseDetails" v-on:seriesPageRefer="seriesAreas" ></v-commonSeriesDiv>
      </TabPane>
    </Tabs>

    <v-footer :footer="footer"></v-footer>

    <div id="mask" v-show="appear">
      <Modal
        v-model="iframeState"
        :styles="{width: '100%',height:'100%',top:'0px',left:'0px'}">
        <iframe :src="this.iframes" style="width: 100%; height:100%; border: 0;"></iframe>
        <div slot="footer">
          <Button type="primary" size="large" long  @click="ReturnLogon" style="background: #dab866;border-color: #dab866;">&lt;&lt; 快速返回</Button>
        </div>
      </Modal>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue';
  import top from '../components/top.vue';
  import search from '../components/search.vue';
  import subpageMenu from '../components/class/subpageMenu.vue';
  import footer from '../components/footer.vue';
  import commonDiv from '../components/index/commonDiv.vue';
  import commonSeriesDiv from '../components/index/commonSeriesDiv.vue';
  let faker = require("faker");

  export default {
    data() {
      return {
        top: {},
        search: {},
        subpageMenu:{},
        footer: {},
        dataSource:'',
        seriesCourseData:'',
        onorsome:0,
        page:1,
        limit:4,
        courseId:0,
        quality: 1,
        ishot: 1,
        msg:'',
        topAppear:false,
        iframeState:false,
        states:'',
        iframes:'',
        appear:'',
        tokens: '',
      };
    },
    mounted() {
      this.excellents();
      this.seriesAreas();
      if(window.localStorage.msg) {
        this.msg = JSON.parse(window.localStorage.msg);
      }
      if(window.localStorage.personInfo) {
        this.personInfo = JSON.parse(window.localStorage.personInfo);
      }
    },
    beforeDestroy() {

    },
    components: {
      'v-top': top,
      'v-search': search,
      'v-subpageMenu': subpageMenu,
      'v-footer': footer,
      'v-commonDiv': commonDiv,
      'v-commonSeriesDiv': commonSeriesDiv,
    },
    methods: {
      // 精品课程
      excellents() {
        this.service.excellent(this.page, this.limit, this.quality).then(result => {
          this.dataSource = result.page.list;
        }).catch(error => {
          this.$Loading.error();
        })
      },
      //  精品课程跳详情页
      excellentCourseDetails(newItem){
        this.onorsome = 0;
        this.$router.push({ path: 'freeCourse', query: {onorsome:this.onorsome, courseId:newItem.courseId, price:newItem.price}});
      },
      // 系列课
      seriesAreas(){
        this.service.seriesCourse(this.page, this.limit, this.ishot).then(result => {
          this.seriesCourseData = result.page.list;
        }).catch(error => {
          this.$Loading.error();
        })
      },
      //   系列课
      seriesCourseDetails(newItem){
        this.onorsome = 1;
        this.$router.push({ path: 'freeSeriesCourse', query: {onorsome:this.onorsome, seriesCourseId:newItem.seriesCourseId, price:newItem.price}});
      },
      login(){
        this.iframeUrl();
        if( window.localStorage.msg !== undefined && window.localStorage.msg === '登陆成功！'){
          let mesggg = JSON.parse(window.localStorage).msg;
          this.$Message.success({
            content: mesggg,
            duration: 30,
            closable: true
          });
        }else{
          this.$Message.success({
            content: '授权失败，请重试！',
            duration: 30,
            closable: true
          });
        }
      },
      /* 退出授权 */
      ReturnLogon() {
        this.iframeState = false;
        location.reload();
      },
      iframeUrl() {
        this.iframeState = true;
        this.states = "web"+ faker.random.uuid();
        window.localStorage.setItem('states', this.states);
        this.iframes = 'https://opentest.yunlianhui.cn/token/authorize?client_id=SXYY&redirect_uri=http://sxy.goboosoft.com/callback&state='+ this.states +'&response_type=code&scope=basic_info';
        this.states = '';
      },
    }
  };

</script>

<style lang="less">
.systemBinding{
  margin-top: 40px;
  margin-bottom: 40px;
  height: 272px;
  border: 1px solid #cccccc;
  .systemBinding-main{
    width: 310px;
    margin: 80px auto;
    .systemBinding-cont{
      margin-left: 20px;
      width: 215px;
      .systemBinding-title{
        margin-bottom: 5px;
        font-size: 30px;
        color: #7aa300;
      }
      .systemBinding-body{
        font-size: 14px;
        color: #a5a5a5;
      }
    }
    .systemBinding-button{
      margin-top: 20px;
      margin-left: 50px;
      width: 196px;
      height: 37px;
      line-height: 37px;
      text-align: center;
      border: none;
      outline: none;
      background: #7fa900;
      color: #ffffff;
      border-radius: 5px;
      cursor: pointer;
    }
  }
  .systemBinding-equal{
    margin: 60px auto!important;
    .systemBinding-cont{
      .systemBinding-title{
        margin-bottom: 5px;
        font-size: 20px;
        color: #4e4e4e;
      }
    }

  }
}
.systemBinding-TabCont{
  margin: 50px auto;
  height: 360px;
  overflow: hidden;
}

</style>
