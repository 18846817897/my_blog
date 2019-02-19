<template lang="pug">
  div.al_lunbo
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
      this.data.map((item,index)=>{
        this.$refs.al_li[index].style.background = `url(${item.img}) center center no-repeat`;
        this.$refs.al_li[index].style.backgroundSize = `cover`;
      })
      
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
    border: 1px @b solid;
    margin-top: 20/@lg;
    background-size: cover;
    .al_box{
      width: auto;
      height: 250/@lg;
      overflow: hidden;
      border-radius: 150/@lg;
      display: flex;
      .al_li{
        width: 700/@lg;
        height: 250/@lg;
        overflow: hidden;
        display: block;
      }
    }
  }
</style>
