<template>
  <div id="app" class="page">
    <header>
      <Topbar class="topbar"/>
    </header>
    <main>
      <Editor class="editor"/>
      <Preview class="preview"/>  
    </main>
  </div>
</template>

<script>
import Topbar from './components/Topbar'
import Preview from './components/ResumePreview'
import Editor from './components/ResumeEditor'

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
  }
}
</script>

<style>
.page {
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: rgb(79, 148, 108);
}
.page>main {
  flex-grow: 1;

}
.page>main {
  max-width: 1440px;
  min-width: 1024px;
  width: 100%;
  margin: 16px;
  display: flex;
  align-self: center;
  justify-content: space-between;
}
main>.editor {
  width: calc(40% - 48px);
  margin-right: 16px;
}
main>.preview {
  flex: 1;
}
</style>
