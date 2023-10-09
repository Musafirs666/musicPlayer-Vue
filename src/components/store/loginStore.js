import { createStore } from 'vuex'
import { setDoc, doc, getDoc } from 'firebase/firestore'
import { FIREBASE_AUTH, FIREBASE_DB } from '../../../firebaseConfig.js'
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from '@firebase/auth'
const auth = FIREBASE_AUTH
const db = FIREBASE_DB

export const store = createStore({
  state() {
    return {
      isLoading: true,
      loginData: {
        email: '',
        password: ''
      },
      userData: {},
      storedToken: null,
      // isLoggedIn: false,
    }
  },
  mutations: {
    setLoginData(state, { email, password }) {
      state.loginData.email = email
      state.loginData.password = password
    },
    setLoading(state, condition) {
      state.isLoading = condition
    },
    getToken(state) {
      state.storedToken = localStorage.getItem('authToken')
    },
    setUserData(state, userData){
      state.userData = userData
    }
  },

  actions: {
    async login({ commit }, { email, password }) {
      try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password)
        const user = userCredential.user
        const token = user.accessToken
        localStorage.setItem('authToken', token)
        localStorage.setItem('userId', user.uid)

        // Mengambil data pengguna dari Firestore
        const userRef = doc(db, 'users', user.uid)
        const userDoc = await getDoc(userRef)

        if (userDoc.exists()) {
          const userData = userDoc.data()
          commit('setUserData', userData)
        }
      } catch (error) {
        console.error('Error signing in:', error)
      }
    },
    async register({ commit }, { email, password, username }) {
      commit('setLoading', true)
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password)
        const user = userCredential.user
        const token = user.accessToken
        localStorage.setItem('authToken', token)
        localStorage.setItem('userId', user.uid)

        const userRef = doc(db, 'users', user.uid)
        await setDoc(userRef, {
          username: username,
          email: email,
          token: token
        })
      } catch (error) {
        console.error(error)
      } finally {
        commit('setLoginData', { email, password })
        commit('setLoading', false)
      }
    },
    async signOut() {
      try {
        await signOut(auth)
        localStorage.removeItem('authToken')
        localStorage.removeItem('userId')
        alert('signOut berhasil')
      } catch (error) {
        console.error('Error during signout:', error)
      }
    }
  },
  getAccess({user}){
    if(this.getters.isLoggedIn){
      const clientToken = localStorage.getItem('authToken')
        if(clientToken === user.accessToken){
          return true;
        }
    }
  }
  ,
  getters: {
    isLoggedIn: () => {
      return localStorage.getItem('authToken')
    }
  }
})
