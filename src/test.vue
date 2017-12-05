<template>
    <div>
        {{message}}
    </div>
</template>

<script>
const sourceData = require('./_data.js');
const thisData = {
    message: "Hello"
}
export default {
    name: 'test',
    data () {
        return thisData
    }
}
</script>
