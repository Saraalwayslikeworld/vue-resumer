<template>
  <div id="Editor">
    <nav>
      <ol>
        <li v-for="item in config" :key="item.field" :class="{active: item.field === selected}" 
            @click="selected = item.field"> 
          <svg class="icon" aria-hidden="true">   
              <use :xlink:href="`#icon-${item.icon}`"></use>
          </svg>
        </li>
      </ol>
    </nav> 
    <ol class="panels">
      <li  v-for="(item,key,index) in config" :key="index" v-show="selected==item.field">
        <div v-if="resume[item.field] instanceof Array" >
          <ItemEditor  v-bind:items="resume[item.field]"   v-bind:title="item.title"  v-bind:labels="labelsCollect[item.field]"  v-bind:field="item.field"/>
        </div>
        <div v-else-if="item.field=='profile'">    
          <ProfileEditor v-bind:profile="resume[item.field]"  v-bind:title="item.title"  v-bind:field="item.field"/> 
        </div>
        <div v-else>
          <ContactEditor v-bind:contacts="resume[item.field]"  v-bind:labels="labelsCollect[item.field]"  v-bind:title="item.title"  v-bind:field="item.field"/>
        </div>
      </li>
    </ol>  
  </div>
</template>


<script>
import ProfileEditor from './EditorProfile.vue'
import ContactEditor from './EditorContact.vue'
import ItemEditor from './EditorItem.vue'

export default {
  name: 'Editor',
  components:{ ProfileEditor,ContactEditor,ItemEditor},
  computed:{
    config(){
      return this.$store.state.config
    },
    labelsCollect(){
      return this.$store.state.labelsCollect
    },
    selected:{
      get(){
        return this.$store.state.selected
      },
      set(value){
        return this.$store.commit('switchTab',value)
      }
    },
    resume(){
      return this.$store.state.resume
    }
  },
}
</script>

<style scoped lang="scss">
  $maincolor:#409EFF;
  #Editor {
    background: #fff;
    box-shadow:0 1px 3px 0 rgba(0,0,0,0.25);
    border-radius: 4px;
    overflow: hidden;
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
        color:#fff ; 
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
  svg.icon{
    height: 32px;
    width: 32px;
    vertical-align: -0.1em;
    font-size:16px;
  }
</style>