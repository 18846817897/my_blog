<template lang="pug">
  div.J_wrap
    div.J_box(v-show='ifShow',ref='J_box')
      div.J_title
        p.J_photo
          img.J_img(v-lazy="moduleinfo.item_pic", ref='pic')
        p.J_txt {{moduleinfo.item_txt}}
        p.J_desc {{moduleinfo.item_desc}}
      ul.J_header
        router-link.J_header_cont(tag="li", :to='item.path' ,v-for='(item, key, index) in moduleinfo.items', :key='item.id', :data-id='item.id' ref='li') {{item.item_cont}}
        el-tooltip(content="1179273569" placement="top")
          el-button QQ
        el-tooltip(content="along17375354556" placement="top", class='j_wx')
          el-button 微信
      router-view
      Foot
</template>
<script>
import Aplayer from 'vue-aplayer'
import Foot from './Foot.vue'
export default {
  name: 'sy',
  data () {
    return {
      ifShow: true,
      moduleinfo: {
        'item_pic': 'https://img.alicdn.com/tfs/TB1GMRZmxnaK1RjSZFtXXbC2VXa-640-640.jpg',
        'item_txt': '随行笔记,分享生活，分享技术',
        'item_desc': '选择了就要努力去做，不要轻易的放弃',
        'items': [
          {'item_cont': 'Home','id': '1', 'path': '/sy/cont'},
          {'item_cont': '微语','id': '2', 'path': '/sy/whisp'},
          {'item_cont': '简介','id': '3', 'path': '/sy/brief'},
          {'item_cont': '首页','id': '4', 'path': '/'},
        ]
      },
       music: {
         'title': 'Preparation',
        'author': 'Hans Zimmer/Richard Harvey',
        'url': 'http://www.170mv.com/kw/other.web.rh01.sycdn.kuwo.cn/resource/n1/80/47/3975059790.mp3',
        'pic': 'https://img.alicdn.com/tfs/TB1GMRZmxnaK1RjSZFtXXbC2VXa-640-640.jpg',
        'lrc': '[00:00.00]lrc here\n[00:01.00]aplayer'
      },
    }
  },
  created () {
  },
  mounted () {
  },
  methods: {
  },
  components: {
    Aplayer,Foot
  }
}
</script>

<style lang="less" scoped>
  @b: #fff;
  ul li {
    list-style: none;
  }
  .cursor{
    color: salmon !important;
  }
  .J_wrap{
    width: 100%;
    height: auto;
  }
  .J_box{
    margin: 0 auto;
    overflow: hidden;
    background: url('http://www.ruanyifeng.com/images_pub/pub_57.jpg') top center no-repeat;
    background-size: cover;
    position: relative;
    cursor: pointer;
    .J_title{
      width: 1200px;
      height: 104px;
      overflow: hidden;
      margin: 0 auto;
      margin-top: 45px;
      .J_photo{
        width: 104px;
        height: 104px;
        border-radius: 50%;
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        align-items: center;
        display: block;
        float: left;
        .J_img{
          display: block;
          width: 99px;
          height: 99px;
          border-radius: 50%;
          &:hover{
            transform: rotate(360deg);
            transition: All 1s ease-in-out;
          }
        }
      }
      .J_txt{
        display: block;
        float: left;
        width: 1096px;
        height: 74px;
        overflow: hidden;
        line-height: 74px;
        font-size: 28px;
        color: @b;
        text-indent: 10px;
        &:hover{
          color: salmon;
        }
      }
      .J_desc{
        display: block;
        float: left;
        width: 1096px;
        height: 50px;
        overflow: hidden;
        line-height: 40px;
        font-size: 18px;
        color: @b;
        text-indent: 10px;
        &:hover{
          color: salmon;
        }
      }
    }
    .J_music{
      width: 70px;
      height: 70px;
      overflow: hidden;
      border-radius: 50%;
    }
    .J_header{
      width: 1200px;
      min-width: 850px;
      height: 50px;
      overflow: hidden;
      margin: 0 auto;
      margin-top: 20px;
      background: rgba(245, 239, 239,.4);
      border-radius: 8px;
      position: relative;
      .router-link-active{
        color: salmon !important;
      }
      .J_header_cont{
        width: 140px;
        height: 50px;
        overflow: hidden;
        line-height: 50px;
        text-align: center;
        color: @b;
        font-size: 16px;
        float: left;
        display: block;
        &:hover{
          color: salmon;
        }
      }
      .J_header_cont:nth-child(4){
        color: @b !important;
      }
    }
    .styleObject{
      color: 'salmon';
      font-weight: bold;
    }
  }
</style>

