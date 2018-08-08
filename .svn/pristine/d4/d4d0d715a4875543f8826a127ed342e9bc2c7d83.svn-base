<!-- 学生问答 -->
<template>
  <div class="dialogue m-t-20">
    <v-curriculumList :curriculumList="curriculumList"></v-curriculumList>
    <Collapse>
      <Panel name="1">
        提问
        <div slot="content">
          <Input v-model="questions" type="textarea" :rows="3" placeholder="提问内容..."></Input>
          <Button type="warning" class="f-fr m-t-10 m-b-10">提交</Button>
        </div>
      </Panel>
    </Collapse>
  </div>

</template>

<script>
  import curriculumList from './curriculumList.vue';
  export default {
    props: {},
    data() {
      return {
        curriculumList:{},
        questions: ''
      };
    },
    mounted() {

    },
    beforeDestroy() {

    },
    components: {
      'v-curriculumList': curriculumList
    },
    methods: {

    }
  };
</script>

<style lang="less">
  .dialogue {
    .ivu-collapse {
      background-color: #ffffff;
      border-radius: 0px;
      border: 0 #ffffff solid;
    }
    .ivu-collapse>.ivu-collapse-item>.ivu-collapse-header {
      padding-right: 20px;
      font-size: 14px;
      text-align: right;
      border-top: 1px #e5e5e5 solid;
    }
    .ivu-input {
      border: 1px #e5e5e5 solid;
    }
    .ivu-collapse-item:last-child>.ivu-collapse-content {
      /*border-top: 1px #e5e5e5 solid;*/
      background-color: #fff9f7;
    }
    .ivu-btn {
      font-size: 14px;
      padding: 5px 25px;
    }
  }

</style>
