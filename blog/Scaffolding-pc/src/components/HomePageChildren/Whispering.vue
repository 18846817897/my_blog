<template lang="pug">
	div.al_box
		el-header
			el-date-picker(
				v-model="value", 
				type="daterange", 
				range-separator="至", 
				start-placeholder="开始日期", 
				end-placeholder="结束日期", 
				change='changeIpt',
				@change="change",
				value-format=" yyyy-MM-dd")
			div.al_btn(ref='alBtn', @click='serchSenten()') 搜索
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
        value: ''
			}
		},
		created () {
		},
		mounted () {
			
		},
		methods: {
			change(){	//选择日期时默认执行
			},
			serchSenten () {	//点击搜索
				let startTime = new Date(this.value[0]).getTime(),
						endTime   = new Date(this.value[0]).getTime();
				if(!isNaN(startTime) && !isNaN(endTime)){
					console.log(startTime,endTime)
				}
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
		background: rgba(0, 0, 0, 0.2);
		border-radius: 10px;
		.al_btn{
			width: 110px;
			height: 40px;
			overflow: hidden;
			border-radius: 5px;
			background: rgba(0,0,0,.5);
			text-align: center;
			line-height: 40px;
			font-size: 16px;
			margin-left: 30px;
			border: 1px @b solid;
			color: #606266;
		}
	}
</style>
