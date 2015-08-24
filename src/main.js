var Vue = require('vue')
new Vue({
  el: '#app',
  components: {
    'color-component': require('./color.vue')
  }
});
