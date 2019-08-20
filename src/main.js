import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import PortalVue from 'portal-vue'

import VModal from 'vue-js-modal';
import VueTelInput from 'vue-tel-input';

require('@/assets/css/base.css');

window.axios = require('axios');

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

Vue.use(VueTelInput);
Vue.use(VModal, {
	dynamic: true,
});
Vue.use(PortalVue);

Vue.config.productionTip = false

new Vue({
	data() {
		return {
			urls: {
				base: 'https://www.korapatti.com/projects/mothersserve/code',
				api: 'https://www.korapatti.com/projects/mothersserve/code/mobileapp_api/api'
			}
		}
	},

	router,
	store,

	methods: {
		handleSCroll (event) {
			let header = document.querySelector(".header-bar");

			if (window.scrollY > 50 && ! header.className.includes('sticky')) {
				header.classList.add('sticky');
			} else if (window.scrollY < 50) {
				header.classList.remove('sticky');
			}
		}
	},

	created() {
		window.addEventListener('scroll', this.handleSCroll);
	},

	destroyed() {
		window.removeEventListener('scroll', this.handleSCroll);
	},

	render: h => h(App),
}).$mount('#app')
