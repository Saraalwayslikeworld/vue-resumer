<template>
    <div id="ProfileEditor">
        <h3>{{title}}</h3>
        <el-form label-position=left label-width="72px" size="small">
          <el-form-item label="姓 名">
            <el-input :value="profile.name" style="width:80%" @input.native="changeResumeField(`${field}.name`,$event.target.value)"></el-input>
          </el-form-item>
          <el-form-item label="出生年月">
              <el-input  placeholder="填写日期" :value="profile.birthday"  @input.native="changeResumeField(`${field}.birthday`,$event.target.value)" style="width:80%" ></el-input>
          </el-form-item>
          <el-form-item label="期望职位">
            <el-input :value="profile.position" style="width:80%" @input.native="changeResumeField(`${field}.position`,$event.target.value)"></el-input>
          </el-form-item>
          <el-form-item label="所在城市">
            <el-input :value="profile.city" style="width:80%" @input.native="changeResumeField(`${field}.city`,$event.target.value)"></el-input>
          </el-form-item>
          <el-form-item label="目前状态" @change.native="changeResumeField(`${field}.status`,$event.target.value)">
            <el-radio-group :value="profile.status" @change.native="changeResumeField(`${field}.status`,$event.target.value)">
              <el-radio label="在职，正在看机会" name="type" ></el-radio>
              <el-radio label="已离职" name="type"></el-radio>
            </el-radio-group>
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
