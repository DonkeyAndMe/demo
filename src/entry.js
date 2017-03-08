import Vue from 'vue'
import Home from './js/Home.vue'

new Vue({
	el: '#app',
	template: '<Home/>',//如果是用render这个函数的话，这个模板渲染可以去掉被render函数所替代。
	render: function (h) {
		return h( Home )
	}
})