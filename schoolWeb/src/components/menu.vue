<template>
    <div class="container subpagMenu clearfix">
        <ul>
            <li v-for="(item,index) in items" :key="index">
                <a v-if="item.children.length === 0" @click="menuGroupClick(item)">{{item.text}}</a>
                <Dropdown v-else>
                    <a @click="menuGroupClick(item)">{{item.text}}</a>
                    <DropdownMenu slot="list">
                        <DropdownItem
                                v-for="(i, position) in item.children"
                                :name="i.location"
                                :key="position"
                        >
                            <a @click="menuItemClick(item,i)">{{i.text}}</a>
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </li>

        </ul>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                items: [
                    {text: '课程专区', location: 'course', children: []},
                    {
                        text: '直播专区', location: 'liveBroadcast', children: [
//                        {
//                            text: '路演直播', location: 'roadShow'
//                        },
//                        {
//                            text: '访谈专栏', location: 'intervieIndex'
//                        },
//                        {
//                            text: '会员直播', location: ''
//                        }
                    ]
                    },
                    {text: '资讯中心', location: 'news', children: []},
                    {
                        text: '云联学院', location: 'yunCollege', children: [
                        {
                            text: '讲师集结', location: 'assemblyLecturers'
                        }
                    ]
                    },
                    {text: '云联优品', location: 'product', children: []},
//                    {text: '社区中心', location: '', children: []},
                    {text: '讲师招募', location: 'lecturerRecruitment', children: []},
                    {text: '黄董专区', location: 'column', children: []},
                    {text: '报名吧', location: 'enroll', children: []},
                    {text: '关于我们', location: 'about', children: []},

                ],
                activeName: this.store.state.topMenu
            };
        },
        mounted() {

        },
        beforeDestroy() {
            activeName : this.store.state.topMenu
        },
        methods: {
            menuGroupClick(itemData) {
                if (itemData.location !== '') {
                    this.$router.push(itemData.location);
                    this.store.state.topMenu = itemData.location;
                }
            },
            menuItemClick(groupData, itemData) {
                if (itemData.location !== '') {
                    this.$router.push(itemData.location);
                    this.store.state.topMenu = groupData.location;
                }
            },
        }
    };
</script>

<style lang="less">
    .subpagMenu {
        padding-left: 236px;
        li {
            float: left;
            position: relative;
            text-align: center;
            a {
                display: block;
                padding: 10px 15px;
                font-size: 16px;
                color: #4e4e4e;
                transition: color 0s ease;
            }
            .ivu-dropdown-item {
                padding: inherit;
                width: 100%;
                a {
                    font-size: 16px;
                    background: #ffffff !important;
                    color: #666 !important;
                }
            }
            .ivu-dropdown-item:hover a {
                background: #f3f3f3 !important;
            }
        }
        li:hover {
            a {
                background: #ff8a0c;
                color: #ffffff;
                border-top-left-radius: 5px;
                border-top-right-radius: 5px;
            }
        }
    }
</style>
