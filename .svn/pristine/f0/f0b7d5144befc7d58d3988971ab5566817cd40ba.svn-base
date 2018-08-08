<!-- 富文本编辑器 -->
<template>
    <div class="editor">
        <Card shadow>
            <textarea class='tinymce-textarea' id="tinymceEditer"></textarea>
        </Card>
        <Spin fix v-if="spinShow">
            <Icon type="load-c" size=18 class="demo-spin-icon-load"></Icon>
            <div>加载组件中...</div>
        </Spin>
    </div>
</template>

<script>
  import tinymce from 'tinymce';
  export default {
      name: 'text-editor',
      data () {
          return {
              spinShow: true,
              textValue:''
          };
      },
      methods: {
          init () {
              this.$nextTick(() => {
                  let vm = this;
                  let height = document.body.offsetHeight - 450;
                  tinymce.init({
                      selector: '#tinymceEditer',
                      branding: false,
                      elementpath: false,
                      height: height,
                      language: 'zh_CN.GB2312',
                      menubar: 'edit insert view format table tools',
                      plugins: [
                          'advlist autolink lists link image charmap print preview hr anchor pagebreak imagetools',
                          'searchreplace visualblocks visualchars code fullpage',
                          'insertdatetime media nonbreaking save table contextmenu directionality',
                          'emoticons paste textcolor colorpicker textpattern imagetools codesample'
                      ],
                      toolbar1: ' newnote print preview | undo redo | insert | styleselect | forecolor backcolor bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image emoticons media codesample',
                      autosave_interval: '20s',
                      image_advtab: true,
                      table_default_styles: {
                          width: '100%',
                          borderCollapse: 'collapse'
                      },
                      setup: function (editor) {
                          editor.on('init', function (e) {
                              vm.spinShow = false;
                              if (localStorage.editorContent) {
                                  tinymce.get('tinymceEditer').setContent(localStorage.editorContent);
                              }
                          });
                          editor.on('blur', function (e) {
                            var activeEditor = tinymce.activeEditor;
                            var editBody = activeEditor.getBody();
                            activeEditor.selection.select(editBody);
                            this.textValue = activeEditor.selection.getContent( { 'format' : 'text' } );
//                            localStorage.editorContent = tinymce.get('tinymceEditer').getContent();
                            localStorage.editorContent =  this.textValue;
                          });
                      }
                  });
              });
          }
      },
      mounted () {
          this.init();
      },
//      methods(){

//      },
      destroyed () {
          tinymce.get('tinymceEditer').destroy();
      }
  };
</script>

<style lang="less">
  .editor {
    border: 1px #e5e5e5 solid;
    width: 715px;
    /*height: 257px;*/
    border-radius: 4px;
    .ivu-card-body {
      padding: 0;
    }
    .mce-panel[style] {
      border-width: 0px !important;
    }
    .mce-tinymce {
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0);
    }
  }
  .image-editor{
    .cropper{
      box-sizing: border-box;
      border: 1px solid #c3c3c3;
      width: 100%;
      height: 100%;
      img{
        max-height: 100%;
      }
    }
    .fileinput{
      display: none;
    }
    .filelabel{
      display: block;
      padding: 0px 15px;
      background: #2d8cf0;
      display: inline-block;
      border: 1px solid #2d8cf0;
      border-radius: 4px;
      cursor: pointer;
      color: white;
      font-size: 12px;
      text-align: center;
      transition: all .2s;
      &:hover{
         background: #5cadff;
         border: 1px solid #5cadff;
         transition: all .2s;
       }
    }
    &-con1{
       height: 300px;
      &-preview-con{
         width: 100% !important;
         height: 200px !important;
         border: 1px solid #c3c3c3;
        #preview1{
          width: 100%;
          height: 100%;
          overflow: hidden;
        }
      }
    }
    &-con2{
       height: 300px;
      p{
        font-size: 14px;
        padding: 6px;
        border-bottom: 1px solid #c3c3c3;
        b{
          display: inline-block;
          width: 80px;
        }
      }
    }
    &-con3{
       height: 300px;
      .cropper3{
        box-sizing: border-box;
        border: 1px solid #c3c3c3;
        width: 100%;
        height: 100%;
        img{
          max-height: 100%;
        }
      }
      &-btn-box{
         text-align: center;
      }
      .filelabel3{
        width: 190px;
        box-sizing: border-box;
      }
      .crop3-btn-box{
        text-align: center;
      }
      &-preview-con{
         width: 100% !important;
         height: 300px !important;
         border: 1px solid #c3c3c3;
        #preview3{
          width: 100%;
          height: 100%;
          overflow: hidden;
        }
      }
    }
  }
</style>
