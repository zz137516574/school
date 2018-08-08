<template>
    <div class="studentDynamic ">
        <div class="role">学员动态</div>
        <ul class="body">
            <li v-for="(item,index) in studentDynamic" :key="index">
                <a href="#">
                    <span class="name p-r-5">{{item.username}}</span>
                    <span class="state p-r-5">开始学习</span>
                    <span class="desc">{{item.courseName}}</span>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        props: {
          studentDynamic: {
            required: true
          }
        },
        data() {
            return {
                dynamicItem: [
                    {
                        'name':'chengjie',
                        'state':'开始学习',
                        'desc':'云联惠商业模式'
                    },
                    {
                        'name':'chengjie',
                        'state':'开始学习',
                        'desc':'云联惠商业模式'
                    },
                    {
                        'name':'chengjie',
                        'state':'开始学习',
                        'desc':'云联惠商业模式'
                    },
                    {
                        'name':'chengjie',
                        'state':'开始学习',
                        'desc':'云联惠商业模式'
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

<style  lang="less">
    .studentDynamic {
        width: 277px;
        .role{
            padding-left: 15px;
            line-height: 41px;
            font-size: 18px;
            color: #3c3c3c;
            border-bottom:2px solid #fd901b;
        }
        .body{
            padding: 22px 15px;
            height: 165px;
            border:1px solid #ededed;
            border-top: 0;
            box-sizing: border-box;
            li{
                padding-bottom: 15px;
                a{
                    font-size: 13px;
                    color: #3c3c3c;
                    .state{
                        color: #7d7d7d;
                    }
                }
            }
        }
    }
</style>
