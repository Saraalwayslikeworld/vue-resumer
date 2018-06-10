<template>
    <div class="login">
        <el-form>
            <el-form-item>
                <el-input  type="text" prop="name" placeholder="输入用户名"></el-input>
            </el-form-item>
            <el-form-item>
                <el-input  type="password" prop="password" placeholder="输入密码"></el-input>
            </el-form-item>             
        </el-form>   
        <el-button type="primary"  @click="">登录</el-button>      
    </div>  
</template>

<script>

    export default {
        name:'PartLogin'
    }

</script>

<style lang="scss" scoped>
    $maincolor:#409EFF;
    .login {
        margin-top: 16px;
    }
    .submit>.el-input__inner:focus {
        border-color:#dcdfe6;
    }
    .submit>.el-input__inner:hover {
        background: $maincolor;
        color:#fff;
        outline: none;
    }
</style>