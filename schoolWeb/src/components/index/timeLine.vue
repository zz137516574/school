<!-- TIMELINE -->
<template>
    <div class="container time">
        <ul class="time-ul j_time">
            <li class="time-li j_time_li"  v-for="(item,index) in timeList" :key="index" @click="newTime(item,index)">
              <span class="num">{{item.time}}</span>
              <span class="outer-circle"></span>
              <span class="inner-circle"></span>
              <!--<span class="outer-circle" :style="{backgroundImage: ''}"></span>-->
              <!--<span class="inner-circle" :style="{backgroundImage: 'url(' + oldImage.oldImg + ')'}"></span>-->
            </li>
            <!--<li class="time-li j_time_li" data-time="1509620400000">-->
                <!--<span class="num">11:00</span>-->
                <!--<span class="outer-circle"></span>-->
                <!--<span class="inner-circle"></span>-->
            <!--</li>-->
            <!--<li class="time-li j_time_li current" data-time="1509622200000">-->
                <!--<span class="num">14:00</span>-->
                <!--<span class="outer-circle"></span>-->
                <!--<span class="inner-circle"></span>-->
            <!--</li>-->
            <!--<li class="time-li j_time_li" data-time="1509624000000">-->
                <!--<span class="num">16:00</span>-->
                <!--<span class="outer-circle"></span>-->
                <!--<span class="inner-circle"></span>-->
            <!--</li>-->
            <!--<li class="time-li j_time_li" data-time="1509670800000">-->
                <!--<span class="num">18:00</span>-->
                <!--<span class="outer-circle"></span>-->
                <!--<span class="inner-circle"></span>-->
            <!--</li>-->
            <!--<li class="time-li j_time_li" data-time="1509688800000">-->
                <!--<span class="num">20:00</span>-->
                <!--<span class="outer-circle"></span>-->
                <!--<span class="inner-circle"></span>-->
            <!--</li>-->
            <!--<li class="time-li date">&nbsp;明天-->
                <!--<span class="outer-circle"></span>-->
                <!--<span class="inner-circle"></span>-->
            <!--</li>-->
            <!--<li class="time-li j_time_li" data-time="1509690600000">-->
                <!--<span class="num">10:00</span>-->
                <!--<span class="outer-circle"></span>-->
                <!--<span class="inner-circle"></span>-->
            <!--</li>-->
            <!--<li class="time-li j_time_li" data-time="1509706800000">-->
                <!--<span class="num">12:00</span>-->
                <!--<span class="outer-circle"></span>-->
                <!--<span class="inner-circle"></span>-->
            <!--</li>-->
            <!--<li class="time-li j_time_li" data-time="1509710400000">-->
                <!--<span class="num">14:00</span>-->
                <!--<span class="outer-circle"></span>-->
                <!--<span class="inner-circle"></span>-->
            <!--</li>-->
            <!--<li class="time-li j_time_li" data-time="1509710400000">-->
                <!--<span class="num">16:00</span>-->
                <!--<span class="outer-circle"></span>-->
                <!--<span class="inner-circle"></span>-->
            <!--</li>-->
        </ul>
    </div>
</template>

<script>
    export default {
        data () {
            return {
              timeList:[{time:'11:00',typeData:0},{time:'14:00',typeData:0},{time:'16:00',typeData:0},{time:'18:00',typeData:0},{time:'20:00',typeData:0},{time:'明天',typeData:1},{time:'10:00',typeData:1},{time:'12:00',typeData:1},{time:'14:00',typeData:1},{time:'16:00',typeData:1}],
              oldImage:{oldImg:'../../assets/image/circle.png',newImg:'../../assets/image/circle-hover.png'},
              timeData:{ lastTime:'', nextTime:''}
            }
        },
        methods:{
          newTime(item,index){
            if( item.typeData === 0){
              let nowTime = this.todayTime();
              this.timeData.lastTime = nowTime+' '+ item.time;
              if(this.timeList[index+1].typeData === 1){
                let tomTime = this.tomorrowTime();
                if(this.timeList[index+1].time === '明天'){
                  this.timeData.nextTime ='';
                  this.timeData.nextTime = tomTime+' '+ '0:00';
                }
                if(this.timeList[index+1].time !== '明天'){
                  this.timeData.nextTime ='';
                  this.timeData.nextTime = tomTime+' '+ this.timeList[index+1].time;
                }
              }else{
                this.timeData.nextTime ='';
                this.timeData.nextTime = nowTime+' '+ this.timeList[index+1].time;
              }
            }
            if(item.typeData === 1){
              let tomTime = this.tomorrowTime();
              if(item.time === '明天'){
                this.timeData.lastTime ='';
                this.timeData.lastTime = tomTime+' '+ '0:00';
              }
              if(item.time !== '明天'){
                this.timeData.lastTime ='';
                this.timeData.lastTime = tomTime+' '+ item.time;
              }
              if(this.timeList.length <= index+1){
                this.timeData.nextTime ='';
                this.timeData.nextTime = tomTime+' '+'23:59';
              }else{
                this.timeData.nextTime ='';
                this.timeData.nextTime = tomTime+' '+this.timeList[index+1].time;
              }
            }
            this.$emit('timeRefre',this.timeData);
          },
//          获取今天时间
          todayTime(){
            let day = new Date();
            let Year = 0;
            let Month = 0;
            let Day = 0;
            let CurrentDate = "";
            // 初始化时间
            Year = day.getFullYear();
            Month = day.getMonth() + 1;
            Day = day.getDate();
            CurrentDate += Year + "-";
            if (Month >= 10 ) {
              CurrentDate += Month + "-";
            } else {
              CurrentDate += "0" + Month + "-";
            }
            if (Day >= 10 ) {
              CurrentDate += Day ;
            } else {
              CurrentDate += "0" + Day ;
            }
            return CurrentDate;
          },
//          获取明天时间
          tomorrowTime(){
            let day = new Date();
            let Year = 0;
            let Month = 0;
            let Day = 0;
            let CurrentDate = "";
            day.setTime(day.getTime()+24*60*60*1000);
            Year = day.getFullYear();
            Month = day.getMonth() + 1;
            Day = day.getDate();
            CurrentDate += Year + "-";
            if (Month >= 10 ) {
              CurrentDate += Month + "-";
            } else {
              CurrentDate += "0" + Month + "-";
            }
            if (Day >= 10 ) {
              CurrentDate += Day ;
            } else {
              CurrentDate += "0" + Day ;
            }
            return CurrentDate;
          }
        }
    }
</script>

<style lang="less">
    .time {
        .time-ul {
            width: 1200px !important;
            height: 44px;
            border-bottom: 1px solid #ff8a0c;
            .time-li {
                position: relative;
                float: left;
                margin-right: 82px;
                line-height: 20px;
                font-size: 14px;
                color: #666;
                cursor: pointer;
                .num {
                    margin-bottom: 10px;
                    display: inline-block;
                    padding: 1px 5px;
                    margin-top: 3px;
                }
                .outer-circle,.inner-circle {
                    position: absolute;
                    left: 10px;
                    bottom: -18px;
                }
                .inner-circle {
                    background-image: url("../../assets/image/circle.png");
                    left: 10px;
                    bottom: -20px;
                    width: 26px;
                    height: 26px;
                }
            }
            .time-li:hover .num {
                background-color: #ff8a0c;
                border-radius: 20px;
                color: #fff;
            }
            .time-li:hover .outer-circle {
                background-image: url("../../assets/image/circle.png");
            }
            .time-li:hover .inner-circle {
                background-image: url("../../assets/image/circle-hover.png");
            }
            .time-li:nth-child(9) {
                display: block;
            }
            .time-li:last-child {
                display: block;
                margin-right: 0;
            }
            .current .num {
                background-color: #ff8a0c;
                border-radius: 20px;
                color: #fff;
            }
            .current .outer-circle {
                background-image: url("../../assets/image/circle.png");
                width: 26px;
                height: 26px;
            }
            .current .inner-circle {
                background-image: url("../../assets/image/circle-hover.png");
                width: 26px;
                height: 26px;
            }
            .date {
                height: 30px;
                font-size: 14px;
                color: #ff8a0c;
                padding: 0 5px;
                border-radius: 4px;
                margin-top: 5px;
                line-height: 20px;
                position: relative;
                cursor: inherit;
            }
        }
    }
</style>
