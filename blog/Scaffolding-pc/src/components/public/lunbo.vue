<template lang="pug">
  div.al_lunbo
    div.J_radis
      p.J_yd(v-for='(item,index) in data',ref='al_yd')
    ul.al_box(ref='al_box')
      li.al_li(v-for='(item,index) in data',ref='al_li')
</template>

<script>
export default {
  name: 'lunbo',
  data () {
    return {
      data: [
        {"img": "http://www.along.ink/img/003.jpg",'id': '0'},
        {"img": "http://www.along.ink/img/006.jpg",'id': '1'},
        {"img": "http://www.along.ink/img/013.jpg",'id': '2'},
        {"img": "http://www.along.ink/img/014.jpg",'id': '3'},
        {"img": "http://www.along.ink/img/015.jpg",'id': '4'},
        {"img": "http://www.along.ink/img/016.jpg",'id': '5'}
      ]
    }
  },
  mounted () {
    this.load();
  },
  methods: {
    load () {
      let width = this.$refs.al_box.style.width = (this.data.length * 700 / 75) + 'rem';
      let length = this.data.length;
      this.data.map((item,index)=>{
        this.$refs.al_li[index].style.background = `url(${item.img}) center center no-repeat`;
        this.$refs.al_li[index].style.backgroundSize = `cover`;
      })
      let num = 0;
      clearInterval(time);
      let time = setInterval(()=>{
        num++;
        if(num > length-1){
          this.$refs.al_box.style.transition = `all 3s`;
          this.$refs.al_box.style.transform = `translate(0rem)`;
          num = 0;
        }
        this.style(length);
        this.$refs.al_yd[num].style.background = `crimson`;
        this.$refs.al_box.style.transition = `all 1.5s`;
        this.$refs.al_box.style.transform = `translate(-${700/75*num}rem)`;
      },2500)
    },
    style (length) {
      for(let i=0;i<=length-1;i++){
        this.$refs.al_yd[i].style.background = `#000000`;
      }
    }
  }
}
</script>

<style lang="less" scoped>
  @lg: 75rem;
  @b: #ffffff;
  ul li{
    list-style: none;
  }
  .al_lunbo{
    width: 700/@lg;
    height: 250/@lg;
    border-radius: 150/@lg;
    overflow: hidden;
    margin: 0 auto;
    background: rgba(0,0,0,.3);
    // border: 1px @b solid;
    margin-top: 20/@lg;
    background-size: cover;
    .J_radis{
      width: 250/@lg;
      height: 50/@lg;
      overflow: hidden;
      border-radius: 10/@lg;
      position: fixed;
      left: 50%;
      transform: translateX(-50%);
      top: 5.6rem;
      // border: 1px @b solid;
      z-index: 999;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .J_yd{
        width: 25/@lg;
        height: 25/@lg;
        overflow: hidden;
        display: block;
        border-radius: 50%;
        background: #000000;
      }
      .J_yd:nth-child(1){
        background: crimson;
      }
    }
    .al_box{
      width: auto;
      height: 250/@lg;
      overflow: hidden;
      border-radius: 150/@lg;
      display: flex;
      position: relative;
      .al_li{
        width: 700/@lg;
        height: 250/@lg;
        overflow: hidden;
        display: block;
        border-radius: 150/@lg;
      }
    }
  }
</style>
