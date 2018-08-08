<template>
<div>
  <div class="areaBottom">
    地区选择：
    <Select style="width:200px" placeholder="全部" @on-change="provinceIndexChange" 	>
      <Option v-for="(item,index) in areaData" :key="index" :value="index">{{ item.areaname }}</Option>
    </Select>
    <!--<Select style="width:200px;margin-left: 20px" @on-change="cityDataIndexChange">-->
      <!--<Option v-for="(item,index) in cityData" :key="index" :value="index">{{ item.areaname }}</Option>-->
    <!--</Select>-->
  </div>
</div>

</template>

<script>
    export default {
        data() {
            return {
              parentId:'',
              areaData:{},
              provinceData:'',
              cityData:'',
              areaname: '全部',
              cityID: '',
              newAreaData:{
                areaname: '全部'
              }
            };
        },
        mounted() {
          this.lecturerAreas();
        },
        beforeDestroy() {

        },
        methods: {
          provinceIndexChange(index){
            this.cityData = this.areaData[index].id;
            this.$emit('province', this.cityData);
          },
          lecturerAreas() {
            this.service.lecturerArea(this.parentId).then(result => {
              this.areaData = result.areaList;
              this.areaData.unshift(this.newAreaData);
            }).catch(error => {
              this.$Message.error({
                content: error,
                duration: 5
              });
            })
          }
        }
    };
</script>

<style  lang="less">
  .areaBottom{
    margin-top: 14px;
  }
</style>
