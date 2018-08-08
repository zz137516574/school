<!-- HTML 个人讲师 -->
<template>
    <div class="aboutUs">
        <v-top :top="top"></v-top>
        <div class="clearfix container m-t-20 m-b-20">
            <i class="f-fl"><img src="../assets/image/logo.png" alt=""></i>
            <v-search :search="search" class="f-fr"></v-search>
        </div>

        <!-- 内容 -->
        <div class="content clearfix">

            <!--<v-title :title="title"></v-title>-->
            <div class="m-t-20">
                <div class="f-fl">
                    <v-leftMenu :leftMenu="leftMenu"></v-leftMenu>
                </div>
                <div class="f-fr">
                    <router-view></router-view>
                </div>
            </div>

            <!--<v-information :information="information" class="m-t-20 f-fr"></v-information>-->
            <!--<v-price :price="price" class="m-t-20 f-fr"></v-price>-->
        </div>

        <!-- foot -->
        <v-footer :footer="footer"></v-footer>
    </div>
</template>

<script>
    import top from '../components/top.vue';
    import search from '../components/search.vue';
    import title from '../components/personalLecturer/title.vue';
    import leftMenu from '../components/personalLecturer/leftMenu.vue';
    import information from '../components/personalLecturer/class/information.vue';
    import price from '../components/personalLecturer/class/price.vue';

    import footer from '../components/footer.vue';

    export default {
        data() {
            return {
                top: {},
                search:{},
                title:{},
                leftMenu:{},
                information:{},
                price:{},
                footer: {}
            };
        },
        mounted() {

        },
        beforeDestroy() {

        },
        components: {
            'v-top': top,
            'v-search': search,
            'v-title': title,
            'v-leftMenu': leftMenu,
            'v-information': information,
            'v-price': price,
            'v-footer': footer
        },
        methods: {

        }
    };

</script>

<style lang="less">
    .content{
        width: 1200px;
        margin: 0 auto 150px auto;
    }
</style>
