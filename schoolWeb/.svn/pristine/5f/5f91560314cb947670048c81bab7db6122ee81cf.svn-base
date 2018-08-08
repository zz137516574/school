<template>
    <div id="class">
        <v-top :top="top"></v-top>
        <div class="clearfix container m-t-20 m-b-20">
            <i class="f-fl"><img src="../assets/image/logo.png" alt=""></i>
            <v-search :search="search" class="f-fr"></v-search>
        </div>

        <!--导航-->
        <v-subpageMenu :subpageMenu="subpageMenu" class="m-b-20"></v-subpageMenu>

        <!--面包屑-->
        <Breadcrumb separator=">" class="container m-b-20 p-l-15">
            <BreadcrumbItem href="/">首页</BreadcrumbItem>
            <BreadcrumbItem href="/views/assemblyLecturers">讲师集结</BreadcrumbItem>
            <BreadcrumbItem href="/views/assLecturersList">讲师集结列表</BreadcrumbItem>
        </Breadcrumb>

        <!--分类-->
        <div class="clearfix container area m-t-25 m-b-25">
            <div class="areaTop">
                选择地区：
            </div>
            <div class="areaBottom">
                选择：
                <Select v-model="model2" size="small" style="width:100px">
                    <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                </Select>
                <Select v-model="model3" size="small" style="width:100px">
                    <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                </Select>
                <Select v-model="model4" size="small" style="width:100px">
                    <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                </Select>
            </div>
        </div>

        <!--讲师列表-->
        <ul class="clearfix container m-t-10 assLecturersList">
            <li><v-yunCommonDiv :yunCommonDiv="yunCommonDiv"></v-yunCommonDiv></li>
            <li><v-yunCommonDiv :yunCommonDiv="yunCommonDiv"></v-yunCommonDiv></li>
            <li><v-yunCommonDiv :yunCommonDiv="yunCommonDiv"></v-yunCommonDiv></li>
            <li><v-yunCommonDiv :yunCommonDiv="yunCommonDiv"></v-yunCommonDiv></li>
            <li><v-yunCommonDiv :yunCommonDiv="yunCommonDiv"></v-yunCommonDiv></li>
            <li><v-yunCommonDiv :yunCommonDiv="yunCommonDiv"></v-yunCommonDiv></li>
            <li><v-yunCommonDiv :yunCommonDiv="yunCommonDiv"></v-yunCommonDiv></li>
            <li><v-yunCommonDiv :yunCommonDiv="yunCommonDiv"></v-yunCommonDiv></li>
            <li><v-yunCommonDiv :yunCommonDiv="yunCommonDiv"></v-yunCommonDiv></li>
            <li><v-yunCommonDiv :yunCommonDiv="yunCommonDiv"></v-yunCommonDiv></li>
            <li><v-yunCommonDiv :yunCommonDiv="yunCommonDiv"></v-yunCommonDiv></li>
            <li><v-yunCommonDiv :yunCommonDiv="yunCommonDiv"></v-yunCommonDiv></li>

        </ul>
        <!--分页-->
        <Page :total="100" class="container text-center m-t-25 m-b-120"></Page>

        <v-footer :footer="footer"></v-footer>
    </div>
</template>

<script>
    import Vue from 'vue';
    import top from '../components/top.vue';
    import search from '../components/search.vue';
    import subpageMenu from '../components/class/subpageMenu.vue';
    import yunCommonDiv from '../components/yunlianCollege/yunCommonDiv.vue';
    import footer from '../components/footer.vue';

    export default {
        data() {
            return {
                top: {},
                search: {},
                subpageMenu:{},
                yunCommonDiv:{},
                footer: {},
                cityList: [
                    {
                        value: 'beijing',
                        label: '北京市'
                    },
                    {
                        value: 'shanghai',
                        label: '上海市'
                    },
                    {
                        value: 'shenzhen',
                        label: '深圳市'
                    },
                    {
                        value: 'hangzhou',
                        label: '杭州市'
                    },
                    {
                        value: 'nanjing',
                        label: '南京市'
                    },
                    {
                        value: 'chongqing',
                        label: '重庆市'
                    }
                ],
                model2: '',
                model3: '',
                model4: ''
            };
        },
        mounted() {

        },
        beforeDestroy() {

        },
        components: {
            'v-top': top,
            'v-search': search,
            'v-subpageMenu': subpageMenu,
            'v-yunCommonDiv': yunCommonDiv,
            'v-footer': footer
        },
        methods: {

        }
    };

</script>

<style lang="less">
    .area{
        width: auto;
        height: 110px;
        padding: 8px 8px;
        border:1px #ededed solid;
        .areaTop{
            color: #706f6f;
            height: 48px;
            font-size: 12px;
            line-height: 48px;
            border-bottom: 1px #ededed solid;
        }
        .areaBottom{
            margin-top: 14px;
        }
    }
    .assLecturersList{
        li{
            float:left;
            margin-top: 30px;
            margin-right: 22px;
        }
        li:nth-child(4n){
            margin-right: 0;
        }
    }
</style>