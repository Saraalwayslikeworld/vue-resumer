<template>
    <div id="ItemEditor">
        <h3>{{title}}</h3>
        <div class="container" v-for="(item,index) in items" :key="index">  
            <el-form  size="small" label-position=top> 
                <el-form-item v-for="key in keys" :key='key' v-bind:label="labels[key] || key">                     
                    <el-input 
                        v-if="key=='content'" 
                        type="textarea" :rows="3" 
                        :value="item[key]" 
                        @input="changeResumeField(`${field}.${index}.${key}`,$event.target.value)">
                    </el-input>
                    <el-date-picker 
                        v-else-if="key =='duration'" 
                        :value="item[key]" 
                        style="width: 80%" 
                        value-format="yyyy/MM" 
                        format="yyyy-MM" 
                        type="daterange" 
                        range-separator="-" 
                        start-placeholder="开始日期" 
                        end-placeholder="结束日期"
                        @input="changeResumeField(`${field}.${index}.${key}`,$event.target.value)">
                    </el-date-picker>
                    <el-input v-else 
                        :value="item[key]" 
                        @input="changeResumeField(`${field}.${index}.${key}`,$event.target.value)"
                    ></el-input>
                </el-form-item>
            </el-form>
            <button class="remove" v-on:click="delItem(field,index)"><i class="el-icon-delete"></i></button>
            <hr>
        </div>
        <el-button type="primary" class="add" v-on:click="addItem(field)">新增</el-button>
    </div>    
</template>

<script>
    export default {
        name:'ItemEditor',
        props:['items','labels','title','field'],
        computed:{
            keys(){
                return Object.keys(this.items[0])
            }
        },
        methods:{
            changeResumeField(path,value){
                this.$store.commit('updateResume',{path,value})
            },
            delItem(field,index){
                this.$store.commit('delItem',{field,index})
            },
            addItem(field){
                this.$store.commit('addItem',field)
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
    .container {
        position: relative;
        > .remove {
            color: #606266;
            border: none;
            outline: none;
            background: #fff;
            position: absolute;
            top: 0;
            right: 0;
            
        }
        >.remove:hover {
            color: $maincolor;
        }
        >hr {
            border: none;
            border-top: 1px dashed $maincolor;
            margin-bottom: 16px;
        }
    }
</style>
