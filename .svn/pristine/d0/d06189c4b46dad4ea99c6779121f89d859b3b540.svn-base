<!-- HTML 个人讲师 封面设置 -->
<template>
    <div class="information clearfix">
        <!-- title -->
        <div class="title">
            <span class="tit">封面图片</span>
        </div>

        <!-- 表单 -->
        <div class="content">
            <div class="demo-upload-list">
                <img src="../../../assets/image/cover-img.png">
                <p>你可以上传jpg，gif，png格式的文件，图片建议尺寸至少为480X270</p>
                <p>文件大小不能超过2M</p>
                <Upload action="//jsonplaceholder.typicode.com/posts/" class="m-t-30">
                    <Button type="ghost">选择要上传的图片</Button>
                </Upload>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        props: {
            top: {}
        },
        data() {
            return {};
        },
        mounted () {

        },
        beforeDestroy() {

        },
        methods: {

        },
    };
</script>

<style lang="less">
    .information {
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
        .content {
            border: 0px #ccc solid;
            width: auto;
            margin: 45px 45px 0 45px;

            .ivu-btn {
                padding: 6px 28px;
                font-size: 14px;
            }
        }

        .demo-upload-list{
            display: block;
            width: 400px;
            margin: 0 auto;
            overflow: hidden;
            img {
                width: 400px;
                height: 230px;
                background: #ededed;
            }
            p {
                color: #949494;
                margin-top:5px;
            }
            Button {
                width: 177px;
                height: 37px;
                background-color: #ff8a0c;
                border: 0;
                color: white;
            }
        }
        .clearfix::after{
            content: '';
            height: 0;
            clear: both;
            display: block;
            visibility: hidden;
        }
    }
</style>
