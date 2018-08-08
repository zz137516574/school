// import axios from 'axios';
import { axios, get, post} from '../net';

// 登陆
export const login = (username,password,captcha) =>
  post('sys/login?username='+username+'&password='+password+'&captcha='+captcha);

// 注册
export const register = (username,password,captcha,equementId,mobile) => post('sys/user/register', {
  username :username,
  password :password,
  captcha :captcha,
  equementId :equementId,
  mobile :mobile,
});

// 忘记密码-获取验证码
export const getCodeData =( phoneNum)=>post('/sys/sendSms?phoneNum='+phoneNum);

// 忘记密码-修改密码
export const changePass =( phoneNum ,password, code)=>post('/sys/updatePassWord?phoneNum='+phoneNum+'&password='+password+'&code='+code,{
  phoneNum: phoneNum,
  password: password,
  code: code
});

// banner
export const adver = (typeis, limit, page) => get('advertisement/list', {
  type :typeis,
  limit :limit,
  page :page,
});

export const getMenuList = (id) => get('school/info/', id);

//精品课程
export const excellent = ( page, limit, quality,auditStatus,courseType) => get('course/list/',{
  page: page,
  limit: limit,
  quality: quality,
  auditStatus:auditStatus,
  courseType:courseType
});
/**
 * 系列课
 */
export const seriesCourse = (page, limit, ishot) => get('seriescourse/list/', {
  page: page,
  limit: limit,
  ishot: ishot
});
// 系列课列表分类
// export const seriesnavList = () => get('coursecatalog/select/');
//首页-云联商学院
export const businessSchools = (page, limit, auditStatus) => get('school/list/', {
  page:page,
  limit:limit,
  auditStatus:auditStatus
});
//线下活动
export const OfflineActivity = (activityPlace, page, limit, activityIsActual, activityType, isHot, hot, activityPriceOpen) => get('activity/list', {
  activityPlace:activityPlace,
  page:page,
  limit:limit,
  activityIsActual : activityIsActual,
  activityType: activityType,
  isHot: isHot,
  hot: hot,
  activityPriceOpen: activityPriceOpen
});
//报名吧活动-分类
export const enrollActivity = (parentClassId) => get('/activityclass/select', {
  parentClassId :parentClassId,
});
//线下活动详情
export const OfflineActivityDetails = (activityId,userId) => get('/activity/findActivityById', {
  activityId:activityId,
  userId:userId
});
//线下活动详情--分校信息
export const OfflineSchoolDetails = (schoolId) => get('/school/findSchool', {
  schoolId:schoolId,
});
//线下活动详情--报名人信息
export const OfflinePersonDetails = (page, limit, activityId) => get('/activityenroll/list', {
  page :page,
  limit :limit,
  activityId:activityId,
});

// 直播分类
export const liveBroadcastClass = (page, limit) => get('coursecatalog/list', {
  page :page,
  limit :limit,
});
// 直播专区
export const liveBroadcastData = (courseType, page, limit, onorsome, startTime, endTime) => get('course/listweb', {
  courseType :courseType,
  page :page,
  limit :limit,
  onorsome :onorsome,
  startTime: startTime,
  endTime :endTime,
});


// 直播专区
export const liveBroadcasts = (courseType, page, limit, classID, liveState, isFree) => get('course/listweb', {
  courseType :courseType,
  page :page,
  limit :limit,
  classId :classID,
  liveState: liveState,
  isFree :isFree,
});

// 云联学院List
export const yunCollegeLists = (parentId, page, limit) => get('school/listArea', {
  parentId :parentId,
  page:page,
  limit:limit
});
// 云联学院详情
export const yunCollegeDetail = (schoolId,userId,type,recordType) => get('school/getInfo/',{
  schoolId:schoolId,
  userId:userId,
  type:type,
  recordType:recordType
});
// 云联学院详情——师资力量
export const yunCollegeTeacher = (page,limit,schoolid) => get('sys/user/findlist',{
  page:page,
  limit:limit,
  schoolid:schoolid
});
// 云联学院详情——在教系列课
export const seriesLesson = (page,limit,schoolId) => get('seriescourse/querySchoolcourseSerial',{
  page:page,
  limit:limit,
  schoolId:schoolId
});
// 云联学院详情——在教课程
export const yunCourse = (page,limit,schoolId,courseType) => get('course/list',{
  page:page,
  limit:limit,
  schoolId:schoolId,
  courseType:courseType
});
// 云联学院详情——直播列表
export const liveList = (page,limit,schoolId,liveState) => get('course/querySchoolSinatv',{
  page:page,
  limit:limit,
  schoolId:schoolId,
  liveState:liveState
});




// 讲师集结
export const lecturers = (page,limit,usertype,teacherlevel,recordType) => get('sys/user/findlist',{
  page:page,
  limit:limit,
  usertype:1,
  teacherlevel:teacherlevel,
  recordType:3
});
// 讲师集结——讲师分类
export const lecNavList = () => get('syswordbook/select/2');
// 讲师集结--详情页
export const lecInfo = (userId) => get('sys/user/info/'+userId);
// 讲师集结——普通课
export const lecExcellent =(page,limit,createUser,auditStatus)=>get('course/list',{
  page: page,
  limit: limit,
  createUser: createUser,
  auditStatus: auditStatus
});

// 讲师集结——在学普通课——在学系列课
export const startLecExcel =(page,limit,onorsome,userId)=>get('coursestudent/listForWeb',{
  page: page,
  limit: limit,
  onorsome: onorsome,
  userId: userId
});
// 讲师集结——收藏课程   //个人主页--学习中-我的收藏
export const collegeCourse =(page,limit,userId,recordtypeStr)=>get('sysusermarkfollower/selectMyMarkFollower',{
  page: page,
  limit: limit,
  userId: userId,
  recordtypeStr: 1
});
// 云联学院——点击关注
export const collegeCourseNotice =(type,recordId,recordType,userId)=>post('sysusermarkfollower/save',{
  type: type,
  recordId: recordId,
  recordType: recordType,
  userId: userId
});
//云联学院---取消关注
export const collegeCourseDelete =(type,recordId,recordType,userId)=>post('sysusermarkfollower/deleteMark',{
  type: type,
  recordId: recordId,
  recordType: recordType,
  userId: userId
});
// 云联优品
export const product =(page,limit,isRecommed)=>get('cloudcouplet/list',{
  page: page,
  limit: limit,
  isRecommed: isRecommed,
});
// 云联优品详情
export const productInfo =(coupletId)=>get('cloudcouplet/info/',coupletId);
// 云联优品分类
export const productClassify =()=>get('/syswordbook/select/19');



// 黄董专区
export const huangDongSpecialArea =(page,limit,classId)=>get('sysnews/list',{
  page: page,
  limit: limit,
  newsClassId: classId,
});
// 黄董专区图片
export const huangDongPhoto =(page,limit,position,type)=>get('advertisement/list',{
  page: page,
  limit: limit,
  position: 46,
  type:'all'
});
// 黄董专区详情
export const huangDongInfo =(newsId)=>get('sysnews/info/',newsId);



/**
 * 新闻资讯
 */
export const newsLeftGroup = (page, limit, classId, newsAttribute, newsVisitNum) => get('sysnews/list/', {
  page: page,
  limit: limit,
  newsClassId:classId,
  newsAttribute : newsAttribute,
  newsVisitNum : ''
});

//新闻中心分类导航
export const newsnavList = () => get('sysnewclass/select');

//首页新闻中心分类导航
export const IndexNewsnavList = (page, limit) => get('sysnewclass/list', {
  page:page,
  limit: limit
});

/**
 * 新闻资讯-推荐资讯
 */
// export const recommendationInfo = (page, limit, newsAttribute ) => get('sysnews/list/', {
//   page: page,
//   limit: limit,
//   newsAttribute : newsAttribute
// });

/**
 * 新闻资讯-热门资讯
 */
// export const hotInfo = (page, limit, newsVisitNum ) => get('sysnews/list/', {
//   page: page,
//   limit: limit,
//   newsVisitNum : ''
// });

/**
 * 新闻资讯-跳详情页
 */
export const NewsdetailsPage = (newsId) => get('sysnews/info/', newsId);


//课程分类
export const coursenavList = () => get('coursecatalog/select');
//  课程列表
export const courseArea = (page, limit, classId, isHot, hot, isFree, onorsome, courseType, courseName) => get('course/listweb', {
  page: page,
  limit: limit,
  classId: classId,
  isHot: isHot,
  hot: hot,
  isFree: isFree,
  onorsome: onorsome,
  courseType: courseType,
  courseName: courseName
});
// export const courseSeriesArea = (page, limit, classId, isHot, hot, isFree) => get('seriescourse/selectAllSeriesCourse', {
//   page: page,
//   limit: limit,
//   classId: classId,
//   isHot: isHot,
//   hot: hot,
//   isFree: isFree,
// });

//课程详情页面
export const courseInfo = (courseId,onorsome,userId) => get('course/getInfo', {
  courseId:courseId,
  onorsome:onorsome,
  userId:userId
});



// 讲师招募
export const lecturerRecruitment = (page,limit,parentId) => get('teacherrecruit/list',{
  page: page,
  limit: limit,
  parentId:parentId
});
// 讲师招募列表-地区选择
export const lecturerArea = (parentId) => get('sys/area/list',{
  parentId:parentId
});
// 讲师招募进入详情页
export const lecturerDetail = (lecturerId) => get('teacherrecruit/info/',lecturerId);
// 讲师招募申请职位
// export const lecturerApply = (teacherId,recruitId) => post('teacherregistration/save',{
//   teacherId:teacherId,
//   recruitId:recruitId
// });
export const lecturerApply = (teacherId,recruitId) => get('teacherregistration/queryIsRegistr',{
  teacherId:teacherId,
  recruitId:recruitId
});
//申请职位
export const lecturerApplyData = (teacherId,recruitId) => post('teacherregistration/save',{
  teacherId:teacherId,
  recruitId:recruitId
});


/**
 * 个人主页-资料
 */
// export const personInfo = (page, limit) => post('/sys/user/save/', {
//   page: page,
//   limit: limit
// });
//个人主页-资料设置
//个人主页-资料修改获取
export const dataUpdata = (userId,userName,head,ext)=>post('sys/user/update',{
  userId: userId,
  username:userName,
  head:head,
  ext:ext
});
// export const dataUpdata = (head, username, sex, sign, profiles)=>post('sys/user/update',{
//   head: head,
//   username: username,
//   sex: sex,
//   sign: sign,
//   profiles: profiles
// });
export const dataSetting = (head, username, sex, sign, profiles) =>
  post('sys/user/save', {
    head: head,
    username: username,
    sex: sex,
    sign: sign,
    profiles: profiles
  });
//个人中心-我的账户-我的订单
export const myOrderData = (page,limit,userId,status) => get('order/list',{
  page: page,
  limit: limit,
  userId: userId,
  status: status
});
//个人中心-我的订单-删除订单
export const deleteOrderData = (orderId,status) => get('order/deleteOrder',{
  orderId : orderId,
  status: status
});

//个人中心-我的账户-推广设置
export const recommendcodeData = (page,limit,userId) => get('recommendcode/selectMyRecommend',{
  page: page,
  limit: limit,
  userId: userId
});

//个人主页-课程专区-课程创建      个人主页-互动直播-课程创建
export const coursesForms = (courseName, isShare, vipLevel, startTimeStr, admission, classify, photo, ext, price, type, courseResourse, courseResourseExt, recommendType, profiles, courseType) =>
  post('course/save', {
    courseName: courseName, // 课程名称v
    vipLevel: vipLevel,
    isShare: isShare, //是否共享
    startTimeStr: startTimeStr, //创建时间
    admission: admission,
    classify: classify, //课程分类
    photo: photo, //封面图
    ext: ext,
    price: price,
    type: type, //课程类型
    courseInformation: courseResourse,
    courseInformationExt: courseResourseExt,
    recommendType: recommendType,
    profiles: profiles, //简介
    courseType: courseType, //课程大类
  });

// export const coursesFormData = (loginId, courseName, isShare, vipLevel, startTimeStr, admission, classify, photo, ext, price, type, courseResourse, recommendType, profiles, courseType) =>
export const coursesFormData = (formData) =>
  post('course/saveCourse', formData,{
    headers: {
      'Content-Type': 'multipart/form-data;boundary='+Math.random(99)
    }
  });
//个人主页 --课程专区 -- 会员限制
export const membershipRestriction = () => get('syswordbook/queryTeacher');
//个人主页--课程专区-课程类型
export const personnalCourseType = () => get('coursecatalog/select');
//个人主页--课程专区-直播类型
export const personnalAbroadType = () => get('syswordbook/select/8');
//个人主页 --课程专区--审核管理
export const courseAuditData =( page, limit, createUser, auditStatus,courseType)=>get('course/myCourseList',{
  page: page,
  limit: limit,
  createUser: createUser,
  auditStatus: auditStatus,
  courseType:courseType
});
//个人主页-课程专区-系列课创建    个人主页-互动直播-系列课创建
export const personalSeriesSubmit = (seriesCourseName, startTimeStr, classify, photo, ext, price, chargePattern, profiles, seriesCourseType,headteacher) =>
  post('seriescourse/save', {
    seriesCourseName: seriesCourseName, // 课程名称v
    startTimeStr: startTimeStr, //创建时间
    classify: classify, //课程分类
    photo: photo, //封面图
    ext: ext,
    price: price,
    chargePattern: chargePattern, //收费类型
    profiles: profiles, //简介
    seriesCourseType: seriesCourseType, //课程大类
    headteacher:headteacher
  });
//个人主页--课程专区-系列课创建-直播类型
export const seriesChargeTypes = () => get('syswordbook/select/11');

//个人主页-课程专区-系列课-创建课程
// export const seriesCoursesFormData = (seriesCourseId, courseName, vipLevel, startTimeStr, admission, classify, photo, ext, price, type, courseResourse, courseResourseExt, recommendType, profiles, courseType) =>
//   post('course/save', {
//     seriesCourseId:seriesCourseId, // 系列课ID
//     courseName: courseName, // 课程名称v
//     vipLevel: vipLevel,
//     startTimeStr: startTimeStr, //创建时间
//     admission: admission,
//     classify: classify, //课程分类
//     photo: photo, //封面图
//     ext: ext,
//     price: price,
//     type: type, //课程类型
//     courseInformation: courseResourse,
//     courseInformationExt: courseResourseExt,
//     recommendType: recommendType,
//     profiles: profiles, //简介
//     courseType: courseType, //课程大类
//   });
//系列课-创建普通课
export const seriesCoursesFormData = (seriesCourseId, courseName, isShare, vipLevel, startTimeStr, admission, classify, photo, ext, price, type, courseResourse, courseResourseExt, recommendType, profiles,courseType) =>
  post('course/save', {
    seriesCourseId:seriesCourseId,
    courseName:courseName,
    isShare:isShare,
    vipLevel:vipLevel,
    startTimeStr:startTimeStr,
    admission:admission,
    classify:classify,
    photo:photo,
    ext:ext,
    price:price,
    type:type,
    courseResourse:courseResourse,
    courseResourseExt:courseResourseExt,
    recommendType:recommendType,
    profiles:profiles,
    courseType:courseType
  });
//个人主页 --课程专区--共享课程管理
export const courseShareData =( state, userId, page, limit)=>get('/seriessharecourse/selectMySeriesShareCourse',{
  state: state,
  userId: userId,
  page: page,
  limit: limit,
});

//个人主页 --课程专区--系列课
export const courseSeriesData =( page, limit, userId, auditStatus, onorsome)=>get('seriescourse/list',{
  page: page,
  limit: limit,
  userId: userId,
  auditStatus: auditStatus,
  onorsome: onorsome,
});
// 讲师集结--系列课
export const courseSeriesDatas =( page, limit, auditStatus, onorsome,headteacher)=>get('seriescourse/list',{
  page: page,
  limit: limit,
  auditStatus: auditStatus,
  onorsome: onorsome,
  headteacher: headteacher
});
export const seriesShareCourseData =( courseId, courseUserId, createUserId, seriesCourseId, startcourseTime)=>post('seriessharecourse/save',{
  courseId: courseId,
  courseUserId: courseUserId,
  createUserId: createUserId,
  seriesCourseId: seriesCourseId,
  startcourseTime: startcourseTime
});
//个人主页 --课程专区--普通课
export const courseGeneralData =( page, limit, createUser ,auditStatus, onorsome, courseType)=>get('course/list',{
  page: page,
  limit: limit,
  createUser: createUser,
  auditStatus: auditStatus,
  onorsome: onorsome,
  courseType: courseType
});

// 个人主页 --学习中心 -- 课程列表，在线直播
export const liveDataGroups = (courseType, page, limit, isbuy, userId) => get('course/listweb', {
  courseType :courseType,
  page :page,
  limit :limit,
  isbuy: isbuy,
  userId: userId
});

//个人主页 --课程专区--我的问答
export const courseQuestionData =( page, limit, classTeacherId)=>get('courseask/list',{
  page: page,
  limit: limit,
  classTeacherId: classTeacherId
});
//个人主页--课程专区--我的回答
export const courseAnswerData =( askId, answerUserId, answerContent)=>post('answer/save',{
  askId: askId,
  answerUserId: answerUserId,
  answerContent: answerContent
});




//个人主页--互动直播-课程审核管理
export const interReviewManage =(page,limit,courseType,auditStatus,createUser)=>get('course/myCourseList',{
  page: page,
  limit: limit,
  courseType:1,
  auditStatus: auditStatus,
  createUser:createUser
});
//个人主页--互动直播-普通课列表
export const interGeneralCourse =(creatUser,page,limit,courseType)=>get('course/selectCourse',{
  creatUser:creatUser,
  page: page,
  limit: limit,
  courseType:courseType
});
//个人主页--互动直播-系列课列表
export const interSeriesList =(userId,seriesCourseType,recordType,page,limit)=>get('seriescourse/selectSeriesCourse',{
  userId: userId,
  seriesCourseType:1,
  recordType:1,
  page: page,
  limit: limit
});
//个人主页--互动直播-学生问答
export const interStuQuestion =(userId,courseType,page,limit)=>get('courseask/list',{
  userId: userId,
  courseType:1,
  page: page,
  limit: limit
});
//个人主页-互动直播-我的笔记
export const noteContentData =(courseId,studentId,comments)=>post('coursenotes/save',{
  courseId: courseId,
  studentId: studentId,
  comments: comments
});

//个人主页--互动直播-学生问答
export const interReplay =(courseId,askUser,askContent)=>post('courseask/save',{
  courseId: courseId,
  askUser: askUser,
  askContent: askContent
});

//个人主页 -- 学习中-普通系列课
export const generalCourseList =( userId, recordType, page, limit)=>get('course/selectCourse',{
  userId: userId,
  recordType: recordType,
  page: page,
  limit: limit
});

//个人主页 -- 学习中-系列课
export const seriesCourseData =( userId, recordType, page, limit)=>get('seriescourse/selectSeriesCourse',{
  userId: userId,
  recordType: recordType,
  page: page,
  limit: limit
});


//个人主页--学习中-我的收藏
// export const myCollectData =( userId, page, limit)=>get('sysusermarkfollower/selectMyMarkFollower',{
//   userId: userId,
//   page: page,
//   limit: limit
// });

//个人主页--学习中-我的笔记
export const myNoteData =( userId, page, limit)=>get('coursenotes/selectCourseNotes',{
  userId: userId,
  page: page,
  limit: limit
});

//个人主页--学习中-我的提问-提问
export const myAnswerData =( userId, page, limit)=>get('courseask/selectCourseAsk',{
  userId: userId,
  page: page,
  limit: limit
});

//个人主页--学习中-我的提问-回答
export const myAskData =( userId, page, limit)=>get('answer/selectMyAnswer',{
  userId: userId,
  page: page,
  limit: limit
});

//系列课-添加共享课
export const seriesShareForm = (seriesCourseId, courseName, vipLevel, startTimeStr, admission, classify, photo, ext, price, type, courseResourse, courseResourseExt, recommendType, profiles, courseType) =>
  post('/seriessharecourse/save', {
    seriesCourseId:seriesCourseId, // 系列课ID
    courseName: courseName, // 课程名称v
    vipLevel: vipLevel,
    startTimeStr: startTimeStr, //创建时间
    admission: admission,
    classify: classify, //课程分类
    photo: photo, //封面图
    ext: ext,
    price: price,
    type: type, //课程类型
    courseInformation: courseResourse,
    courseInformationExt: courseResourseExt,
    recommendType: recommendType,
    profiles: profiles, //简介
    courseType: courseType, //课程大类
  });

//系列课-添加共享课
export const addSharedData =( page, limit, isShare, classId)=>get('course/list/',{
  page: page,
  limit: limit,
  isShare: isShare,
  classId: classId
});






/**
 * test
 * @param aa
 * @param bb
 */
export const logout =(aa, bb) => post('System/GetVersionNumber', {
  username :aa,
  password :bb,
  captcha :bb,
});

//普通课程支付
export const payMoney = (courseId,userId,source) =>
  post('pay/payment?courseId='+courseId+'&userId='+userId+'&source='+source);
//课程支付确认
// export const makeSureMoney = (payUrl,sign) =>
  // post(payUrl+'?'+sign);

//系列课课程支付
export const payMoneySeries = (seriesCourseId,userId,source) =>
  post('pay/payment?seriesCourseId='+seriesCourseId+'&userId='+userId+'&source='+source);

//报名吧支付
export const payMoneyEnroll = (activityId,purchaseNum,userId,source) =>
  post('pay/payment?activityId='+activityId+'&purchaseNum='+purchaseNum+'&userId='+userId+'&source='+source);

//视频状态
export const courseTypeGroup =( courseId)=>get('/course/getCourseStatus',{
  courseId: courseId,
});

//关于我们-人气讲师
export const aboutTeacher =( usertype,sidx,order,page,limit)=>get('sys/user/findlist',{
  usertype: usertype,
  sidx:sidx,
  order:order,
  page:page,
  limit:limit
});

//关于我们-关于分校
export const aboutSchool =( isFrozen,auditStatus,page,limit)=>get('school/list',{
  isFrozen: isFrozen,
  auditStatus:auditStatus,
  page:page,
  limit:limit
});
