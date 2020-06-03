import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import AddStu from "../views/AddStu";
import AlterStu from "../views/AlterStu";
import DeleteStu from "../views/DeleteStu";
import QueryStu from "../views/QueryStu";
import Index from "../views/Index";
import AddTea from "../views/AddTea";
import AlterTea from "../views/AlterTea";
import DeleteTea from "../views/DeleteTea";
import QueryTea from "../views/QueryTea";
import AddAno from "../views/AddAno";
import AlterAno from "../views/AlterAno";
import DeleteAno from "../views/DeleteAno";
import QueryAno from "../views/QueryAno";

Vue.use(VueRouter)

  const routes = [
    {
      path:"/",
      name:"学生",
      component:Index,
      children:[
        {
          path:"/AddStu",
          name:"增加学生信息",
          component:AddStu
        },
        {
          path:"/AlterStu",
          name:"修改学生信息",
          component:AlterStu
        },
        {
          path:"/DeleteStu",
          name:"删除学生信息",
          component:DeleteStu
        },
        {
          path:"/QueryStu",
          name:"查询学生信息",
          component:QueryStu
        }
      ]
    },
    {
      path:"/navigation",
      name:"教师",
      component:Index,
      children:[
        {
          path:"/AddTea",
          name:"增加教师信息",
          component:AddTea
        },
        {
          path:"/AlterTea",
          name:"修改教师信息",
          component:AlterTea
        },
        {
          path:"/DeleteTea",
          name:"删除教师信息",
          component:DeleteTea
        },
        {
          path:"/QueryTea",
          name:"查询教师信息",
          component:QueryTea
        }
      ]
    },
    {
      path:"/navigation",
      name:"公告",
      component:Index,
      children:[
        {
          path:"/AddAno",
          name:"增加公告信息",
          component:AddAno
        },
        {
          path:"/AlterAno",
          name:"修改公告信息",
          component:AlterAno
        },
        {
          path:"/DeleteAno",
          name:"删除公告信息",
          component:DeleteAno
        },
        {
          path:"/QueryAno",
          name:"查询公告信息",
          component:QueryAno
        }
      ]
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
