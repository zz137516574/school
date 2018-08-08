<!-- 图片编辑器 裁剪 -->
<template>
  <div class="image-editor clearfix">
    <!-- 图片上传 -->
        <Row>
          <!-- left img -->
          <Col span="14" class="image-editor-con1">
            <div class="cropper">
              <img id="cropimg1" alt="" src="../../assets/image/cover-img.png">
            </div>
          </Col>
          <Col span="10" class="image-editor-con1">
            <!-- img 预览 -->
            <Row type="flex" justify="center" align="middle" class="image-editor-con1-preview-con m-l-10">
              <div id="preview1"></div>
            </Row>
            <!-- button -->
            <div class="image-editor-con1-btn-con m-t-10 m-l-10">
              <input type="file" accept="image/png, image/jpeg, image/gif, image/jpg" @change="handleChange1" id="fileinput1" class="fileinput" />
              <label class="filelabel" for="fileinput1"><Icon type="image"></Icon>&nbsp;选择图片</label>
              <span><Button @click="handlecrop1" type="primary" icon="crop">裁剪</Button></span>
            </div>
            <!-- 弹出预览 -->
            <Modal v-model="option1.showCropedImage">
              <div style="margin-top: 100px !important;">
                <p slot="header">预览裁剪之后的图片</p>
                <img :src="option1.cropedImg" alt="" v-if="option1.showCropedImage" style="width: 100%;">
              </div>
            </Modal>
          </Col>
        </Row>
        <!-- 提示 -->
        <div class="m-t-10" style="line-height: 20px;">
          <p>你可以上传jpg，gif，png格式的文件，图片建议尺寸至少为480X270</p>
          <p>文件大小不能超过2M</p>
          <p>温馨提示：图片上传后，请点击裁剪，进行保存！！！</p>
        </div>
  </div>
</template>

<script>
  import Cropper from 'cropperjs';  //图片裁剪

  export default {
    name: 'image-editor',
    data () {
      return {
        // 图片裁剪
        cropper1: {},
        option1: {
          showCropedImage: false,
          cropedImg: ''
        },
        option2:{
          photo:'',
          ext:''
        }
      };
    },
    methods: {
      handleChange1 (e) {
        let file = e.target.files[0];
        this.option2.ext = file.name.substring(file.name.lastIndexOf('.') + 1);
        let reader = new FileReader();
        reader.onload = () => {
          this.cropper1.replace(reader.result);
          reader.onload = null;
        };
        reader.readAsDataURL(file);
      },
      handlecrop1 () {
        let file = this.cropper1.getCroppedCanvas().toDataURL();
        this.option1.cropedImg = file;
        this.option2.photo = file;
        this.option1.showCropedImage = true;
        this.$emit('imageRefer', this.option2);
      }
    },
    mounted () {
      let img1 = document.getElementById('cropimg1');
      this.cropper1 = new Cropper(img1, {
        dragMode: 'move',
        preview: '#preview1',
        restore: false,
        center: false,
        highlight: false,
        cropBoxMovable: false,
        toggleDragModeOnDblclick: false
      });
    }
  };
</script>

<style lang="less">
  @import '../../assets/css/imgCut/cropper.min.css';
  .image-editor-con1-btn-con .fileinput {
    display: none !important;
  }
  .image-editor-con1-btn-con .filelabel {
    display: block;
    padding: 6px 15px;
    background: #2d8cf0;
    display: inline-block;
    border: 1px solid #2d8cf0;
    border-radius: 4px;
    cursor: pointer;
    color: white;
    font-size: 14px;
    text-align: center;
    -webkit-transition: all .2s;
    transition: all .2s;
  }
#preview1{
  width:400px !important;
  height: 230px !important;
  overflow: hidden !important;
}
  .ivu-col-span-10 {
    padding-left: 10px;
  }
  .image-editor-con1-preview-con{
    /*height: 100px;*/
    overflow: hidden;
    /*width: 100% !important;*/
    /*height: 190px !important;*/
    border: 1px solid #c3c3c3;
  }
  #preview1 img{
    margin-top: 5px;
    /*transform: translateX(0px) translateY(0px) !important;*/
  }
  .cropper .cropper-container{
    width: 471px !important;
    height:280px !important;
  }
  .cropper-canvas{
    /*transform: translateX(61.8509px) translateY(34.309px);*/
    transform: translateX(49.8px) translateY(22px) !important;
    opacity: 0 !important;
  }
  .cropper-crop-box{
    width: 358.4px !important;
    height: 231.4px !important;
    transform: translateX(53.8px) translateY(22px) !important;
  }
/*.cropper-container{*/
/*width:498px !important;*/
/*height: 300px !important;*/
/*}*/
</style>
