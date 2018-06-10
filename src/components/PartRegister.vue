<template>
    <div class="register">
        <el-form v-model="formData">
            <el-form-item>
                <el-input type="text" prop="name" placeholder="输入用户名" required v-model="formData.username"></el-input>
            </el-form-item>
            <el-form-item>
                <el-input type="password" prop="password" placeholder="输入密码" required v-model="formData.password"></el-input>
            </el-form-item>             
        </el-form>    
        <el-button type="primary"  @click="signUp">注册</el-button>
        <span class="errorMessage">{{ errorMessage }}</span>    
    </div>  
</template>

<script>
    import AV from '../lib/leancloud'
    import getErorrMessage from '../lib/getErrorMessage'

    export default {
        name:'PartRegister',
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
            signUp(){
                console.log('signup')
                let {username,password} = this.formData
                var user = new AV.User();
                user.setUsername(username);
                user.setPassword(password);
                user.signUp().then((loginedUser)=>{
                    this.$emit('success',{
                        username: loginedUser.attributes.username,
                        id: loginedUser.id
                    })
                },(error)=>{
                    this.errorMessage = getErorMessage(error);
                });
            }
        }
    }
</script>

<style lang="scss">
    
    $maincolor:#409EFF;
    .register {
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
