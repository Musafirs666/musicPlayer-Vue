<script setup>
import SideBar from "../components/sidebar/Sidebar.vue";

const recentSongItems = [
  { title: 'Venom', artist: 'Eminem', imageUrl: '#', id: 1 },
  { title: 'Come True', artist: 'Jeremy Zucker', imageUrl: '#', id: 2 },
  { title: 'New Light', artist: 'John Mayor', imageUrl: '#', id: 3 },
  { title: '505', artist: 'Arctic Monkey', imageUrl: '#', id: 4 },
];

const genreLikesItems = [
    { category: 'Pop-Mix', imageUrl: '#', id: 1 },
    { category: 'House-Mix', imageUrl: '#', id: 2 },
    { category: 'Indie-Mix', imageUrl: '#', id: 3 },
    { category: 'Rock-Mix', imageUrl: '#', id: 4 },
    { category: 'Chill-Mix', imageUrl: '#', id: 5 },
    { category: 'Classical-Mix', imageUrl: '#', id: 6 },
    { category: 'Punk-Mix', imageUrl: '#', id: 7 },
    { category: 'Romantic-Mix', imageUrl: '#', id: 8 },
];
</script>

<template>
  <div class="bg-container" style="flex-direction: row; align-items: flex-start">
    <SideBar />
    <div class="main-container">
      <div class="header">
        <div class="search-container">
          <input type="text" class="search-box" placeholder="search song here ...." />
          <img src="../assets/icon/search.png" alt="" class="icon" style="cursor: pointer" />
        </div>
        <img src="../assets/icon/logout.png" alt="" class="icon" style="cursor: pointer;"/>
        <img src="../assets/img/profileb.png" alt="" class="user-img" />
      </div>
      <div class="recent-container">
        <div class="sub-topic">
          <label>Recent Searches</label>
          <div class="clr-btn" style="cursor: pointer">
            <h2>clear</h2>
          </div>

        </div>
        <div v-for="item in recentSongItems" class="song-list" :key="item.id">
          <img src="../assets/img/profileb.png" alt="" class="img-song">
          <div class="identity-song">
            <h2 style="margin: 0;">{{ item.title }}</h2>
            <h3 style="margin: 0;">{{ item.artist }}</h3>
          </div>
          <img src="../assets/icon/play.png" alt="" class="icon" style="cursor: pointer;">
        </div>
      </div>
      <div class="recent-container">
        <div class="sub-topic">
          <label>Based on what you like</label>

        </div>
        <div class="list-items-container">
          <div v-for="item in genreLikesItems" class="list-item" :key="item.id"
            style="background-image: url('item.imageUrl');">
            <h2 style="margin: 0;">{{ item.label }}</h2>
            <label style="margin: 0;">{{ item.category }}</label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/css/main.scss";
@import "../assets/css/colors.scss";

.main-container {
  flex: 85%;
  padding: 2rem;

  .header {
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

  .recent-container {
    display: flex;
    flex-direction: column;
    justify-items: center;

    .sub-topic {
      display: flex;
      align-items: center;

      .clr-btn {
        width: 7%;
        height: 1.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: $secondaryColor;
        border-radius: 1rem;
        margin-left: auto;
      }

      h2 {
        font-size: 12px;
      }
    }

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
            height: 2rem;
            background-color: red;
            border-radius: 0.75rem;
        }
}

label {
  margin-top: 1rem;
  margin-bottom: 0.5rem;
  font-size: 22px;
  font-weight: 600;
}
</style>
