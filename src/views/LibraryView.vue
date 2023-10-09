<script setup>
import SideBar from "../components/sidebar/Sidebar.vue";
const genreItems = [
  { category: 'Pop', imageUrl: '#', id: 1 },
  { category: 'House', imageUrl: '#', id: 2 },
  { category: 'Indie', imageUrl: '#', id: 3 },
  { category: 'Rock', imageUrl: '#', id: 4 },
  { category: 'Chill', imageUrl: '#', id: 5 },
  { category: 'Classical', imageUrl: '#', id: 6 },
  { category: 'Punk', imageUrl: '#', id: 7 },
  { category: 'Romantic', imageUrl: '#', id: 8 },
  { category: 'Electronic', imageUrl: '#', id: 9 },
  { category: 'Rap', imageUrl: '#', id: 10 },
  { category: 'Work Out', imageUrl: '#', id: 11 },
  { category: 'Beach Vibes', imageUrl: '#', id: 12 },
];
</script>

<template>
  <div class="bg-container" style="flex-direction: row; align-items: flex-start">
    <SideBar />
    <div class="main-container">
      <div class="header">
        <h3>Your Library</h3>
        <img src="../assets/icon/logout.png" alt="" class="icon" style="cursor: pointer;">
        <img src="../assets/img/profileb.png" alt="" class="user-img">
      </div>
      <div class="library-container">
        <div class="playable-container">
          <div class="playable-title">
            <h2 style="margin: 0;">Your Music</h2>
            <label style="margin: 0;">On Repeat</label>
          </div>
          <div class="icon-container">
            <img src="../assets//icon/play.png" alt="" class="big-icon">
          </div>
        </div>
        <div class="main-item">
          <div class="list-items-container">
            <div v-for="item in genreItems" class="list-item" :key="item.id"
              style="background-image: url('item.imageUrl');">
              <label style="margin: 0;">{{ item.category }}</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../assets/css/main.scss';
@import "../assets/css/colors.scss";

.main-container {
  flex: 85%;
  padding: 2rem;

  .header {
    margin-bottom: 1rem;

    .search-container {
      width: 80%;
      border-radius: 1rem;
      display: flex;
      align-items: center;
      gap: 1rem;

      .search-box {
        background-color: transparent;
        width: 100%;
        height: 2.5rem;
        border: 0;
        background-color: $secondaryColor;
        border-radius: 1rem;
        color: $thirdColor;
        padding-left: 1rem;
      }
    }
  }

  .library-container {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .playable-container {
      display: flex;
      width: 100%;
      height: 9rem;
      background-color: red;
      align-items: flex-end;
      border-radius: 1rem;

      .playable-title {
        margin: 2rem;
      }

      .icon-container {
        cursor: pointer;
        margin: 2rem;
        width: 2rem;
        height: 2rem;
        padding: 0.5rem;
        background-color: $fourthColor;
        border-radius: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: auto;

        .big-icon {
          width: 1.5rem;
          height: 1.5rem;
        }
      }

    }

    .main-item {
      display: flex;
      flex-direction: column;

      .list-items-container {
        display: flex;
        gap: 1rem;
        justify-content: space-between;
        flex-wrap: wrap;
      }

      .list-item {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 2rem;
        width: 18%;
        height: 2.5rem;
        background-color: red;
        border-radius: 0.75rem;
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
