<template>
    <div>
        <p style="background-color:{{getBase('color')}}">baseData:{{getBase('color')}}</p>
        <p style="background-color:{{color}}">currentData:{{color}}</p>
        <p><input type=text v-model="color"></p>
        changed: {{changed("color")}} <br>
        <input type=button value="Reset" v-on="click: reset">
        <input type=button value="Update" v-on="click: update()">
    </div>
</template>

<script>
var resettable = require('vue-resettable');
module.exports = {
    props: ["color"],
    mixins: [resettable]
};
</script>
