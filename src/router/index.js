import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import News from '../views/News.vue'
import NewPost from '../views/NewPost.vue'
import UserProfile from '../views/UserProfile.vue'
import Single_post from '../views/SinglePost.vue'
import Contact from '../views/Contact.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },

  {
    path: '/about',
    name: 'aboutus',
    component: About
  },

  {
    path: '/news',
    name: 'news',
    component: News
  },

  {
    path: '/new_post',
    name: 'newposts',
    component: NewPost
  },

  {
    path: '/dashboard',
    name: 'Profile',
    component: UserProfile
  },

  {
    path: '/single_post',
    name: 'single_post',
    component: Single_post
  },

  {
    path: '/contact',
    name: 'contact_us',
    component: Contact
  },


  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
