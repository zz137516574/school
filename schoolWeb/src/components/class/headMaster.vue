<template>
    <div class="headMaster">
        <div class="role">创建者信息</div>
        <div class="clearfix bodyCon">
          <i class="f-fl"><img :src="headMaster.head" alt=""></i>
            <div class="f-fl">
                <p class="name">{{headMaster.nikename}}</p>
                <p>{{headMaster.codeType}}</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
      props: {
        headMaster: {
          required: true
        },
      },
        data() {
            return {
            };
        },
        mounted() {
//        this.head = JSON.parse(this.props.headMaster);
        },
        beforeDestroy() {

        },
        methods: {
          filterData(newsData){
            return newsData.nikename;
          }
        }
    };
</script>

<style  lang="less">
    .headMaster{
        width: 277px;
        .role{
            padding-left: 15px;
            line-height: 41px;
            font-size: 18px;
            color: #3c3c3c;
            border-bottom:2px solid #fd901b;
        }
        .bodyCon{
            padding: 23px 15px;
            height: 143px;
            border:1px solid #ededed;
            border-top: 0;
            box-sizing: border-box;
            i{
                width: 95px;
                height: 95px;
                border-radius: 100%;
                display: block;
                overflow: hidden;
                img{
                    width: 100%;
                    height: 100%;
                    border-radius: 100%;
                    background-repeat: no-repeat;
                    background-size: 100% 100%;
                    background-image: url('../../assets/image/imgbg.jpg');
                }
            }
            div{
                padding-left: 20px;
                font-size: 16px;
                color: #3c3c3c;
                .name{
                    padding-top: 20px;
                    padding-bottom: 15px;
                }
            }
        }
    }
</style>
