<template lang="pug">
  div.al_wrap
    div.al_fixed(ref='fixed')
      div.al_fixedHead
        p.al_title 写下你想说的话
        p.al_close(@click='closeMessage')
      div.al_name
        p.al_nameTitle 输入你的昵称(姓名/花名)
        input.al_iptName(type='text',ref='iptName')
      div.al_cont
        p.al_contTitle 留言：(您还可以再输入{{num}}字)
        textarea.al_iptCont(maxlength="50",ref='iptCont')
      div.al_btnLy(@click='release')
    div.al_head
      div.al_headBox
        p.al_btn(@click='xy') 我要许愿
        p.al_goHome(@click='goHome') 回到首页
    div.al_cont
      div.al_wrap(v-for='(item,index) in data')
        p.al_wrapTit
           span.al_wrapName {{item.name}}
           span.al_wrapIndex No.{{index+1}}
        p.al_wrapCont
          span.al_conts {{item.cont}}
        p.al_wrapFoot
          span.al_wrapTime {{item.time}}
</template>

<script>
import fetchJsonp from 'fetch-jsonp'
export default {
  name: 'message',
  data () {
    return {
      num: 50,
      data: []
    }
  },
  created () {
    
  },
  mounted () {
    this.xcRelease();
  },
  methods: {
    xy () { //打开留言板
      this.$refs.fixed.style.display = 'block';
    },
    closeMessage () { //关闭留言板
      this.$refs.fixed.style.display = 'none';
    },
    release () {  //留言
      let name = this.$refs.iptName.value,
          cont = this.$refs.iptCont.value;
      if(name === ''){
        this.$refs.iptName.value = this.$refs.iptCont.value = '';
        alert('姓名不可以为空')
      }else if(cont === ''){
        this.$refs.iptName.value = this.$refs.iptCont.value = '';
        alert('内容不可以为空')
      }else if(name !== '' && cont !== ''){
        let self = this;
        fetchJsonp('//t.alicdn.com/t/gettime').then(function(response) {
          return response.json()
        }).then(function(json) {
          let nowTime = json.time*1000;
          let serveryear = new Date(nowTime).getFullYear();
          let serverMon = new Date(nowTime).getMonth() + 1;
          let serverD = new Date(nowTime).getDate();
          let serverHous = new Date(nowTime).getHours();
          let serverMin = new Date(nowTime).getMinutes();
          let serverSec = new Date(nowTime).getSeconds();
          serverD = serverD < 10 ? '0' + serverD : serverD;
          serverMon = serverMon < 10 ? '0' + serverMon : serverMon;
          serverHous = serverHous < 10 ? '0' + serverHous : serverHous;
          serverMin = serverMin < 10 ? '0' + serverMin : serverMin;
          serverSec = serverSec < 10 ? '0' + serverSec : serverSec;
          let sertime_day = serveryear + '-' + serverMon + '-' + serverD + ' ' + serverHous + ':' + serverMin + ':' + serverSec;
          let data = {
            'name': name,
            'cont': cont,
            'time': sertime_day
          }
          self.$http.post('https://wd3361031454uphelu.wilddogio.com/ly.json',data).then(res=>{
            console.log(res,'留言成功');
            self.$refs.fixed.style.display = 'none';
            self.$refs.iptName.value = self.$refs.iptCont.value = '';
            self.xcRelease();
          })
        }).catch(function(ex) {
          console.log('parsing failed', ex) // 此处是数据请求失败后的处理
        })
      }
    },
    xcRelease () {  //查询留言
      this.$http.get('https://wd3361031454uphelu.wilddogio.com/ly.json').then(res=>{
        console.log(res,'默认查询所有留言');
        let data = res.data,
            arr = [];
        for(let index in data){
          arr.push({
            'name': data[index].name,
            'cont': data[index].cont,
            'time': data[index].time
          })
        }
        this.data = arr;
      })
    },
    goHome () { //回到首页
      this.$router.push('/home')
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
      display: none;
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
        cursor: pointer;
      }
    }
    .al_head{
      width: 100%;
      height: 150px;
      overflow: hidden;
      background: url('http://www.along.ink/img/rug.png') center center;
      display: flex;
      justify-content: center;
      // justify-content: space-around;
      align-items: center;
      .al_headBox{
        width: 310px;
        height: 40px;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .al_btn,.al_goHome{
          cursor: pointer;
          width: 140px;
          height: 40px;
          overflow: hidden;
          border-radius: 25px;
          text-align: center;
          line-height: 40px;
          color: @b;
          font-size: 17px;
          background: #7CAF31;
        }
      }
    }
    .al_cont{
      width: 1200px;
      // height: 200px;
      overflow: hidden;
      margin: 0 auto;
      margin-top: 15px;
      // display: flex;
      // justify-content: space-around;
      // flex-wrap: wrap;
      .al_wrap{
        width: 235px;
        height: auto;
        overflow: hidden;
        float: left;
        .al_wrapTit{
          display: block;
          width: 235px;
          height: 58px;
          overflow: hidden;
          background: url('http://www.along.ink/img/a1_1.gif') center center no-repeat;
          background-size: 100% 100%;
          display: flex;
          align-items: center;
          .al_wrapName,.al_wrapIndex{
            display: block;
            width: auto;
            height: 58px;
            line-height: 95px;
            margin-left: 20px;
            color: #333333;
          }
          .al_wrapIndex{
            margin-left: 130px;
            color: #81C01A;
          }
        }
        .al_wrapCont{
          width: 235px;
          height: 80px;
          overflow: hidden;
          background: url('http://www.along.ink/img/a1_2.gif') center center no-repeat;
          background-size: 100% 100%;
          .al_conts{
            display: block;
            width: 210px;
            height: 70px;
            overflow: hidden;
            box-sizing: border-box;
            margin-left: 20px;
            margin-top: 10px;
            // border: 1px red solid;
            text-indent: 20px;
            color: #333333;
            text-overflow:ellipsis;
            display:-webkit-box;
            -webkit-line-clamp:4;
            -webkit-box-orient:vertical;
            line-height: 17px;
          }
        }
        .al_wrapFoot{
          width: 235px;
          height: 72px;
          overflow: hidden;
          background: url('http://www.along.ink/img/a1_3.gif') center center no-repeat;
          background-size: 100% 100%;
          .al_wrapTime{
            display: block;
            width: 150px;
            overflow: hidden;
            height: 20px;
            box-sizing: border-box;
            // border: 1px red solid;
            margin-top: 30px;
            margin-left: 80px;
          }
        }
      }
    }
  }
</style>
