<template>
    <div id="ContactEditor">
        <h3>联系方式</h3>
        <el-form label-position=left label-width="72px" size="small">
          <el-form-item label="QQ">
            <el-input v-model="contacts.qq" style="width:80%"></el-input>
          </el-form-item>
          <el-form-item label="Wechat">
            <el-input v-model="contacts.wechat" style="width:80%"></el-input>
          </el-form-item>
          <el-form-item label="电话号码">
            <el-input v-model="contacts.phone" style="width:80%"></el-input>
          </el-form-item>
          <el-form-item label="Email">
            <el-input v-model="contacts.email" style="width:80%"></el-input>
          </el-form-item> 
        </el-form>
    </div>    
</template>

<script>
    export default {
        name:'ContactEditor',
        props:['contacts']
    }
</script>

<style scoped lang="scss">
    $maincolor:#409EFF;
    h3 {
        margin-bottom: 24px;
        color: $maincolor;
    }
</style>
