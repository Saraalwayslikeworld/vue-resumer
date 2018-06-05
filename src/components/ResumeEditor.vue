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
      <li v-for="item in resume.config" :key="item.field" v-show="selected === item.field">
        <div v-if="resume[item.field] instanceof Array">
          <div class="subItem" v-for="subitem in resume[item.field]">
            <div class="resumeField" v-for="(value,key) in subitem">
              <label> {{key}} </label>
              <input type="text" v-bind:value="value">
            </div>
            <button class="btn delete"><i class="el-icon-remove"></i></button>
            <button class="btn add"><i class="el-icon-circle-plus"></i></button>
            <hr>
          </div>
        </div>
        <div v-else class="resumeField" v-for="(value,key) in resume[item.field]">
          <label> {{key}} </label>
          <input type="text" v-bind:value="value">
        </div>
      </li>
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
        profile: {'姓名':'','出生年月':'','性别':'','所在城市':''},
        education: [{'学校':'','起始日期':'','专业':'','学历':''}],
        'work history': [{'公司':'','起始日期':'','工作内容':''}],
        projects: [{'项目名称':'','项目内容':''}],
        awards: [{'奖项荣誉':'','具体内容':''}],
        contacts: {QQ:'',Wechat:'',Email:'',Phone:''}
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
      flex-grow: 1;
      > li {
        padding: 24px;
      }
    }
  }
  .resumeField {
    margin: 8px 0;
    > label {
      display: block;
    }
    input[type=text] {
      width: 100%;
      height: 32px;
      padding: 0 8px;
      margin-top: 8px;
      border: 1px solid #fff;
      background: $bgcolor;
      border-radius: 4px;
      outline: none;
      opacity: 0.6;
    }
    
  }
  .subItem {
    position: relative;
    >hr {
      border: none;
      border-top: 1px dashed $maincolor;
      margin-top: 32px;
    }
    >.btn {
      position: absolute;
      font-size: 24px;
      background: #fff;
      color: $maincolor;
      border: none;
      cursor: pointer;
      outline: none;
    }
    .btn:hover {
      color:$bgcolor;
    }
    .delete {
      right: 0px;
      bottom: 3px;
    }
    .add {
      right: 26px;
      bottom: 3px;
    }
  }
  svg.icon {
    width: 32px; height: 32px;
    font-size: 16px;
  }
</style>