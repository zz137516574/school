<!-- banner -->
<template>
    <Carousel autoplay v-model="value2" :autoplay-speed="setting.autoplaySpeed" loop style="height: 240px;width: 270px;" class="newsBanner">
        <CarouselItem>
            <div class="demo-carousel">
                <img src="../../assets/image/news-ban.jpg" >
                <p class="newsBanName">广东云联惠总部</p>
            </div>
        </CarouselItem>
        <CarouselItem>
            <img src="../../assets/image/news-ban.jpg" >
            <p class="newsBanName">广东云联惠总部</p>
        </CarouselItem>
        <CarouselItem>
            <img src="../../assets/image/news-ban.jpg" >
            <p class="newsBanName">广东云联惠总部</p>
        </CarouselItem>
        <CarouselItem>
            <img src="../../assets/image/news-ban.jpg" >
            <p class="newsBanName">广东云联惠总部</p>
        </CarouselItem>
        <CarouselItem>
            <img src="../../assets/image/news-ban.jpg" >
            <p class="newsBanName">广东云联惠总部</p>
        </CarouselItem>
    </Carousel>
</template>

<script>
    export default {
        data () {
            return {
                value2: 0,
                setting: {
                    autoplaySpeed: 3000
                }
            }
        }
    }
</script>

<style lang="less">
    .newsBanner{
        .ivu-carousel-dots-inside {
            bottom: 10px !important;
        }
        .ivu-carousel-dots li {
            margin: 0 4px;
        }
        .ivu-carousel-dots li button{
            width: 8px!important;
            height: 8px!important;
            border-radius: 50% !important;
            background: white !important;
            opacity: 1 !important;
        }
        .ivu-carousel-dots .ivu-carousel-active button{
            width: 8px!important;
            height: 8px!important;
            background: #ff4d00 !important;
            border:none;
            margin-top: 1px;
        }
        .newsBanName{
            height: 58px;
            width: 100%;
            background-color: rgba(0,0,0,0.4);
            margin-top: -60px;
            position: relative;
            z-index: 10;
            color: #ffffff;
            font-size: 16px;
            text-align: center;
            line-height: 40px;
        }
    }
    .ivu-carousel-arrow {
        top: 58% !important;
    }
</style>
