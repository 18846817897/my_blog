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
			el-select(v-model="value2" filterable placeholder="请选择")
				el-option(v-for="item in options", :key="item.value", :label="item.label", :value="item.value")
			div.al_btn2(ref='alBtn2',@click='serchSenten2()') 搜索
		el-main
			p 内容
		el-footer
			el-pagination(:page-size="10", :pager-count="11", layout="prev, pager, next", :total="500", @current-change="handleCurrentChange")
</template>

<script>
export default {
		name: 'weiyu',
		data () {
			return{
				value: '',
				value2: '',
				options: [{
          value: '励志',
          label: '励志'
        }, {
          value: '青春',
          label: '青春'
        }, {
          value: '搞笑',
          label: '搞笑'
        }, {
          value: '情感',
          label: '情感'
        }, {
          value: '幽默',
          label: '幽默'
        }],
			}
		},
		created () {
			this.$http.get("/wy").then(res => {
				console.log(res)
			});
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
			},
			serchSenten2 () {
				alert(this.value2)
			},
			handleCurrentChange (val) {
				console.log(val)
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
		.al_btn,.al_btn2{
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
			color: #DCDFE6;
		}
	}
</style>
