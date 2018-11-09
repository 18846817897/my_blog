<template lang="pug">
	div.al_box
		div.J_left
			

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
			url: [
				{'item_pic': '//cdn.duanliang920.com/uploads/images/1534219822974.jpeg'},
				{'item_pic': '//cdn.duanliang920.com/uploads/images/1534219833362.jpeg'},
				{'item_pic': '//cdn.duanliang920.com/uploads/images/1534219829691.jpeg'},
			],
			data: [
				{
					'item_pic': '',
					'item_title': '第一篇博文',
					'item_photo': 'https://img.alicdn.com/tfs/TB1GMRZmxnaK1RjSZFtXXbC2VXa-640-640.jpg',
					'item_name': 'along',
					'item_time': '2018/11/2 14:57',
					'item_cont': '在前端开发中有一部分用户行为会频繁的触发事件执行，而对于DOM的操作、资源加载等耗费性能的处理，很可能会导致界面卡顿，甚至浏览器奔溃。函数的节流与防抖就是为了解决类似需求而产生的。节流.概念：函数的节流就是预定一个函数只有在大于等于执行周期时才会执行，周期内调用不会执行。好像一滴水只有积攒到一定重量才会落下一样。场景：窗口调整(resize)、页面滚动(scroll)、抢购疯狂点击(movedown)故事：阿里巴巴月饼门事件，中秋来临，阿里特意做了一个活动，抢月饼，但是每个人只能抢购一盒，有五位工程师写了js脚本，类似于12306的抢票软件，直接刷了一百多盒月饼，结果被开除了四个.其实对于他们来说并不是什么坏事，不知道有多少公司对他们敞开大门~那么如何解决这种问题呢，就用到了函数的节流'
				},
				{
					'item_pic': '',
					'item_title': '第二篇博文',
					'item_photo': 'https://img.alicdn.com/tfs/TB1GMRZmxnaK1RjSZFtXXbC2VXa-640-640.jpg',
					'item_name': 'along',
					'item_time': '2018/11/2 14:57',
					'item_cont': '在前端开发中有一部分用户行为会频繁的触发事件执行，而对于DOM的操作、资源加载等耗费性能的处理，很可能会导致界面卡顿，甚至浏览器奔溃。函数的节流与防抖就是为了解决类似需求而产生的。节流.概念：函数的节流就是预定一个函数只有在大于等于执行周期时才会执行，周期内调用不会执行。好像一滴水只有积攒到一定重量才会落下一样。场景：窗口调整(resize)、页面滚动(scroll)、抢购疯狂点击(movedown)故事：阿里巴巴月饼门事件，中秋来临，阿里特意做了一个活动，抢月饼，但是每个人只能抢购一盒，有五位工程师写了js脚本，类似于12306的抢票软件，直接刷了一百多盒月饼，结果被开除了四个.其实对于他们来说并不是什么坏事，不知道有多少公司对他们敞开大门~那么如何解决这种问题呢，就用到了函数的节流'
				},
				{
					'item_pic': '',
					'item_title': '第三篇博文',
					'item_photo': 'https://img.alicdn.com/tfs/TB1GMRZmxnaK1RjSZFtXXbC2VXa-640-640.jpg',
					'item_name': 'along',
					'item_time': '2018/11/2 14:57',
					'item_cont': '在前端开发中有一部分用户行为会频繁的触发事件执行，而对于DOM的操作、资源加载等耗费性能的处理，很可能会导致界面卡顿，甚至浏览器奔溃。函数的节流与防抖就是为了解决类似需求而产生的。节流.概念：函数的节流就是预定一个函数只有在大于等于执行周期时才会执行，周期内调用不会执行。好像一滴水只有积攒到一定重量才会落下一样。场景：窗口调整(resize)、页面滚动(scroll)、抢购疯狂点击(movedown)故事：阿里巴巴月饼门事件，中秋来临，阿里特意做了一个活动，抢月饼，但是每个人只能抢购一盒，有五位工程师写了js脚本，类似于12306的抢票软件，直接刷了一百多盒月饼，结果被开除了四个.其实对于他们来说并不是什么坏事，不知道有多少公司对他们敞开大门~那么如何解决这种问题呢，就用到了函数的节流'
				},
				{
					'item_pic': '',
					'item_title': '第四篇博文',
					'item_photo': 'https://img.alicdn.com/tfs/TB1GMRZmxnaK1RjSZFtXXbC2VXa-640-640.jpg',
					'item_name': 'along',
					'item_time': '2018/11/2 14:57',
					'item_cont': '在前端开发中有一部分用户行为会频繁的触发事件执行，而对于DOM的操作、资源加载等耗费性能的处理，很可能会导致界面卡顿，甚至浏览器奔溃。函数的节流与防抖就是为了解决类似需求而产生的。节流.概念：函数的节流就是预定一个函数只有在大于等于执行周期时才会执行，周期内调用不会执行。好像一滴水只有积攒到一定重量才会落下一样。场景：窗口调整(resize)、页面滚动(scroll)、抢购疯狂点击(movedown)故事：阿里巴巴月饼门事件，中秋来临，阿里特意做了一个活动，抢月饼，但是每个人只能抢购一盒，有五位工程师写了js脚本，类似于12306的抢票软件，直接刷了一百多盒月饼，结果被开除了四个.其实对于他们来说并不是什么坏事，不知道有多少公司对他们敞开大门~那么如何解决这种问题呢，就用到了函数的节流'
				},
				{
					'item_pic': '',
					'item_title': '第五篇博文',
					'item_photo': 'https://img.alicdn.com/tfs/TB1GMRZmxnaK1RjSZFtXXbC2VXa-640-640.jpg',
					'item_name': 'along',
					'item_time': '2018/11/2 14:57',
					'item_cont': '在前端开发中有一部分用户行为会频繁的触发事件执行，而对于DOM的操作、资源加载等耗费性能的处理，很可能会导致界面卡顿，甚至浏览器奔溃。函数的节流与防抖就是为了解决类似需求而产生的。节流.概念：函数的节流就是预定一个函数只有在大于等于执行周期时才会执行，周期内调用不会执行。好像一滴水只有积攒到一定重量才会落下一样。场景：窗口调整(resize)、页面滚动(scroll)、抢购疯狂点击(movedown)故事：阿里巴巴月饼门事件，中秋来临，阿里特意做了一个活动，抢月饼，但是每个人只能抢购一盒，有五位工程师写了js脚本，类似于12306的抢票软件，直接刷了一百多盒月饼，结果被开除了四个.其实对于他们来说并不是什么坏事，不知道有多少公司对他们敞开大门~那么如何解决这种问题呢，就用到了函数的节流'
				},
				{
					'item_pic': '',
					'item_title': '第五篇博文',
					'item_photo': 'https://img.alicdn.com/tfs/TB1GMRZmxnaK1RjSZFtXXbC2VXa-640-640.jpg',
					'item_name': 'along',
					'item_time': '2018/11/2 14:57',
					'item_cont': '在前端开发中有一部分用户行为会频繁的触发事件执行，而对于DOM的操作、资源加载等耗费性能的处理，很可能会导致界面卡顿，甚至浏览器奔溃。函数的节流与防抖就是为了解决类似需求而产生的。节流.概念：函数的节流就是预定一个函数只有在大于等于执行周期时才会执行，周期内调用不会执行。好像一滴水只有积攒到一定重量才会落下一样。场景：窗口调整(resize)、页面滚动(scroll)、抢购疯狂点击(movedown)故事：阿里巴巴月饼门事件，中秋来临，阿里特意做了一个活动，抢月饼，但是每个人只能抢购一盒，有五位工程师写了js脚本，类似于12306的抢票软件，直接刷了一百多盒月饼，结果被开除了四个.其实对于他们来说并不是什么坏事，不知道有多少公司对他们敞开大门~那么如何解决这种问题呢，就用到了函数的节流'
				}
			]
		}	
	},
	methods: {
		charLook (data, index) {
			console.log(data, index);
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
