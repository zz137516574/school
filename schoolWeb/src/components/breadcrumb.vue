<!-- 搜索 -->
<template>
  <div class="breadbox container">
    <Breadcrumb separator=">"  style="margin:10px 0 10px 20px ">
      <BreadcrumbItem  v-for="(item,index) in breadlist" :href="item.path" :key="index">{{item.name}}</BreadcrumbItem>
    </Breadcrumb>
  </div>
  </template>
<script>
    export default {
        props: {
            search: {
            }
        },
        data() {
            return {
              lecturerId:0,
              activityId:0,
              courseId:0,
              onorsome:0,
              breadlist: '',
              courseName:'',
              breadListState:[
                {name:'首页',path:'/'}
              ]
            };
        },
//        created() {
//          this.getBreadcrumb();
//        },
        mounted(){
          this.getBreadcrumb();
        },
        Destroy() {

        },
        methods: {
          getBreadcrumb(isreload) {
            var breadLength = this.breadListState.length;//目前breadlist集合数组个数
            var breadNumber = this.$route.meta.breadNumber;

            var curName;
            var curPath = this.$route.path;

            if(curPath === '/freeCourse'||curPath === '/freeSeriesCourse' || curPath === '/DirectCourseDetails' || curPath === '/DirectCourseDetailsSeries'){
              this.breadListState = JSON.parse(sessionStorage.breadListStorage);
              if(curPath === '/freeCourse' || curPath === '/DirectCourseDetails'){
                this.courseId = this.$route.query.courseId;
                this.onorsome = this.$route.query.onorsome;
              }else if(curPath === '/freeSeriesCourse' || curPath === '/DirectCourseDetailsSeries' ){
                this.onorsome = this.$route.query.onorsome;
                this.courseId = this.$route.query.seriesCourseId;
              }
              this.service.courseInfo(this.courseId,this.onorsome).then(result => {
                curName = result.course.courseName;
                var newBread={name:curName,path:curPath};
                this.breadListState.push(newBread);
              }).catch(error => {
                this.$Loading.error();
              })
            }else if(curPath === '/enrollDetails'){
              this.breadListState = JSON.parse(sessionStorage.breadListStorage);
              this.activityId = this.$route.query.activityId;
              this.service.OfflineActivityDetails(this.activityId).then(result => {
                curName = result.activityEntity.activityTitle;
                var newBread={name:curName,path:curPath};
                this.breadListState.push(newBread);
              }).catch(error => {
                this.$Loading.error();
              })
            }else if(curPath === '/lecturerRecruitmentDetails'){
              this.breadListState = JSON.parse(sessionStorage.breadListStorage);
              this.lecturerId = this.$route.query.lecId;
              this.service.lecturerDetail(this.lecturerId).then(result => {
                curName = result.teacherRecruit.recruitTitle;
                var newBread={name:curName,path:curPath};
                this.breadListState.push(newBread);
              }).catch(error => {
                this.$Loading.error();
              })
            }else{
              curName = this.$route.meta.title;
              var newBread={name:curName,path:curPath};

              if(breadLength < breadNumber){
                if(breadNumber >= 3){
//                this.breadListState = JSON.parse(sessionStorage.breadListStorage);
                  this.breadListState = JSON.parse(sessionStorage.breadListStorage);
                  this.breadListState.splice(breadNumber-1);
                }
                this.breadListState.push(newBread);
              }else if(breadLength === breadNumber){
                if(this.breadListState[breadLength-1].name !== curName ){
                  if(breadNumber === 1){
                    this.breadListState = [{name:'首页',path:'/'}];
                  }else{
                    this.breadListState[breadLength-1].remove();
                    this.breadListState.push(newBread);
                  }
                }else if(this.breadListState[breadLength-1].name === curName ){
                   this.breadListState = this.breadListState;
                }
              }else if(breadLength > breadNumber){
                if(this.breadListState[breadLength-2].name === curName){
                  this.breadListState[breadLength-1].remove();
                }else{
                  this.breadListState[breadLength-1].remove();
                  this.breadListState[breadLength-2].remove();
                }
                this.breadListState.push(newBread);
              }else{
                this.breadListState=[{name:'首页',path:'/'}];
              }
            }
            this.breadlist = this.breadListState;
            sessionStorage.setItem('breadListStorage',JSON.stringify(this.breadlist))
          }
        },
        watch: {
          //"$route": "getBreadcrumb"
          $route () {
            this.getBreadcrumb();
          }
        }
    };
</script>
<style lang="less">
    .breadbox {
        width: 500px;
        .ivu-input-wrapper{
            width: 412px !important;
            float: left;
            height: 33px;
            .ivu-input-large {
                border-radius: 0;
                box-sizing: border-box;
                height: 35px!important;
                padding: 6px 10px 6px 30px !important;
            }
            .ivu-input-icon {
                right: auto;
                color: #dbdbdb;
            }
        }
        button {
            float: right;
            width: 85px;
            height: 35px;
            border-radius: 0;
            font-size: 15px;
            padding: 5px 15px !important;
            background-color: #ff8a0c;
            border-color: #ff8a0c;
        }
        button:hover {
            background-color: #ff982a;
            border-color: #ff982a;
        }
    }
    .lately {
        padding-top: 5px;
        a,a:hover {
            margin-right:10px;
            color: #949494;
        }
        .text-orange,.text-orange:hover {
            color: #ff8a0c;
        }
    }
    .clearfix::after{
        content: '';
        height: 0;
        clear: both;
        display: block;
        visibility: hidden;
    }
</style>
