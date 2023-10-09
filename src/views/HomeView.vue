<script setup>
import SideBar from '../components/sidebar/Sidebar.vue'
import { useStore } from 'vuex'
import {onMounted, computed } from 'vue'
import { useRouter } from 'vue-router'
import LoadingView from '../components/loadingView.vue'


const store = useStore()
const router = useRouter()

const signOut = () => {
    store.dispatch('signOut').then(() => {
        router.push('/')
    })
}

const lastPlayItems = [
    { genre: 'Up Beat', title: 'Stay', imageUrl: '#', id: 1 },
    { genre: 'Pop', title: 'Another Love', imageUrl: '#', id: 2 },
    { genre: 'Reggae', title: 'Su Sayang', imageUrl: '#', id: 3 },
    { genre: 'Rap', title: 'Im Not Afraid', imageUrl: '#', id: 4 },
];

const ForYouItems = [
    { label: 'Your Year', category: '2022', imageUrl: '#', id: 1 },
    { label: 'Best of', category: 'Pop Music', imageUrl: '#', id: 2 },
    { label: 'Your Top', category: 'Artist', imageUrl: '#', id: 3 },
];

const popularSongItems = [
    { title: 'Venom', artist: 'Eminem', imageUrl: '#', id: 1 },
    { title: 'Come True', artist: 'Jeremy Zucker', imageUrl: '#', id: 2 },
    { title: 'New Light', artist: 'John Mayor', imageUrl: '#', id: 3 },
];
const computedIsLoading = computed(() => store.state.isLoading);

onMounted(() => {
    setTimeout(() => {
        store.commit('setLoading', false)
        console.log(computedIsLoading.value);
    }, 2000);
});

</script>

<template>
    <LoadingView v-if="computedIsLoading" />
    <div class="bg-container" style="flex-direction: row; align-items: flex-start;" v-else>
        <SideBar />
        <div class="main-content">
            <div class="header">
                <h2>hello good afternoon, <span>user</span></h2>
                <img src="../assets/icon/logout.png" alt="" class="icon" style="cursor: pointer;" @click="signOut">
                <img src="../assets/img/profileb.png" alt="" class="user-img">
            </div>
            <div class="main-item">
                <label>Pickup where your left off</label>
                <div class="list-items-container">
                    <div v-for="item in lastPlayItems" class="list-item" :key="item.id"
                        style="background-image: url('item.imageUrl');">
                        <h2 style="margin: 0;">{{ item.genre }}</h2>
                        <label style="margin: 0;">{{ item.title }}</label>
                    </div>
                </div>
            </div>
            <div class="main-item">
                <label>For You</label>
                <div class="list-items-container">
                    <div v-for="item in ForYouItems" class="list-item" :key="item.id"
                        style="background-image: url('item.imageUrl');">
                        <h2 style="margin: 0;">{{ item.label }}</h2>
                        <label style="margin: 0;">{{ item.category }}</label>
                    </div>
                </div>
            </div>
            <div class="popular">
                <label>Popular Song</label>
                <div v-for="item in popularSongItems" class="song-list" :key="item.id">
                    <img src="../assets/img/profileb.png" alt="" class="img-song">
                    <div class="identity-song">
                        <h2 style="margin: 0;">{{ item.title }}</h2>
                        <h3 style="margin: 0;">{{ item.artist }}</h3>
                    </div>
                    <img src="../assets//icon/play.png" alt="" class="icon" style="cursor: pointer;">
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import '../assets/css/main.scss';
@import '../assets/css/colors.scss';

.main-content {
    flex: 85%;
    padding: 2rem;

    .header {
        display: flex;
        align-items: center;
        gap: 1rem;

        span {
            font-style: italic;
            font-weight: 600;
        }

        .user-img {
            width: 3rem;
            height: 3rem;
            border-radius: 100%;
            border: 0;
        }
    }

    .main-item {
        display: flex;
        flex-direction: column;

        .list-items-container {
            display: flex;
            gap: 4rem;

        }

        .list-item {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 2rem;
            width: 33%;
            height: 3rem;
            background-color: red;
            border-radius: 0.75rem;
        }
    }
}

.popular {
    display: flex;
    flex-direction: column;
    justify-items: center;

    .song-list {
        display: flex;
        gap: 1rem;
        align-items: center;
        margin-bottom: 1rem;

        .img-song {
            width: 2.5rem;
            height: 2.5rem;
            border-radius: 0.5rem;
        }

        .identity-song {
            display: flex;
            flex-direction: column;

            h2 {
                font-size: 12px;
                font-weight: 700;
            }

            h3 {
                font-size: 11px;
                font-weight: 300;
            }
        }
    }
}

label {
    margin-top: 1rem;
    margin-bottom: 0.5rem;
    font-size: 22px;
    font-weight: 600;
}
</style>
