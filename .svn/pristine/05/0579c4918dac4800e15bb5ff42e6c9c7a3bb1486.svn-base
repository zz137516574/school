<!-- HTML 个人讲师 左侧菜单 -->
<template>
    <div class="leftMenu clearfix">
        <Menu :active-name="this.menuName" :open-names="['1','2']" accordion @on-select="informations">
            <Submenu v-for="(item,index) in items"
                      :name="item.location"
                      :key="index">
                <template slot="title">
                    {{item.text}}
                </template>

                <MenuItem v-for="(i, position) in item.children"
                          :name="i.location"
                          :key="position">
                    {{i.text}}
                </MenuItem>
            </Submenu>
        </Menu>
    </div>
</template>

<script>
    export default {
        props: {
            leftMenu: {},
        },
        data() {
            return {
                items:[
                    { text: '课程修改' , location: '1', children:[
                        {
                            text: '基本信息' , location: '1-1'
                        },
                        {
                            text: '讲师设置' , location: '1-4'
                        },
                        {
                            text: '助教设置' , location: '1-5'
                        },
                        {
                            text: '课程管理' , location: '1-6'
                        },
                        {
                            text: '学员管理' , location: '1-7'
                        }
                    ]}

                ],
                menuName:'1-1',
            };
        },
        mounted() {
            this.menuName=this.$route.name;
        },
        beforeCreate(){

        },
         beforeDestroy() {
//             console.log(this.$route.path);
         },
        methods: {
            menuGroupClick(name){
                this.$router.push(name);
//                this.menuName=name;
//                this.store.state.topMenu = name;
            },
            //menu选择,根据pathName 对应router替换当前右侧内容区域
//            informations(pathName){
//                this.$router.push(pathName,'personalLecturer');
//            },
            informations(name){
//                console.log(name);
//                this.$router.push(pathName,'personalLecturer');
                this.$router.push(name);
            }
        },
        watch: {
          $route(to, from) {
            this.menuName=to.name;
          }
        },
    };
</script>

<style lang="less">
    .leftMenu {
        width: 220px;
        height: auto;
        border: 1px #ededed solid;
        border-right: 0;

        .ivu-menu-vertical[style] {
            width: 100% !important;
        }
        .ivu-menu-submenu-title {
            border-left: 2px #ff8a0c solid;
            background-color: #f9f9f9;
        }
        .ivu-menu-light.ivu-menu-vertical .ivu-menu-item-active:not(.ivu-menu-submenu) {
            color: #ff8a0c;
            background-color: #fff9f7;
            border-right: 1px #dddee1 solid;
        }
        .ivu-menu-vertical .ivu-menu-submenu-title {
            padding: 12px 24px;
            /*margin-bottom: 2px;*/
        }
        .ivu-menu-item:hover {
            background-color: #fff9f7 !important;
            border-right: 1px #dddee1 solid !important;
        }

    }
</style>
