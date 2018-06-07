<template>
  <div id="Topbar">
    <div class="wrapper">
      <span class="logo"><i class="el-icon-edit-outline"></i> ResumeEditor</span>
      <div class="btn">
        <el-button type="success" icon="el-icon-view" round>预览</el-button>
        <el-button type="primary" icon="el-icon-circle-check-outline" round>保存</el-button>
        <el-button  round>退出登录</el-button>
      </div>       
    </div>
  </div>
</template>

<script>
export default {
  name: 'Topbar',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  $maincolor:#409EFF;
  $bgcolor: rgba(64, 160, 255, 0.6);
  #Topbar {
    background: #fff;   
    box-shadow:0 1px 3px 0 rgba(0,0,0,0.25);
    height: 64px;
    >.wrapper {
      min-width: 1024px;
      max-width: 1440px;
      margin: 0 auto;
      padding: 0 16px;
      height: 100%;
    }
    >.wrapper {
      display: flex;
      justify-content: space-between;
      align-items: center;
      >.logo{
        font-size: 24px;
        color: $maincolor;
      }
      >.btn>el-button {
        font-size: 12px;
      }
    }
  }
 
</style>
