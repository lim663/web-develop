import './assets/index.css'
import './assets/reset.css'
import './assets/public.css'
import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHashHistory } from 'vue-router' 



import New from "@/pages/New.vue"
import About from './pages/About.vue'
import CultureShow from './pages/CultureShow.vue'
import Game from './pages/Game.vue'
import Contact from './pages/Contact.vue'
import Home from './pages/Home.vue'

import new1 from './pages/news/new1.vue'
import new2 from './pages/news/new2.vue'
import Wenwu from './pages/culture/WenWu.vue'
import Feiyi from './pages/culture/FeiYi.vue'

import feiyi1 from './pages/culture/feiyi/feiyi1.vue'
import feiyi2 from './pages/culture/feiyi/feiyi2.vue'
import wenwu1 from './pages/culture/wenwu/wenwu1.vue'
import wenwu2 from './pages/culture/wenwu/wenwu2.vue'
import './assets/download/icons/iconfont.css'
//配置
const routes= [
    {path:"/new", component: New,name: 'new',
        children:[
            {
                path :"1",
                component:new1
            },
            {
                path :"2",
                component:new2
            }
        ]
    },
    {path:"/about", component: About},
    {path:"/culture", component: CultureShow, name:'Culture',
        children:[
            {
                path:"feiyi",
                component:Feiyi,
                name:'feiyi',
                children:[
                    {
                        path:"feiyi1",
                        component:feiyi1
                    },
                    {
                        path:"feiyi2",
                        component:feiyi2
                    }
                ]
            },
            {
                path:"wenwu",
                component:Wenwu,
                name:'wenwu',
                children:[
                    {
                        path:"wenwu1",
                        component:wenwu1
                    },
                    {
                        path:"wenwu2",
                        component:wenwu2
                    }
                ]
            }
        ]
    },
    {path:"/game", component:Game },
    {path:"/contact", component:Contact },
    {path:"/", component:Home}
]
//创建
const router = createRouter(
    {
        history:createWebHashHistory(),
        routes
    }
)
//加载
// 调用 createViewer 函数来创建并显示 Viewer

const app=createApp(App)
app.use(router)
app.mount('#app')

