import Vuex from 'vuex'
import Vue from 'vue'
import objectPath from 'object-path'
import AV from '../lib/leancloud'
import getAVUser from '../lib/getAVUser'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        selected: 'profile',
        previewMode: false,
        user:{
            id:'',
            username:''
        },
        config:[
            {field:'profile',icon:'id',title:'个人信息'},
            {field:'workHistory',icon:'work',title:'工作经历'},
            {field:'education',icon:'study',title:'学习经历'},
            {field:'projects',icon:'project',title:'项目经历'},
            {field:'awards',icon:'reward',title:'获奖情况'},
            {field:'contacts',icon:'contact',title:'联系方式'},
        ],
        labelsCollect:{
            workHistory:{company:'公司',duration:'起始日期',position:'职位',content:'工作内容'},
            education:{school:'学校',duration:'起始日期',major:'专业',degree:'学位'},
            projects:{name:'项目',content:'项目内容'},
            awards:{name:'奖励荣誉'},
            contacts:{qq:'QQ',wechat:'微信',email:'邮箱',phone:'手机'}
        },
        resume:{
            profile:{name:'王二',birthday:'1995/10',position:'前端工程师',city:'上海',status:'已离职'},
            workHistory:[{duration:'2010/01-2013/05',company:'百度公司',position:'前端工程师',content:` 工作内容：
             1、负责百度网盘文件管理模块前端开发工作，前端采用Vue框架，前端数据无刷新异步处理。 
             2、负责百度云推广活动页前端页面开发工作，使用了各种HTML5效果。
             3、协助其他同事解决前端开发中遇到的技术难点。`}],
            education:[{duration:'2010/09-2014/07',school:'上海交通大学',major:'计算机专业',degree:'本科'}],
            projects:[{name:'简历项目',content:'xxxx'}],
            awards: [{name:'奖学金3等奖'}],
            contacts:{qq:'1101101111',wechat:'Wang-er',email:'wanger@163.com',phone:'13056832852'}
        },
        id:''
    },
    mutations: {
        fetchResume(state){
            if(getAVUser()){                 
                var query = new AV.Query('AllData');
                query.find().then((resume)=>{
                    let avAllData = resume[0]
                    let id = avAllData.id
                    Object.assign(state,JSON.parse(avAllData.attributes.content))
                    state.id = id  
                    console.log('获取数据成功！',state)
                },(error)=>{
                    console.log(error)
                });
            }
        },
        switchTab(state,value){
            state.selected = value
            // localStorage.setItem('state',JSON.stringify(state))
        },
        preview(state,value){
            state.previewMode = value
        },
        updateResume(state,{path,value}){
            objectPath.set(state.resume,path,value)
            // localStorage.setItem('state', JSON.stringify(state))
        },
        addItem(state,field){
            let empty = {}
            Object.keys(this.state.resume[field][0]).map((key)=>{
                empty[key] = ''
            })
            this.state.resume[field].push(empty)
        },
        delItem(state,{field,index}){
            this.state.resume[field].splice(index,1)
        },
        setUser(state,payload){
            Object.assign(state.user,payload)
            console.log(state.user)
        },
        removeUser(state){
            this.state.user.id = ''
        },
        saveResume(state){ 
            let dataString = JSON.stringify(state)
            var AVData = AV.Object.extend('AllData');
            var avData = new AVData();
            var acl = new AV.ACL();
            acl.setReadAccess(AV.User.current(),true) 
            acl.setWriteAccess(AV.User.current(),true)
      
            avData.set('content',dataString);
            avData.setACL(acl)
            avData.save().then((data)=>{
                this.state.id = data.id
                console.log('保存成功！',state)
                },(error)=>{
                console.log('保存失败！',error)
            })
        },
        uploadResume(state){
            let dataString = JSON.stringify(state)
            let avData = AV.Object.createWithoutData('AllData',this.state.id)
            avData.set('content', dataString)
            avData.save().then(()=>{
                console.log('更新成功',state)
            },(error)=>{
                console.log('保存失败！',error)
            })
        }
    },
    actions:{
        uploadOrSaveResume({commit}){
            if(this.state.id){
                commit('uploadResume')
            }else{
                commit('saveResume')
            } 
        }  
    }
})
