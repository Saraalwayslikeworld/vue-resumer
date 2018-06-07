<template>
    <div id="ItemEditor">
        <h3>{{title}}</h3>
        <div class="container" v-for="(item,index) in items" :key="index">  
            <el-form  size="small" label-position=top> 
                <el-form-item v-for="key in keys" :key='key' v-bind:label="labels[key] || key">          
                    <el-input v-if="key!=='duration'&& key !=='content'" v-model="item[key]"></el-input>
                    <el-input v-if="key=='content'" type="textarea" :rows="2" v-model="item[key]"></el-input>
                    <el-date-picker v-if="key=='duration'" v-model="item[key]" style="width: 80%" format="yyyy-MM" type="daterange" range-separator="-" start-placeholder="开始日期" end-placeholder="结束日期"></el-date-picker>
                </el-form-item>
            </el-form>
            <button class="remove" v-on:click="delItem(index)"><i class="el-icon-delete"></i></button>
            <hr>
        </div>
        <el-button type="primary" class="add" v-on:click="addItem">添加项</el-button>
    </div>    
</template>

<script>
    export default {
        name:'ItemEditor',
        props:['items','labels','title'],
        computed:{
            keys(){
                return Object.keys(this.items[0])
            }
        },
        methods:{
            addItem(){
                let empty = {}
                this.keys.map((key)=>{
                    empty[key] = ''
                })
                this.items.push(empty)
            },
            delItem(index){
                if(index==0){
                    alert('至少要有一项！')
                    return
                }
                this.items.splice(index,1)
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
            color: $maincolor;
            border: none;
            outline: none;
            background: #fff;
            position: absolute;
            top: 0;
            right: 0;
        }
        >hr {
            border: none;
            border-top: 1px dashed $maincolor;
            margin-bottom: 16px;
        }
    }
</style>
