import Home from './components/Home'
// import Page from './components/Page'
const Sy = () => import('./components/Sy')  //按需加载

// 二级路由
const Cont  = () => import('./components/sy/cont')
const Whisp = () => import('./components/sy/Whispering')
const Brief = () => import('./components/sy/brief')
import { resolve } from 'path';

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
