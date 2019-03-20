const Mock = require('mockjs') // 获取mock对象
const domain = 'http://mockjs.com/api' // 定义默认域名，随便写

//HomePage文章
Mock.mock(`${domain}/posts`, 'get', ()=>{
  return({
    data: [
      {
        'item_time': '2019年2月14日',
        'item_title': '生活',
        'iten_cont': `生活除了苟且，还有诗意和远方，我知道我写不出那些充满诗意的文章，也不具备诗意的风采。`,
        'iten_desc': '@posted @ 2018/2/14 18:28 阿龙丶along ',
        'item_num': '0',
        'item_pl': '0',
        'id': '0'
      },
        {
        'item_time': '',
        'item_title': '',
        'iten_cont': ``,
        'iten_desc': '@posted @ 2018/2/14 18:28 阿龙丶along ',
        'item_num': '0',
        'item_pl': '0',
        'id': '0'
      },
        {
        'item_time': '',
        'item_title': '',
        'iten_cont': ``,
        'iten_desc': '@posted @ 2018/2/14 18:28 阿龙丶along ',
        'item_num': '0',
        'item_pl': '0',
        'id': '0'
      },
        {
        'item_time': '',
        'item_title': '',
        'iten_cont': ``,
        'iten_desc': '@posted @ 2018/2/14 18:28 阿龙丶along ',
        'item_num': '0',
        'item_pl': '0',
        'id': '0'
      },
        {
        'item_time': '',
        'item_title': '',
        'iten_cont': ``,
        'iten_desc': '@posted @ 2018/2/14 18:28 阿龙丶along ',
        'item_num': '0',
        'item_pl': '0',
        'id': '0'
      },
        {
        'item_time': '',
        'item_title': '',
        'iten_cont': ``,
        'iten_desc': '@posted @ 2018/2/14 18:28 阿龙丶along ',
        'item_num': '0',
        'item_pl': '0',
        'id': '0'
      },
      {
      'item_time': '',
      'item_title': '',
      'iten_cont': ``,
      'iten_desc': '@posted @ 2018/2/14 18:28 阿龙丶along ',
      'item_num': '0',
      'item_pl': '0',
      'id': '0'
    },
      {
      'item_time': '',
      'item_title': '',
      'iten_cont': ``,
      'iten_desc': '@posted @ 2018/2/14 18:28 阿龙丶along ',
      'item_num': '0',
      'item_pl': '0',
      'id': '0'
    },
      {
      'item_time': '',
      'item_title': '',
      'iten_cont': ``,
      'iten_desc': '@posted @ 2018/2/14 18:28 阿龙丶along ',
      'item_num': '0',
      'item_pl': '0',
      'id': '0'
    }
    ]
  })
});

//HomePage微语
Mock.mock(`${domain}/wy`, `get`, ()=>{
  return({
    data:[
      {'cont':'赢过、输过、但是何曾怕过~','time':'2019-03-10','category':'励志','id':'1'},
      {'cont':'赢过、输过、但是何曾怕过~','time':'2019-03-10','category':'搞笑','id':'2'},
      {'cont':'赢过、输过、但是何曾怕过~','time':'2019-03-10','category':'青春','id':'3'},
      {'cont':'赢过、输过、但是何曾怕过~','time':'2019-03-10','category':'情感','id':'4'},
      {'cont':'赢过、输过、但是何曾怕过~','time':'2019-03-10','category':'幽默','id':'5'},
      {'cont':'赢过、输过、但是何曾怕过~','time':'2019-03-10','category':'励志','id':'6'},
      {'cont':'赢过、输过、但是何曾怕过~','time':'2019-03-10','category':'励志','id':'7'},
      {'cont':'赢过、输过、但是何曾怕过~','time':'2019-03-10','category':'励志','id':'8'},
      {'cont':'赢过、输过、但是何曾怕过~','time':'2019-03-10','category':'励志','id':'9'},
      {'cont':'赢过、输过、但是何曾怕过~','time':'2019-03-10','category':'励志','id':'10'},
      {'cont':'赢过、输过、但是何曾怕过~','time':'2019-03-10','category':'励志','id':'11'},
      {'cont':'赢过、输过、但是何曾怕过~','time':'2019-03-10','category':'励志','id':'12'},
      {'cont':'赢过、输过、但是何曾怕过~','time':'2019-03-10','category':'励志','id':'13'},
      {'cont':'赢过、输过、但是何曾怕过~','time':'2019-03-10','category':'励志','id':'14'},
      {'cont':'赢过、输过、但是何曾怕过~','time':'2019-03-10','category':'励志','id':'15'}
    ],
    message: '请求成功',
    code: 200,
    time: new Date().getTime()
  })
})