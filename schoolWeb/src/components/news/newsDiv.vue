<!-- 公用层 -->
<template>
    <div>
      <ul class="clearfix" style="padding: 30px;">
        <li class="newsDiv clearfix" v-for="(item,index) in newsData" :key="index"  @click="newdata(item.newsId)">
          <div class="newsImg"><img :src="item.newsTitlePhoto" alt=""></div>
          <div class="newsMiddle">
            <p class="newsTitle">{{item.newsTitle}}</p>
            <p class="newsInfo"><span>{{item.newsAddtime}}</span><span style="padding-left: 20px;">{{item.newsClassName}}</span></p>
            <p class="newsSome" v-html="delHtmlTag(item.newsContent)"></p>
          </div>
        </li>
      </ul>
    </div>
</template>

<script>
    export default {
        props:{
          newsData: {
//            type: Array,
            required: true
          }
        },
        data() {
            return {
            }
        },
        mounted() {
        },
        beforeDestroy() {

        },
        components: {

        },
        methods: {
          newdata(itemId) {
            this.$emit('refre', itemId);
          },
          // 解析字符
          delHtmlTag(str){
            let bbq = str;
            if( bbq !== undefined){
              bbq = bbq.replace(/&lt;/g, '<');
              bbq = bbq.replace(/&gt;/g, '>');
              bbq = bbq.replace(/&nbsp;/g,'  ');
              bbq = bbq.replace(/&amp;/g,'&');
              bbq = bbq.replace(/&quot;/g,'"');
              bbq=bbq.replace("</*[^<>]*>", '');

              bbq=bbq.replace(" ", '');
              bbq=bbq.replace("::", ':');
              bbq=bbq.replace(" ", '');
              bbq=bbq.replace("<>", '');
              bbq=bbq.replace("</>", '');
              var dd= bbq.replace(/<\/?.+?>/g,"");
              var dds= dd.replace(/ /g,"");//dds为得到后的内容
              return dds;
            }
          },
        }
    };

</script>

<style lang="less">
    .newsDiv {
        width: 855px !important;
        height: 160px!important;
        background-color: #ffffff;
        border-bottom: 1px #efefef solid;
        margin-bottom: 20px;
        .newsImg{
            width: 200px !important;
            height: 138px !important;
            background-color: #ffffff;
            float: left;
            overflow: hidden;
            background-image: url('../../assets/image/imgbg.jpg');
            background-repeat: no-repeat;
            background-size: 100% 100%;
            img{
              width: 100%;
              height: 100%;
            }
        }
        .newsMiddle{
            float: left;
            width: 655px;
            .newsTitle{
                width: 100%;
                height: 25px;
                font-size: 20px;
                color: #333333;
                line-height: 25px;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 1;
                -webkit-box-orient: vertical;
                margin: 5px 0 10px 20px;
                cursor: pointer;
            }
            .newsInfo{
                font-size: 12px;
                color: #4e4e4e;
                margin: 5px 0 10px 20px;
            }
            .newsSome{
                width: 100%;
                font-size: 14px;
                color: #797979;
                padding: 5px 0 10px 20px;
                height: 65px;
                line-height: 20px;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                p{
                  overflow: hidden;
                  text-overflow: ellipsis;
                  display: -webkit-box;
                  -webkit-line-clamp: 2;
                  -webkit-box-orient: vertical;
                }
            }
        }
    }
</style>
