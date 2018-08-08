<!-- HTML 个人讲师 / 课程管理 / 课程资源 -->
<template>
    <div class="information clearfix m-l-30">
        <!-- title -->
        <div class="title clearfix">
            <span class="tit">课程资源</span>
            <div class="f-fr m-r-30">
                <Button type="warning">添加课程文件</Button>
            </div>
        </div>

        <!-- List -->
        <div class="resources clearfix" style="margin: 45px 45px 0 45px;">
            <Table border :columns="columns1" :data="data1"></Table>
            <Button type="warning" class="m-t-30">删除</Button>
        </div>

    </div>
</template>

<script>
    export default {
        props: {
            top: {}
        },
        data() {
            return {
                columns1: [
                    {
                        title: '文件名',
                        key: 'name'
                    },
                    {
                        title: '类型',
                        key: 'type'
                    },
                    {
                        title: '大小',
                        key: 'size'
                    },
                    {
                        title: '使用',
                        key: 'use'
                    },
                    {
                        title: '最后更新',
                        key: 'update',
                        render: (h, params) => {
                            return h('div', [
                                h('span','张三丰老师'),
                                h('br'),
                                h('span', '2017-6-28 16:46')
                            ]);
                        }
                    },
                    {
                        title: '操作',
                        key: 'operation'
                    }
                ],
                data1: [
                    {
                        name: '2.jpg',
                        type: '图片',
                        size: '389.49KB',
                        use: '未使用',
                        update: '',
                        operation: ''
                    }
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
        .resources {
            border: 0px #ccc solid;
            width: auto;
            .ivu-tabs {
                width: auto;
                height: 418px;
                float: none;
                background: none;
            }
            .ivu-tabs-ink-bar {
                height: 36px;
                background: none;
                border-top: 2px #ff8a0c solid;
                border-right: 1px #e4e4e4 solid;
                border-left: 1px #e4e4e4 solid;
                border-bottom: 1px #ffffff solid;
                bottom: auto;
            }
            .ivu-tabs-nav .ivu-tabs-tab-active {
                color: #3e3e3e;
            }
            .ivu-tabs-nav .ivu-tabs-tab {
                font-size: 14px;
            }

            .ivu-input-wrapper{
                width: 252px !important;
                float: left;
                height: 33px;
                .ivu-input-large {
                    border-radius: 0;
                    box-sizing: border-box;
                    height: 35px!important;
                    padding: 6px 10px 6px 10px !important;
                }
                .ivu-input-icon {
                    right: auto;
                    color: #dbdbdb;
                }
            }
            .ivu-table th {
                font-size: 16px;
                font-weight: 400;
                background-color: #fdf7f4;
            }
            .ivu-table td {
                font-size: 14px;
            }
            .ivu-table td, .ivu-table th {
                height: 60px;
                text-align: center;
            }
        }
    }
</style>
