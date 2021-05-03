import Vue from 'vue';
import Meta from 'vue-meta';
import store from '@/store/index';
import router from '@/router/index';
import axios from 'axios';
import VueAxios from 'vue-axios';
import App from '@/App';

Vue.config.devtools = true;
Vue.config.productionTip = false;

Vue.use(Meta);
Vue.use(VueAxios, axios);

const app = new Vue({
  store,
  router,
  render: (h) => h(App, { class: 'page__wrapper' }),
});

app.$mount('#mmag');
