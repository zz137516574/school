<!-- 公用层 -->
<template>
    <div class="newsLeftDiv">
        <div class="newsinfo">
            <p>推荐资讯</p>
        </div>
        <ul class="clearfix">
            <li  v-for="(item,index) in newsRecomData" :key="index">
                <span :style="{ background: index <= 2 ? '#ff8a0c' : '#cccccc'}" style="padding: 3px 5px;color: #FFFFFF;">{{index+1}}</span>
                <span style="padding: 3px 0 3px 10px;height: 21px;overflow: hidden;text-overflow: ellipsis;width: 240px;white-space: nowrap;"  @click="newdata(item.newsId)">{{item.newsTitle}}</span>
            </li>
        </ul>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        newsId:0,
        page: 1,
        limit: 7,
        newsAttribute:2,
        newsRecomData:{}
      }
    },
    mounted() {
      this.recommendationInfos();
    },
    beforeDestroy() {

    },
    components: {

    },
    methods: {

      //  推荐资讯
      recommendationInfos() {
        this.classId='';
        this.newsVisitNum='';
        this.service.newsLeftGroup(this.page, this.limit, this.classId, this.newsAttribute, this.newsVisitNum).then(result => {
          this.newsRecomData = result.page.list;
        }).catch(error => {
          this.$Loading.error();
        })
      },
      newdata(newsId) {
        this.$emit('recommendationRefre', newsId);
      },
    }
  };

</script>

<style lang="less">
    .newsLeftDiv {
        width: 280px !important;
        height: 300px!important;
        background-color: #ffffff;
        border: 1px #ededed solid;
        .newsinfo{
            border-bottom: 1px #ededed solid;
            padding: 10px;
            p{
                height: 20px;
                font-size: 16px;
                color: #ff8a0c;
                border-left: 2px #ff8a0c solid;
                padding: 0px;
                padding-left: 8px;
                line-height: 20px;
            }
        }
        ul{
            li{
                padding: 7px 10px;
                font-size: 12px;
                overflow: hidden;
                cursor: pointer;
                p{
                    width: 14px;
                    height: 14px;
                    background-color: #d2d1d1;
                    color: #ffffff;
                    float: left;
                    text-align: center;
                }
                span{
                    color: #494949;
                    float: left;
                    padding-left: 8px;
                }
            }
        }
    }
</style>
