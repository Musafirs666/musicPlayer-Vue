import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import LandingPage from '../views/LandingPage.vue'
import RegisterView from '../views/RegisterView.vue'
import HomeView from '../views/HomeView.vue'
import LibraryView from '../views/LibraryView.vue'
import SearchView from '../views/SearchView.vue'
import { FIREBASE_DB } from '../../firebaseConfig'
import { doc, getDoc } from 'firebase/firestore'
const db = FIREBASE_DB

async function getUserData(userId) {
  try {
    const userRef = doc(db, 'users', userId)
    const userDoc = await getDoc(userRef)

    if (userDoc.exists()) {
      return userDoc.data()
    } else {
      throw new Error('Dokumen pengguna tidak ditemukan')
    }
  } catch (error) {
    console.error('Error fetching user data:', error)
  }
}

async function checkTokenBeforeEnter(to, from, next) {
  const userId = localStorage.getItem('userId')

  if (to.name === 'login' || to.name === 'register') {

    if (userId) {
      next({ name: 'home' })
    } else {
      next()
    }
  } else if (!userId) {
    next({ name: 'login' })
  } else {
    const isTokenValid = await getUserData(userId)

    if (isTokenValid) {
      next()
    } else {
      next({ name: 'login' })
    }
  }
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'landingPage',
      component: LandingPage
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
      beforeEnter: checkTokenBeforeEnter
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView,
      beforeEnter: checkTokenBeforeEnter
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView,
      beforeEnter: checkTokenBeforeEnter
    },
    {
      path: '/search',
      name: 'search',
      component: SearchView,
      beforeEnter: checkTokenBeforeEnter
    },
    {
      path: '/library',
      name: 'library',
      component: LibraryView,
      beforeEnter: checkTokenBeforeEnter
    }
  ]
})

export default router
