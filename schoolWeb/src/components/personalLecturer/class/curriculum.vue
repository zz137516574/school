<!-- HTML 个人讲师 课程管理 -->
<template>
    <div class="information clearfix">
        <!-- title -->
        <div class="title">
            <span class="tit">课程管理</span>
        </div>

        <!-- List -->
        <div class="curriculum-alert clearfix">
            <Alert closable class="curriculumList clearfix">
                <img src="../../../assets/image/class1.jpg">
                <div class="listTitle m-l-15 m-t-10 f-fl">
                    <p class="m-b-10">看看这个直播（教学计划：默认教学计划）</p>
                    <span>张三讲师</span>
                </div>
                <div class="price-info f-fr">
                    <p class="m-t-10">100.00元</p>
                    <span>0个学院 <label class="m-l-5 m-r-5">|</label> 1个任务</span>
                </div>
            </Alert>
            <div class="total m-t-15 f-fr">
                共计：100元
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
        mounted() {

        },
        beforeDestroy() {

        },
        methods: {

        }
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
        .curriculum-alert {
            border: 0px #ccc solid;
            width: auto;
            .curriculumList {
                width: auto;
                min-height: 130px;
                background-color: #fff9f7 !important;
                padding: 20px 25px;
                border-radius: 0;
                border: 0;
                img {
                    width: 128px;
                    height: 93px;
                    display: block;
                    float: left;
                    background-color: #ededed;
                }
                .listTitle {
                    p {
                        font-size: 16px;
                        color: #333333;
                    }
                    span {
                        font-size: 14px;
                        color: #767676;
                    }
                }
                .ivu-alert-close .ivu-icon-ios-close-empty {
                    font-size: 35px;
                    top: 0;
                }
            }
            .price-info {
                width: 180px;
                p {
                    color: #ff8a0c;
                    font-size: 16px;
                    margin-bottom: 54px;
                }
                span {
                    color: #767676;
                }
            }
            .total {
                min-width: 100px;
                font-size: 14px;
            }
            .ivu-alert {
                margin-bottom: 0;
            }
        }
    }
</style>
