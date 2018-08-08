<!-- banner -->
<template>
    <Carousel class="banners" autoplay v-model="value2" :autoplay-speed="setting.autoplaySpeed" loop>
        <CarouselItem v-for="(item, index) in listData" :key="index">
            <div class="demo-carousel">
                <img :src="item.photo" alt="" v-if="item.hasOwnProperty('photo')">
            </div>
        </CarouselItem>
    </Carousel>
</template>

<script>
//  import tokenas from '../../net/index.js';
    export default {
        props: {
          listData: {
            required: true
          }
        },
        data () {
            return {
                value2: 0,
                setting: {
                    autoplaySpeed: 5000
                }
            }
        },
        mounted() {
        },
        methods: {

        }
    }
</script>

<style lang="less">
    .banners {
        height: 300px;
        width: 100%;
        .demo-carousel {
            img {
                width: 100%;
                height: 350px;
            }
        }
    }
    @media screen and (max-width: 1201px) {
      .banners {width: 1200px !important;}
    }
    .ivu-carousel-dots-inside {
        bottom: -35px !important;
        z-index: 1000;
    }
    .ivu-carousel-dots {
        li {
            button {
                width: 12px  !important;
                height: 12px !important;
                border-radius: 50% !important;
                background: none !important;
                border: 2px white solid;
                opacity: 1 !important;
                margin: 0 5px !important;
            }
        }
        .ivu-carousel-active {
            button {
                width: 12px !important;
                height: 12px !important;
                background: white !important;
                margin-top: -1px;
            }
        }
    }
    .ivu-carousel-arrow {
        top: 58% !important;
    }
</style>
