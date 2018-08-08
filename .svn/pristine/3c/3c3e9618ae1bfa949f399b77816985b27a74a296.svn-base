<!-- HTML 个人讲师 课时管理 -->
<template>
    <div class="information clearfix">
        <!-- title -->
        <div class="title">
            <span class="tit">课时管理</span>
            <div class="f-fr m-r-30">
              <Button type="ghost" @click="modal10 = true">添加课时</Button>
            </div>
        </div>
        <!-- List -->
        <div class="classHourList clearfix">
          <Timeline class="m-t-20 m-l-20">
            <TimelineItem color="green">
              <Icon type="trophy" slot="dot"></Icon>
              <span>课时</span>
            </TimelineItem>
            <TimelineItem>
              <div class="classHour">
                课时1：智能社：轻松玩转微信小程序开发
                <span class="timeTextColor m-l-10">48:35</span>
                <span class="operation f-fr clearfix">
                  <Icon type="compose" size="22" title="修改"></Icon>
                  <Icon type="ios-trash" size="22" class="m-l-10" title="删除"></Icon>
                </span>
              </div>
            </TimelineItem>
            <TimelineItem>
              <div class="classHour">
                课时2：JQueryMobile实例教程从入门到精通
                <span class="timeTextColor m-l-10">48:35</span>
                <span class="operation f-fr clearfix">
                  <Icon type="compose" size="22" title="修改"></Icon>
                  <Icon type="ios-trash" size="22" class="m-l-10" title="删除"></Icon>
                </span>
              </div>
            </TimelineItem>
            <TimelineItem>
              <div class="classHour">
                课时3：高老师讲编程之Android
                <span class="timeTextColor m-l-10">48:35</span>
                <span class="operation f-fr clearfix">
                  <Icon type="compose" size="22" title="修改"></Icon>
                  <Icon type="ios-trash" size="22" class="m-l-10" title="删除"></Icon>
                </span>
              </div>
            </TimelineItem>

          </Timeline>
        </div>

        <Modal
          title="添加课时"
          v-model="modal10"
          width="800"
          class-name="vertical-center-modal">
          <div>
            <Form :model="formItem" :label-width="90">

              <FormItem label="类型">
                <RadioGroup v-model="formItem.radio">
                  <Radio label="male">视频</Radio>
                  <Radio label="female">图文</Radio>
                </RadioGroup>
              </FormItem>
              <FormItem label="标题">
                <Input v-model="formItem.titles" class="f-fl"></Input>
                <!--<CheckboxGroup v-model="formItem.free" class="f-fl m-l-10">-->
                  <!--<Checkbox label="免费课程"></Checkbox>-->
                <!--</CheckboxGroup>-->
              </FormItem>

              <FormItem label="简介">
                <Input v-model="formItem.textarea" type="textarea" :autosize="{minRows: 5,maxRows: 5}"></Input>
              </FormItem>

              <FormItem label="视频">
                <Input v-model="formItem.videos" class="f-fl"></Input>
              </FormItem>

              <FormItem label="视频时长">
                <Row>
                  <Col span="4">
                  <Input v-model="formItem.videoLengthStart"></Input>
                  </Col>
                  <Col span="1" style="text-align: center">分</Col>
                  <Col span="4">
                  <Input v-model="formItem.videoLengthEnd"></Input>
                  </Col>
                  <Col span="1" style="text-align: center">秒</Col>
                </Row>
                <span>时长必须为整数。</span>
              </FormItem>

              <FormItem label="建议学习时长">
                <Row>
                  <Col span="4">
                  <Input v-model="formItem.timeLength"></Input>
                  </Col>
                  <Col span="1" style="text-align: right">小时</Col>
                </Row>
              </FormItem>
            </Form>
          </div>
        </Modal>

    </div>
</template>

<script>
    export default {
        props: {
            top: {}
        },
        data() {
          return {
              modal10: false,
              formItem: {
                titles: '',
                videos: '',
                videoLengthStart: '',
                videoLengthEnd: '',
                timeLength: '',
                radio: 'male',
                free: [],
                textarea: ''
              }
            };
        },
        mounted() {

        },
        beforeDestroy() {

        },
        methods: {

        }
    };
</script>

<style lang="less">
    .information {
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
        .classHourList {
            border: 0px #ccc solid;
            width: auto;
            .ivu-timeline-item-content {
                font-size: 14px;
                top: -5px;
            }
            .classHour {
                border: 1px #e5e5e5 solid;
                font-size: 13px;
                padding: 0 10px;
                height: 35px;
                line-height: 34px;
                margin-top: -9px;
                margin-right: 15px;
                .timeTextColor {
                    color: #cccccc;
                }
                .operation {
                    padding-top: 3px;
                    display: none;
                    i {
                        cursor: pointer;
                        color: #919191;
                    }
                }
            }
            .classHour:hover {
              background-color: #f8f8f8;
              .operation {
                display: block;
              }
            }

        }
    }
    .vertical-center-modal{
      display: flex;
      align-items: center;
      justify-content: center;
      .ivu-modal{
        top: 0;
      }
    }
</style>
