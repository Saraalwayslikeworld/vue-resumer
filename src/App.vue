<template>
  <div id="app">
    <div class="loginPage"></div>
    <div class="editPage">
      <header>
        <Topbar class="topbar"/>
      </header>
      <main>
        <Editor class="editor"/>
        <Preview class="preview"/>  
      </main>
  </div>
  </div>

</template>

<script>
import Topbar from './components/Topbar'
import Preview from './components/ResumePreview'
import Editor from './components/ResumeEditor'
import icons from './assets/icons'

export default {
  name: 'App',
  data: function(){
    return {
      resume:{
        profile:{name:'',birthday:'',gender:'',status:'',workyear:'',city:'',expectCity:'',expectWork:''},
        workHistory:{duration:'',company:'',content:''},
        studyHistory:{duration:'',school:'',major:'',degree:''},
        projects:{name:'',content:''},
        contacts:{qq:'',wechat:'',email:'',phone:''}
      }
    }
  },
  components: {
    Topbar,Preview,Editor
  },
  created(){
    document.body.insertAdjacentHTML('afterbegin', icons) 
  }

}
</script>

<style lang="scss">
$maincolor:#409EFF;
.editPage {
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: $maincolor;
  >main {
    flex-grow: 1;
  }
  >main {
    max-width: 1440px;
    min-width: 1024px;
    width: 100%;
    // margin: 16px 0;
    padding:  16px;
    display: flex;
    align-self: center;
    justify-content: space-between;
    >.editor {
      width: calc(40% - 48px);
      margin-right: 16px;
    }
    >.preview {
      flex: 1;
    }
  }
}


</style>
