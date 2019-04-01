<template lang="pug">
  div.al_head
    p.al_title 杨文龙的个人博客
    div.al_header(ref='head', v-for='(item,index) in data',@click='clickHeader(index)') {{item}}
    div.al_login 登录
    div.al_goHome(@click='goHome') 首页
</template>

<script>
export default {
  data () {
    return {
      data: []
    }
  },
  created () {
    this.$http.get("/title").then(res => {
      this.data = res.data.data;
			console.log(res,'标题')
		});
  },
  mounted () {
    setTimeout(()=>{
      this.clickHeader(0);
    },200)
  },
  methods: {
    clickHeader (index) {
      let dom = this.$refs.head;
      dom.forEach((element,idx) => {
        dom[idx].classList.remove("cursor")
      });
      dom[index].classList.add('cursor');
    },
    goHome () {
      this.$router.push('/home')
    }
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
    position: relative;
    min-width: 1080px;
    .al_title{
      width: auto;
      height: 48px;
      overflow: hidden;
      line-height: 48px;
      font-size: 22px;
      color: @b;
      margin-left: 30px;
    }
    .cursor{
      background: #0482BA;
    }
    .al_header{
      width: 100px;
      height: 48px;
      overflow: hidden;
      line-height: 48px;
      text-align: center;
      color: @b;
      font-size: 17px;
      cursor: pointer;
      &:hover{
        background: #0482BA;
      }
    }
    .al_header:nth-child(2){
      margin-left: 40px;
    }
    .al_login{
      width: 100px;
      height: 48px;
      overflow: hidden;
      line-height: 48px;
      text-align: center;
      color: @b;
      font-size: 17px;
      position: absolute;
      top: 0;
      right: 0px;
      cursor: pointer;
      &:hover{
        background: #0482BA;
      }
    }
    .al_goHome{
       width: 100px;
      height: 48px;
      overflow: hidden;
      line-height: 48px;
      text-align: center;
      color: @b;
      font-size: 17px;
      position: absolute;
      top: 0;
      right: 100px;
      cursor: pointer;
      &:hover{
        background: #0482BA;
      }
    }
  }
</style>
