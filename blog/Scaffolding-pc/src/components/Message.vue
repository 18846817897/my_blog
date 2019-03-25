<template lang="pug">
  div.al_wrap
    div.al_fixed
      div.al_fixedHead
        p.al_title 写下你想说的话
        p.al_close(@click='closeMessage')
      div.al_name
        p.al_nameTitle 输入你的昵称(姓名/花名)
        input.al_iptName(type='text')
      div.al_cont
        p.al_contTitle 许愿：(您还可以再输入{{num}}字)
        textarea.al_iptCont(maxlength="50")
      div.al_btnLy(@click='release')
    div.al_head
      img.al_btn(src='http://www.along.ink/img/send.png',alt='许愿',@click='xy')
    div.al_cont

</template>

<script>
export default {
  name: 'message',
  data () {
    return {
      num: 50
    }
  },
  created () {
    
  },
  mounted () {
    
  },
  methods: {
    xy () { //打开留言板
      alert('1')
    },
    closeMessage () { //关闭留言板

    },
    release () {  //发布留言

    }
  },
  components: {
    
  }
}
</script>

<style lang="less" scoped>
  @b: #ffffff;
  .al_wrap{
    width: 100%;
    min-height: 100%;
    background: url('http://www.along.ink/img/bg.png') center center;
    overflow: hidden;
    margin: 0 auto;
    position: relative;
    .al_fixed{
      width: 380px;
      height: 400px;
      overflow: hidden;
      background: @b;
      position: absolute;
      z-index: 999;
      left: 50%;
      top: 50%;
      transform: translate(-50%,-50%);
      .al_fixedHead{
        width: 380px;
        height: 56px;
        overflow: hidden;
        display: flex;
        align-items: center;
        border-bottom: 1px #E4E6EA solid;
        .al_title{
          width: auto;
          height: 56px;
          overflow: hidden;
          line-height: 56px;
          font-size: 18px;
          color: #666666;
          font-weight: bold;
          margin-left: 120px;
        }
        .al_close{
          width: 29px;
          height: 24px;
          overflow: hidden;
          margin-left: 90px;
          margin-top: 5px;
          background: url('http://www.along.ink/img/close.png') no-repeat;
          cursor: pointer;
          &:hover{
            background-position: -43px 0 ;
          }
        }
      }
      .al_name{
        width: 380px;
        height: 90px;
        overflow: hidden;
        margin-top: 20px;
        // border: 1px red solid;
        box-sizing: border-box;
        .al_nameTitle{
          width: 100%;
          height: 30px;
          overflow: hidden;
          line-height: 30px;
          color: #333333;
          text-indent: 10px;
          font-size: 16px;
        }
        .al_iptName{
          border: none;
          outline: none;
          width: 200px;
          height: 30px;
          overflow: hidden;
          text-indent: 10px;
          margin-top: 15px;
          margin-left: 10px;
          border: 1px #CCCCCC solid;
          border-radius: 3px;
        }
      }
      .al_cont{
        width: 380px;
        height: 150px;
        overflow: hidden;
        box-sizing: border-box;
        // border: 1px red solid;
        .al_contTitle{
          width: 100%;
          height: 30px;
          overflow: hidden;
          line-height: 30px;
          color: #333333;
          text-indent: 10px;
          font-size: 16px;
        }
        .al_iptCont{
          background: #fff;
          border: 1px solid #ccc;
          border-radius: 4px;
          resize: none;
          padding: 5px;
          width: 300px;
          height: 80px;
          outline: none;
          margin-left: 10px;
        }
      }
      .al_btnLy{
        width: 120px;
        height: 50px;
        overflow: hidden;
        background: url('http://www.along.ink/img/send-btn.png') center center no-repeat;
        margin-left: 220px;
      }
    }
    .al_head{
      width: 100%;
      height: 150px;
      overflow: hidden;
      background: url('http://www.along.ink/img/rug.png') center center;
      display: flex;
      justify-content: center;
      align-items: center;
      .al_btn{
        cursor: pointer;
      }
    }
    .al_cont{
      width: 100%;
      height: 200px;
      overflow: hidden;
      margin: 0 auto;
      margin-top: 15px;
    }
  }
</style>
