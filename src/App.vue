<template>
  <div>
    <navbar></navbar>

    <div class="container mt-5">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Navbar from "./components/navbar/Navbar";

export default {
  components: {
    navbar: Navbar
  }
};
</script>

<style scoped>
</style>
