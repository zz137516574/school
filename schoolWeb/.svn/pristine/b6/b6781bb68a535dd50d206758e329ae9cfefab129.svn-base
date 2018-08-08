<template>
    <div class="classification container clearfix">
        <div class="top">所有分类：</div>
        <div class="main">
            <div class="f-fl">分类：</div>
            <ul class="f-fl">
                <li v-for="item in items">
                    <a href="javascript:void(0);">{{item.text}}</a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            classification: {}
        },
        data() {
            return {
                items:[
                    { text: '全部' },
                    { text: 'PS技术'},
                    { text: '美术' },
                    { text: '摄影' },
                    { text: '计算机基础' }
                ]
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
    .classification{
        height: 90px;
        padding: 0 20px;
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
                a{
                    margin: 0 5px;
                    display: block;
                    padding: 0 8px;
                    font-size: 12px;
                    color: #4e4e4e;
                    transition: 0s;
                }
            }
        }
        li:hover{
            a{
                background: #ff8a0c;
                color: #ffffff;
                border-radius: 5px;
            }
        }
    }
</style>
