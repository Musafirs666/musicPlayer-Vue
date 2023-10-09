<script setup>
import { ref } from 'vue'
import { useStore } from 'vuex'
// import { computed } from 'vue'

const username = ref('');
const email = ref('');
const password = ref('');

const store = useStore()

const register = (event) => {
    event.preventDefault();
    store.dispatch('register', { email: email.value, password: password.value, username: username.value });
};

// const emailFromVuex = computed(() => store.state.loginData.email);
</script>

<template>
    <div class="bg-container">
        <h1>Hi!</h1>
        <h2>Sign up to start listening to all your favorite artist</h2>
        <form action="" class="">
            <input type="text" placeholder="username" v-model="username">
            <input type="email" placeholder="email" v-model="email">
            <input type="password" placeholder="password" v-model="password">
            <input type="password" placeholder="confirm password">
            <button @click="register">Register</button>
        </form>
        <div class="login-separator">
            <div class="continue">
                <span class="custom-span"></span>
                <h2 style="font-style: italic;">or continue with</h2>
                <span></span>
            </div>
            <div class="alternate-button">
                <button>google</button>
                <button>facebook</button>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@import '../assets/css/main.scss';
@import '../assets/css/_colors.scss';
</style>
