<!-- HTML 个人讲师 价格设置 -->
<template>
    <div class="information clearfix">
        <!-- title -->
        <div class="title">
            <span class="tit">价格设置</span>
        </div>

        <!-- 表单 -->
        <div class="content">
            <Form :model="formLeft" label-position="left" :label-width="80">
                <FormItem label="价格" class="padd-top">
                    <Input v-model="formLeft.input"></Input>
                    <br/>
                    <span>当前共有2个课程，原价共计100元</span>
                </FormItem>

                <Button type="warning">提交</Button>
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
                formLeft: {
                    input: '100.00'
                },
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
    }
</style>
