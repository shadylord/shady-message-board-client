<template>
  <div class="row justify-content-start">
    <Message v-for="(item) in messages" :key="item._id" v-bind:message="item"></Message>
  </div>
</template>

<script>
import Message from "./message/Message.vue";

export default {
  props: ["messages"],
  components: {
    Message
  }
};
</script>

<style scoped>
</style>
