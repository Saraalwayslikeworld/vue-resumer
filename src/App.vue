<template>
  <div id="app">
    <div class="loginPage" v-show="!isLogin">
      <div class="bg"></div>
      <div class="container">
        <div class="art">
            <i class=" logo el-icon-edit-outline"></i>
            <p class="title">ResumeEditor</p>
        </div>
        <el-tabs class="loginOrRegister">
            <el-tab-pane label="登录" >
                <partLogin @success="signIn($event)"/>
            </el-tab-pane>
            <el-tab-pane label="注册" >
                <partRegister @success="signIn($event)"/>
            </el-tab-pane>
        </el-tabs>
      </div> 
    </div>
    <div class="editPage" v-show="isLogin">
      <header>
        <Topbar v-show="!previewMode" class="topbar" @logout="isLogin = false"/>
      </header>
      <main>
        <Editor class="editor" v-show="!previewMode"/>
        <Preview class="preview" v-bind:class="{viewMode: previewMode}"/> 
        <el-button class="exit" type="success" round @click="previewMode = false" v-show="previewMode">退出预览</el-button> 
      </main>
  </div>
  </div>

</template>

<script>
import Topbar from './components/Topbar'
import Preview from './components/ResumePreview'
import Editor from './components/ResumeEditor'
import icons from './assets/icons'
import PartLogin from './components/PartLogin'
import PartRegister from './components/PartRegister'
import store from './store/index'
import AV from './lib/leancloud'
import getAVUser from './lib/getAVUser'

export default {
  name: 'App',
  store,
  components: {
    Topbar,Preview,Editor,PartLogin,PartRegister
  },
  data(){
    return{ 
      isLogin : false,
    }
  },
  computed:{
    previewMode:{
      get(){
        return this.$store.state.previewMode
      },
      set(val){
        this.$store.state.previewMode = val
      }  
    },
    user(){
      return this.$store.state.user
    }
  },
  created(){
    document.body.insertAdjacentHTML('afterbegin', icons) 
    let state = localStorage.getItem('state')
    if(state){
      state = JSON.parse(state)
    }
    this.$store.commit('initState',state)
    this.$store.commit('setUser',getAVUser())
  },
  methods:{
      signIn(user){
          this.$store.commit('setUser',user)
          this.isLogin = true
      }
  }
}
</script>

<style lang="scss" scoped>
  $maincolor:#409EFF;
  $bgcolor: rgba(64, 160, 255, 0.6);
.loginPage {
  display: flex;
  justify-content: center;
  position: relative;
  >.bg  {
    position: absolute;
    top:0;
    right:0;
    z-index: -1;
    height:100vh;
    width: 100%;
    background: url(../static/bg.jpg) no-repeat ; 
    background-size: cover;
    filter: blur(5px);
  }
   .container {
        min-width: 600px;
        width: 50%;
        height: 400px;
        margin-top: 160px;
        border-radius: 4px;
        overflow: hidden;
        box-shadow:0 1px 3px 0 rgba(0,0,0,0.25);
        background: #fff;
        color:$maincolor;
        display: flex;
        .art {
            min-width: 280px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            background: $maincolor;
            color: #fff;
            text-align: center;
                .logo {
                    font-size: 160px;
                }
                .title {
                    font-size: 24px;
                    margin-left: 16px;
                }
            }
        .loginOrRegister {
        flex-grow:1;    
        background: #fff;
        padding: 32px;
        }
    }
}
.editPage {
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: #DCDFE6;
  >main {
    flex-grow: 1;
  }
  >main {
    max-width: 1440px;
    min-width: 1024px;
    width: 100%;
    padding: 16px;
    position: relative;
    display: flex;
    align-self: center;
    justify-content: space-around;
    >.editor {
      width: calc(40% - 48px);
      margin-right: 16px;
    }
    >.preview {
      flex: 1;
    }
    >.exit{
      position: absolute;
      right: 48px;
      top: 32px;
    }
  }
}

.viewMode {
  margin-top: 32px;
  align-self: center;
  max-width: 60%; 
  overflow: auto;
  height: calc(100vh - 32px); 
}
svg.icon{
    height: 1em;
    width: 1em;
    color: $maincolor;
    vertical-align: -0.1em;
    font-size:16px;
  }
</style>
