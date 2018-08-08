<!-- HTML 个人讲师 / 课程管理 / 详情信息 -->
<template>
    <div class="information clearfix">
        <!-- title -->
        <div class="title">
            <span class="tit">详情信息</span>
        </div>

        <!-- 表单 -->
        <div class="content">
            <Form :model="formDetails" label-position="left" :label-width="100">
                <FormItem label="课程简介" class="padd-top">
                    <div class="editor"></div>
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
                formDetails: {},
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
            tit {
                padding: 15px;
                border-bottom: 2px #ff8a0c solid;
            }
        }
        .content {
            border: 0px #ccc solid;
            width: auto;
            margin: 45px 45px 0 45px;
            .editor {
                border: 1px #dddee1 solid;
                width: 580px;
                height: 257px;
                border-radius: 4px;
            }
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
