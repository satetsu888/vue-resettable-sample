var Vue = require('vue')
var app = new Vue({
  el: '#app',
  components: {
    'color-component': function (resolve) {
      require(['./color.vue'], resolve)
    }
  }
});
