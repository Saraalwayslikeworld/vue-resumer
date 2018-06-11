<template>
    <div class="login">
        <el-form v-model="formData">
            <el-form-item>
                <el-input type="text" prop="name" placeholder="输入用户名" required v-model="formData.username"></el-input>
            </el-form-item>
            <el-form-item>
                <el-input type="password" prop="password" placeholder="输入密码" required v-model="formData.password"></el-input>
            </el-form-item>             
        </el-form>   
        <el-button type="primary"  @click="signIn">登录</el-button>  
        <span class="errorMessage">{{ errorMessage }}</span>     
    </div>  
</template>

<script>
import AV from '../lib/leancloud'
import getErrorMessage from '../lib/getErrorMessage'
import getAVUser from '../lib/getAVUser'

export default {
    name:'PartLogin',   
    data(){
        return{
            formData:{
                username:'',
                password:''
            },
            errorMessage:''
        }
    },
    methods:{
        signIn(){
            let {username,password} = this.formData
            AV.User.logIn(username,password).then(()=>{
                this.$emit('success', getAVUser())
            },(error)=>{
                this.errorMessage = getErrorMessage(error);
            });
        }
    }
}

</script>

<style lang="scss" scoped>
    .login {
        margin-top: 16px;
    }
</style>