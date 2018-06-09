<template>
  <div id="app">
    <!-- <div class="loginPage"></div> -->
    <div class="editPage">
      <header>
        <Topbar v-show="!previewMode" class="topbar"/>
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

import store from './store/index'

export default {
  name: 'App',
  store,
  components: {
    Topbar,Preview,Editor
  },
  created(){
    document.body.insertAdjacentHTML('afterbegin', icons) 
    let state = localStorage.getItem('state')
    if(state){
      state = JSON.parse(state)
    }
    this.$store.commit('initState',state)
  },
  computed:{
    previewMode:{
      get(){
        return this.$store.state.previewMode
      },
      set(value){
        this.$store.commit('preview',value)
      }
    }
  }
}
</script>

<style lang="scss">
$maincolor:#409EFF;
$bgcolor: rgba(64, 160, 255, 0.6);
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
  svg.icon{
    height: 1em;
    width: 1em;
    fill: currentColor;
    vertical-align: -0.1em;
    font-size:16px;
  }
.viewMode {
  margin-top: 32px;
  align-self: center;
  max-width: 60%; 
  overflow: auto;
  height: calc(100vh - 32px); 
}

</style>
