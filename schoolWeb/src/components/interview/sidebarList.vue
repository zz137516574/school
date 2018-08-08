<template>
    <div class="common-list">
        <div class="lb-top">
            <div class="lb-con">
                <span class="con-logo"></span>
                <span class="con-text">访谈推荐</span>
            </div>
        </div>
        <div class="lb-content">
            <ul class="lbCon-lis">
                <li class="lbCon-list">
                    <div class="list-cell clearfix">
                        <div class="cell-left f-fl">
                            <img src="../../assets/image/intervList.jpg" alt="">
                        </div>
                        <div class="cell-right f-fl">
                            <p class="right-title">总部商学院课程直播</p>
                            <p class="right-time"><span>9月16日</span><span>14:50</span></p>
                        </div>
                    </div>
                </li>
                <li class="lbCon-list">
                    <div class="list-cell clearfix">
                        <div class="cell-left f-fl">
                            <img src="../../assets/image/intervList.jpg" alt="">
                        </div>
                        <div class="cell-right f-fl">
                            <p class="right-title">总部商学院课程直播</p>
                            <p class="right-time"><span>9月16日</span><span>14:50</span></p>
                        </div>
                    </div>
                </li>

            </ul>

        </div>
    </div>
</template>
<style lang="less">
    .common-list{
        width: 300px;
        height: 390px;
        overflow-x:hidden ;
        box-sizing: border-box;
        margin-left:10px;
        border:1px solid #ececec;
        border-top: none;
        /*padding-top:14px;*/
        .lb-top{
            width: 100%;
            height:35px;
            line-height:35px;
            border-top: 1px solid #ececec;
            border-bottom: 1px solid #ececec;
            .lb-con{
                padding:0px 14px;
                .con-logo{
                    display: inline-block;
                    vertical-align: middle;
                    width: 3px;
                    height: 21px;
                    background: #ff8a0c;
                }
                .con-text{
                    display: inline-block;
                    vertical-align: middle;
                    padding-left:14px;
                    font-size: 18px;
                    color: #333333;
                }

            }
        }
        .lb-content{
            padding: 17px 0px 0px 14px;
            .lbCon-lis{
                width: 100%;
                .lbCon-list{
                    width: 100%;
                    list-style: none;
                    margin-top:20px;
                    .list-cell{
                        width:100%;
                        .cell-left{
                            width: 133px;
                            height: 88px;
                            .cell-left img{
                                width:100%;
                                height:100%;
                            }
                        }
                        .cell-right{
                            padding:14px 0px 0px 9px;
                            .right-title{
                                font-size: 12px;
                                /*line-height: 10px;*/
                                color: #2a2a2a;
                            }
                            .right-time{
                                padding-top:6px;
                                font-size: 10px;
                                /*line-height: 20px;*/
                                color: #8e8e8e;
                            }
                        }
                    }
                }
            }
        }
    }

</style>