<template>
  <div id="Editor">
    <nav>
      <ol>
        <li v-for="item in resume.config" :key="item.field" :class="{active: item.field === selected}" 
            @click="selected = item.field"> 
          <svg class="icon" aria-hidden="true">   
              <use :xlink:href="`#icon-${item.icon}`"></use>
          </svg>
        </li>
      </ol>
    </nav> 
    <ol class="panels">
      <li v-for="item in resume.config" :key="item.field" v-show="selected === item.field">{{item.field}}</li>
    </ol>  
  </div>
</template>


<script>

export default {
  name: 'Editor',
  data(){
    return {
      selected: 'profile',
      resume:{
        config:[
          {field:'profile',icon:'id'},
          {field:'education',icon:'study'},
          {field:'work history',icon:'work'},
          {field:'projects',icon:'project'},
          {field:'awards',icon:'reward'},
          {field:'contacts',icon:'contact'},
        ],
        profile:{name:'',birth:''}
      }     
    }
  }
}
</script>

<style scoped lang="scss">
$maincolor:#409EFF;
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
        >use {
          width:24px;
        }
      }
    }
    >.panels {
      flex: 1;
    }
  }
  svg.icon {
    width: 32px; height: 32px;
    font-size: 16px;
  }
</style>