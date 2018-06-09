<template>
    <div id="ContactEditor">
        <h3>{{title}}</h3>
        <el-form label-position=left label-width="72px" size="small">
          <el-form-item  v-for="(item,key) in contacts" :key="key" :label="labels[key]||key">
            <el-input :value="item" @input="changeResumeField(`${field}.${key}`,$event.target.value)" style="width:80%"></el-input>
          </el-form-item>
        </el-form>
    </div>    
</template>

<script>
    export default {
        name:'ContactEditor',
        props:['contacts','labels','title','field'],
        methods:{
            changeResumeField(path,value){
                this.$store.commit('updateResume',{path,value})
            }
        }
    }
</script>

<style scoped lang="scss">
    $maincolor:#409EFF;
    h3 {
        margin-bottom: 24px;
        color: $maincolor;
    }
</style>
