<template>
    <div>
        <p style="background-color:{{getBase('color')}}">baseData:{{getBase('color')}}</p>
        <p style="background-color:{{color}}">currentData:{{color}}</p>
        <p><input type=text v-model="color"></p>
        changed: {{changed}} <br>
        <input type=button value="Reset" v-on="click: reset">
        <input type=button value="Update" v-on="click: setAsBase()">
    </div>
</template>

<script>
var resettable = require('./resettable.js');
module.exports = {
    props: ["color"],
    mixins: [resettable]
};
</script>
