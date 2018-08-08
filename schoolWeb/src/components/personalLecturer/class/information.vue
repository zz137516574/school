<!-- 讲师专区 / 创建课程 -->
<template>
  <div class="creatingCourses clearfix">
    <!-- title -->
    <div class="title">
      <span class="tit">课程修改</span>
    </div>

    <!-- 表单 -->
    <div class="content">
      <Form :model="formLeft" label-position="left" :label-width="80">

        <FormItem label="名称" class="padd-top">
          <Input v-model="formLeft.input"></Input>
        </FormItem>

        <FormItem label="是否共享" class="padd-top">
          <RadioGroup v-model="formLeft.radio">
            <Radio label="open">是</Radio>
            <Radio label="close" class="m-l-5">否</Radio>
          </RadioGroup>
        </FormItem>

        <FormItem label="开始时间">
          <Row class="clearfix">
            <FormItem prop="date" class="f-fl">
              <DatePicker type="date" placeholder="选择日期" v-model="formLeft.date"></DatePicker>
            </FormItem>
            <span class="f-fl text-center" style="padding: 0 5px;">-</span>
            <FormItem prop="time" class="f-fl">
              <TimePicker type="time" placeholder="选择时间" v-model="formLeft.time"></TimePicker>
            </FormItem>
          </Row>
        </FormItem>

        <FormItem label="课程分类" class="padd-top">
          <Select v-model="formLeft.select">
            <Option value="默认分类">默认分类</Option>
          </Select>
        </FormItem>

        <!-- 图片上传 -->
        <FormItem label="封面设置" class="padd-top">
          <v-imageEditor :imageEditor="imageEditor"></v-imageEditor>
        </FormItem>

        <!-- 直播类型 -->
        <FormItem label="直播类型" class="padd-top">
          <Select v-model="formLeft.broadcast">
            <Option v-for="item in broadcastList" :value="item.value" :key="item.value">{{ item.label }}</Option>
          </Select>
        </FormItem>

        <!-- 收费类型 -->
        <FormItem label="收费类型" class="padd-top">
          <Select v-model="formLeft.charge">
            <Option v-for="item in chargeList" :value="item.value" :key="item.value">{{ item.label }}</Option>
          </Select>
        </FormItem>

        <!-- 是否推广 -->
        <FormItem label="是否推广" class="padd-top">
          <RadioGroup v-model="formLeft.extension">
            <Radio label="是">是</Radio>
            <Radio label="否" class="m-l-5">否</Radio>
          </RadioGroup>
        </FormItem>

        <!-- 富文本 -->
        <FormItem label="课程简介" class="padd-top">
          <v-textEditor :textEditor="textEditor"></v-textEditor>
        </FormItem>

        <Button type="warning" class="m-t-30">保存</Button>
      </Form>
    </div>

  </div>
</template>

<script>
  import textEditor from '../../tinymce/textEditor.vue';  //富文本编辑器
  import imageEditor from '../../imageEditor/imageEditor.vue';  //图片裁剪

  export default {
    data () {
      return {
        textEditor:{},
        imageEditor:{},
        formLeft: {
          input: '',
          radio: 'open',
          select: '',
          curriculum: '',
          broadcast: '',
          charge: '',
          extension: '是',
          date:''
        },
        // 课程类型
        broadcastList: [
          {
            value: '音频直播',
            label: '音频直播'
          },
          {
            value: '视频直播',
            label: '视频直播'
          },
          {
            value: '音频互动直播',
            label: '音频互动直播'
          },
          {
            value: '视频互动直播',
            label: '视频互动直播'
          }
        ],
        // 收费类型
        chargeList: [
          {
            value: '一次性收费',
            label: '一次性收费'
          },
          {
            value: '按节收费',
            label: '按节收费'
          }
        ],
      };
    },
    components: {
      'v-textEditor': textEditor,
      'v-imageEditor': imageEditor
    },
    methods: {}
  };
</script>

<style lang="less">
  .creatingCourses {
    width: 945px;
    height: auto;
    border: 1px #ededed solid;
    padding-bottom: 40px;
    .title {
      width:auto;
      height: 50px;
      line-height: 50px;
      font-size: 16px;
      color: #3e3e3e;
      border-bottom: 1px #ededed solid;
      .tit {
        padding: 15px;
        border-bottom: 2px #ff8a0c solid;
      }
    }
    .content {
      border: 0px #ccc solid;
      width: auto;
      margin: 45px 45px 0 45px;
      .ivu-input-wrapper,.ivu-select {
        width: 251px;
      }
      .padd-top {
        .ivu-form-item-label {
          padding: 9px 12px 11px 0 !important;
          font-size: 14px;
        }
      }
      .ivu-btn {
        padding: 6px 28px;
        font-size: 14px;
      }
    }
    /* input select */
    .ivu-input,.ivu-select-single .ivu-select-selection {
      height: 36px !important;
    }
    .ivu-select-single .ivu-select-selection .ivu-select-placeholder, .ivu-select-single .ivu-select-selection .ivu-select-selected-value {
      height: 36px !important;
      line-height: 36px !important;
    }
  }
</style>
