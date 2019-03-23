<template lang="pug">
	div.al_box
		div.al_desc
			p.al_txt(ref='txt') {{text}}
			p.al_txt2(ref='txtCopy')
		div.al_photo
			div.al_photoL
				p.al_phXk
				img.al_phPic(src='https://avatars1.githubusercontent.com/u/37095223?s=460&v=4')
			div.al_photoR
				p.al_title {{title}}
				p.al_title2 {{titleEng}}
		div.al_wrap 内容...
		div.al_video
			video(src='http://www.along.ink/video/video_011.mp4' loop controls="controls" poster='' class='J_vs')

</template>

<script>
export default {
		name: 'brief',
		data () {
			return {
				'text':'欢迎来到我的博客，感到十分荣幸.我叫杨文龙，平常大家都叫我阿龙,我是一个90后，今年22岁了，现在从事前端开发这个工作，就是大家口中的程序员。人们常说程序员都有一个特点，那就是钱多话少死的早.那是因为从事编程这个职业，都经常加班熬夜，也是十分耗费脑力的一份工作，常常为了解决一个问题，抓耳挠晒.最初选择这个行业，完全是因为觉得有趣，慢慢接触了之后，有感觉到很乏味，枯燥。因为常常一个人学习，工作到深夜。如果你不是对编程特别感兴趣，就不要去深入了解它，学习它。我是2018年毕业的，毕业之后独自一人来到上海打拼，对于刚毕业的我来说，并不是那么容易的，昂贵的房租，高价的快餐，成为我一天到晚最操心的事情，早晚高峰的地铁真是人潮人海，每天还要努力的工作，学习。呆了半年左右的时间，我来到离父母比较近的地方，杭州。在魔都的快节奏下，杭州的节奏就慢了下来，在公司附近租了个房子，一年一万三千多，不到十个平方.离公司只有十分钟的路程，还是很不错了.最后送给您一句话，人生的道路上，选择比努力更重要，选择了就不要放弃.',
				'title':'当挫折造访迷茫敲门失败破窗而入 我们要保持的就是初心不变始终如一 在路上得到许多也失去许多 触碰结果是做一个孤独的守梦人 也要毅然前行',
				'titleEng': 'When frustration visits confusion knocks on doors and fails to break windows, what we want to keep is that we always have the same mind on the way to get a lot of touches and lose a lot of touches. As a result, we have to be a lonely Dreamkeeper and go ahead resolutely.',
			}
		},
		created () {
			
		},
		mounted () {
			this.txtShow();
		},
		methods: {
			txtShow () {
				let story = this.$refs.txt;
				let s = this.$refs.txtCopy;
				let i = 0;
				let timer=setInterval(function(){
					s.innerHTML=story.innerHTML.substring(0,i);
					i++;
					if(s.innerHTML==story.innerHTML){
							clearInterval(timer);
					}
				},100);
			}
		},
		components: {
			
		}
}
</script>

<style lang="less" scoped>
	@b: #ffffff;
	.al_box{
		width: 1200px;
		height: auto;
		overflow: hidden;
		margin: 20px auto;
		.al_video{
			width: 1200px;
			height: 675px;
			overflow: hidden;
			box-sizing: border-box;
			border-radius: 15px;
			margin-top: 20px;
			.J_vs{
				display: block;
				width: 100%;
				height: 675px;
				overflow: hidden;
			}
		}
		.al_desc{
			width: 1200px;
			// height: 170px;
			overflow: hidden;
			margin: 0 auto;
			background: rgba(0,0,0,.5);
			// margin-top: 20px;
			border-radius: 15px;
			padding-bottom: 15px;
			.al_txt{
				width: 1150px;
				height: auto;
				overflow: hidden;
				margin: 0 auto;
				color: @b;
				font-size: 16px;
				letter-spacing: 1.5px;
				margin-top: 10px;
				text-indent: 20px;
				display: none;
			}
			.al_txt2{
				width: 1150px;
				height: auto;
				overflow: hidden;
				margin: 0 auto;
				color: @b;
				font-size: 16px;
				letter-spacing: 1.5px;
				margin-top: 10px;
				text-indent: 20px;
				&:hover{
					color: salmon;
				}
			}
		}
		.al_photo{
			width: 1200px;
			height: 350px;
			overflow: hidden;
			margin: 0 auto;
			margin-top: 20px;
			background: rgba(0,0,0,.5);
			border-radius: 15px;
			display: flex;
			.al_photoL{
				width: 400px;
				height: 350px;
				overflow: hidden;
				position: relative;
				.al_phXk{
					width: 190px;
					height: 220px;
					overflow: hidden;
					border: 12px #B79E7F solid;
					position: absolute;
					left: 80px;
					top: 70px;
				}
				.al_phPic{
					display: block;
					width: 220px;
					height: 220px;
					overflow: hidden;
					position: absolute;
					left: 120px;
					top: 50px;
				}
			}
			.al_photoR{
				width: 800px;
				height: 350px;
				overflow: hidden;
				.al_title{
					width: 550px;
					height: auto;
					overflow: hidden;
					color: #D2D0CF;
					margin-top: 70px;
					margin-left: 150px;
					font-size: 16px;
					line-height: 25px;
				}
				.al_title2{
						width: 550px;
					height: auto;
					overflow: hidden;
					color: #D2D0CF;
					margin-top: 20px;
					margin-left: 130px;
					font-size: 16px;
					line-height: 25px;
				}
			}
		}
		.al_wrap{
			width: 1200px;
			height: 750px;
			overflow: hidden;
			margin: 0 auto;
			margin-top: 20px;
			background: rgba(0,0,0,.5);
			border-radius: 15px;
			// display: flex;
			// justify-content: space-between;
			// align-items: center;
			// flex-wrap: wrap;
			color: @b;
		}
	}
</style>
