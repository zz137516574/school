<!-- HTML 个人讲师 / 课程管理 / 基本信息 -->
<template>
    <div class="information clearfix">
        <!-- title -->
        <div class="title">
            <span class="tit">详情信息</span>
        </div>

        <!-- 表单 -->
        <div class="content">
            <Form :model="formInfo" label-position="left" :label-width="100">
                <FormItem label="课程名称" class="padd-top">
                    <Input v-model="formInfo.name"></Input>
                </FormItem>
                <FormItem label="课程会员限定" class="padd-top">
                    <Select v-model="formInfo.member">
                        <Option value="默认分类">默认分类</Option>
                    </Select>
                </FormItem>
                <FormItem label="价格" class="padd-top">
                    <Input v-model="formInfo.price"></Input>
                </FormItem>
                <FormItem label="上限人数限制" class="padd-top">
                    <Input v-model="formInfo.people"></Input>
                </FormItem>
                <FormItem label="课程类型" class="padd-top">
                    <Select v-model="formInfo.type">
                        <Option value="默认类型">默认类型</Option>
                    </Select>
                </FormItem>
                <FormItem label="分类" class="padd-top">
                    <Select v-model="formInfo.class">
                        <Option value="默认分类">默认分类</Option>
                    </Select>
                </FormItem>
                <FormItem label="老师" class="padd-top">
                    <Select v-model="formInfo.teacher">
                        <Option value="张三">张三</Option>
                    </Select>
                </FormItem>
                <FormItem label="是否共享" class="padd-top">
                    <Select v-model="formInfo.share">
                        <Option value="是">是</Option>
                        <Option value="否">否</Option>
                    </Select>
                </FormItem>
                <FormItem label="是否可试听" class="padd-top">
                    <Select v-model="formInfo.audition">
                        <Option value="是">是</Option>
                        <Option value="否">否</Option>
                    </Select>
                </FormItem>
                <FormItem label="试听时长" class="padd-top">
                    <Select v-model="formInfo.when">
                        <Option value="5分钟">5分钟</Option>
                        <Option value="10分钟">10分钟</Option>
                        <Option value="20分钟">20分钟</Option>
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
                formInfo: {
                    name: '',
                    member: '',
                    price: '',
                    people: '',
                    type: '',
                    class: '',
                    teacher: '',
                    share: '',
                    audition: '',
                    when: ''
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
