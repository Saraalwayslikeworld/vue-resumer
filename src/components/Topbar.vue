<template>
  <div id="Topbar">
    <div class="wrapper">
      <span class="logo"><i class="el-icon-edit-outline"></i> ResumeEditor</span>
      <div class="btn">
        <el-button type="success" icon="el-icon-view" round @click="previewMode = true">预览</el-button>
        <el-button type="primary" icon="el-icon-check" round @click="saveAll">保存</el-button>
        <div class="exit" @click="dialogVisible = true">
          <svg class="icon" aria-hidden="true"  >   
            <use xlink:href="#icon-user"></use>
          </svg>
        </div>
      </div>       
    </div>
    <el-dialog :title="`你好，${username}`" :visible.sync="dialogVisible" width="30%">
      <span>是否退出登录?</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="logOut">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import AV from '../lib/leancloud'

export default {
  name: 'Topbar',
  data(){
    return {
      dialogVisible : false
    }
  },
  computed:{
    username(){
      return this.$store.state.user.username
    },
    previewMode:{
      get(){
        return this.$store.state.previewMode
      },
      set(val){
        this.$store.state.previewMode = val
      }
    }
  },
  methods:{
    logOut(){
      this.$store.dispatch('uploadOrSaveResume')
      this.$store.commit('removeUser')
      AV.User.logOut()
      this.dialogVisible = false
      this.$emit('logout')
      window.location.reload()
    },
    saveAll(){
      this.$store.dispatch('uploadOrSaveResume')
      this.$message({
        message: '保存成功！',
        type: 'success'
      });
    }
  }
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
      >.btn{
        display: flex;
        align-items: center;
      }
      >.btn>el-button {
        font-size: 12px;
      }
    }
  }
  .exit{
    margin-left: 16px;
    svg.icon{
      height: 32px;
      width: 32px;
      vertical-align: -0.1em;
      fill:$maincolor;
      font-size:16px;
    }
  }
</style>
