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
				@change="change"
				value-format=" yyyy-MM-dd")
			div.al_btn(ref='alBtn', @click='serchSenten()') 搜索
			el-select(v-model="value2" filterable placeholder="请选择")
				el-option(v-for="item in options", :key="item.value", :label="item.label", :value="item.value")
			div.al_btn2(ref='alBtn2',@click='serchSenten2()') 搜索
		el-main
			div.al_txt(v-for='(item,index) in data', :data='item.category')
				div.al_txtCont {{item.id}}. {{item.cont}}
				div.al_desc 
					p.J_al_descTime 发表时间：{{item.time}}
					p.J_al_sescCate 分类:{{item.category}}
		el-footer
			el-pagination(:page-size="10", :pager-count="11", layout="prev, pager, next", :total="100", @current-change="handleCurrentChange")
</template>

<script>
export default {
		name: 'weiyu',
		data () {
			return{
				value: '',
				value2: '',
				options: [
					{value: '励志',label: '励志'}, 
					{value: '青春',label: '青春'}, 
					{value: '搞笑',label: '搞笑'}, 
					{value: '情感',label: '情感'}, 
					{value: '幽默',label: '幽默'}
				],
				data: '',
				newdata: ''	,//总数据
				dataPage: ''
			}
		},
		created () {
			this.$http.get("/wy").then(res => {
				console.log(res,'微语');
				let data = res.data.data
				let arr = []; // 创建数组分割数
				for (var i = 0; i < data.length; i += 5) { // 对数据进行分割处理
					arr.push(data.slice(i, i + 5));
				}
				this.data = arr[0];
				this.newdata = this.dataPage = arr;
			});
		},
		mounted () {
			setTimeout(()=>{
			
			},200)
		},
		methods: {
			change(){	//选择日期时默认执行
			},
			serchSenten () {	//日期范围搜索
				let startTime = new Date(`${this.value[0]}`).getTime(),
						endTime   = new Date(`${this.value[1]}`).getTime(),
						arr = [],
						arr2 = [];
				if(!isNaN(startTime) && !isNaN(endTime)){
					this.newdata.map((item,index)=>{
						item.forEach((itm,idx) => {
							let time = new Date(`${itm.time}`).getTime();
							if(time >= startTime && time <= endTime){
								arr.push(itm);
							}
						});
					})
					for(let i=0;i<arr.length;i+=5){
						arr2.push(arr.slice(i,i+5))
					}
					// console.log(arr2,'arr2');
					this.data = arr2[0];
					this.dataPage = arr2;
				}
			},
			serchSenten2 () {	//模糊搜索
				let value = this.value2;
				let arr = [];
				let arr2 = []; // 创建数组分割数
				this.newdata.map((item,index)=>{
					item.map((itm,idx)=>{
						if(itm.category === value){
							arr.push(itm);
						}
					})
				})
				for (var i = 0; i < arr.length; i += 5) { // 对数据进行分割处理
					arr2.push(arr.slice(i, i + 5));
				}
				this.data = arr2[0];
				this.dataPage = arr2;
			},
			handleCurrentChange (val) {	//分页
				this.data = this.dataPage[val-1]
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
		// height: 700px;
		overflow: hidden;
		margin: 20px auto;
		background: rgba(0, 0, 0, 0.2);
		border-radius: 10px;
		.al_btn,.al_btn2{
			width: 110px;
			height: 40px;
			overflow: hidden;
			border-radius: 5px;
			// background: rgba(0,0,0,.5);
			text-align: center;
			line-height: 40px;
			font-size: 16px;
			margin-left: 30px;
			border: 1px @b solid;
			color: #DCDFE6;
			margin-right: 130px;
		}
		.al_txt{
			width: 1140px;
			overflow: hidden;
			color: @b;
			background: rgba(0,0,0,.5);
			border-radius: 20px;
			margin-bottom: 20px;
			// border: 1px @b solid;
			.al_txtCont{
				width: 1100px;
				height: auto;
				overflow: hidden;
				line-height: 23px;
				font-size: 16px;
				color: #DCDFE6;
				margin: 0 auto;
				margin-top: 10px;
				&:hover{
					color: salmon;
				}
			}
			.al_desc{
				width: 1100px;
				height: 30px;
				overflow: hidden;
				margin: 0 auto;
				// border: 1px red solid;
				display: flex;
				align-items: center;
				.J_al_descTime{
					margin-left: 880px;
					&:hover{
					color: salmon;
				}
				}
				.J_al_sescCate{
					margin-left: 30px;
					&:hover{
					color: salmon;
				}
				}
			}
		}
		.al_txt:first-child{
			margin-top: 10px;
		}
	}
</style>
