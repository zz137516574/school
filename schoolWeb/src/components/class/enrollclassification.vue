<template>
    <div class="classification container clearfix">
        <div class="main">
            <div class="f-fl">分类：</div>
            <ul class="f-fl">
                <li v-for="(item,index) in listData" @click="newData(index,item.classId)">
                    <a href="javascript:void(0);" style="width: 100%;height: 100%;" :class="{'actives':changeColor===index}">{{item.codeValue}}</a>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
    export default {
      props: {
        listData: {
          required: true
        }
      },
        data() {
            return {
              changeColor:'',
            };
        },
        mounted() {
        },
        beforeDestroy() {

        },
        methods: {
          newData(index,itemId) {
            this.changeColor = index;
            this.$emit('courseTypeRefer', itemId);
          }
        }
    };
</script>

<style  lang="less">
    .classification{
        height: 50px;
        line-height: 30px;
        padding: 10px 20px;
        box-sizing: border-box;
        border: 1px solid #ededed;
        .top{
            background: #ffffff;
            height: 43px;
            line-height: 43px;
            box-sizing: border-box;
            border-bottom: 1px solid #ededed;
        }
        .main{
            li{
                float: left;
                text-align: center;
                margin: 0 5px;
                a{
                    margin: 0 auto;
                    display: block;
                    padding: 0 8px;
                    font-size: 12px;
                    color: #4e4e4e;
                    transition: 0s;
                }
            }
        }
      .actives{
        background: #ff8a0c;
        color: #ffffff !important;
        border-radius: 5px;
      }
    }
</style>
