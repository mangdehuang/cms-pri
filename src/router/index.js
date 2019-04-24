import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/Home'
import Member from '@/components/Member/Member'
import Search from '@/components/Search/Search'
import ShopCart from '@/components/ShopCart/ShopCart'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'home',
    component: Home
  }, {
    path: '/member',
    name: 'member',
    component: Member
  }, {
    path: '/search',
    name: 'search',
    component: Search
  }, {
    path: '/shopcart',
    name: 'shopcart',
    component: ShopCart
  }]
})
