<template>
    <div id="ProfileEditor">
        <h3>{{title}}</h3>
        <el-form label-position=left label-width="72px" size="small">
          <el-form-item label="姓 名">
            <el-input :value="profile.name" style="width:80%" @input="changeResumeField(`${field}.${key}`,$event.target.value)"></el-input>
          </el-form-item>
          <el-form-item label="出生年月">
              <el-date-picker type="date" placeholder="选择日期" :value="profile.birthday"  v-on:change="changeResumeField(`${field}.${key}`,$event.target.value)" style="width:80%" value-format="yyyy/MM" format="yyyy-MM "></el-date-picker>
          </el-form-item>
          <el-form-item label="期望职位">
            <el-input :value="profile.position" style="width:80%" @input="changeResumeField(`${field}.${key}`,$event.target.value)"></el-input>
          </el-form-item>
          <el-form-item label="所在城市">
            <el-input :value="profile.city" style="width:80%" @input="changeResumeField(`${field}.${key}`,$event.target.value)"></el-input>
          </el-form-item>
          <el-form-item label="目前状态">
            <radio-group :value="profile.status" @change="changeResumeField(`${field}.${key}`,$event.target.value)">
              <el-radio label="在职，正在看机会" name="type" ></el-radio>
              <el-radio label="已离职" name="type"></el-radio>
            </radio-group>
          </el-form-item> 
        </el-form>
    </div>    
</template>

<script>
    export default {
        name:'ProfileEditor',
        props:['profile','title','field'],
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
