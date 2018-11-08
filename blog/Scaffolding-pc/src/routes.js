import Home from './components/Home'
// import Page from './components/Page'
import Sy from './components/Sy'

// 二级路由
import Cont from './components/sy/cont'
import Whisp from './components/sy/Whispering'
import Brief from './components/sy/brief'

export default [
// {path: '/', name: 'Page', component: Page},
  {path: '/', name: 'Home', component: Home},
  {path: '/home', name: 'Home', component: Home},
  {
    path: '/sy',
    name: 'Sy',
    component: Sy,
    redirect: '/sy/cont',
    children: [
      {path: '/sy/cont', name: 'contlink', component: Cont},
      {path: '/sy/whisp', name: 'whisplink', component: Whisp},
      {path: '/sy/brief', name: 'brieflink', component: Brief}
    ]
  },
  {path: '*', redirect: '/home'}
]
