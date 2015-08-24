<template>
    <div>
        <p>name: <input type=text v-model="name"></p>
        <p>nickname: <input type=text v-model="nickname"></p>
        <p>age: <input type=range min=0 max=200 v-model="age">{{age}}</p>

        changed: {{changed}} <br>
        <input type=button value="Reset" v-on="click: reset">
        <input type=button value="Update" v-on="click: setAsBase()">
    </div>
</template>

<script>
var resettable = require('vue-resettable');
module.exports = {
    props: ["name", "nickname", "age" ],
    mixins: [resettable]
};
</script>
