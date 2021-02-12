import Vue from 'vue';

import '@/plugins/quasar';

import App from '@/layouts/App.vue';

Vue.config.productionTip = false;

new Vue({
    render: h => h(App)
}).$mount('#app');
