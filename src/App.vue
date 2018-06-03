<template>
  <div id="app">
    <Topbar/>
    <main>
      <Editor/>
      <Preview/>  
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
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
