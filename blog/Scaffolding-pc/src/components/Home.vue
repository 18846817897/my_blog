<template lang="pug">
  div.al_box(ref='homePage')
    div.al_cont
      p.al_title  {{moduleinfo.item_title}}
      p.al_motto  {{moduleinfo.item_motto}}
      p.al_hx
      p.grow(@click='go_grow')  {{moduleinfo.item_grow}}
      p.skill {{moduleinfo.item_skill}}
      p.photo {{moduleinfo.item_photo}}
      p.message {{moduleinfo.item_message}}
      p.al_link  {{moduleinfo.item_more}}
    aplayer(autoplay :music="music", class='J_music')
      div.J_back
</template>
<script>
import Aplayer from 'vue-aplayer'
export default {
  name: 'home',
  data () {
    return {
      moduleinfo: {
        'item_title': 'Along的个人博客',
        'item_motto': 'Do not give up easily ~ Strive',
        'item_grow': '>>我的主页 (Grow up)',
        'item_skill': '>>我的博文 (Post)',
        'item_photo': '>>我的相册 (Photo)',
        'item_message': '>>给我留言 (Leave a message)',
        'item_more': '>>我的社区网站 (My Community Website)'
      },
      music: {
        'title': 'Preparation',
        'author': 'Hans Zimmer/Richard Harvey',
        'url': 'http://www.170mv.com/kw/other.web.rh01.sycdn.kuwo.cn/resource/n1/80/47/3975059790.mp3',
        'pic': 'https://img.alicdn.com/tfs/TB1GMRZmxnaK1RjSZFtXXbC2VXa-640-640.jpg',
        'lrc': '[00:00.00]lrc here\n[00:01.00]aplayer'
      },
      url:{
        "blog": "http://yangwenlong.sxl.cn",
        "blogs": "www.along.ink",
        "git_hub": "https://github.com/YangWenLong123",
        "boke": "https://home.cnblogs.com/u/alongup/"
      },
      clientHeight:'',
      status: false
    }
  },
  methods: {
    go_grow () {
      this.$router.replace('/sy');
    },
  },
  mounted () {
    fetch('http://127.0.0.1:3001/home',{
        credentials:'include'
    }).then(
      res=>res.json()
    ).then(
      data=>console.log(data,'data')
    )
   },
  components: {
    Aplayer
  }
}
</script>
<style lang="less" scoped>
  @font-face {
    font-family: font;
    src: url("../assets/fonts/AaPrincessPeach.ttf")format("truetype");
  }
  @b: #fff;
  @lg: 75rem;
  .al_box{
    width: 100%;
    height: 100%;
    margin: 0 auto;
    overflow: hidden;
    background: url('http://www.ruanyifeng.com/images_pub/pub_355.jpg') top center no-repeat;
    background-size: cover;
    position: relative;
    font-family: font;
    position: relative;
    cursor: pointer;
    box-sizing: border-box;
    // border: 1px red solid;
    .al_cont{
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      margin: auto;
      width: 600px;
      height: 450px;
      border-radius: 10px;
      overflow: hidden;
      background: rgba(0, 0, 0, .3);
      .al_title{
        width: 100%;
        height: 45px;
        overflow: hidden;
        margin: 0 auto;
        line-height: 45px;
        font-size: 25px;
        color: @b;
        text-align: center;
        margin-top: 10px;
        white-space: nowrap;
        text-overflow: ellipsis;
        &:hover{
          color: salmon;
        }
      }
      .al_motto{
        width: 100%;
        height: 30px;
        overflow: hidden;
        margin: 0 auto;
        line-height: 30px;
        font-size: 20px;
        color: @b;
        text-align: center;
        margin-top: 10px;
        white-space: nowrap;
        text-overflow: ellipsis;
        &:hover{
          color: salmon;
        }
      }
      .al_hx{
        width: 90%;
        height: 2px;
        background: @b;
        border-radius: 3px;
        overflow: hidden;
        margin: 0 auto;
        margin-top: 20px;
      }
      .grow{
        width: 90%;
        height: 40px;
        overflow: hidden;
        margin: 0 auto;
        background: rgba(0, 0, 0, .5);
        margin-top: 35px;
        border-radius: 10px;
        color: @b;
        line-height: 40px;
        font-size: 20px;
        text-indent: 10px;
        &:hover{
          color: salmon;
        }
      }
      .skill,.photo,.message,.al_link{
        width: 90%;
        height: 40px;
        overflow: hidden;
        margin: 0 auto;
        background: rgba(0, 0, 0, .5);
        margin-top: 20px;
        border-radius: 10px;
        color: @b;
        line-height: 40px;
        font-size: 20px;
        text-indent: 10px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        &:hover{
          color: salmon;
        }
      }
    }
    .J_music{
      position: relative;
      width: 70px;
      height: 70px;
      overflow: hidden;
      border-radius: 50%;
      .J_back{
        position: absolute;
        width: 3px;
        height: 3px;
        background: darkblue;
        left: 0;
        top: 0;
      }
    }
    .al_music{
      display: block;
      position: absolute;
      width: 40px;
      height: 40px;
      border-radius:50%;
      overflow: hidden;
      right: 26px;
      top: 22px;
      transition: all 60s;
    }
    @media (max-width: 750px){
      .al_cont{
        width: 750/@lg;
        // height: 11rem;
      }
    }
  }
</style>
