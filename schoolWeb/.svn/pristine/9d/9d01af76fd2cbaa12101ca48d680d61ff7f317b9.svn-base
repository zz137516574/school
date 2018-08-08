<template>
    <div class="m-t-30">
        <!--头部-->
        <div class="uHeader clearfix m-b-120 container">
            <div class="uhLeft f-fl">
                <div class="flImg">
                    <div class="f1logo">
                        <div class="logotext">
                            <div class="lt1">GUANG DONG YUNLIANHUI</div>
                            <div class="logo2">2017</div>
                            <div class="logo3">广东<span style="font-size:15px">广州</span></div>
                            <div class="logo4">海珠区琶洲保利叁悦广场A塔</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="uhRight f-fl m-t-30 ">
                <div class="fr-titile">
                    <p class="fl1">广东云联惠网络商学院</p>
                    <p class="fl2">guangdong yunlianhui Network business college</p>
                </div>
                <div class="fr-content m-t-15">
                    <p>国际瞬息万变，花费引领风流，花费已成为拉动我国经济增长“三驾马车”的一匹微弱“千里马”。我国经济进入新常态后，公司需求寻找新的突破口，一场市场经济、新式形式的花费革新风暴必然点着!
                        作为互联网+年代的积极践行者，花费立异的先驱者，广东云联惠网络科技有限公司以花费者需求为规范，以增进花费者福祉为方针，充沛激起社会花费潜能，正在敞开一个全民立异花费大年代!
                        2016年5月23日，来自大江南北的客户商家云粉们聚集中共贵阳市委党校，接受贵州首届云联惠商学院的训练学习，内容囊括云联商业大体系的构成、文化内在，运营形式，财富永动机原理，疑问解答，实操运作，署理解说等，旨在让云联商家和广阔会员深化了解云联惠，全部把握云联惠开展形式，传达云联精力理念，带动万众立异，全民创业，完成人人敢花费，个个乐花费!
                    </p>
                </div>

            </div>
        </div>
        <div class="corporate clearfix">
            <div class="container">
                <div class="mixTitle" style="border:1px solid transparent">
                    <p class="lT1">Practice mixed teaching</p>
                    <p class="lT2">网校功能</p>
                    <p class="lT3">Here, the world is right in front of us</p>
                </div>
                <ul class="corporatecul clearfix">
                    <li v-for="(item,index) in corporates"  class="corporateCont"  :key="index" v-bind:class="{'coractive':flag == index}" v-on:click='addClassCor(index)'>
                        <i class="cor-img"></i>
                        <p>{{item.text}}</p>
                        <div class="cor-div">
                            <p>{{item.desc}}</p>
                        </div>
                    </li>
                </ul>

            </div>
        </div>
        <!--网校功能-->
        <div class="mixPic container clearfix">
            <div class="mixTitle">
                <p class="lT1">Practice mixed teaching</p>
                <p class="lT2">网校功能</p>
                <p class="lT3">Here, the world is right in front of us</p>
            </div>
            <div class="mixPic-left">
                <ul class="clearfix">
                    <li class="f-fl flHover">
                        <div class="cell1">
                            <div class="mixPic2-top">
                                <img src="../assets/image/scList1.jpg" alt="">
                                <div class="mixPic2-mask">
                                    <div class="mask-text">
                                        <p class="mt1">学</p>
                                        <p class="mt2">Learn</p>
                                    </div>
                                </div>
                            </div>
                            <div class="mixpic2-cell">
                                <ul>
                                    <li>互动视频</li>
                                    <li>互动视频</li>
                                    <li>互动视频</li>
                                </ul>
                            </div>
                        </div>
                        <div class="cell2">
                            <div class="left-top">
                                <div class="ltopCell">
                                    <span class="teachImg"><img src="../assets/image/teach.png" alt=""></span>
                                    <div class="teachText"><div class="teacherText1">教</div><div class="teacherText2">TEACH</div></div>
                                </div>
                            </div>
                            <div class="left-cell">
                                <ul>
                                    <li>
                                        <p class="lcImg"><span><i class="ivu-icon ivu-icon-android-arrow-dropright-circle"></i></span><span>互动视频</span></p>
                                        <p class="lcText">互动视频互动视频互动视频</p>
                                    </li>
                                    <li>
                                        <p class="lcImg"><span><img src="../assets/image/hudong.png" alt=""></span><span>互动视频</span></p>
                                        <p class="lcText">互动视频互动视频互动视频</p>
                                    </li>
                                    <li>
                                        <p class="lcImg"><span><img src="../assets/image/tiku.png" alt=""></span><span>互动视频</span></p>
                                        <p class="lcText">互动视频互动视频互动视频</p>
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </li>
                    <li class="f-fl flHover">
                        <div class="cell1">
                            <div class="mixPic2-top">
                                <img src="../assets/image/scList2.jpg" alt="">
                                <div class="mixPic2-mask">
                                    <div class="mask-text">
                                        <p class="mt1">学</p>
                                        <p class="mt2">Learn</p>
                                    </div>
                                </div>
                            </div>
                            <div class="mixpic2-cell">
                                <ul>
                                    <li>互动视频</li>
                                    <li>互动视频</li>
                                    <li>互动视频</li>
                                </ul>
                            </div>
                        </div>
                        <div class="cell2">
                            <div class="left-top">
                                <div class="ltopCell">
                                    <span class="teachImg"><img src="../assets/image/learn.png" alt=""></span>
                                    <div class="teachText"><div class="teacherText1">教</div><div class="teacherText2">TEACH</div></div>
                                </div>
                            </div>
                            <div class="left-cell">
                                <ul>
                                    <li>
                                        <p class="lcImg"><span><i class="ivu-icon ivu-icon-android-arrow-dropright-circle"></i></span><span>互动视频</span></p>
                                        <p class="lcText">互动视频互动视频互动视频</p>
                                    </li>
                                    <li>
                                        <p class="lcImg"><span><img src="../assets/image/hudong.png" alt=""></span><span>互动视频</span></p>
                                        <p class="lcText">互动视频互动视频互动视频</p>
                                    </li>
                                    <li>
                                        <p class="lcImg"><span><img src="../assets/image/tiku.png" alt=""></span><span>互动视频</span></p>
                                        <p class="lcText">互动视频互动视频互动视频</p>
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </li>
                    <li class="f-fl flHover">
                        <div class="cell1">
                            <div class="mixPic2-top">
                                <img src="../assets/image/scList2.jpg" alt="">
                                <div class="mixPic2-mask">
                                    <div class="mask-text">
                                        <p class="mt1">学</p>
                                        <p class="mt2">Learn</p>
                                    </div>
                                </div>
                            </div>
                            <div class="mixpic2-cell">
                                <ul>
                                    <li>互动视频</li>
                                    <li>互动视频</li>
                                    <li>互动视频</li>
                                </ul>
                            </div>
                        </div>
                        <div class="cell2">
                            <div class="left-top">
                                <div class="ltopCell">
                                    <span class="teachImg"><img src="../assets/image/chat.png" alt=""></span>
                                    <div class="teachText"><div class="teacherText1">教</div><div class="teacherText2">TEACH</div></div>
                                </div>
                            </div>
                            <div class="left-cell">
                                <ul>
                                    <li>
                                        <p class="lcImg"><span><i class="ivu-icon ivu-icon-android-arrow-dropright-circle"></i></span><span>互动视频</span></p>
                                        <p class="lcText">互动视频互动视频互动视频</p>
                                    </li>
                                    <li>
                                        <p class="lcImg"><span><img src="../assets/image/hudong.png" alt=""></span><span>互动视频</span></p>
                                        <p class="lcText">互动视频互动视频互动视频</p>
                                    </li>
                                    <li>
                                        <p class="lcImg"><span><img src="../assets/image/tiku.png" alt=""></span><span>互动视频</span></p>
                                        <p class="lcText">互动视频互动视频互动视频</p>
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </li>
                    <li class="f-fl flHover">
                        <div class="cell1">
                            <div class="mixPic2-top">
                                <img src="../assets/image/scList3.jpg" alt="">
                                <div class="mixPic2-mask">
                                    <div class="mask-text">
                                        <p class="mt1">管</p>
                                        <p class="mt2">TUBE</p>
                                    </div>
                                </div>
                            </div>
                            <div class="mixpic2-cell">
                                <ul>
                                    <li>互动视频</li>
                                    <li>互动视频</li>
                                    <li>互动视频</li>
                                </ul>
                            </div>
                        </div>
                        <div class="cell2">
                            <div class="left-top">
                                <div class="ltopCell">
                                    <span class="teachImg"><img src="../assets/image/manger.png" alt=""></span>
                                    <div class="teachText"><div class="teacherText1">教</div><div class="teacherText2">TEACH</div></div>
                                </div>
                            </div>
                            <div class="left-cell">
                                <ul>
                                    <li>
                                        <p class="lcImg"><span><i class="ivu-icon ivu-icon-android-arrow-dropright-circle"></i></span><span>互动视频</span></p>
                                        <p class="lcText">互动视频互动视频互动视频</p>
                                    </li>
                                    <li>
                                        <p class="lcImg"><span><img src="../assets/image/hudong.png" alt=""></span><span>互动视频</span></p>
                                        <p class="lcText">互动视频互动视频互动视频</p>
                                    </li>
                                    <li>
                                        <p class="lcImg"><span><img src="../assets/image/tiku.png" alt=""></span><span>互动视频</span></p>
                                        <p class="lcText">互动视频互动视频互动视频</p>
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <!--品牌历程-->
        <div class="aboutBrand clearfix">
            <div class="aboutBrandTop clearfix text-center">
                <p class="conp1 p-t-50">BRAND FUNCTION</p>
                <p class="conp2">品牌历程</p>
                <p class="conp3">Here, the world is right in front of us</p>
            </div>
            <div class="demo">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="main-timeline">
                                <div class="timeline">
                                    <div class="timeline-content">
                        <span class="date">
                        </span>
                                        <h2 class="title">2014年 公司成立</h2>
                                        <p class="description">2014 年 11 月 28 日，广东云联惠网络科技有限公司成功在广州股权交易中心成功挂牌上市，云联惠的事业走上了一条前景无限的光辉大道上</p>
                                    </div>
                                </div>

                                <div class="timeline">
                                    <div class="timeline-content">
                        <span class="date">
                        </span>
                                        <h2 class="title">2015年 成长初期</h2>
                                        <p class="description">· 新常态•中国经济发展创新模式研讨会暨《云联商业大系统》商业模式论证会</p>
                                    </div>
                                </div>

                                <div class="timeline">
                                    <div class="timeline-content">
                        <span class="date">
                        </span>
                                        <h2 class="title">Brand Building</h2>
                                        <p class="description">· 扩大规模</p>
                                    </div>
                                </div>

                                <div class="timeline">
                                    <div class="timeline-content">
                        <span class="date">
                        </span>
                                        <h2 class="title">Responsive Design</h2>
                                        <p class="description">· 弘扬“丝路精神”</p>
                                    </div>
                                </div>

                                <div class="timeline">
                                    <div class="timeline-content">
                                        <span class="date1">
                                            未来,期待您的参与~
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--地图-->
        <div class="aboutContact container clearfix">
            <div class="aboutContactTop clearfix text-center">
                <p class="conp1 p-t-50">CONTACT US</p>
                <p class="conp2">联系我们</p>
                <p class="conp3">Here, the world is right in front of u</p>
            </div>
            <div class="contactMap clearfix m-t-30 m-b-30">
                <div class="contactLeft  m-t-30">
                    <iframe width="100%" height="400px" frameborder="0" style="margin-top: -31px" scrolling="no" marginheight="0" marginwidth="0" src="http://j.map.baidu.com/dnNwN"></iframe>
                </div>
                <div class="contactRight  p-l-15 m-t-30">
                    <ul>
                        <li><img src="../assets/image/about-adress.png"/><span>广州市海珠区琵洲街道琵洲保利叁悦广场A塔</span></li>
                        <li><img src="../assets/image/about-tel.png"/><span>联系电话： 400-8601-999</span></li>
                        <li><img src="../assets/image/about-qq.png"/><span>客服QQ： 4006632999</span></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import Vue from 'vue';
    import top from '../components/top.vue';
    import search from '../components/search.vue';
    import subpageMenu from '../components/class/subpageMenu.vue';
    import aboutLecturers from '../components/about/aboutLecturers.vue';
    import footer from '../components/footer.vue';

    export default {
        data() {
            return {
                top: {},
                search: {},
                subpageMenu:{},
                aboutLecturers:{},
                footer: {},
                corporates:[
                    {
                        text:'专业创意服务',
                        desc:'媒体创意专业是适应创意时代需要而创办的一个新型、特色专业，它抓住了创意时代大众传媒的本质，适应了市场经济条件下传媒竞争与发展的需要，是一个有时代感、有活力的专业。可以说，它有效地利用、整合了中国传媒大学的资源优势--如良好的教育基础和丰厚的业界资源，体现了中国传媒大学的办学特色。在校方领导的支持下，经过几年来的群策群力，目前该专业已基本创意成型。'
                    },
                    {
                        text:'我们的理念',
                        desc:'媒体创意专业是适应创意时代需要而创办的一个新型、特色专业，它抓住了创意时代大众传媒的本质，适应了市场经济条件下传媒竞争与发展的需要，是一个有时代感、有活力的专业。可以说，它有效地利用、整合了中国传媒大学的资源优势--如良好的教育基础和丰厚的业界资源，体现了中国传媒大学的办学特色。在校方领导的支持下，经过几年来的群策群力，目前该专业已基本创意成型。'
                    },
                    {
                        text:'我们的核心价值',
                        desc:'媒体创意专业是适应创意时代需要而创办的一个新型、特色专业，它抓住了创意时代大众传媒的本质，适应了市场经济条件下传媒竞争与发展的需要，是一个有时代感、有活力的专业。可以说，它有效地利用、整合了中国传媒大学的资源优势--如良好的教育基础和丰厚的业界资源，体现了中国传媒大学的办学特色。在校方领导的支持下，经过几年来的群策群力，目前该专业已基本创意成型。'
                    },
                    {
                        text:'我们的愿景',
                        desc:'媒体创意专业是适应创意时代需要而创办的一个新型、特色专业，它抓住了创意时代大众传媒的本质，适应了市场经济条件下传媒竞争与发展的需要，是一个有时代感、有活力的专业。可以说，它有效地利用、整合了中国传媒大学的资源优势--如良好的教育基础和丰厚的业界资源，体现了中国传媒大学的办学特色。在校方领导的支持下，经过几年来的群策群力，目前该专业已基本创意成型。'
                    },
                ],
                flag:0,
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
            'v-footer': footer,

        },
        computed: {

        },
        methods: {
            addClassCor(index){
                this.flag=index;
            }
        }
    };

</script>
<style lang="less">
    .uHeader{
        width: 100%;
        margin-top: 60px;
        .uhLeft{
            width: 500px;
            height: 460px;
            /*padding-left: 86px;*/
            .flImg{
                width: 360px;
                height: 100%;
                background: url(../assets/image/city.jpg);
                position: relative;
                .f1logo{
                    position: absolute;
                    width: 200px;
                    height: 250px;
                    background: #ff8a0c;
                    color: white;
                    bottom:-80px;
                    left:240px;
                    z-index: 100;
                    text-align: left;
                    .logotext{
                        padding:0px 14px;
                        .lt1{
                            width: 160px;
                            display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 2;
                            font-size: 20px;
                            padding: 15px 0px;
                            z-index: 10001;
                            color: white;
                        }
                        .logo2{
                            width: 138px;
                            letter-spacing: 3px;
                            font-weight: bold;
                            padding: 20px 0px;
                            font-size: 65px;
                            line-height: 20px;
                            border-bottom: 1px solid white;
                        }
                        .logo3{
                            font-size: 27px;
                            padding: 10px 0px;
                            font-weight: bold;
                        }
                        .logo4{
                            font-size: 12px;
                            line-height: 24px;
                            padding: 10px 0px;
                        }
                    }
                }
            }
        }
        .uhRight{
            width: 680px;
            /*padding-left:108px;*/
            .fr-titile{
                padding: 10px 0px;
                border-bottom: 3px solid #ff8a0c;
                .fl1{
                    font-size: 32px;
                    line-height: 18px;
                    color: #333333;
                }
                .fl2{
                    font-size: 14px;
                    padding:15px 0px 0px 0px;
                    color: #333333;
                }
            }
            .fr-content{
                font-size: 16px;
                line-height: 30px;
                color: #666666;
                text-indent: 32px
            }
        }
    }
    .corporate{
        min-width: 1200px;
        background: #f8f8f8;
        height: 630px;
        box-sizing: border-box;
        .mixTitle{
            padding: 60px 0 40px;
            width: 100%;
            text-align: center;
            .lT1{
                font-size: 18px;
                line-height: 30px;
                color: #999999;
            }
            .lT2{
                font-size: 28px;
                line-height: 30px;
                color: #ff8a0c;
                padding:8px 0px;
            }
            .lT3{
                font-size: 10px;
                line-height: 30px;
                color: #eaeaea;
            }
        }
        .corporatecul{
            height: 100%;
            padding-left: 105px;
            li.corporateCont{
                position: relative;
                float: left;
                margin-right: 55px;
                padding: 38px 0 25px;
                width: 203px;
                height: 185px;
                font-size: 14px;
                box-sizing: border-box;
                background: #FFFFFF;
                text-align: center;
                i.cor-img{
                    display: block;
                    margin: 0 auto  25px;
                    width: 75px;
                    height: 75px;
                    background-repeat: no-repeat;
                    background-size: 100% 100%;
                }
                .cor-div{
                    display: none;
                    position: absolute;
                    bottom: -170px;
                    padding: 20px;
                    min-width: 550px;
                    box-sizing: border-box;
                    background: #ffe8d0;
                    font-size: 14px;
                    color: #FF8a0c;
                    text-align: left;
                }
            }
            li.coractive{
                background: #FF8a0c;
                color: #FFFFFF;
                .cor-div{display: block;}
            }
            li.corporateCont:last-child{margin-right: 0;}
            li.corporateCont:nth-child(n){
              i.cor-img{
                background-image: url("../assets/image/about54-1.png");
              }
              .cor-div{
                left: -90px;
              }
            }
            li.corporateCont:nth-child(2n){
              i.cor-img{
                background-image: url("../assets/image/about55-1.png");
              }
              .cor-div{
                left: -150px;
              }
            }
            li.corporateCont:nth-child(3n){
              i.cor-img{
                background-image: url("../assets/image/about56-1.png");
              }
              .cor-div{
                left: -200px;
              }
            }
            li.corporateCont:nth-child(4n){
              i.cor-img{
                background-image: url("../assets/image/about57-1.png");
              }
              .cor-div{
                left: -260px;
              }
            }
        }
    }
    .mixPic{
        width: 100%;
        margin: 50px auto;
        .mixTitle{
            padding: 60px 0 40px;
            width: 100%;
            text-align: center;
            .lT1{
                font-size: 18px;
                line-height: 30px;
                color: #999999;
            }
            .lT2{
                font-size: 28px;
                line-height: 30px;
                color: #ff8a0c;
                padding:8px 0px;
            }
            .lT3{
                font-size: 10px;
                line-height: 30px;
                color: #eaeaea;
            }
        }
        .mixPic-left{
            width: 100%;
            ul{
                width: 1200px;
                padding: 0px;
                margin:0px;
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
                align-content: space-between;
                .flHover{
                    display: inline-block;
                    list-style: none;
                    width: 273px;
                    height: 472px;
                    border:2px solid transparent;
                    box-sizing: border-box;
                    margin-left:15px;
                    cursor: pointer;
                    .cell1{
                        width: 228px;
                        height: 393px;
                        border:1px solid #dbdcdc;
                        margin:0px auto;
                        margin-top: 38px;
                        .mixPic2-top{
                            width: 100%;
                            height: 141px;
                            position: relative;
                            /*background: red;*/
                            img{
                                width: 100%;
                                height: 100%;
                            }
                            .mixPic2-mask{
                                position: absolute;
                                left: 0px;
                                top: 0px;
                                width: 100%;
                                height: 100%;
                                background: rgba(0,0,0,0.5);
                                text-align: center;
                                z-index: 1000;
                                .mask-text{
                                    padding-top: 45px;
                                    color: white;
                                    font-weight: 200;
                                    .mt1{
                                        font-size: 24px;
                                    }
                                    .mt2{
                                        font-size: 12px;
                                        padding-top:10px;
                                    }
                                }
                            }

                        }
                        .mixpic2-cell{
                            width: 100%;
                            height: 252px;
                            ul{
                                width: 100%;
                                padding: 20px 0px 0px 0px;
                                margin:0px;
                                text-align: center;
                                font-size: 16px;
                                li{
                                    width: 100%;
                                    list-style: none;
                                    padding: 15px 0px;
                                    color:black;
                                }
                            }
                        }
                    }
                    .cell2{
                        width: 100%;
                        height: 100%;
                        border:3px solid #00aaee;
                        display:none;
                        .left-top{
                            width: 100%;
                            height: 150px;
                            text-align: center;
                            .ltopCell{
                                width: 100%;
                                padding:41px 0px;
                                .teachImg{
                                    display: inline-block;
                                    width: 68px;
                                    height: 68px;
                                    vertical-align: middle;
                                    img{
                                        width: 100%;
                                        height: 100%;
                                    }
                                }
                                .teachText{
                                    display: inline-block;
                                    color: #00aaee;
                                    vertical-align:middle;
                                    .teacherText1{
                                        font-size: 28px;
                                        font-weight: bold;
                                        padding-top:5px;

                                    }
                                    .teacherText2{
                                        font-size: 14px;
                                        line-height: 30px;
                                        letter-spacing: 1px;
                                    }
                                }
                            }
                        }
                        .left-cell{
                            width: 100%;
                            height: 316px;
                            margin-top: -1px;
                            background-color: #00aaee;
                            ul{
                                width: 100%;
                                color:white;
                                padding: 0px;
                                margin: 0px;
                                li{
                                    list-style: none;
                                    padding:15px 0px;
                                    .lcImg{
                                        width: 100%;
                                        text-align: center;
                                        span:nth-child(1){
                                            width: 30px;
                                            height: 30px;
                                            display: inline-block;
                                            font-size:30px;
                                            img{
                                                width: 100%;
                                                height: 100%;
                                            }
                                        }
                                        span:nth-child(2){
                                            font-size: 25px;
                                            padding: 0px 5px;
                                        }
                                    }
                                }
                                .lcText{
                                    font-size: 12px;
                                    padding:8px 0px 0px 0;
                                }
                            }

                        }
                    }
                }
                .flHover:hover{
                    .cell1{
                        display: none;
                    }
                    .cell2{
                        display: block;
                    }
                }
            }
        }
    }
    .aboutBrand{
        width: 100%;
        height: 810px;
        background-image: url("../assets/image/about-brand.jpg");
        background-size: 100% 100%;
        .aboutBrandTop{
            .conp1 {
                font-size: 18px;
                color: #999;
                line-height: 30px;
            }
            .conp2 {
                font-size: 32px;
                line-height: 30px;
                color: #ff8a0c;
                padding: 8px 0px;
            }
            .conp3 {
                font-size: 12px;
                line-height: 30px;
                color: #eaeaea;
            }
        }
        .demo{ padding: 2em 0; }
        .main-timeline{
            width: 80%;
            margin: 20px auto;
            position: relative;
            .date{
                display: block;
                width: 20px;
                height: 20px;
                border-radius: 50%;
                background: #FF8A0C;
                margin-top: 20px;
                margin-left: -10px;
                position: absolute;
                top: 0;
                left: 50%;
            }
            .date1{
                display: block;
                width: 150px;
                height: 28px;
                background: #ff8a0c;
                margin-top: 20px;
                margin-left: -76px;
                position: absolute;
                top: 0;
                left: 50%;
                color: #fff;
                text-align: center;
                line-height: 28px;
            }
            .timeline{
                width: 100%;
                margin-bottom: 20px;
                position: relative;
                .timeline-content{
                    width: 50%;
                    float: left;
                    margin-top: 5px;
                    margin-right:-90px;
                    cursor: pointer;
                    .title{
                        padding: 15px;
                        font-size: 20px;
                        color: #fff;
                        text-transform: uppercase;
                        letter-spacing: -1px;
                        position: relative;
                        margin-left: -90px;
                    }
                    .title:after{
                        content: "";
                        width: 10px;
                        height: 10px;
                        position: absolute;
                        top: 20px;
                        right: -5px;
                        transform: rotate(-45deg);
                    }
                    .description{
                        padding: 15px;
                        font-size: 14px;
                        color: #FFFFFF;
                        background-color:#FF8A0C;
                        margin-left:-90px;
                    }
                }
            }
            .timeline:after{
                content: "";
                display: block;
                clear: both;
            }
            .timeline:nth-child(2n+1) .timeline-content{
                float: right;
                margin-top: 5px;
                margin-left:-90px;
            }
            .timeline:nth-child(2n+1) .title:after{
                left: -5px;
            }
            .timeline:nth-child(1) .title,
            .timeline:nth-child(1) .title:after,
            .timeline:nth-child(1) .description{
                background: #FF8A0C;
                margin: 0 0 0 -60px;
            }
            .timeline:nth-child(1) .title:after{
                margin: 0 0 0 0;
            }
            .timeline:nth-child(2) .title,
            .timeline:nth-child(2) .description{
                background: rgba(255,255,255,0.1);
                color: #333333;
                text-align: right;
                margin: 0 25px 0 0;
            }
            .timeline:nth-child(2) .timeline-content:hover .date,
            .timeline:nth-child(2) .timeline-content:hover .title,
            .timeline:nth-child(2) .timeline-content:hover .title:after,
            .timeline:nth-child(2) .timeline-content:hover .description{
                background: #ff8a0c;
                color: #fff;
            }
            .timeline:nth-child(3) .title,
            .timeline:nth-child(3) .description{
                background: rgba(255,255,255,0.1);
                color: #333333;
                margin: 0 0 0 -60px;
            }
            .timeline:nth-child(3) .timeline-content:hover .date,
            .timeline:nth-child(3) .timeline-content:hover .title,
            .timeline:nth-child(3) .timeline-content:hover .title:after,
            .timeline:nth-child(3) .timeline-content:hover .description{
                background: #ff8a0c;
                color: #fff;
            }
            .timeline:nth-child(4) .title,
            .timeline:nth-child(4) .description{
                background: rgba(255,255,255,0.1);
                color: #333333;
                text-align: right;
                margin: 0 25px 0 0;
            }
            .timeline:nth-child(4) .timeline-content:hover .date,
            .timeline:nth-child(4) .timeline-content:hover .title,
            .timeline:nth-child(4) .timeline-content:hover .title:after,
            .timeline:nth-child(4) .timeline-content:hover .description{
                background: #ff8a0c;
                color: #fff;
            }
        }
        .main-timeline:before{
            content: "";
            display: block;
            width: 1px;
            height: 100%;
            background-color:#8a8a8a;
            margin-top: 20px;
            margin-left: -1px;
            position: absolute;
            top: 0;
            left: 50%;
        }
    }
    @media only screen and (max-width: 767px){
        .main-timeline:before,
        .main-timeline .date{
            left: 6%;
        }
        .main-timeline .timeline-content{
            width: 85%;
            float: right;
        }
        .main-timeline .title:after{
            left: -5px;
        }
    }
    @media only screen and (max-width: 480px){
        .main-timeline:before,
        .main-timeline .date{
            left: 12%;
        }
        .main-timeline .timeline-content{
            width: 75%;
        }
        .main-timeline .date{
            width: 10px;
            height: 10px;
            margin-left: -30px;
        }
    }
    .aboutContact{
        width: 100%;
        height: inherit;
        margin-top: 50px;
        margin-bottom: 120px;
        .aboutContactTop{
            .conp1 {
                font-size: 18px;
                color: #999;
            }
            .conp2 {
                font-size: 32px;
                color: #ff8a0c;
            }
            .conp3 {
                font-size: 12px;
                color: #dddddd;
            }
        }
        .contactMap{
            max-width: 1200px;
            .contactLeft{
                width: 600px;
                height: 354px;
                float: left;
                border: 1px #999999 solid;
                overflow: hidden;
            }
            .contactRight{
                width: 600px;
                height: 354px;
                float: left;
                background-image: url("../assets/image/about-contact.png");
                background-size: 100% 100%;
                color: #ff8a0c;
                font-size: 14px;
                ul {
                    padding-top: 170px;
                    padding-left: 30px;
                    li {
                        height: 50px;
                        img{
                            float: left;
                        }
                        span {
                            float: left;
                            padding-left: 10px;
                            line-height: 22px;
                        }
                        button{
                            width: 54px;
                            height: 20px;
                            font-size: 12px;
                            color: #FFFFFF;
                            background: #FF8A0C;
                            border: 0;
                            box-shadow: -2px 0 2px #999999;
                            -webkit-border-radius: 5px;
                            -moz-border-radius: 5px;
                            border-radius: 5px;
                            margin-left: 20px;
                            cursor: pointer;
                        }
                    }
                }
            }
        }
    }

</style>
