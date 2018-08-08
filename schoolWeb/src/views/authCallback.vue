<template>
</template>
<script>
  import * as Api from '../api/service'

  export default {
    data() {
      return {
        newData:'',
        userId:''
      };
    },
    mounted() {
      if(window.localStorage.msg)
      {
        this.msg = JSON.parse(window.localStorage.msg);
      }
      if(window.localStorage.userInfo)
      {
        this.userId = JSON.parse(window.localStorage.userInfo).userId;
        this.bindAccount();
      }
    },
    beforeDestroy() {

    },
    methods: {
      bindAccount(){
        this.service.lecInfo(this.userId).then(result => {
          if(result.code === 0){
            this.$Message.success({
              content: '恭喜您,授权成功',
              duration: 5,
              closable: true
            });
            window.localStorage.memberInfo = JSON.stringify(result.user);
          }
          if(JSON.parse(window.localStorage.memberInfo).memberId){
            this.$router.push('index');
          }
        }).catch(error => {
          this.$Message.error({
            content: error,
            duration:3
          });
        })
      },
    }
  };
</script>
<style>
  #authentications {
    display: none !important;
  }

  #authentications[style] {
    display: none !important;
  }
</style>
