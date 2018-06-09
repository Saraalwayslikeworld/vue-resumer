<template>
  <div id="Preview">
    <header>
      <h1 class="name">{{resume.profile.name||"请填写姓名"}}</h1>
      <p class="title">{{resume.profile.position||'请填写职位'}}</p>
      <p class="msg">{{(resume.profile.birthday||'请填写出生年月')+' '+ (resume.profile.city||'请填写城市')}}</p>
      <p class="msg">{{resume.profile.status}}</p>
      <p class="contacts">
        {{resume.contacts.phone||'请填写联系电话'}}     
      </p>
    </header>
    <section v-for="(items,key,index) in resume" :key="index" v-if="index!==0 && index!==5">
      <span class="title" v-if="index!==0">{{config[index].title}}</span>
      <hr v-if="index!==0">
      <li v-for="item in items" :key="item">
        <p class="content" v-for="(value,key) in item" :key="key" v-if="key=='content'">{{ (value||'请填写详细内容') }}</p>
        <span class="time" v-else-if="value instanceof Array">{{ value.join('-')||'请填写日期' }}</span>
        <span class="msg" v-else>{{ (value||'请填写信息') }}</span>
      </li>
    </section>   
    <footer>
      <span>QQ：{{resume.contacts.qq || '请填写信息'}}</span>
      <span>微信：{{resume.contacts.wechat || '请填写信息'}}</span>
      <span>邮箱：{{resume.contacts.email || '请填写信息'}}</span>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'Preview',
  computed:{
    resume(){
      return this.$store.state.resume
    },
    config(){
      return this.$store.state.config
    }
  }
}
</script>

<style scoped lang="scss">
  $maincolor:#409EFF;
  $bgcolor: rgba(64, 160, 255, 0.6);
  * {margin:0;padding:0; font-size:16px;}
  #Preview {
    background: #fff;
    box-shadow:0 1px 3px 0 rgba(0,0,0,0.25);
    border-radius: 4px;
    overflow: auto;
    header {
      height: 180px;
      background: $maincolor;
      padding: 32px;
      color: #fff;
      position: relative;
      h1.name {
        font-size: 100px;
        position: absolute;
        bottom: -20px;
        right: 16%;
      }
      p.title {
         font-size: 24px;
      }
      p{
        font-size: 14px;
        margin-top:8px;
      }
    }
    section{
      margin: 32px 40px;
      .title {
        background: $bgcolor;
        padding: 4px 8px;
        font-size: 16px;
      }
      hr {
        margin: 4px 0;
        border: none;
        border-top: 1px dashed $maincolor;
      }
      li {
        margin-top: 16px;
        span {
          padding: 4px 8px 4px 0;
        }
        .msg {
          color:#303133;
          font-weight: bold;
        }
      }
    }
    footer {
      height: 60px;
      margin-top: 32px;
      padding: 16px 32px;
      background: $maincolor;
      color:#fff;
      display: flex;
      justify-content: space-around;
      align-items: center;
    }
  }
  
</style>