<!--公用层-->
<template>
    <div class="viewdiv">
        <div class="viewContent clearfix">
            <!--左边视频-->
            <div class="vLeft">
                <div class="left-video">
                    <video width="100%" height="100%" controls>
                        <!--<source src="movie.mp4" type="video/mp4">-->
                        <!--<source src="movie.ogg" type="video/ogg">-->
                         <!--您的浏览器不支持 video 标签。-->
                    </video>
                </div>
                <div class="left-control"></div>
            </div>
            <!--右边评论-->
            <div class="vRight">
                <div class="vR-top">
                    <span>在线用户（100个）</span>
                </div>
                <!--右边中间-->
                <div class="vR-mid">
                    <div class="mid-title">
                        <span class="titName"><span>!</span></span><span class="titText">大家自由讨论</span>
                    </div>
                    <div class="mid-con">
                        <ul class="midCon-lis">
                            <li class="midCon-list">
                                <div class="mid-cell">
                                    <div class="cell-top">
                                        <span>喜欢猫喵的你</span>
                                    </div>
                                    <div class="cell-bot">
                                        <span>传统的商业模式是怎样的</span>
                                    </div>
                                </div>
                            </li>
                            <li class="midCon-list">
                                <div class="mid-cell">
                                    <div class="cell-top">
                                        <span>喜欢猫喵的你</span>
                                    </div>
                                    <div class="cell-bot">
                                        <span>传统的商业模式是怎样的</span>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <!--右边底部-->
                <div class="vR-bottom">
                    <div class="vb-cell clearfix">
                        <div class="vRbot-left">
                            <span class="left-small">
                                <img src="../../assets/image/small.png" alt="">
                            </span>
                        </div>
                        <div class="vRbot-mid">
                            <span class="midLine"></span>
                            <input type="text" placeholder="在此输入聊天文字" class="midText">
                        </div>
                        <div class="vRbot-right">
                            <button class="send">发送</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="less">
    .viewdiv{
        width: 1200px;
        height: 639px;
        margin: 25px auto;
        box-sizing: border-box;
        font-size: 0;
        .viewContent{
            width: 100%;
            height: 100%;
            .vLeft{
                float: left;
                width: 890px;
                height: 100%;
                box-sizing: border-box;
                background:black;
                .left-video{
                    width: 100%;
                    height:594px;
                }
                .left-control{
                    width: 100%;
                    height: 43px;
                }
            }
            .vRight{
                float:right !important;
                width:310px;
                height:100%;
                background-color: #191f27;
                position: relative;
                .vR-top{
                    width: 100%;
                    height: 40px;
                    line-height: 40px;
                    background: #2e343c;
                    padding-left:25px;
                    font-size: 12px;
                    color: #b3b3b3;
                    .vR-top span{
                        width: 108px;
                        height: 12px;
                        font-size: 12px;
                        font-weight: normal;
                        font-stretch: normal;
                        line-height: 0px;
                        letter-spacing: 0px;
                        color: #b3b3b3;
                        padding: 15px 0px 13px 25px;
                    }
                }
                .vR-mid{
                    width: 90%;
                    height: 545px;
                    margin:0px 0px 0px 25px !important;
                    /*overflow: scroll;*/
                    .mid-title{
                        font-size: 12px;
                        color: #ffffff;
                        padding:20px 0px 0px 0px;
                        .titName{
                            padding-right:5px;
                            .titName span{
                                display: inline-block;
                                width: 15px;
                                height: 15px;
                                line-height: 15px;
                                text-align: center;
                                border-radius:15px;
                                background: white;
                                color: black;
                                font-weight: bold;
                            }
                        }
                        .titText{
                            font-size: 12px;
                        }
                    }
                    .mid-con{
                        font-size:12px;
                        .midCon-lis{
                            width: 100%;
                            .midCon-list{
                                width: 100%;
                                list-style: none;
                                padding:20px 0px 0px 0px;
                                .mid-cell{
                                    width: 100%;
                                    .cell-top{
                                        font-size: 12px;
                                        line-height: 20px;
                                        color: #b3b3b3;
                                    }
                                    .cell-bot{
                                        /*margin-top:6px;*/
                                        font-size: 13px;
                                        line-height: 20px;
                                        color: #ffffff;
                                    }
                                }
                            }
                        }
                        /*border:1px solid red;*/
                    }
                }
                .vR-bottom{
                    width: 270px;
                    height: 39px;
                    position: absolute;
                    bottom:16px;
                    left:20px;
                    background: white;
                    .vb-cell{
                        padding:6px 0px;
                        .vRbot-left{
                            vertical-align: middle;
                            float: left;
                            padding:0px 15px;
                            .left-small{
                                display:inline-block;
                                width: 17px;
                                height: 17px;
                                vertical-align: top;
                                margin-top:5px;
                                .left-small img{
                                    width: 100%;
                                    height: 100%;
                                }
                            }
                        }
                        .vRbot-mid{
                            float: left;
                            .midLine{
                                display:inline-block;
                                width: 11px;
                                height: 13px;
                                border: none;
                                border-left:1px solid lightgrey;
                                vertical-align: middle;
                            }
                            .midText{
                                border: none;
                                outline: none;
                                font-size: 12px;
                                color:grey;
                                padding:5px;
                                vertical-align: middle;
                            }
                        }
                        .vRbot-right{
                            float:right !important;
                            padding: 0px 5px 0px 0px;
                            .send{
                                width: 40px;
                                height: 27px;
                                font-size:12px;
                                background-color: #ff8a0c;
                                color: white;
                                border: none;
                                border-radius:5px;
                            }
                        }
                    }
                }
            }

        }
    }

</style>
