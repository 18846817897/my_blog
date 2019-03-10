<template lang="pug">
  div.al_foot
    div.al_box
      p.al_bq COPYRIGHT 2019 along. 版权所有 翻版必究
</template>

<script>
export default {
  name: 'foot',
  data () {
    return {
    }
  }
}
</script>

<style lang="less" scoped>
  @lg: 75rem;
  @b: #ffffff;
  .al_foot{
    width: 100%;
    overflow: hidden;
    margin: 0 auto;
    box-sizing: border-box;
    background: rgba(0,0,0,.8);
    .al_box{
      width: 1200px;
      height: auto;
      overflow: hidden;
      margin: 0 auto;
      box-sizing: border-box;
      .al_bq{
        width: 100%;
        height: 20px;
        overflow: hidden;
        line-height: 20px;
        font-size: 16px;
        color: @b;
        text-align: center;
        margin-top: 50px;
        margin-bottom: 50px;
      }
    }
  }
</style>
