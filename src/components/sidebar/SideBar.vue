<script setup>
import { useRouter } from 'vue-router';

const menuItems = [
    { label: 'home', url: 'src/assets/icon/home.png' },
    { label: 'search', url: 'src/assets/icon/search.png' },
    { label: 'library', url: 'src/assets/icon/library.png' }
];

const router = useRouter();
const currentRoute = router.currentRoute.value.name;

</script>

<template>
        <div class="side-navbar">
            <div class="menu-container">
                <div v-for="item in menuItems" :key="item.label" :class="{ 'active-route': currentRoute === item.label }">
                    <router-link :to='"/" + item.label' class="custom-router-link menu-items">
                        <img :src="item.url" class="menu-image" alt="">
                        <h2>{{ item.label }}</h2>
                    </router-link>
                </div>
            </div>
        </div>
</template>

<style lang="scss" scoped>
@import '../../assets/css/main.scss';
@import '../../assets/css/colors.scss';

.side-navbar {
    flex: 15%;
    height: 100%;
    background-color: $secondaryColor;
    display: flex;
    flex-direction: column;

    .menu-container {
        padding-top: 4rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .menu-items {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1.5rem;
        cursor: pointer;

        .menu-image {
            width: 1.5rem;
            height: 1.5rem;
        }
    }
}
</style>
