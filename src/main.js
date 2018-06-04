// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import 'normalize.css'        // 统一默认样式
import './assets/reset.scss'  // 修改默认样式
import { Button,Icon} from 'element-ui';

Vue.use(Button,{ size: 'x-small', zIndex: 3000 })
Vue.use(Icon,{ size: 'small', zIndex: 3000 })

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App />'
})
