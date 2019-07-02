<template>
  <div>
    <h1>Home</h1>
    <hr>

    <Messages v-bind:messages="messages"></Messages>
  </div>
</template>

<script>
import axios from "axios";

import Messages from "../components/messages/Messages";

export default {
  data() {
    return {
      messages: []
    };
  },
  created() {
    axios
      .get("http://localhost:3000/messages")
      .then(response => {
        const { data } = response;

        this.messages = data;

        console.log(data);
      })
      .catch(error => console.log(error));
  },
  components: {
    Messages
  }
};
</script>
