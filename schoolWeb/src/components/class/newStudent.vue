<template>
    <div class="newStudent">
        <div class="role">最新学员</div>
        <ul class="bodyContent">
            <li v-for="(item,index) in newStudent" :key="index">
                <a href="#"><img :src="item.head" alt=""></a>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        props: {
          newStudent: {
            required: true
          }
        },
        data() {
            return {

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

<style  lang="less">
    .newStudent{
        width: 277px;
        .role{
            padding-left: 15px;
            line-height: 41px;
            font-size: 18px;
            color: #3c3c3c;
            border-bottom:2px solid #fd901b;
        }
        .bodyContent{
            padding: 22px 15px;
            height: 225px;
            border:1px solid #ededed;
            border-top: 0;
            box-sizing: border-box;
            overflow: hidden;
            li{
                float: left;
                margin-right: 12px;
                margin-bottom: 15px;
                a{
                    width: 52px;
                    height: 52px;
                    display: block;
                    border-radius: 100%;
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
            }
            li:nth-child(4n){
                margin-right: 0;
            }
        }
    }
</style>
