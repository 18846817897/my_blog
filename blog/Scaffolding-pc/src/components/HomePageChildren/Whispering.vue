<template lang="pug">
	div.al_box
		el-header
			p 筛选、搜索
		el-main
			p 内容
		el-footer
			p 翻页
</template>

<script>
export default {
		name: 'weiyu',
		data () {
			return{
				
			}
		},
		created () {
		},
		mounted () {
			
			},
		methods: {
			handleOpen(key, keyPath) {
				console.log(key, keyPath);
			},
			handleClose(key, keyPath) {
				console.log(key, keyPath);
			}
		},
		components: {
		}
}
</script>

<style lang="less" scoped>
	@b: #ffffff;
	.al_box{
		font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
		width: 1200px;
		height: 700px;
		overflow: hidden;
		margin: 20px auto;
		background: rgba(0, 0, 0, 0.4);
		border-radius: 10px;
		p{
		color: @b;
		}
	}
</style>
