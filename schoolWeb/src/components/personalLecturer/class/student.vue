<!-- HTML 个人讲师 学员管理 -->
<template>
    <div class="information clearfix m-l-30">
        <!-- title -->
        <div class="title clearfix">
            <span class="tit">学员管理</span>
            <div class="f-fr m-r-30">
                <Button type="warning">添加学员</Button>
                <Button type="warning" class="m-l-15">导出学员</Button>
            </div>
        </div>

        <!-- List -->
        <div class="stu-tab clearfix">
            <Tabs class="m-t-30">
                <TabPane label="正式学员" style="padding: 0 40px;">
                    <div class="clearfix m-t-30">
                        <Input size="large" placeholder="输入关键字..." class=""></Input>
                        <Button type="warning">搜索</Button>
                    </div>
                    <table class="stuList m-t-30" cellspacing="0" cellpadding="0" style="width: 100%;">
                        <thead>
                            <tr>
                                <th>学员</th>
                                <th style="width: 150px;">学习进度</th>
                                <th>操作</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <img src="../../../assets/image/cover-img.png" >
                                    <dl class="m-t-20 m-l-15">
                                        <dt>zhangsna</dt>
                                        <dd>加入时间：2017-6-28  16:59</dd>
                                    </dl>
                                </td>
                                <td>0%</td>
                                <td>
                                    <Button type="warning">发私信</Button>
                                    <Button type="warning" class="m-l-15">查看资料</Button>
                                    <Select v-model="model1" class="m-l-10" style="width:100px">
                                        <Option v-for="item in teacherList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                                    </Select>
                                </td>
                            </tr>
                        </tbody>

                    </table>
                </TabPane>

                <TabPane label="旁听生" style="padding: 0 40px;">
                    <div class="clearfix m-t-30">
                        <Input size="large" placeholder="输入关键字..." class=""></Input>
                        <Button type="warning">搜索</Button>
                    </div>
                    <table class="stuList m-t-30" cellspacing="0" cellpadding="0" style="width: 100%;">
                        <thead>
                        <tr>
                            <th>旁听生</th>
                            <th>操作</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>
                                <img src="../../../assets/image/cover-img.png" >
                                <dl class="m-t-20 m-l-15">
                                    <dt>zhangsna</dt>
                                    <dd>加入时间：2017-6-28  16:59</dd>
                                </dl>
                            </td>
                            <td>
                                <Button type="warning">发私信</Button>
                                <Button type="warning" class="m-l-15">查看资料</Button>
                                <Select v-model="model1" class="m-l-10" style="width:100px">
                                    <Option v-for="item in teacherList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                                </Select>
                            </td>
                        </tr>
                        </tbody>

                    </table>
                </TabPane>

                <TabPane label="退出记录" style="padding: 0 40px;">
                    <div class="clearfix m-t-30">
                        <Input size="large" placeholder="输入关键字..." class=""></Input>
                        <Button type="warning">搜索</Button>
                    </div>
                    <table class="stuList m-t-30" cellspacing="0" cellpadding="0" style="width: 100%;">
                        <thead>
                        <tr>
                            <th>学员名称</th>
                            <th>退出原因</th>
                            <th>退出日期</th>
                            <th>退款状态</th>
                            <th>退出金额</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        </tbody>

                    </table>
                </TabPane>
            </Tabs>
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
                teacherList: [
                    {
                        value: '管理',
                        label: '管理'
                    },
                    {
                        value: '备注',
                        label: '备注'
                    },
                    {
                        value: '移除',
                        label: '移除'
                    }

                ],
                model1: ''
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
        .stu-tab {
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
            .ivu-btn {
                border-radius: 0;
                padding: 6px 15px;
                font-size: 14px;
            }
            .stuList {
                width: 100%;
                border: 1px #ededed solid;
                border-left: 0;
                tr th {
                    border: 1px #ededed solid;
                    height: 60px;
                    background-color: #fdf7f4;
                    border-right: 0;
                    border-top: 0;
                    font-size: 16px;
                    color: #3e3e3e;
                    font-weight: 400;
                }
                tr td {
                    border: 1px #ededed solid;
                    border-right: 0;
                    border-top: 0;
                    border-bottom: 0;
                    text-align: center;
                    padding: 8px;
                    height: 90px;
                    img {
                        width: 74px;
                        height: 74px;
                        border-radius: 50%;
                        float: left;
                        margin-left: 50px;
                    }
                    dl {
                        text-align: left;
                        float: left;
                        dt {
                            font-size: 14px;
                            color: #3e3e3e;
                        }
                        dd {
                            margin-top:5px;
                            color: #848484;
                        }
                    }
                    .ivu-btn {
                        border-radius: 4px !important;
                        padding: 5px 15px;
                        font-size: 12px !important;
                    }
                }
                .ivu-select-single .ivu-select-selection .ivu-select-placeholder, .ivu-select-single .ivu-select-selection .ivu-select-selected-value {
                    height: 32px !important;
                    line-height: 32px !important;
                }
                .ivu-input, .ivu-select-single .ivu-select-selection {
                    height: 32px !important;
                }
            }
        }
    }
</style>
