import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/css/tailwind.css'
import VuePaginate from 'vue-paginate'

Vue.use(VuePaginate)
Vue.config.productionTip = false
Vue.mixin({
  data: function() {
    return {
      paginate: ["postPagine", "photoPagine", "albumPagine"],
    };
  },

});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
