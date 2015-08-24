var Vue = require('vue')
new Vue({
  el: '#app',
  components: {
    'color-component': function (resolve) {
      require(['./color.vue'], resolve)
    }
  }
});
