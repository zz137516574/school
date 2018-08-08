<template>
    <div class="container searchVolume clearfix">
        <Menu mode="horizontal" active-name="1"  class="f-fl">
            <MenuItem name="1">
                最新
            </MenuItem>
            <MenuItem name="2">
                最热
            </MenuItem>
            <MenuItem name="3">
                推荐
            </MenuItem>
        </Menu>
        <div class="f-fr">
            <RadioGroup v-model="freeclass">
                <Radio class="f-fr" label="收费班级">
                    <!--<span>收费班级</span>-->
                </Radio>
                <Radio class="f-fr m-r-25" label="免费班级">
                    <!--<span>免费班级</span>-->
                </Radio>
            </RadioGroup>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            searchVolume: {}
        },
        data() {
            return {
                freeclass: '免费班级'
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
    .searchVolume{
        width: 100%;
        height: 45px;
        line-height: 45px;
        background: #f5f5f5;
        border: 1px solid #ededed;
        box-sizing: border-box;
        .ivu-menu{
            height: 44px!important;
            line-height: 43px!important;
            background: #f5f5f5!important;
            li.ivu-menu-item {
                width: inherit;
                padding: 0 20px;
                text-align: center;
                border-bottom: 1px solid #ededed;
            }
            .ivu-menu-item-active,.ivu-menu-item:hover {
                color: #ff8a0c!important;
                border-bottom: 1px solid #ededed!important;
                background: #ffffff!important;
            }
        }
        .f-fr{
            color: #706f6f;
        }

    }
</style>