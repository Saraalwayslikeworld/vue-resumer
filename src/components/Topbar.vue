<template>
  <div id="Topbar">
    <div class="wrapper">
      <span class="logo"><i class="el-icon-edit-outline"></i> ResumeEditor</span>
      <div class="btn">
        <el-button type="success" icon="el-icon-view" round @click="previewMode = true">预览</el-button>
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
      AV.User.logOut()
      this.$store.commit('removeUser')
      this.dialogVisible = false
      this.$emit('logout')
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
  .exit>.icon{
    width: 32px;
    font-size: 32px;
    color: #409EFF;
    margin-left: 16px;
  }
</style>
