<template>
  <div class="content">
    <div class="drop-box" id="drop-box">
      拖动文件到这里,开始上传
    </div>
    
    <button type="button" id="btn-submit">上 传</button>
  </div>
</template>

<script>
export default {
  name: 'onAPI',
  data () {
    return {
      
    }
  },
  mounted() {
    var box = document.getElementById('drop-box');
    
    // 禁用浏览器的拖放默认行为
    document.addEventListener('drop',function (e) {
      console.log('document drog');
      e.preventDefault();
    });
   
    // 设置拖拽事件
    function openDropEvent() {
      box.addEventListener("dragover",function (e) {
        console.log('elemenet dragover');
          box.classList.add('over');
          e.preventDefault();
      });
      box.addEventListener("dragleave", function (e) {
        console.log('elemenet dragleave');
        box.classList.remove('over');
        e.preventDefault();
      })

      box.addEventListener("drop", function (e) {
        e.preventDefault(); // 取消浏览器默认拖拽效果

        var fileList = e.dataTransfer.files; // 获取拖拽中的文件对象
        var len=fileList.length; // 用来获取文件的长度（其实是获得文件数量）
        
        // 检测是否是拖拽文件到页面的操作
        if (!len) {
          box.classList.remove('over');
          return;
        }

        box.classList.add('over');

        window.willUploadFileList=fileList;

      }, false)
    }

    openDropEvent();

    function submitUpload() {

        var fileList = window.willUploadFileList||[];
        if(!fileList.length){
            alert('请选择文件');
            return;
        }

        var fd = new FormData();   //构造FormData对象

        for(var i =0;i<fileList.length;i++){
            fd.append('file', fileList[i]);//支持多文件上传
        }

        var xhr = new XMLHttpRequest();   //创建对象
        xhr.open('POST', 'http://localhost:3000/submittest', true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
              console.log('xhr.responseText: ', xhr.responseText)
              // var obj = JSON.parse(xhr.responseText);   //返回值
              // if(obj.fileUrl.length){
              //     alert('上传成功');
              // }
              alert('上传成功');
            }
        }
        xhr.send(fd);//发送
    }
    //绑定提交事件
    document.getElementById('btn-submit').addEventListener('click', submitUpload);
  }
}
</script>

<style scoped lang='scss'>
  .drop-box {
    width: 300px;
    height: 300px;
    border: 1px solid #ccc
  }
</style>