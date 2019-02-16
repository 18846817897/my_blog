<template lang="pug">
	div.al_box
		div.J_fixed(v-show='ifWx')
			div.J_mod
				p.J_mod_header
					span.J_head_tit 微信打开扫一扫
					span.J_header_rel(@click='ifwx()') X
				img.J_wx(src='http://qr.liantu.com/api.php?text=http://www.along.ink')
		div.J_left
			ul.J_ul(v-for='(item,index) in data', @click='look_Article(index)', ref='J_ul', v-show='ifStatus')
				li.J_li
					p.J_times
						span.J_time {{item.item_time}}
						span.J_title {{item.item_title}}
					p.J_cont {{item.iten_cont}}
					p.J_desc {{item.iten_desc}} 阅读({{item.item_num}}) 评论({{item.item_pl}})
			div.J_Article(v-show='ifShow', @mouseleave='prev()')
				div.J_title {{this.moduleinfo.item_title}}
				//- div.J_cont {{this.moduleinfo.item_cont}}
				div.J_cont(ref='J_cont')
			div.J_video
				div.J_video_cont(v-for='(item, index) in videolist')
					<video :src='item.url' loop controls="controls" poster='http://www.along.ink/img/012.jpg' class='J_vs'></video>
		div.J_right
			div.J_brief
				p.J_brief_tit 我的名片
				p.J_name name： 杨文龙 | along
				p.J_name age： 22岁
				p.J_name occupation： web前端开发攻城狮
				p.J_name email：17521192130@163.com
				p.J_name hobby：看电影、旅游...
			Calendar
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
			div.J_ponsor
				p.J_ponsor_tit 土豪，赞助本站吧
				p.J_pos_header(ref='moner')
					span.J_pos_name 微信
					span.J_pos_name QQ
					span.J_pos_name 支付宝
				img.J_money_pic(src='http://www.along.ink/img/008.jpg',ref='pic')
			div.J_shar
				p.J_title {{moduleinfo.item_shar_title}}
				p.J_shar_cont
					a.J_shar_link(ref='qq', @click='shar_qq()')
					a.J_shar_link(ref='qq_kj', @click='shae_kj()')
					a.J_shar_link(ref='wx', @click='shar_wx()')
					a.J_shar_link(ref='wb', @click='shar_wb()')
</template>

<script>
import Calendar from 'vue-calendar-component'
export default {
	name: 'cont',
	data () {
		return {
			ifShow: false,
			ifStatus: true,
			ifWx: false,
			moduleinfo:{
				'item_cont': '',
				'item_title': '',
				'item_shar_title': '分享网站'
			},
			data: [
				{
					'item_time': '2019年2月14日',
					'item_title': '你可以这样活',
					'iten_cont': `生活除了苟且，还有诗意和远方，我知道我写不出那些充满诗意的文章，也不具备诗意的风采。我只是除了八小时流水线的工作，其余时间就在文字的世界里徜徉。因为，除了偶尔到远方走走，其余的我没有多大兴趣。<br/><br/>文如其人，有时候文不如其人，当时的灵感创作了一篇文字，时过境迁，回头再看，那时的心境和这时候截然不同，这就是“时空转换”的概念。<br/><br/>所以有些文字，千万别对号入座，有些文章，没有刻意的悲喜，没有刻意的做作，有的，只是一个被岁月洗礼的心，被时间注入的情，然后用文字留下一些记忆罢了。<br/><br/>“志同道合”不是说说而已，那些表面上的“志同道合”，暗地里的阴奉阳违实在让人不齿，那些表面上的清爽怡人暗地里的拉帮结派也实在让人气愤。<br/><br/>你和她相隔千里，他和她距离万丈，你写你的文字，她做她的阴奉阳违，好像互不干涉，而我最痛恨的就是那种“拉帮结派”然后莫名其妙给你一个“莫须有”的人身攻击。<br/><br/>活的那么有心机，过得那么有心计，何必呢？<br/><br/>你的清爽掩盖了你的肮脏。你的虚假成了一种交易，又何必呢？文字只是一种人生的情怀，喜欢你文字的人来读读，留一个赞离开，只是你给我点个赞，非要告诉我让我赶紧给你点个赞，我觉得这个大师一定有个外号“虚伪大师”，我不是说点赞不好，如果你把点赞成了形式，你还读那些文章干嘛。<br/><br/>点赞，如同复制和粘贴一样，瞬间了之，只是如果你是文学爱好者的交流，哪怕不点赞，也会开心的交往。一篇好的文字，我觉得不是多少个赞所能替代的，幸好我也写不出好文章。<br/><br/>我的文字家园，只是我心灵的栖息之所，悲喜聚散，冷暖阴晴，我自摆渡。至于文字涉及到的人事，那只是我记忆里的部分，它无关谁！因为它曾与我的心思和文字结了缘，已经属于我的思想，而非谁了！<br/><br/>其实，人生中的任何关系，终会结束，时间到，缘即尽。明白聚散来去终无常，何须苦心执虚无呢！<br/><br/>心若无求，不生贪求，所遇所见便能随遇而安，随缘来去。无论生活还是文字，我与人打交道从不喜欢主动，我只种我的梧桐树，我只绽放我的思想，你若是想栖息梧桐树，你若是觉得给绽放需要添加一种信仰，那我家的大门是敞开心扉的。<br/><br/>我觉得生活里一定分清现实是现实，网络是网络，朋友是朋友，网友是网友。可以聊的聊，不想说的不说，无企无图，我行我素，自如应对要应对的人事，淡而心安！故分不清这些的须谨慎，免了失落失望，思同道合者你不和我常来常往，我会翻墙进入你的家门的。<br/><br/>你无言我无语而知彼此，那是你们了解，陌生人绝无可能；你言前我知后而懂彼此，那是你们神交，三观合性情才能相通。<br/><br/>只看外表面如桃花，其实内心蛇蝎心肠，那需要你的慧眼，也需要时间。最近我经常和朋友说，我生活中的朋友圈在做减法，网络上依然如此。我不想忙着认识许多人，而忘了自己是谁，丢了那颗初心。<br/><br/>人与人没有交集，那只是平行二道各行其道，我不知你，你不知我，定是无法同道！<br/><br/>所以，可以习惯问候，也可习惯没有问候；<br/><br/>所以，可以接纳你来，也可以承受你去；<br/><br/>你，可以这样活，活出一个崭新的自我！`,
					'iten_desc': '@posted @ 2018/2/14 18:28 阿龙丶along ',
					'item_num': '0',
					'item_pl': '0',
					'id': '0'
				},
					{
					'item_time': '2019年2月14日',
					'item_title': '你可以这样活',
					'iten_cont': `生活除了苟且，还有诗意和远方，我知道我写不出那些充满诗意的文章，也不具备诗意的风采。我只是除了八小时流水线的工作，其余时间就在文字的世界里徜徉。因为，除了偶尔到远方走走，其余的我没有多大兴趣。<br/><br/>文如其人，有时候文不如其人，当时的灵感创作了一篇文字，时过境迁，回头再看，那时的心境和这时候截然不同，这就是“时空转换”的概念。<br/><br/>所以有些文字，千万别对号入座，有些文章，没有刻意的悲喜，没有刻意的做作，有的，只是一个被岁月洗礼的心，被时间注入的情，然后用文字留下一些记忆罢了。<br/><br/>“志同道合”不是说说而已，那些表面上的“志同道合”，暗地里的阴奉阳违实在让人不齿，那些表面上的清爽怡人暗地里的拉帮结派也实在让人气愤。<br/><br/>你和她相隔千里，他和她距离万丈，你写你的文字，她做她的阴奉阳违，好像互不干涉，而我最痛恨的就是那种“拉帮结派”然后莫名其妙给你一个“莫须有”的人身攻击。<br/><br/>活的那么有心机，过得那么有心计，何必呢？<br/><br/>你的清爽掩盖了你的肮脏。你的虚假成了一种交易，又何必呢？文字只是一种人生的情怀，喜欢你文字的人来读读，留一个赞离开，只是你给我点个赞，非要告诉我让我赶紧给你点个赞，我觉得这个大师一定有个外号“虚伪大师”，我不是说点赞不好，如果你把点赞成了形式，你还读那些文章干嘛。<br/><br/>点赞，如同复制和粘贴一样，瞬间了之，只是如果你是文学爱好者的交流，哪怕不点赞，也会开心的交往。一篇好的文字，我觉得不是多少个赞所能替代的，幸好我也写不出好文章。<br/><br/>我的文字家园，只是我心灵的栖息之所，悲喜聚散，冷暖阴晴，我自摆渡。至于文字涉及到的人事，那只是我记忆里的部分，它无关谁！因为它曾与我的心思和文字结了缘，已经属于我的思想，而非谁了！<br/><br/>其实，人生中的任何关系，终会结束，时间到，缘即尽。明白聚散来去终无常，何须苦心执虚无呢！<br/><br/>心若无求，不生贪求，所遇所见便能随遇而安，随缘来去。无论生活还是文字，我与人打交道从不喜欢主动，我只种我的梧桐树，我只绽放我的思想，你若是想栖息梧桐树，你若是觉得给绽放需要添加一种信仰，那我家的大门是敞开心扉的。<br/><br/>我觉得生活里一定分清现实是现实，网络是网络，朋友是朋友，网友是网友。可以聊的聊，不想说的不说，无企无图，我行我素，自如应对要应对的人事，淡而心安！故分不清这些的须谨慎，免了失落失望，思同道合者你不和我常来常往，我会翻墙进入你的家门的。<br/><br/>你无言我无语而知彼此，那是你们了解，陌生人绝无可能；你言前我知后而懂彼此，那是你们神交，三观合性情才能相通。<br/><br/>只看外表面如桃花，其实内心蛇蝎心肠，那需要你的慧眼，也需要时间。最近我经常和朋友说，我生活中的朋友圈在做减法，网络上依然如此。我不想忙着认识许多人，而忘了自己是谁，丢了那颗初心。<br/><br/>人与人没有交集，那只是平行二道各行其道，我不知你，你不知我，定是无法同道！<br/><br/>所以，可以习惯问候，也可习惯没有问候；<br/><br/>所以，可以接纳你来，也可以承受你去；<br/><br/>你，可以这样活，活出一个崭新的自我！`,
					'iten_desc': '@posted @ 2018/2/14 18:28 阿龙丶along ',
					'item_num': '0',
					'item_pl': '0',
					'id': '0'
				},
					{
					'item_time': '2019年2月14日',
					'item_title': '你可以这样活',
					'iten_cont': `生活除了苟且，还有诗意和远方，我知道我写不出那些充满诗意的文章，也不具备诗意的风采。我只是除了八小时流水线的工作，其余时间就在文字的世界里徜徉。因为，除了偶尔到远方走走，其余的我没有多大兴趣。<br/><br/>文如其人，有时候文不如其人，当时的灵感创作了一篇文字，时过境迁，回头再看，那时的心境和这时候截然不同，这就是“时空转换”的概念。<br/><br/>所以有些文字，千万别对号入座，有些文章，没有刻意的悲喜，没有刻意的做作，有的，只是一个被岁月洗礼的心，被时间注入的情，然后用文字留下一些记忆罢了。<br/><br/>“志同道合”不是说说而已，那些表面上的“志同道合”，暗地里的阴奉阳违实在让人不齿，那些表面上的清爽怡人暗地里的拉帮结派也实在让人气愤。<br/><br/>你和她相隔千里，他和她距离万丈，你写你的文字，她做她的阴奉阳违，好像互不干涉，而我最痛恨的就是那种“拉帮结派”然后莫名其妙给你一个“莫须有”的人身攻击。<br/><br/>活的那么有心机，过得那么有心计，何必呢？<br/><br/>你的清爽掩盖了你的肮脏。你的虚假成了一种交易，又何必呢？文字只是一种人生的情怀，喜欢你文字的人来读读，留一个赞离开，只是你给我点个赞，非要告诉我让我赶紧给你点个赞，我觉得这个大师一定有个外号“虚伪大师”，我不是说点赞不好，如果你把点赞成了形式，你还读那些文章干嘛。<br/><br/>点赞，如同复制和粘贴一样，瞬间了之，只是如果你是文学爱好者的交流，哪怕不点赞，也会开心的交往。一篇好的文字，我觉得不是多少个赞所能替代的，幸好我也写不出好文章。<br/><br/>我的文字家园，只是我心灵的栖息之所，悲喜聚散，冷暖阴晴，我自摆渡。至于文字涉及到的人事，那只是我记忆里的部分，它无关谁！因为它曾与我的心思和文字结了缘，已经属于我的思想，而非谁了！<br/><br/>其实，人生中的任何关系，终会结束，时间到，缘即尽。明白聚散来去终无常，何须苦心执虚无呢！<br/><br/>心若无求，不生贪求，所遇所见便能随遇而安，随缘来去。无论生活还是文字，我与人打交道从不喜欢主动，我只种我的梧桐树，我只绽放我的思想，你若是想栖息梧桐树，你若是觉得给绽放需要添加一种信仰，那我家的大门是敞开心扉的。<br/><br/>我觉得生活里一定分清现实是现实，网络是网络，朋友是朋友，网友是网友。可以聊的聊，不想说的不说，无企无图，我行我素，自如应对要应对的人事，淡而心安！故分不清这些的须谨慎，免了失落失望，思同道合者你不和我常来常往，我会翻墙进入你的家门的。<br/><br/>你无言我无语而知彼此，那是你们了解，陌生人绝无可能；你言前我知后而懂彼此，那是你们神交，三观合性情才能相通。<br/><br/>只看外表面如桃花，其实内心蛇蝎心肠，那需要你的慧眼，也需要时间。最近我经常和朋友说，我生活中的朋友圈在做减法，网络上依然如此。我不想忙着认识许多人，而忘了自己是谁，丢了那颗初心。<br/><br/>人与人没有交集，那只是平行二道各行其道，我不知你，你不知我，定是无法同道！<br/><br/>所以，可以习惯问候，也可习惯没有问候；<br/><br/>所以，可以接纳你来，也可以承受你去；<br/><br/>你，可以这样活，活出一个崭新的自我！`,
					'iten_desc': '@posted @ 2018/2/14 18:28 阿龙丶along ',
					'item_num': '0',
					'item_pl': '0',
					'id': '0'
				},
					{
					'item_time': '2019年2月14日',
					'item_title': '你可以这样活',
					'iten_cont': `生活除了苟且，还有诗意和远方，我知道我写不出那些充满诗意的文章，也不具备诗意的风采。我只是除了八小时流水线的工作，其余时间就在文字的世界里徜徉。因为，除了偶尔到远方走走，其余的我没有多大兴趣。<br/><br/>文如其人，有时候文不如其人，当时的灵感创作了一篇文字，时过境迁，回头再看，那时的心境和这时候截然不同，这就是“时空转换”的概念。<br/><br/>所以有些文字，千万别对号入座，有些文章，没有刻意的悲喜，没有刻意的做作，有的，只是一个被岁月洗礼的心，被时间注入的情，然后用文字留下一些记忆罢了。<br/><br/>“志同道合”不是说说而已，那些表面上的“志同道合”，暗地里的阴奉阳违实在让人不齿，那些表面上的清爽怡人暗地里的拉帮结派也实在让人气愤。<br/><br/>你和她相隔千里，他和她距离万丈，你写你的文字，她做她的阴奉阳违，好像互不干涉，而我最痛恨的就是那种“拉帮结派”然后莫名其妙给你一个“莫须有”的人身攻击。<br/><br/>活的那么有心机，过得那么有心计，何必呢？<br/><br/>你的清爽掩盖了你的肮脏。你的虚假成了一种交易，又何必呢？文字只是一种人生的情怀，喜欢你文字的人来读读，留一个赞离开，只是你给我点个赞，非要告诉我让我赶紧给你点个赞，我觉得这个大师一定有个外号“虚伪大师”，我不是说点赞不好，如果你把点赞成了形式，你还读那些文章干嘛。<br/><br/>点赞，如同复制和粘贴一样，瞬间了之，只是如果你是文学爱好者的交流，哪怕不点赞，也会开心的交往。一篇好的文字，我觉得不是多少个赞所能替代的，幸好我也写不出好文章。<br/><br/>我的文字家园，只是我心灵的栖息之所，悲喜聚散，冷暖阴晴，我自摆渡。至于文字涉及到的人事，那只是我记忆里的部分，它无关谁！因为它曾与我的心思和文字结了缘，已经属于我的思想，而非谁了！<br/><br/>其实，人生中的任何关系，终会结束，时间到，缘即尽。明白聚散来去终无常，何须苦心执虚无呢！<br/><br/>心若无求，不生贪求，所遇所见便能随遇而安，随缘来去。无论生活还是文字，我与人打交道从不喜欢主动，我只种我的梧桐树，我只绽放我的思想，你若是想栖息梧桐树，你若是觉得给绽放需要添加一种信仰，那我家的大门是敞开心扉的。<br/><br/>我觉得生活里一定分清现实是现实，网络是网络，朋友是朋友，网友是网友。可以聊的聊，不想说的不说，无企无图，我行我素，自如应对要应对的人事，淡而心安！故分不清这些的须谨慎，免了失落失望，思同道合者你不和我常来常往，我会翻墙进入你的家门的。<br/><br/>你无言我无语而知彼此，那是你们了解，陌生人绝无可能；你言前我知后而懂彼此，那是你们神交，三观合性情才能相通。<br/><br/>只看外表面如桃花，其实内心蛇蝎心肠，那需要你的慧眼，也需要时间。最近我经常和朋友说，我生活中的朋友圈在做减法，网络上依然如此。我不想忙着认识许多人，而忘了自己是谁，丢了那颗初心。<br/><br/>人与人没有交集，那只是平行二道各行其道，我不知你，你不知我，定是无法同道！<br/><br/>所以，可以习惯问候，也可习惯没有问候；<br/><br/>所以，可以接纳你来，也可以承受你去；<br/><br/>你，可以这样活，活出一个崭新的自我！`,
					'iten_desc': '@posted @ 2018/2/14 18:28 阿龙丶along ',
					'item_num': '0',
					'item_pl': '0',
					'id': '0'
				},
					{
					'item_time': '2019年2月14日',
					'item_title': '你可以这样活',
					'iten_cont': `生活除了苟且，还有诗意和远方，我知道我写不出那些充满诗意的文章，也不具备诗意的风采。我只是除了八小时流水线的工作，其余时间就在文字的世界里徜徉。因为，除了偶尔到远方走走，其余的我没有多大兴趣。<br/><br/>文如其人，有时候文不如其人，当时的灵感创作了一篇文字，时过境迁，回头再看，那时的心境和这时候截然不同，这就是“时空转换”的概念。<br/><br/>所以有些文字，千万别对号入座，有些文章，没有刻意的悲喜，没有刻意的做作，有的，只是一个被岁月洗礼的心，被时间注入的情，然后用文字留下一些记忆罢了。<br/><br/>“志同道合”不是说说而已，那些表面上的“志同道合”，暗地里的阴奉阳违实在让人不齿，那些表面上的清爽怡人暗地里的拉帮结派也实在让人气愤。<br/><br/>你和她相隔千里，他和她距离万丈，你写你的文字，她做她的阴奉阳违，好像互不干涉，而我最痛恨的就是那种“拉帮结派”然后莫名其妙给你一个“莫须有”的人身攻击。<br/><br/>活的那么有心机，过得那么有心计，何必呢？<br/><br/>你的清爽掩盖了你的肮脏。你的虚假成了一种交易，又何必呢？文字只是一种人生的情怀，喜欢你文字的人来读读，留一个赞离开，只是你给我点个赞，非要告诉我让我赶紧给你点个赞，我觉得这个大师一定有个外号“虚伪大师”，我不是说点赞不好，如果你把点赞成了形式，你还读那些文章干嘛。<br/><br/>点赞，如同复制和粘贴一样，瞬间了之，只是如果你是文学爱好者的交流，哪怕不点赞，也会开心的交往。一篇好的文字，我觉得不是多少个赞所能替代的，幸好我也写不出好文章。<br/><br/>我的文字家园，只是我心灵的栖息之所，悲喜聚散，冷暖阴晴，我自摆渡。至于文字涉及到的人事，那只是我记忆里的部分，它无关谁！因为它曾与我的心思和文字结了缘，已经属于我的思想，而非谁了！<br/><br/>其实，人生中的任何关系，终会结束，时间到，缘即尽。明白聚散来去终无常，何须苦心执虚无呢！<br/><br/>心若无求，不生贪求，所遇所见便能随遇而安，随缘来去。无论生活还是文字，我与人打交道从不喜欢主动，我只种我的梧桐树，我只绽放我的思想，你若是想栖息梧桐树，你若是觉得给绽放需要添加一种信仰，那我家的大门是敞开心扉的。<br/><br/>我觉得生活里一定分清现实是现实，网络是网络，朋友是朋友，网友是网友。可以聊的聊，不想说的不说，无企无图，我行我素，自如应对要应对的人事，淡而心安！故分不清这些的须谨慎，免了失落失望，思同道合者你不和我常来常往，我会翻墙进入你的家门的。<br/><br/>你无言我无语而知彼此，那是你们了解，陌生人绝无可能；你言前我知后而懂彼此，那是你们神交，三观合性情才能相通。<br/><br/>只看外表面如桃花，其实内心蛇蝎心肠，那需要你的慧眼，也需要时间。最近我经常和朋友说，我生活中的朋友圈在做减法，网络上依然如此。我不想忙着认识许多人，而忘了自己是谁，丢了那颗初心。<br/><br/>人与人没有交集，那只是平行二道各行其道，我不知你，你不知我，定是无法同道！<br/><br/>所以，可以习惯问候，也可习惯没有问候；<br/><br/>所以，可以接纳你来，也可以承受你去；<br/><br/>你，可以这样活，活出一个崭新的自我！`,
					'iten_desc': '@posted @ 2018/2/14 18:28 阿龙丶along ',
					'item_num': '0',
					'item_pl': '0',
					'id': '0'
				},
					{
					'item_time': '2019年2月14日',
					'item_title': '你可以这样活',
					'iten_cont': `生活除了苟且，还有诗意和远方，我知道我写不出那些充满诗意的文章，也不具备诗意的风采。我只是除了八小时流水线的工作，其余时间就在文字的世界里徜徉。因为，除了偶尔到远方走走，其余的我没有多大兴趣。<br/><br/>文如其人，有时候文不如其人，当时的灵感创作了一篇文字，时过境迁，回头再看，那时的心境和这时候截然不同，这就是“时空转换”的概念。<br/><br/>所以有些文字，千万别对号入座，有些文章，没有刻意的悲喜，没有刻意的做作，有的，只是一个被岁月洗礼的心，被时间注入的情，然后用文字留下一些记忆罢了。<br/><br/>“志同道合”不是说说而已，那些表面上的“志同道合”，暗地里的阴奉阳违实在让人不齿，那些表面上的清爽怡人暗地里的拉帮结派也实在让人气愤。<br/><br/>你和她相隔千里，他和她距离万丈，你写你的文字，她做她的阴奉阳违，好像互不干涉，而我最痛恨的就是那种“拉帮结派”然后莫名其妙给你一个“莫须有”的人身攻击。<br/><br/>活的那么有心机，过得那么有心计，何必呢？<br/><br/>你的清爽掩盖了你的肮脏。你的虚假成了一种交易，又何必呢？文字只是一种人生的情怀，喜欢你文字的人来读读，留一个赞离开，只是你给我点个赞，非要告诉我让我赶紧给你点个赞，我觉得这个大师一定有个外号“虚伪大师”，我不是说点赞不好，如果你把点赞成了形式，你还读那些文章干嘛。<br/><br/>点赞，如同复制和粘贴一样，瞬间了之，只是如果你是文学爱好者的交流，哪怕不点赞，也会开心的交往。一篇好的文字，我觉得不是多少个赞所能替代的，幸好我也写不出好文章。<br/><br/>我的文字家园，只是我心灵的栖息之所，悲喜聚散，冷暖阴晴，我自摆渡。至于文字涉及到的人事，那只是我记忆里的部分，它无关谁！因为它曾与我的心思和文字结了缘，已经属于我的思想，而非谁了！<br/><br/>其实，人生中的任何关系，终会结束，时间到，缘即尽。明白聚散来去终无常，何须苦心执虚无呢！<br/><br/>心若无求，不生贪求，所遇所见便能随遇而安，随缘来去。无论生活还是文字，我与人打交道从不喜欢主动，我只种我的梧桐树，我只绽放我的思想，你若是想栖息梧桐树，你若是觉得给绽放需要添加一种信仰，那我家的大门是敞开心扉的。<br/><br/>我觉得生活里一定分清现实是现实，网络是网络，朋友是朋友，网友是网友。可以聊的聊，不想说的不说，无企无图，我行我素，自如应对要应对的人事，淡而心安！故分不清这些的须谨慎，免了失落失望，思同道合者你不和我常来常往，我会翻墙进入你的家门的。<br/><br/>你无言我无语而知彼此，那是你们了解，陌生人绝无可能；你言前我知后而懂彼此，那是你们神交，三观合性情才能相通。<br/><br/>只看外表面如桃花，其实内心蛇蝎心肠，那需要你的慧眼，也需要时间。最近我经常和朋友说，我生活中的朋友圈在做减法，网络上依然如此。我不想忙着认识许多人，而忘了自己是谁，丢了那颗初心。<br/><br/>人与人没有交集，那只是平行二道各行其道，我不知你，你不知我，定是无法同道！<br/><br/>所以，可以习惯问候，也可习惯没有问候；<br/><br/>所以，可以接纳你来，也可以承受你去；<br/><br/>你，可以这样活，活出一个崭新的自我！`,
					'iten_desc': '@posted @ 2018/2/14 18:28 阿龙丶along ',
					'item_num': '0',
					'item_pl': '0',
					'id': '0'
				}
			],
			videolist: [
				{"url": "http://www.along.ink/video/video_009.mp4"},                                   
				{"url": "http://www.along.ink/video/video_009.mp4"},
				{"url": "http://www.along.ink/video/video_009.mp4"},
				{"url": "http://www.along.ink/video/video_010.mp4"},
				{"url": "http://www.along.ink/video/video_010.mp4"},
				{"url": "http://www.along.ink/video/video_010.mp4"}
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
			]
		}	
	},
	mounted () {
		this.video_load();
		this.moner();
	},
	methods: {
		charLook (data, index) {
			// console.log(data, index);
		},
		look_Article (index) {	//点击查看文章
			this.ifShow = !this.ifShow;
			this.ifStatus = !this.ifStatus;
			// console.log(this.data[index], index)
			// this.moduleinfo.item_cont = this.data[index].iten_cont;
			this.$refs.J_cont.innerHTML = this.data[index].iten_cont;
			this.moduleinfo.item_title = this.data[index].item_title;
		},
		prev () {	//点击返回主页
			// this.$router.push({path: '/sy/cont'})
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
			// var target_url = "http://qr.liantu.com/api.php?text=http://www.along.ink";
			// window.open(target_url, 'weixin','height=320, width=320');
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
							moner[0].style.color = 'crimson';
							this.$refs.pic.src = 'http://www.along.ink/img/008.jpg';
						}else if(i === 1){
							moner[1].style.color = 'crimson';
							this.$refs.pic.src = 'http://www.along.ink/img/009.jpg';
						}else if(i === 2){
							moner[2].style.color = 'crimson';
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
		width: 1200px;
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
						margin-top: 20px;
						.J_time{
							width: 100px;
							height: 32px;
							text-align: center;
							line-height: 32px;
							font-size: 14px;
							// background: #45bcf9;
							background: rgba(0, 0, 0, 0.2);
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
						line-height: 28px;
						// border: 1px red solid;
						text-overflow:ellipsis;
						display:-webkit-box;
						-webkit-line-clamp:9;
						-webkit-box-orient:vertical;
						color: @b;
					}
					.J_desc{
						width: 240px;
						height: 38px;
						overflow: hidden;
						margin: 0 auto;
						color: @b;
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
				.J_cont{
					width: 870px;
					height: auto;
					font-size: 18px;
					text-indent: 20px;
					margin-top: 10px;
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
						color: crimson;
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
						color: crimson;
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
				display: flex;
				flex-wrap: wrap;
				justify-items: center;
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
						color: crimson;
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
		}
	}
</style>
