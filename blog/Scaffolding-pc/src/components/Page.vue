<template lang="pug">
  div(class='al_box')
    ul(class='al_cont')
      li(class='al_li', v-for='(item, index) in this.data')
        img(v-lazy='item', class='al_pic')
    div(class='block')
      span(class="demonstration")
      el-pagination(
        @current-change="handleCurrentChange", 
        :current-page.sync="currentPage3", 
        :page-size="2",
        layout="prev, pager, next, jumper", 
        :total="10")
    span(@click='home', v-along:column="'red'", class='span') {{this.desc | size}}
    my-component
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      currentPage3: 1,  //默认显示页数
      data: null,  //数据存储
      desc: '点击跳转！'
    }
  },
  // 组件内的路由导航守卫
  beforeRouteEnter(to, from, next) {
    next(vm => {
      // 通过 vm 参数访问组件实例
      if (vm.$store.state.isLogin) {
      }else{
        console.log('组件内守卫');
      }
    })
  },
  beforeRouteLeave(to, from, next) {
    if(confirm("确定离开吗？") == true){
      next()   //跳转到另一个路由
    }else{
      next(false);//不跳转
    }
  },
  created () {
    this.data = this.$store.state.url.slice(0,2)
  },
  mounted () {
    // console.log(this.data)
  },
  methods: {
    handleCurrentChange(val) {
      this.data = this.$store.state.url.slice((val-1)*2,val*2)
    },
    home () {
      this.$router.replace('/home')
    }
  }
}
</script>

<style lang="less" scoped>
  @lg: 75rem;
  ul li{
    list-style: none;
  }
  .al_box{
    width: 1200px;
    height: 1800px;
    overflow: hidden;
    margin: 0 auto;
    border: 1px crimson solid;
    .al_cont{
      width: 700px;
      height: 300px;
      overflow: hidden;
      margin: 0 auto;
      .al_li{
        width: 300px;
        height: 300px;
        display: block;
        overflow: hidden;
        float: left;
        .al_pic{
          display: block;
          width: 300px;
          height: 300px;
          overflow: hidden;
        }
      }
    }
    .span{
      display: block;
      width: 100px;
      height: 30px;
      border: 1px red solid;
      text-align: center;
      line-height: 30px;
    }
  }
  </style>
