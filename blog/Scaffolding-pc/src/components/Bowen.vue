<template lang="pug">
  div.al_wrap
    Header
</template>

<script>
import Header from './Bowen/Header.vue'
export default {
  name: 'bowen',
  data () {
    return {
      
    }
  },
  created () {
  },
  mounted () {
    
  },
  methods: {
    
  },
  components: {
    Header
  }
}
</script>

<style lang="less" scoped>
  @b: #ffffff;
  .al_wrap{
    width: 100%;
    height: 500px;
    overflow: hidden;
    margin: 0 auto;
    box-sizing: border-box;
    border: 1px red solid;
  }
</style>
