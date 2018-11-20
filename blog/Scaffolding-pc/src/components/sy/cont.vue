<template lang="pug">
	div.al_box
		div.J_left
			ul.J_ul(v-for='(item,index) in data')
				li.J_li
					p.J_times
						span.J_time {{item.item_time}}
		div.J_right
			Calendar
			//- (v-on:choseDay="clickDay",	选中某天
			//- 	v-on:changeMonth="changeDate",	左右点击切换月份
			//- 	v-on:isToday="clickToday")	跳到了本月
			//- :markDateMore=arr // 多种不同的标记
			//- :agoDayHide='1514937600' //某个日期以前的不允许点击  时间戳10位
			//- :futureDayHide='1525104000' //某个日期以后的不允许点击  时间戳10位
			//- :sundayStart="true" //默认是周一开始 当是true的时候 是周日开始
</template>

<script>
import Calendar from 'vue-calendar-component'
export default {
	name: 'cont',
	data () {
		return {
			moduleinfo:{
			},
			data: [
				{
					'item_time': '2018年7月17日',
					'item_title': 'js函数的节流与防抖',
					'iten_cont': '在前端开发中有一部分用户行为会频繁的触发事件执行，而对于DOM的操作、资源加载等耗费性能的处理，很可能会导致界面卡顿，甚至浏览器奔溃。函数的节流与防抖就是为了解决类似需求而产生的。1）节流概念：函数的节流就是预定一个函数只有在大于等于执行周期时才会执行，周期内调用不会执行。好像一滴水只有积攒到一定重量才会落下一样。',
					'iten_desc': '@posted @ 2018/11/10 18:28 阿龙丶along ',
					'item_num': '88',
					'item_pl': '88',
					'id': '1'
				},
				{
					'item_time': '2018年7月17日',
					'item_title': 'js函数的节流与防抖',
					'iten_cont': '在前端开发中有一部分用户行为会频繁的触发事件执行，而对于DOM的操作、资源加载等耗费性能的处理，很可能会导致界面卡顿，甚至浏览器奔溃。函数的节流与防抖就是为了解决类似需求而产生的。1）节流概念：函数的节流就是预定一个函数只有在大于等于执行周期时才会执行，周期内调用不会执行。好像一滴水只有积攒到一定重量才会落下一样。',
					'iten_desc': '@posted @ 2018/11/10 18:28 阿龙丶along ',
					'item_num': '88',
					'item_pl': '88',
					'id': '2'
				}
			]
		}	
	},
	methods: {
		charLook (data, index) {
			// console.log(data, index);
		}
	},
	components: {
		Calendar	
	}
}
</script>

<style lang="less" scoped>
	.al_box{
		width: 1200px;
		height: auto;
		overflow: hidden;
		margin: 0px auto;
		margin-top: 15px;
		.J_left{
			width: 890px;
			height: auto;
			overflow: hidden;
			float: left;
			display: block;
			background: saddlebrown;
			.J_ul{
				width: 890px;
				height: auto;
				overflow: hidden;
				.J_li{
					width: 890px;
					height: auto;
					overflow: hidden;
					background: #fff;
					.J_times{
						width: 890px;
						height: 32px;
						overflow: hidden;
						display: block;
						margin-top: 20px;
						.J_time{
							width: 100px;
							height: 32px;
							text-align: center;
							line-height: 32px;
							font-size: 14px;
							background: #45bcf9;
							display: block;
							margin-left: 20px;
						}
					}
				}
			}
		}
		.J_right{
			width: 288px;
			height: auto;
			overflow: hidden;
			display: block;
			float: left;
			margin-left: 22px;
		}
	}
</style>
