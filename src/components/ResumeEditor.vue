<template>
  <div id="Editor">
    <nav>
      <ol>
        <li v-for="item in resume.config" :key="item.field" :class="{active: item.field === selected}" 
            @click="selected = item.field"> 
          <svg class="icon" aria-hidden="true">   
              <use v-bind:xlink:href="`#icon-${item.icon}`"></use>
          </svg>
        </li>
      </ol>
    </nav> 
    <ol class="panels">
      <li v-show="selected === 'profile'">
        <ProfileEditor v-bind:profile="resume.profile"/> 
      </li>
      <li  v-show="selected === 'workHistory'">
        <ItemEditor v-bind:items="resume.workHistory" :labels="{company:'公司',duration:'起始日期',content:'工作内容'}" title="工作经历"/>
      </li>
      <li  v-show="selected === 'education'">
        <ItemEditor v-bind:items="resume.education" :labels="{'school':'学校',duration:'起始日期',major:'专业',degree:'学位'}" title="学习经历"/>
      </li>
      <li  v-show="selected === 'projects'">
        <ItemEditor v-bind:items="resume.projects" :labels="{name:'项目',content:'项目内容'}" title="项目经历"/>
      </li>
      <li  v-show="selected === 'awards'">
        <ItemEditor v-bind:items="resume.awards" :labels="{name:'奖励荣誉'}" title="获奖情况"/>
      </li>
      <li v-show="selected === 'contacts'">
        <ContactEditor v-bind:contacts="resume.contacts"/>
      </li>
    </ol>  
  </div>
</template>


<script>
import ProfileEditor from './ProfileEditor.vue'
import ContactEditor from './ContactEditor.vue'
import ItemEditor from './ItemEditor.vue'
export default {
  name: 'Editor',
  components:{ ProfileEditor,ContactEditor,ItemEditor},
  data(){
    return {
      selected: 'profile',
      resume:{
        config:[
          {field:'profile',icon:'id'},
          {field:'education',icon:'study'},
          {field:'workHistory',icon:'work'},
          {field:'projects',icon:'project'},
          {field:'awards',icon:'reward'},
          {field:'contacts',icon:'contact'},
        ],
        profile:{name:'',birthday:'',gender:'',status:'',city:''},
        workHistory:[{duration:'',company:'',content:''}],
        education:[{duration:'',school:'',major:'',degree:''}],
        projects:[{name:'',content:''}],
        awards: [{name:''}],
        contacts:{qq:'',wechat:'',email:'',phone:''}
      }     
    }
  }
}
</script>

<style scoped lang="scss">
  $maincolor:#409EFF;
  $bgcolor: rgba(64, 160, 255, 0.6);
  #Editor {
    background: #fff;
    box-shadow:0 1px 3px 0 rgba(0,0,0,0.25);
    border-radius: 4px;
    display: flex;
    > nav {
      min-width: 60px;
      max-width: 80px;
      width: 20%;
      background: $maincolor;
      overflow: auto;
      li{
        width: 100%;
        text-align: center;
        margin: 8px 0;
        padding: 8px 16px;
        color:#fff;
        &.active {
          color: $maincolor;
          background: #fff;
        }
      }
    }
    >.panels {
      overflow-y: auto;
      flex-grow: 1;
      > li {
        padding: 24px;
        height: 100%;
      }
    }
  }
  svg.icon {
    width: 32px; height: 32px;
    font-size: 16px;
  }
</style>