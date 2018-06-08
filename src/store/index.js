import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        selected: 'profile',
        previewMode: false,
        config:[
            {field:'profile',icon:'id',title:'个人信息'},
            {field:'workHistory',icon:'work',title:'工作经历'},
            {field:'education',icon:'study',title:'学习经历'},
            {field:'projects',icon:'project',title:'项目经历'},
            {field:'awards',icon:'reward',title:'获奖情况'},
            {field:'contacts',icon:'contact',title:'联系方式'},
        ],
        resume:{
            profile:{name:'王二',birthday:'1995/10',position:'前端工程师',city:'上海',status:'在职'},
            workHistory:[{duration:['2010/01','2013/05'],company:'百度公司',position:'前端工程师',content:` 工作内容：
             1、负责百度网盘文件管理模块前端开发工作，前端采用Vue框架，前端数据无刷新异步处理。 
             2、负责百度云推广活动页前端页面开发工作，使用了各种HTML5效果。
             3、协助其他同事解决前端开发中遇到的技术难点。`}],
            education:[{duration:['2010/01','2013/05'],school:'上海大学',major:'计算机专业',degree:'本科'}],
            projects:[{name:'简历项目',content:'xxxx'}],
            awards: [{name:'奖学金3等奖'}],
            contacts:{qq:'1378762534',wechat:'Wang-er',email:'wanger@163.com',phone:'13056832852'}
        }
    },
    mutations: {
        switchTab(state,value){
            state.selected = value
        },
        preview(state,value){
            state.previewMode = value
        }
    }
})
