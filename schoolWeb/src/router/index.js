/* eslint-disable no-undef */
import VueRouter from 'vue-router';
import Vue from 'vue';

// import * as types from '../store/types';

Vue.use(VueRouter);

const routers = [
    {
        path: '/',
        meta: {
            title: '商学院'
        },
        component: (resolve) => require(['@/views/index.vue'], resolve),
    },
    {
      path: '/callback',
      meta: {
        title: '授权'
      },
      component: (resolve) => require(['@/views/authCallback.vue'], resolve),
    },
    {
        path: '/login',
        name: 'login',
        meta: {
            title: '登录页'
        },
        component: (resolve) => require(['@/views/login.vue'], resolve),
    },
    {
      path: '/register',
      name: 'register',
      meta: {
        title: '注册页'
      },
      component: (resolve) => require(['@/views/register.vue'], resolve),
    },
    {
        path: '/index',
        meta: {
            title: '商学院',
            breadNumber:1
        },
        component: (resolve) => require(['@/views/index.vue'], resolve),
    },
    {
      path: '/courseSearch',
      name:'courseSearch',
      meta: {
        title: '课程搜索专区',
        breadNumber:2
      },
      component: (resolve) => require(['@/views/courseSearch.vue'], resolve),
    },
    {
        path: '/course',
        meta: {
            title: '课程专区',
          breadNumber:2
        },
        component: (resolve) => require(['@/views/course.vue'], resolve),
    },
    {
        path: '/freeCourse',
        meta: {
            title: '课程详情',
            breadNumber:3
        },
        component: (resolve) => require(['@/views/freeCourse.vue'], resolve),
    },
    {
      path: '/freeShareCourse',
      meta: {
        title: '共享课程',
        breadNumber:3
      },
      component: (resolve) => require(['@/views/freeShareCourse.vue'], resolve),
    },
    {
      path: '/freeSeriesCourse',
      meta: {
        title: '系列课程详请',
        breadNumber:3
      },
      component: (resolve) => require(['@/views/freeSeriesCourse.vue'], resolve),
    },
    {
      path: '/DirectCourseDetails',
      meta: {
        title: '直播课程',
        breadNumber:3
      },
      component: (resolve) => require(['@/views/DirectCourseDetails.vue'], resolve),
    },
    {
      path: '/DirectCourseDetailsSeries',
      meta: {
        title: '直播系列课程',
        breadNumber:3
      },
      component: (resolve) => require(['@/views/DirectCourseDetailsSeries.vue'], resolve),
    },
    {
        path: '/class',
        meta: {
            title: '班级'
        },
        component: (resolve) => require(['@/views/class.vue'], resolve),
    },
    {
        path: '/freeClass',
        meta: {
            title: '免费班级'
        },
        component: (resolve) => require(['@/views/freeClass.vue'], resolve),
    },
    {
        path: '/product',
        meta: {
            title: '云联优品',
            breadNumber:2
        },
        component: (resolve) => require(['@/views/product.vue'], resolve),
    },
    {
        path: '/productDetails',
        meta: {
            title: '云联优品详情',
            breadNumber:3
        },
        component: (resolve) => require(['@/views/productDetails.vue'], resolve),
    },
    {
        path: '/lecturerRecruitment',
        meta: {
            title: '讲师招募',
            breadNumber:2
        },
        component: (resolve) => require(['@/views/lecturerRecruitment.vue'], resolve),
    },
    {
        path: '/lecturerRecruitmentList',
        meta: {
            title: '讲师招募列表',
            breadNumber:3
        },
        component: (resolve) => require(['@/views/lecturerRecruitmentList.vue'], resolve),
    },
    {
        path: '/lecturerRecruitmentDetails',
        meta: {
            title: '讲师招募详情',
            breadNumber:3
        },
        component: (resolve) => require(['@/views/lecturerRecruitmentDetails.vue'], resolve),
    },
    {
        path: '/enroll',
        meta: {
            title: '报名吧',
            breadNumber:2
        },
        component: (resolve) => require(['@/views/enroll.vue'], resolve),
    },
    {
        path: '/orderPurchase',
        meta: {
            title: '订单确认'
        },
        component: (resolve) => require(['@/views/orderPurchase.vue'], resolve),
    },
    {
        path: '/orderPurchaseTwo',
        meta: {
            title: '订单支付'
        },
        component: (resolve) => require(['@/views/orderPurchaseTwo.vue'], resolve),
    },
    {
        path: '/orderPurchaseThree',
        meta: {
            title: '订单完成'
        },
        component: (resolve) => require(['@/views/orderPurchaseThree.vue'], resolve),
    },
    {
        path: '/enrollList',
        meta: {
            title: '报名吧列表',
            breadNumber:3
        },
        component: (resolve) => require(['@/views/enrollList.vue'], resolve),
    },
    {
        path: '/enrollDetails',
        meta: {
            title: '报名吧详情',
            breadNumber:3
        },
        component: (resolve) => require(['@/views/enrollDetails.vue'], resolve),
    },
    {
        path: '/yunCollege',
        meta: {
            title: '云联学院',
            breadNumber:2
        },
        component: (resolve) => require(['@/views/yunCollege.vue'], resolve),
    },
    {
        path: '/yunCollegeInfo',
        meta: {
            title: '云联学院简介',
            breadNumber:3
        },
        component: (resolve) => require(['@/views/yunCollegeInfo.vue'], resolve),
    },
    {
        path: '/assemblyLecturers',
        meta: {
            title: '讲师集结',
            breadNumber:2,
        },
        component: (resolve) => require(['@/views/assemblyLecturers.vue'], resolve),
    },
    {
        path: '/assLecturersList',
        meta: {
            title: '讲师集结列表'
        },
        component: (resolve) => require(['@/views/assLecturersList.vue'], resolve),
    },
    {
        path: '/assLecturersInfo',
        meta: {
            title: '讲师详情',
            breadNumber:3,
        },
        component: (resolve) => require(['@/views/assLecturersInfo.vue'], resolve),
    },
    {
        path: '/news',
        meta: {
            title: '资讯中心',
            breadNumber:2
        },
        component: (resolve) => require(['@/views/news.vue'], resolve),
    },
    {
        path: '/newsInfo',
        meta: {
            title: '资讯详情页',
            breadNumber:3
        },
        component: (resolve) => require(['@/views/newsInfo.vue'], resolve),
    },
    {
        path: '/liveBroadcast',
        meta: {
            title: '直播专区',
            breadNumber:2
        },
        component: (resolve) => require(['@/views/liveBroadcast.vue'], resolve),
    },
    {
        path: '/liveBroadcastList',
        meta: {
            title: '直播列表',
            breadNumber:3
        },
        component: (resolve) => require(['@/views/liveBroadcastList.vue'], resolve),
    },
    {
        path: '/column',
        meta: {
            title: '黄董专区',
            breadNumber:2
        },
        component: (resolve) => require(['@/views/column.vue'], resolve),
    },
    {
        path: '/columnDetails',
        meta: {
            title: '黄董专栏详情页',
            breadNumber:3
        },
        component: (resolve) => require(['@/views/columnDetails.vue'], resolve),
    },
    {
        path: '/intervieIndex',
        meta: {
            title: '访谈专栏'
        },
        component: (resolve) => require(['@/views/intervieIndex.vue'], resolve),
    },
    {
        path: '/interview',
        meta: {
            title: '访谈专栏列表页'
        },
        component: (resolve) => require(['@/views/interview.vue'], resolve),
    },
    {
        path: '/interviewVideo',
        meta: {
            title: '访谈专栏直播页'
        },
        component: (resolve) => require(['@/views/interviewVideo.vue'], resolve),
    },
    {
        path: '/roadShow',
        meta: {
            title: '路演首页'
        },
        component: (resolve) => require(['@/views/roadShow.vue'], resolve),
    },
    {
        path: '/roadShowList',
        meta: {
            title: '路演列表页'
        },
        component: (resolve) => require(['@/views/roadShowList.vue'], resolve),
    },
    {
        path: '/roadShowVideo',
        meta: {
            title: '路演直播页'
        },
        component: (resolve) => require(['@/views/roadShowVideo.vue'], resolve),
    },
    {
        path: '/personalLecturer',
        // restrict:'/1-1',
        meta: {
            title: '个人讲师'
        },
        component: (resolve) => require(['@/views/personalLecturer.vue'], resolve),
        children: [
            {
                path: '/',
                meta: {
                    title: '基本信息',
                },
                component: (resolve) => require(['@/components/personalLecturer/class/information.vue'], resolve),
            },
            {
                path: '/1-1',
                name:'1-1',
                meta: {
                    title: '基本信息',
                },
                component: (resolve) => require(['@/components/personalLecturer/class/information.vue'], resolve)
            },
            {
                path: '/1-2',
                name:'1-2',
                meta: {
                    title: '价格设置',
                },
                component: (resolve) => require(['@/components/personalLecturer/class/price.vue'], resolve)
            },
            {
                path: '/1-3',
                name:'1-3',
                meta: {
                    title: '封面设置',
                },
                component: (resolve) => require(['@/components/personalLecturer/class/cover.vue'], resolve)
            },
            {
                path: '/1-4',
                name:'1-4',
                meta: {
                    title: '讲师设置',
                },
                component: (resolve) => require(['@/components/personalLecturer/class/lecturer.vue'], resolve)
            },
            {
                path: '/1-5',
                name:'1-5',
                meta: {
                    title: '助教设置',
                },
                component: (resolve) => require(['@/components/personalLecturer/class/assistant.vue'], resolve)
            },
            {
                path: '/1-6',
                name:'1-6',
                meta: {
                    title: '课时管理',
                },
                component: (resolve) => require(['@/components/personalLecturer/class/timeManagement.vue'], resolve)
            },
            {
                path: '/1-7',
                name:'1-7',
                meta: {
                    title: '学员管理',
                },
                component: (resolve) => require(['@/components/personalLecturer/class/student.vue'], resolve)
            },

        ]
    },
    {
        path: '/personalHomepage',
        // restrict:'/1-1',
        meta: {
          title: '个人主页'
        },
        component: (resolve) => require(['@/views/personalHomepage.vue'], resolve),
        children: [
            {
              path: '/',
              meta: {
                title: '资料设置',
              },
              component: (resolve) => require(['@/components/myClassroom/class/dataSetting.vue'], resolve),
            },
            {
              path: '/3-1',
              name:'3-1',
              meta: {
                title: '资料设置',
              },
              component: (resolve) => require(['@/components/myClassroom/class/dataSetting.vue'], resolve)
            },
            {
              path: '/4-1',
              name:'4-1',
              meta: {
                title: '我的账户',
              },
              component: (resolve) => require(['@/components/accountCenter/myAccount.vue'], resolve)
            },
            {
              path: '/4-2',
              name:'4-2',
              meta: {
                title: '我的订单',
              },
              component: (resolve) => require(['@/components/accountCenter/myOrder.vue'], resolve)
            },
            {
              path: '/4-3',
              name:'4-3',
              meta: {
                title: '我的卡包',
              },
              component: (resolve) => require(['@/components/accountCenter/myCardPack.vue'], resolve)
            },
            {
              path: '/4-4',
              name:'4-4',
              meta: {
                title: '课程推广',
              },
              component: (resolve) => require(['@/components/accountCenter/curriculumPromotion.vue'], resolve)
            },
            {
              path: '/5-1',
              name:'5-1',
              meta: {
                title: '创建普通课课程',
              },
              component: (resolve) => require(['@/components/myClassroom/class/creatingCourses.vue'], resolve)
            },
            {
              path: '/5-2',
              name:'5-2',
              meta: {
                title: '创建系列课课程',
              },
              component: (resolve) => require(['@/components/myClassroom/class/creatingSeriesCourses.vue'], resolve)
            },
            {
              path: '/5-3',
              name:'5-3',
              meta: {
                title: '课程审核管理',
              },
              component: (resolve) => require(['@/components/myClassroom/class/courseAudit.vue'], resolve)
            },
            {
              path: '/5-5',
              name:'5-5',
              meta: {
                title: '系列课列表',
              },
              component: (resolve) => require(['@/components/myClassroom/class/courseSeries.vue'], resolve)
            },
            {
              path: '/5-6',
              name:'5-6',
              meta: {
                title: '普通科列表',
              },
              component: (resolve) => require(['@/components/myClassroom/class/courseGeneral.vue'], resolve)
            },
            {
              path: '/5-7',
              name:'5-7',
              meta: {
                title: '学生问答',
              },
              component: (resolve) => require(['@/components/myClassroom/class/studentQA.vue'], resolve)
            },
            {
              path: '/5-8',
              name:'5-8',
              meta: {
                title: '系列课修改',
              },
              component: (resolve) => require(['@/components/myClassroom/class/seriesCourses.vue'], resolve)
            },
            // {
            //   path: '/6',
            //   name:'6',
            //   meta: {
            //     title: '互动直播',
            //   },
            //   component: (resolve) => require(['@/components/myClassroom/class/studentQA.vue'], resolve)
            // },
            {
              path: '/6-1',
              name:'6-1',
              meta: {
                title: '创建普通课程',
              },
              component: (resolve) => require(['@/components/interactiveBroadcast/creatingCourses.vue'], resolve)
            },
            {
              path: '/6-2',
              name:'6-2',
              meta: {
                title: '创建系列课程',
              },
              component: (resolve) => require(['@/components/interactiveBroadcast/creatingSeriesCourses.vue'], resolve)
            },
            {
              path: '/6-3',
              name:'6-3',
              meta: {
                title: '课程审核管理',
              },
              component: (resolve) => require(['@/components/interactiveBroadcast/courseAudit.vue'], resolve)
            },
            {
              path: '/6-7',
              name:'6-7',
              meta: {
                title: '共享申请',
              },
              component: (resolve) => require(['@/components/myClassroom/class/sharedCurriculum.vue'], resolve)
            },
            {
              path: '/6-4',
              name:'6-4',
              meta: {
                title: '课程列表',
              },
              component: (resolve) => require(['@/components/interactiveBroadcast/generalCourses.vue'], resolve)
            },
            {
              path: '/6-5',
              name:'6-5',
              meta: {
                title: '系列课列表',
              },
              component: (resolve) => require(['@/components/interactiveBroadcast/seriesCourses.vue'], resolve)
            },
            {
              path: '/6-6',
              name:'6-6',
              meta: {
                title: '学生问答',
              },
              component: (resolve) => require(['@/components/interactiveBroadcast/studentQA.vue'], resolve)
            },
            {
              path: '/7-1',
              name:'7-1',
              meta: {
                title: '课程列表',
                breadNumber:2
              },
              component: (resolve) => require(['@/components/myClassroom/class/generalCourses.vue'], resolve)
            },
            {
              path: '/7-2',
              name:'7-2',
              meta: {
                title: '在线直播',
                breadNumber:2
              },
              component: (resolve) => require(['@/components/myClassroom/class/seriesCourses.vue'], resolve)
            },
            {
              path: '/7-3',
              name:'7-3',
              meta: {
                title: '我的收藏',
                breadNumber:2
              },
              component: (resolve) => require(['@/components/myClassroom/class/myCollection.vue'], resolve)
            },
            {
              path: '/7-4',
              name:'7-4',
              meta: {
                title: '我的笔记',
              },
              component: (resolve) => require(['@/components/myClassroom/class/myNotes.vue'], resolve)
            },
            {
              path: '/7-5',
              name:'7-5',
              meta: {
                title: '我的问答',
              },
              component: (resolve) => require(['@/components/myClassroom/class/myQuestion.vue'], resolve)
            },
            {
              path: '/7-6',
              name:'7-6',
              meta: {
                title: '讲师培训',
              },
              component: (resolve) => require(['@/components/myClassroom/class/lecturerTraining.vue'], resolve)
            }

        ]
    },
    {
        path: '/about',
        meta: {
            title: '关于我们',
            breadNumber:2
        },
        component: (resolve) => require(['@/views/about.vue'], resolve),
        children: [
            {
                path: '/',
                meta: {
                    title: '关于我们',
                    breadNumber:3
                },
                component: (resolve) => require(['@/views/aboutus.vue'], resolve)
            },
            {
                path: '/0',
                meta: {
                    title: '关于我们',
                    breadNumber:3
                },
                component: (resolve) => require(['@/views/aboutus.vue'], resolve)
            },
            {
                path: '/1',
                meta: {
                    title: '关于讲师',
                    breadNumber:3
                },
                component: (resolve) => require(['@/components/about/aboutLecturers.vue'], resolve)
            },
            {
                path: '/2',
                meta: {
                    title: '关于分校',
                    breadNumber:3
                },
                component: (resolve) => require(['@/views/aboutschool.vue'], resolve)
            }
        ]
    },
    {
      path: '/livePage',
      meta: {
        title: '视频直播页面'
      },
      component: (resolve) => require(['@/views/livePage.vue'], resolve),
    },
    {
      path: '/creatingSeriesCour',
      meta: {
        title: '系列课-创建普通课'
      },
      component: (resolve) => require(['@/views/creatingSeriesCour.vue'], resolve),
    },
    {
      path: '/addSharedCourse',
      meta: {
        title: '系列课-添加共享课'
      },
      component: (resolve) => require(['@/views/addSharedCourse.vue'], resolve),
    },
    {
      path: '/systemBinding',
      meta: {
        title: '系统绑定'
      },
      component: (resolve) => require(['@/views/systemBinding.vue'], resolve),
    },
    {
      path: '/retrievePass',
      meta: {
        title: '忘记密码'
      },
      component: (resolve) => require(['@/views/retrievePass.vue'], resolve),
    }
];



// 页面刷新时，重新赋值token
// if (window.localStorage.getItem('login')) {

    // store.state.token = JSON.parse(window.localStorage.getItem('login')).token;
    // this.$store.commit(types.LOGIN, window.localStorage.getItem('login').token);
    // this.$store.commit(this.types.LOGIN, response.data);
// }


// 页面刷新时，重新赋值菜单
// if (window.localStorage.getItem('menus')) {
//     store.state.menus = JSON.parse(window.localStorage.getItem('menus'));
//
// }

const router = new VueRouter({
    routers,
});

router.beforeEach((to, from, next) => {
    // if (to.matched.some(r => r.meta.requireAuth)) {
    console.log("to is " + JSON.stringify(to))
    console.log("from is " + JSON.stringify(from))
    console.log("next is " + JSON.stringify(next))
    // if (to.matched.some(r => r.meta.name)) {
    //     alert(r.meta.name);
        // if (store.state.token) {
        //     next();
        // }
        // else {
        //     next({
        //         path: '/',
        //         query: {redirect: to.fullPath}
        //     });
        // }
    // }
    // else {
    //     next();
    // }
});





export default routers;
