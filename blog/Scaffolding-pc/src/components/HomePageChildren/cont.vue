<template lang="pug">
	div.al_box
		div.J_fixed(v-show='ifWx')
			div.J_mod
				p.J_mod_header
					span.J_head_tit 微信打开扫一扫
					span.J_header_rel(@click='ifwx()') X
				img.J_wx(src='')
		div.al_cont
			div.J_left
				ul.J_ul(v-for='(item,index) in data', @click='look_Article(index)', ref='J_ul', v-show='ifStatus')
					li.J_li
						p.J_times
							span.J_time {{item.item_time}}
							span.J_title {{item.item_title}}
						p.J_cont(ref='cont')
						p.J_desc {{item.iten_desc}} 
						//- 阅读({{item.item_num}}) 评论({{item.item_pl}})
				div.J_Article(v-show='ifShow', @mouseleave='prev()')
					div.J_title {{this.moduleinfo.item_title}}
					//- div.J_cont {{this.moduleinfo.item_cont}}
					div.J_conts(ref='J_cont')
				//- div.J_video
				//- 	div.J_video_cont(v-for='(item, index) in videolist')
				//- 		<video :src='item.url' loop controls="controls" poster='http://www.along.ink/img/012.jpg' class='J_vs'></video>
			div.J_right
				Calendar
				div.J_brief
					p.J_brief_tit 我的名片
					p.J_name name： 杨文龙 | along
					p.J_name age： 22岁
					p.J_name occupation： web前端开发攻城狮
					p.J_name email：17521192130@163.com
					p.J_name hobby：看电影、旅游...
				div.J_link
					p.J_lint_tit 友情链接
					//- a.j_links(v-for='(item,index) in link', :href='item.link', target='_blank') {{index+1}}. {{item.name}}:  {{item.link}}
					a.j_links(v-for='(item,index) in link', :href='item.link', target='_blank') {{index+1}}. {{item.name}}
				//- (v-on:choseDay="clickDay",	选中某天
				//- 	v-on:changeMonth="changeDate",	左右点击切换月份
				//- 	v-on:isToday="clickToday")	跳到了本月
				//- :markDateMore=arr // 多种不同的标记
				//- :agoDayHide='1514937600' //某个日期以前的不允许点击  时间戳10位
				//- :futureDayHide='1525104000' //某个日期以后的不允许点击  时间戳10位
				//- :sundayStart="true" //默认是周一开始 当是true的时候 是周日开始
				div.J_read
					p.J_read_title 推荐文章
					a.J_read_link(v-for='(item,index) in read', :href='item.link', target='_blank') {{index+1}}:  {{item.title}}
				div.J_shar
					p.J_title {{moduleinfo.item_shar_title}}
					p.J_shar_cont
						a.J_shar_link(ref='qq', @click='shar_qq()')
						a.J_shar_link(ref='qq_kj', @click='shae_kj()')
						a.J_shar_link(ref='wx', @click='shar_wx()')
						a.J_shar_link(ref='wb', @click='shar_wb()')
				div.J_send
					p.J_send_tit 碎言碎语
					p.J_send_pic
					p.J_sent_cont 挫折造访还有人坐看你如何收场 且行且歌让梦想落地生根为人生不留遗憾执着也要洒脱
				div.J_ponsor
					p.J_ponsor_tit 土豪，赞助本站吧
					p.J_pos_header(ref='moner')
						span.J_pos_name 微信
						span.J_pos_name QQ
						span.J_pos_name 支付宝
					img.J_money_pic(src='http://www.along.ink/img/008.jpg',ref='pic')
</template>

<script>
import Calendar from 'vue-calendar-component'
import axios from 'axios'
export default {
	name: 'cont',
	data () {
		return {
			ifShow: false,
			ifStatus: true,
			ifWx: false,
			data: '',
			moduleinfo:{
				'item_cont': '',
				'item_title': '',
				'item_shar_title': '分享网站'
			},
			videolist: [
				{"url": "http://www.along.ink/video/video_009.mp4"},                                   
				{"url": ""},
				{"url": ""},
				{"url": ""},
				{"url": ""},
				{"url": ""}
			],
			read: [
				{'title': '前端性能优化', 'id': '1', 'link':'https://www.cnblogs.com/alongup/p/9081988.html'},
				{'title': 'Vue2.0 路由全局守卫', 'id': '2', 'link':'https://www.cnblogs.com/alongup/p/9062711.html'},
				{'title': 'pc端页面打包成安卓apk', 'id': '3', 'link':'https://www.cnblogs.com/alongup/p/9005524.html'},
				{'title': 'webpack', 'id': '4', 'link':'https://www.cnblogs.com/alongup/p/8999583.html'},
				{'title': 'ajax', 'id': '5', 'link':'https://www.cnblogs.com/alongup/p/8999700.html'},
				{'title': 'Vue数据双向绑定原理及简单实现', 'id': '6', 'link':'https://www.cnblogs.com/alongup/p/9022180.html'},
				{'title': 'js中常用的算法排序', 'id': '7', 'link':'https://www.cnblogs.com/alongup/p/10226505.html'},
				{'title': 'js函数的节流与防抖', 'id': '8', 'link':'https://www.cnblogs.com/alongup/p/9261076.html'},
				{'title': 'js中的继承', 'id': '9', 'link':'https://www.cnblogs.com/alongup/p/9271397.html'},
				{'title': 'Vue组件通讯', 'id': '10', 'link':'https://www.cnblogs.com/alongup/p/9255388.html'},
				{'title': 'vue笔记', 'id': '11', 'link':'https://www.cnblogs.com/alongup/p/10226533.html'},
				{'title': 'Vue组件通讯', 'id': '12', 'link':'https://www.cnblogs.com/alongup/p/9255388.html'}
			],
			link: [
				{'link': 'http://www.along.ink/load', 'name': 'along'},
				{'link': 'http://www.along.ink/load', 'name': 'along'}
			]
		}	
	},
	created () {
		this.$http.get("/posts").then(res => {
			console.log(res,'文章')
			let data = res.data.data
			this.data = data; 
		});
	},
	mounted () {
		this.video_load();
		this.moner();
		setTimeout(()=>{
			this.data.map((item,index)=>{
				this.$refs.cont[index].innerHTML = item.iten_cont;
			})
		},300)
	},
	methods: {
		charLook (data, index) {
		},
		look_Article (index) {	//点击查看文章
			this.ifShow = !this.ifShow;
			this.ifStatus = !this.ifStatus;
			this.$refs.J_cont.innerHTML = this.data[index].iten_cont;
			this.moduleinfo.item_title = this.data[index].item_title;
		},
		prev () {	//点击返回主页
			this.ifShow = !this.ifShow;
			this.ifStatus = !this.ifStatus;
		},
		video_load () {	//视频播放暂停
			let dom = document.querySelectorAll('.J_video_cont');
			let video = document.querySelectorAll('.J_vs');
			for(let i=0;i<dom.length;i++){
				dom[i].onmouseenter=()=>{
					video[i].play();
				}
				dom[i].onmouseleave=()=>{
					video[i].pause();
				}
			}
		},
		shar_qq () {	//qq好友分享
			let arr = {
				url: 'http://www.along.ink/',/*获取URL，可加上来自分享到QQ标识，方便统计*/
				desc: '', /*分享理由(风格应模拟用户对话),支持多分享语随机展现（使用|分隔）*/
				title : 'along的个人博客',/*分享标题(可选)*/
				summary : '路还长，我在等风，也在等你',/*分享描述(可选)*/
				pics : 'http://www.along.ink/img/006.jpg',/*分享图片(可选)*/
				flash : '', /*视频地址(可选)*/
				commonClient : true, /*客户端嵌入标志*/
				site: 'qq分享'/*分享来源 (可选) ，如：QQ分享*/
			} 

			let newarr = [];
			for(var i in arr){
				newarr.push(i+ '=' + encodeURIComponent(arr[i] || ''))
			}
			console.log(newarr, 'newarr');
			let target_url = "http://connect.qq.com/widget/shareqq/iframe_index.html?" + newarr.join('&');
			window.open(target_url);
		},
		shae_kj () {	//分享qq空间
			let p = {
				url: 'http://www.along.ink/',
				showcount: '1',/*是否显示分享总数,显示：'1'，不显示：'0' */
				desc: '这个个人博客不错哦~分享一下吧',/*默认分享理由(可选)*/
				summary: '不忘初心，方得始终.',/*分享摘要(可选)*/
				title: 'along的个人博客',/*分享标题(可选)*/
				site: '',/*分享来源 如：腾讯网(可选)summary*/
				pics: 'http://www.along.ink/img/006.jpg', /*分享图片的路径(可选)*/
				style: '203',
				width: 199,
				height: 30
			};
			var s = [];
			for (var i in p) {
			s.push(i + '=' + encodeURIComponent(p[i] || ''));
			}
			var target_url ="http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?"+s.join('&');
			window.open(target_url);
		},
		shar_wb () {	//分享微博
			var	param = {
				url:'http://www.along.ink/',
				type:'3',
				count:'1', /** 是否显示分享数，1显示(可选)*/
				appkey:'', /** 您申请的应用appkey,显示分享来源(可选)*/
				title:'发现一个很不错的博客，快去看看吧', /** 分享的文字内容(可选，默认为所在页面的title)*/
				rnd:new Date().valueOf()
			}
			var temp = [];
			for( var p in param ){
				temp.push(p + '=' +encodeURIComponent( param[p ] || '' ) )
			}
			var target_url = "http://service.weibo.com/share/share.php?"+temp.join('&');
			 window.open(target_url);
		},
		shar_wx () {	//微信分享
			this.ifWx = !this.ifWx;
		},
		ifwx () {
			this.ifWx = !this.ifWx;
		},
		moner () {
			let moner = document.querySelectorAll('.J_pos_name');
			for(let i=0;i<moner.length;i++){
				moner[i].onmouseenter = ()=>{
						for(let j=0;j<=2;j++){
							moner[j].style.color = '#ffffff';
						}
						if(i === 0){
							moner[0].style.color = 'salmon';
							this.$refs.pic.src = 'http://www.along.ink/img/008.jpg';
						}else if(i === 1){
							moner[1].style.color = 'salmon';
							this.$refs.pic.src = 'http://www.along.ink/img/009.jpg';
						}else if(i === 2){
							moner[2].style.color = 'salmon';
							this.$refs.pic.src = 'http://www.along.ink/img/010.jpg';
						}
				}
			}
		}
	},
	components: {
		Calendar
	}
}
</script>

<style lang="less" scoped>
	@b: #ffffff;
	.al_box{
		width: 100%;
		height: auto;
		overflow: hidden;
		margin: 0px auto;
		margin-top: 15px;
		//微信弹出层
		.J_fixed{
			width: 100%;
			height: 100%;
			overflow: hidden;
			background: rgba(0,0,0,.7);
			position: fixed;
			left: 0px;
			top: 0px;
			z-index: 99;
			.J_mod{
				width: 350px;
				height: 350px;
				overflow: hidden;
				box-sizing: border-box;
				border: 1px #ffffff solid;
				background: @b;
				position: absolute;
				left: 50%;
				top: 50%;
				transform: translate(-50%, -50%);
				display: flex;
				justify-content: center;
				flex-wrap: wrap;
				.J_mod_header{
					width: 100%;
					.J_head_tit{
						color: crimson;;
						font-size: 20px;
						padding-left: 20px;
						display: inline-block;
						margin-top: 10px;
					}
					.J_header_rel{
						color: crimson;;
						font-size: 20px;
						padding-left: 150px;
					}
				}
				.J_wx{
					width: 200px;
					height: 200px;
				}
			}
		}
		.al_cont{
			width: 1200px;
			height: auto;
			overflow: hidden;
			margin: 0 auto;
			box-sizing: border-box;
			.J_left{
				width: 890px;
				height: auto;
				overflow: hidden;
				float: left;
				display: block;
				box-sizing: border-box;
				// border: 1px red solid;
				display: flex;
				justify-content: space-between;
				flex-wrap: wrap;
				// background: saddlebrown;
				.J_ul{
					width: 280px;
					height: 350px;
					overflow: hidden;
					border: 1px #DEDEDE solid;
					border-radius: 20px;
					margin-bottom: 15px;
					&:hover{
						border: 1px #169FE6 solid;
					}
					.J_li{
						width: 280px;
						height: auto;
						overflow: hidden;
						// background: #fff;
						// background: url('http://www.along.ink/img/001.jpg') center center no-repeat;
						// background-size: 100% 100%;
						// opacity: .8;
						background: rgba(0,0,0,.4);
						.J_times{
							width: 280px;
							height: 32px;
							overflow: hidden;
							display: block;
							margin-top: 10px;
							.J_time{
								width: 100px;
								height: 32px;
								text-align: center;
								line-height: 32px;
								font-size: 14px;
								// background: #45bcf9;
								// background: rgba(0, 0, 0, 0.4);
								display: block;
								margin-left: 20px;
								float: left;
								border-radius: 5px;
								color: @b;
							}
							.J_title{
								width: auto;
								height: 32px;
								overflow: hidden;
								line-height: 32px;
								font-size: 14px;
								margin-left: 20px;
								color: @b;
							}
						}
						.J_cont{
							width: 240px;
							height: 260px;
							overflow: hidden;
							margin: 0 auto;
							// border: 1px red solid;
							box-sizing: border-box;
							line-height: 29px;
							// border: 1px red solid;
							text-overflow:ellipsis;
							display:-webkit-box;
							-webkit-line-clamp:9;
							-webkit-box-orient:vertical;
							color: @b;
						}
						.J_desc{
							width: 240px;
							height: 50px;
							overflow: hidden;
							margin: 0 auto;
							color: @b;
							margin-top: 10px;
						}
					}
				}
				.J_Article{
					width: 890px;
					height: auto;
					overflow: hidden;
					// border: 1px red solid;
					color: @b;
					box-sizing: border-box;
					background: rgba(0,0,0,.2);
					border-radius: 10px;
					.J_title{
						font-size: 24px;
					}
					.J_conts{
						width: 870px;
						height: auto;
						font-size: 18px;
						text-indent: 20px;
						margin-top: 10px;
						line-height: 30px;
					}
				}
				.J_video{
					width: 890px;
					height: auto;
					overflow: hidden;
					margin-top: 20px;
					box-sizing: border-box;
					// border: 1px red solid;
					display: flex;
					justify-content: space-between;
					flex-wrap: wrap;
					cursor: pointer;
					.J_video_cont{
						width: 280px;
						height: 350px;
						overflow: hidden;
						border: 1px @b solid;
						margin-bottom: 20px;
						border-radius: 20px;
						.J_vs{
							width: 100%;
							height: 100%;
							// object-fit:fill
						}
					}
				}
				// .J_ul:not(:first-child){
				// 	border-top: none;
				// }
			}
			.J_right{
				width: 288px;
				height: auto;
				overflow: hidden;
				display: block;
				float: left;
				margin-left: 22px;
				.J_brief{
					width: 288px;
					height: auto;
					overflow: hidden;
					box-sizing: border-box;
					// border: 1px @b solid;
					background: rgba(0,0,0,.2);
					border-radius: 10px;
					margin-bottom: 20px;
					margin-top: 20px;
					.J_brief_tit{
						width: 100%;
						height: 25px;
						overflow: hidden;
						line-height: 25px;
						font-size: 22px;
						color: @b;
						text-indent: 10px;
						margin-bottom: 10px;
					}
					.J_name{
						width: 100%;
						height: 21px;
						overflow: hidden;
						line-height: 21px;
						font-size: 16px;
						text-indent: 22px;
						color: @b;
						margin-top: 10px;
						white-space: nowrap;
						text-overflow: ellipsis;
						&:hover{
							color: salmon;
						}
					}
				}
				.J_shar{
					width: 288px;
					height: auto;
					overflow: hidden;
					display: block;
					box-sizing: border-box;
					// border: 1px @b solid;
					background: rgba(0,0,0,.2);
					border-radius: 10px;
					margin-top: 20px;
					.J_title{
						width: 100%;
						height: 20px;
						overflow: hidden;
						line-height: 20px;
						text-align: center;
						color: @b;
						font-size: 18px;
					}
					.J_shar_cont{
						width: 100%;
						height: 80px;
						overflow: hidden;
						box-sizing: border-box;
						// border: 1px @b solid;
						display: flex;
						justify-content: space-around;
						align-items: center;
						.J_shar_link{
							display: block;
							text-decoration: none;
							width: 50px;
							height: 80px;
							background: url('http://www.along.ink/img/007.jpg') center center no-repeat;
							background-size: 200px 50px;
							background-position-x: 0px;
						}
						.J_shar_link:nth-child(2){
							background-position-x: -50px;
						}
						.J_shar_link:nth-child(3){
							background-position-x: -100px;
						}
						.J_shar_link:nth-child(4){
							background-position-x: -150px;
						}
					}
				}
				.J_read{
					width: 288px;
					height: auto;
					overflow: hidden;
					background: rgba(0,0,0,.2);
					box-sizing: border-box;
					// border: 1px @b solid;
					border-radius: 10px;
					margin-top: 20px;
					.J_read_title{
						width: 100%;
						height: 23px;
						overflow: hidden;
						line-height: 23px;
						font-size: 22px;
						color: @b;
						text-indent: 10px;
						margin-bottom: 15px;
					}
					.J_read_link{
						display: block;
						text-decoration: none;
						color: @b;
						font-size: 16px;
						width: 95%;
						height: 18px;
						margin-bottom: 10px;
						text-indent: 20px;
						white-space: nowrap;
						overflow: hidden;
						text-overflow: ellipsis;
						&:hover{
							color: salmon;
						}
					}
				}
				.J_ponsor{
					width: 288px;
					height: auto;
					overflow: hidden;
					background: rgba(0,0,0,.2);
					box-sizing: border-box;
					// border: 1px @b solid;
					border-radius: 10px;
					margin-top: 20px;
					// display: flex;
					// flex-wrap: wrap;
					// justify-items: center;
					.J_ponsor_tit{
						width: 100%;
						height: 24px;
						overflow: hidden;
						line-height: 24px;
						text-align: center;
						font-size: 18px;
						color: @b;
					}
					.J_pos_header{
						width: 100%;
						height: 24px;
						overflow: hidden;
						box-sizing: border-box;
						// border: 1px @b solid;
						display: flex;
						justify-content: space-around;
						margin-top: 10px;
						.J_pos_name{
							display: block;
							width: auto;
							height: 24px;
							line-height: 24px;
							color: @b;
							font-size: 18px;
							// background: rgba(0,0,0,.5);
							&:hover{
								// color: crimson;
							}
						}
						.J_pos_name:first-child{
							color: salmon;
						}
					}
					.J_money_pic{
						display: block;
						width: 200px;
						height: 200px;
						margin-left: 50%;
						transform: translateX(-50%);
						margin-top: 20px;
						margin-bottom: 20px;
					}
				}
				.J_send{
					width: 288px;
					height: auto;
					overflow: hidden;
					margin-top: 20px;
					box-sizing: border-box;
					// border: 1px @b solid;
					background: rgba(0,0,0,.2);
					border-radius: 10px;
					.J_send_tit{
						width: 100%;
						height: 22px;
						overflow: hidden;
						line-height: 22px;
						font-size: 18px;
						color: @b;
						text-indent: 20px;
						margin-top: 10px;
						&:hover{
							color: salmon;
						}
					}
					.J_send_pic{
						width: 240px;
						height: 200px;
						overflow: hidden;
						box-sizing: border-box;
						border: 1px @b solid;
						margin-left: 50%;
						transform: translateX(-50%);
						margin-top: 15px;
						background: url(http://www.along.ink/img/013.jpg) center center no-repeat;
						background-size: 100% 100%;
						border-radius: 10px;
						transition: all 1s;
						&:hover{
							background-size: 140% 140%;
						}
					}
					.J_sent_cont{
						width: 80%;
						height: auto;
						overflow: hidden;
						margin: 10px auto;
						font-size: 16px;
						color: @b;
						&:hover{
							color: salmon;
						}
					}
				}
				.J_link{
					width: 288px;
					height: auto;
					overflow: hidden;
					margin-top: 20px;
					box-sizing: border-box;
					// border: 1px @b solid;
					background: rgba(0,0,0,.2);
					border-radius: 10px;
					.J_lint_tit{
						width: 100%;
						height: 25px;
						overflow: hidden;
						line-height: 25px;
						font-size: 22px;
						color: @b;
						margin-bottom: 15px;
						text-indent: 10px;
						&:hover{
							color: salmon;
						}
					}
					.j_links{
						display: block;
						text-decoration: none;
						font-size: 16px;
						color: @b;
						width: 100%;
						height: 18px;
						line-height: 18px;
						white-space: nowrap;
						text-overflow: ellipsis;
						margin-bottom: 10px;
						text-indent: 30px;
						&:hover{
							color: salmon;
						}
					}
				}
			}
		}
	}
</style>
