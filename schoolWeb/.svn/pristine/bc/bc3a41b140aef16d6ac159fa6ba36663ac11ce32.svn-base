<template>
  <div class="container searchVolume clearfix">
    <Menu mode="horizontal" active-name="1"  class="f-fl">
      <MenuItem name="1">
        <span @click="directSeedingType(0)">待直播</span>
      </MenuItem>
      <MenuItem name="2">
        <span @click="directSeedingType(1)">正在直播</span>
      </MenuItem>
      <MenuItem name="3">
        <span @click="directSeedingType(-1)">直播完毕</span>
      </MenuItem>
    </Menu>
    <div class="f-fr">
      <RadioGroup v-model="freeclass" @on-change="chargeFree">
        <Radio class="f-fr" :label="this.free"></Radio>
        <Radio class="f-fr m-r-25" :label="this.fees"></Radio>
      </RadioGroup>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      searchVolume: {}
    },
    data() {
      return {
        freeclass: '收费',
        free: '免费',
        fees: '收费',

      };
    },
    mounted() {

    },
    beforeDestroy() {

    },
    methods: {
      directSeedingType(id) {
        this.$emit('liveSearchs', 'a'+id);
      },
      chargeFree(id) {
        if(id === this.free){
          id = 0;
        }else {
          id = 1;
        }
        this.$emit('liveSearchs', 'b'+id);
      }
    }
  };
</script>

<style  lang="less">
  .searchVolume{
    width: 100%;
    height: 45px;
    line-height: 45px;
    background: #f5f5f5;
    border: 1px solid #ededed;
    box-sizing: border-box;
    .ivu-menu{
      height: 44px!important;
      line-height: 43px!important;
      background: #f5f5f5!important;
      li.ivu-menu-item {
        width: inherit !important;
        padding: 0;
        text-align: center;
        border-bottom: 1px solid #ededed;
      }
      .ivu-menu-item-active,.ivu-menu-item:hover {
        color: #ff8a0c!important;
        border-bottom: 1px solid #ededed!important;
        background: #ffffff!important;
      }
      span {
        display: block;
        padding: 0 20px;
      }
    }
    .f-fr{
      color: #706f6f;
    }

  }
</style>
