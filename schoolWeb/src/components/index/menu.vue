<template>
    <div class="container subpagMenu clearfix">
        <ul>
            <li>
                <a @click="course" >课程专区</a>
            </li>
            <li>
                <Dropdown>
                    <a href="javascript:void(0);">直播专区</a>
                    <DropdownMenu slot="list">
                        <DropdownItem><a href="javascript:void(0);">路演直播</a></DropdownItem>
                        <DropdownItem><a href="javascript:void(0);">访谈专栏</a></DropdownItem>
                        <DropdownItem><a href="javascript:void(0);">会员直播</a></DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </li>
            <li>
                <a href="javascript:void(0);">新闻中心</a>
            </li>
            <li>
                <Dropdown>
                <a href="javascript:void(0);">云联学院</a>
                    <DropdownMenu slot="list">
                        <DropdownItem><a href="javascript:void(0);">讲师集结</a></DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </li>
            <li>
                <a  @click="product" >云联优品</a>
            </li>
            <li>
                <a href="javascript:void(0);">社区中心</a>
            </li>
            <li>
                <a @click="lecturerRecruitment">讲师招募</a>
            </li>
            <li>
                <a href="javascript:void(0);">云联校友</a>
            </li>
            <li>
                <a href="javascript:void(0);">关于我们</a>
            </li>
            <li>
                <a href="javascript:void(0);">报名吧</a>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                items:[
                    { text: '课程专区'},
                    { text: '直播专区' },
                    { text: '新闻中心' },
                    { text: '云联学院' },
                    { text: '云联优品' },
                    { text: '社区中心' },
                    { text: '讲师招募' },
                    { text: '云联校友' },
                    { text: '关于我们' },
                    { text: '报名吧' }
                ]
            };
        },
        mounted() {

        },
        beforeDestroy() {

        },
        methods: {
            course(){
                this.$router.push('course');
            },
            product(){
                this.$router.push('product');
            },
            lecturerRecruitment(){
                this.$router.push('lecturerRecruitment');
            }
        }
    };
</script>

<style  lang="less">
    .subpagMenu{
        padding-left: 236px;
        li{
            float: left;
            position: relative;
            text-align: center;
            a{
                display: block;
                padding: 10px 15px;
                font-size: 16px;
                color: #4e4e4e;
                transition: color 0s ease;
            }
            .ivu-dropdown-item{
                padding: inherit;
                width: 100%;
                a{
                    font-size: 16px;
                    background: #ffffff!important;
                    color: #666!important;
                }
            }
            .ivu-dropdown-item:hover a{
                background: #f3f3f3!important;
            }
        }
        li:hover{
            a{
                background: #ff8a0c;
                color: #ffffff;
                border-top-left-radius: 5px;
                border-top-right-radius: 5px;
            }
        }
    }
</style>