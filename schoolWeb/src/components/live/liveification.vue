<template>
    <div class="classification container clearfix">
        <div class="f-fl">所有分类：</div>
        <ul class="f-fl">
            <li v-for="(item,index) in liveBroadcastClass">
                <a @click="liveDetail(index,item.classId)" :class="{ 'actives':changeColor === index }">
                  {{item.className}}
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
      props: {
        liveBroadcastClass: {
          required: true
        }
      },
        data() {
            return {
                changeColor: 0
            };
        },
        mounted() {

        },
        beforeDestroy() {

        },
        methods: {
          liveDetail(index,id) {
            this.changeColor = index;
            this.$emit('liveClasss', id)
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
        li{
            float: left;
            text-align: center;
            a{
                margin: 0 5px;
                display: block;
                padding: 0 8px;
                font-size: 12px;
                color: #4e4e4e;
                transition: 0s;
            }
        }
        li:hover{
            a{
                background: #ff8a0c;
                color: #ffffff;
                border-radius: 5px;
            }
        }
        .actives {
          background: #ff8a0c !important;
          color: #ffffff !important;
          border-radius: 5px !important;
        }
    }
</style>
