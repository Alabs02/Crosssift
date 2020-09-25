import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import News from '@/views/News.vue'
import NewPost from '@/views/NewPost.vue'
import UserProfile from '@/views/UserProfile.vue'
import Single_post from '@/views/SinglePost.vue'
import Contact from '@/views/Contact.vue'
import Auth from '@/components/Auth/Authentication.vue'
import { auth } from '@/firebaseConfig'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },

  {
    path: '/auth',
    name: 'auth',
    component: Auth
  },

  {
    path: '/about',
    name: 'aboutus',
    component: About
  },

  {
    path: '/news',
    name: 'news',
    component: News,
    meta: {
      requiresAuth:true
    }
  },

  {
    path: '/new_post',
    name: 'newposts',
    component: NewPost,
    meta: {
      requiresAuth: true
    }
  },

  {
    path: '/dashboard',
    name: 'Profile',
    component: UserProfile,
    meta: {
      requiresAuth: true
    }
  },

  {
    path: '/single_post',
    name: 'single_post',
    component: Single_post,
    meta: {
      requiresAuth: true
    }
  },

  {
    path: '/contact',
    name: 'contact_us',
    component: Contact
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(x => x.meta.requiresAuth)

  if (requiresAuth && !auth.currentUser) {
    next('/auth')
  } else {
    next()
  }
})

export default router
