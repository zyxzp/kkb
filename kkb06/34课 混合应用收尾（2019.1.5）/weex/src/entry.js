/*global Vue*/

/* weex initialized here, please do not move this line */
const App = require('@/index.vue');
/* eslint-disable no-new */
new Vue(Vue.util.extend({el: '#root'}, App));
