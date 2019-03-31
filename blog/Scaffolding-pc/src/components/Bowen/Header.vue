<template lang="pug">
  div.al_head
    p.al_title 杨文龙的个人博客
</template>

<script>
export default {
  data () {
    return {
      
    }
  },
  created () {
    this.$http.get("/title").then(res => {
			console.log(res,'标题')
		});
  },
  mounted () {
    
  },
  methods: {
    
  }
}
</script>

<style lang="less" scoped>
  @b: #ffffff;
  @l: #0593d3;
  .al_head{
    width: 100%;
    height: 48px;
    overflow: hidden;
    margin: 0 auto;
    background: @l;
    display: flex;
    .al_title{
      width: auto;
      height: 48px;
      overflow: hidden;
      line-height: 48px;
      font-size: 22px;
      color: @b;
      margin-left: 30px;
    }
  }
</style>
