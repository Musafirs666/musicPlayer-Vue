<script setup>
import { ref, onMounted } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

const store = useStore();
const router = useRouter();
const email = ref('');
const password = ref('');

const login = async (event) => {
    event.preventDefault();
    await store.dispatch('login', { email: email.value, password: password.value });
    const isLoggedIn = store.getters.isLoggedIn;

    if (isLoggedIn) {
      router.push({ name: 'home' }); // Mengalihkan ke halaman Home jika login berhasil
    }
};

onMounted(async () => {
    
});

</script>

<template>
    <div class="bg-container">
        <h1>Welcome back!</h1>
        <h2>Sign in to dicsover, stream, and enjoy millions of songs</h2>
        <form action="" class="">
            <input type="text" placeholder="email" v-model="email">
            <input type="text" placeholder="password" v-model="password">
            <button @click="login">Login</button>
        </form>
        <div class="login-separator">
            <div class="continue">
                <span class="custom-span"></span>
                <h2 style="font-style: italic; font-size: 12px;">or continue with</h2>
                <span></span>
            </div>
            <div class="alternate-button">
                <button>google</button>
                <button>facebook</button>
            </div>
        </div>
        <h2>Need an Account?
            <router-link to="/register" class="custom-router-link">
                <span style="font-weight: 600; font-style: italic; cursor: pointer;">Register</span>
            </router-link>
        </h2>
    </div>
</template>

<style lang="scss">
@import url('../assets/css/main.scss');
</style>
