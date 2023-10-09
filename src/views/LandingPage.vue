<script setup>

</script>

<template>
  <div class="bg-container">
    <h1>AudioX</h1>
    <h2 style="margin-bottom: 40px;">Listen to free music from your favorite artist</h2>
    <div class="flex-container">
      <router-link to="/register">
        <button class="btn">Get starterd</button>
      </router-link>
      <router-link to="/login" class="custom-router-link">
        <h2 style="cursor: pointer;">I already have an account</h2>
      </router-link>
    </div>
  </div>
</template>

<style lang="scss">
@import url('../assets/css/main.scss');
</style>
