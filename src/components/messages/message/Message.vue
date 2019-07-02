<template>
  <div class="col-12 col-sm-6 col-md-4 mb-3">
    <div class="card">
      <img v-bind:src="message.imageURL" class="card-img-top" v-bind:alt="message.subject">
      <div class="card-body">
        <h5 class="card-title">{{ message.subject }}</h5>
        <h6 class="card-subtitle mb-2 text-muted">{{ message.username }}</h6>

        <p class="card-text mt-4">{{ message.message }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["message"]
};
</script>

<style scoped>
</style>
