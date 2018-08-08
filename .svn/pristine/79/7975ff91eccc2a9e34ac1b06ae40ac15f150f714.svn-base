<!-- HTML 个人讲师 助教设置 -->
<template>
    <div class="information clearfix">
        <!-- title -->
        <div class="title">
            <span class="tit">助教设置</span>
        </div>

        <!-- 表单 -->
        <div class="content">
            <Form label-position="left" :label-width="80">
                <FormItem label="助教设置" class="padd-top">
                    <Select v-model="model1" style="width:200px">
                        <Option v-for="item in teacherList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                    </Select>
                </FormItem>
                <Button type="warning">保存</Button>
            </Form>
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
                        value: '助教小王',
                        label: '助教小王'
                    },
                    {
                        value: '助教小李',
                        label: '助教小李'
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
        .content {
            border: 0px #ccc solid;
            width: auto;
            margin: 45px 45px 0 45px;
            .ivu-input-wrapper,.ivu-select {
                width: 251px !important;
            }
            .padd-top {
                .ivu-form-item-label {
                    padding: 7px 12px 11px 0 !important;
                    font-size: 14px;
                }
            }
            .ivu-btn {
                padding: 6px 28px;
                font-size: 14px;
            }
        }
        /* input select */
        .ivu-input,.ivu-select-single .ivu-select-selection {
            height: 36px !important;
        }
        .ivu-select-single .ivu-select-selection .ivu-select-placeholder, .ivu-select-single .ivu-select-selection .ivu-select-selected-value {
            height: 36px !important;
            line-height: 36px !important;
        }

    }
</style>
